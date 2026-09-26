export function createLiquid(width, height) {
    const radius = height / 2;
    const straight = width - height;
    const arc = Math.PI * radius;
    const perimeter = straight * 2 + arc * 2;
    const count = Math.max(48, Math.ceil(perimeter / 4));
    const points = Array.from({ length: count }, (_, index) => {
        let distance = (perimeter * index) / count;
        if (distance < straight)
            return { x: radius + distance, y: 0, nx: 0, ny: -1 };
        distance -= straight;
        if (distance < arc) {
            const angle = distance / radius - Math.PI / 2;
            return {
                x: width - radius + radius * Math.cos(angle),
                y: radius + radius * Math.sin(angle),
                nx: Math.cos(angle),
                ny: Math.sin(angle)
            };
        }
        distance -= arc;
        if (distance < straight)
            return { x: width - radius - distance, y: height, nx: 0, ny: 1 };
        const angle = (distance - straight) / radius + Math.PI / 2;
        return {
            x: radius + radius * Math.cos(angle),
            y: radius + radius * Math.sin(angle),
            nx: Math.cos(angle),
            ny: Math.sin(angle)
        };
    });
    return {
        width,
        height,
        points,
        speed: Math.min(0.8, 9 / (perimeter / count) ** 2),
        current: new Float32Array(count),
        previous: new Float32Array(count)
    };
}

export function disturbLiquid(surface, x, y, strength) {
    x = Math.max(0, Math.min(1, x)) * surface.width;
    y = Math.max(0, Math.min(1, y)) * surface.height;
    let nearest = 0;
    surface.points.forEach((point, index) => {
        const closest = surface.points[nearest];
        if (
            (point.x - x) ** 2 + (point.y - y) ** 2 <
            (closest.x - x) ** 2 + (closest.y - y) ** 2
        )
            nearest = index;
    });
    for (let offset = -5; offset <= 5; offset++) {
        const index =
            (nearest + offset + surface.points.length) % surface.points.length;
        const impulse = strength * Math.exp((-offset * offset) / 6);
        surface.current[index] = Math.max(
            -4,
            Math.min(4, surface.current[index] + impulse)
        );
        surface.previous[index] = Math.max(
            -4,
            Math.min(4, surface.previous[index] + impulse)
        );
    }
}

export function stepLiquid(surface) {
    const { current, previous, speed } = surface;
    const count = current.length;
    let sum = 0;
    for (let index = 0; index < count; index++) {
        const neighbors =
            current[(index + count - 1) % count] +
            current[(index + 1) % count] -
            2 * current[index];
        previous[index] =
            (2 * current[index] - previous[index] + speed * neighbors) * 0.975;
        sum += previous[index];
    }
    // preserve the silhouette's area instead of inflating the whole button
    for (let index = 0; index < count; index++) previous[index] -= sum / count;
    surface.previous = current;
    surface.current = previous;
}

export function liquidOutline(surface) {
    const points = surface.points.map((point, index) => {
        const offset = Math.max(-4, Math.min(4, surface.current[index]));
        return {
            x: point.x + point.nx * offset,
            y: point.y + point.ny * offset
        };
    });
    const midpoint = (a, b) =>
        `${((a.x + b.x) / 2).toFixed(2)} ${((a.y + b.y) / 2).toFixed(2)}`;
    return (
        `M${midpoint(points.at(-1), points[0])}` +
        points
            .map(
                (point, index) =>
                    `Q${point.x.toFixed(2)} ${point.y.toFixed(2)} ${midpoint(point, points[(index + 1) % points.length])}`
            )
            .join("") +
        "Z"
    );
}

export function liquidFilters(node) {
    const controller = new AbortController();
    const options = { signal: controller.signal };
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = [...node.querySelectorAll("button")].map(button => ({
        button,
        path: button.querySelector("path"),
        surface: null,
        lastRipple: -Infinity,
        nextIdle: 0
    }));
    let visible = false,
        frame = 0,
        lastTime = 0,
        elapsed = 0;

    function animate(time) {
        elapsed += Math.min(time - lastTime, 34);
        lastTime = time;
        let changed = false;
        while (elapsed >= 1000 / 60) {
            for (const item of items) {
                if (!item.surface) continue;
                if (time > item.nextIdle) {
                    const selected =
                        item.button.getAttribute("aria-pressed") === "true";
                    disturbLiquid(
                        item.surface,
                        0.5 + Math.sin(time / 2400) * 0.3,
                        0,
                        selected ? 0.85 : 0.3
                    );
                    item.nextIdle = time + 2400;
                }
                stepLiquid(item.surface);
            }
            elapsed -= 1000 / 60;
            changed = true;
        }
        if (changed)
            for (const item of items) {
                if (item.surface)
                    item.path.setAttribute("d", liquidOutline(item.surface));
            }
        frame = requestAnimationFrame(animate);
    }

    function sync() {
        cancelAnimationFrame(frame);
        lastTime = performance.now();
        elapsed = 0;
        items.forEach((item, index) => {
            item.nextIdle = lastTime + 1000 + index * 350;
        });
        if (visible && !reduced.matches && !document.hidden) {
            frame = requestAnimationFrame(animate);
        } else {
            for (const item of items) {
                if (!item.surface) continue;
                item.surface.current.fill(0);
                item.surface.previous.fill(0);
                item.path.setAttribute("d", liquidOutline(item.surface));
            }
        }
    }

    const resize = new ResizeObserver(() => {
        for (const item of items) {
            if (!item.button.clientWidth || !item.button.clientHeight) continue;
            item.surface = createLiquid(
                item.button.clientWidth,
                item.button.clientHeight
            );
            item.path.setAttribute("d", liquidOutline(item.surface));
            item.button.querySelector("rect").style.display = "none";
        }
    });

    for (const item of items) {
        resize.observe(item.button);
        const disturb = event => {
            if (reduced.matches || !item.surface) return;
            const keyboard = event.type === "keydown";
            if (
                keyboard &&
                (event.repeat || !["Enter", " "].includes(event.key))
            )
                return;
            const moving = event.type === "pointermove";
            const entering = event.type === "pointerenter";
            if ((moving || entering) && event.pointerType !== "mouse") return;
            const time = performance.now();
            if (moving && time - item.lastRipple < 90) return;
            item.lastRipple = time;
            const rect = item.button.getBoundingClientRect();
            disturbLiquid(
                item.surface,
                keyboard ? 0.5 : (event.clientX - rect.left) / rect.width,
                keyboard ? 0.5 : (event.clientY - rect.top) / rect.height,
                moving ? 2.6 : entering ? 3.4 : -4
            );
        };
        for (const event of [
            "pointerenter",
            "pointermove",
            "pointerdown",
            "keydown"
        ]) {
            item.button.addEventListener(event, disturb, options);
        }
    }

    const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
    });
    observer.observe(node);
    reduced.addEventListener("change", sync, options);
    document.addEventListener("visibilitychange", sync, options);
    return {
        destroy() {
            controller.abort();
            observer.disconnect();
            resize.disconnect();
            cancelAnimationFrame(frame);
        }
    };
}
