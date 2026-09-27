export function createLiquid(width, height) {
    const radius = height / 2;
    const straight = width - height;
    const arc = Math.PI * radius;
    const perimeter = straight * 2 + arc * 2;
    const count = Math.max(32, Math.ceil(perimeter / 6));
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
        speed: Math.min(0.8, 16 / (perimeter / count) ** 2),
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
            -3,
            Math.min(3, surface.current[index] + impulse)
        );
        surface.previous[index] = Math.max(
            -3,
            Math.min(3, surface.previous[index] + impulse)
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
        // damp velocity so waves travel instead of springing toward the center
        previous[index] =
            current[index] +
            (current[index] - previous[index]) * 0.9 +
            speed * neighbors;
        sum += previous[index];
    }
    // preserve the silhouette's area instead of inflating the whole button
    for (let index = 0; index < count; index++) previous[index] -= sum / count;
    surface.previous = current;
    surface.current = previous;
    const active = previous.some(
        (value, index) =>
            Math.abs(value) > 0.015 || Math.abs(value - current[index]) > 0.015
    );
    if (!active) {
        current.fill(0);
        previous.fill(0);
    }
    return active;
}

export function liquidOutline(surface) {
    const points = surface.points.map((point, index) => {
        const offset = Math.max(-3, Math.min(3, surface.current[index]));
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
        active: false
    }));
    let visible = false,
        frame = 0,
        lastTime = 0,
        elapsed = 0,
        idleTimer;

    function animate(time) {
        elapsed += Math.min(time - lastTime, 34);
        lastTime = time;
        const steps = Math.floor(elapsed / (1000 / 60));
        elapsed -= steps * (1000 / 60);
        if (steps)
            for (const item of items) {
                if (!item.surface || !item.active) continue;
                for (let step = 0; step < steps && item.active; step++)
                    item.active = stepLiquid(item.surface);
                item.path.setAttribute("d", liquidOutline(item.surface));
            }
        frame = items.some(item => item.active)
            ? requestAnimationFrame(animate)
            : 0;
    }

    function wake() {
        if (frame || !visible || reduced.matches || document.hidden) return;
        lastTime = performance.now();
        elapsed = 0;
        frame = requestAnimationFrame(animate);
    }

    function sync() {
        cancelAnimationFrame(frame);
        frame = 0;
        clearInterval(idleTimer);
        if (visible && !reduced.matches && !document.hidden) {
            if (items.some(item => item.active)) wake();
            idleTimer = setInterval(() => {
                const item = items.find(
                    item =>
                        item.surface &&
                        item.button.getAttribute("aria-pressed") === "true"
                );
                if (!item || item.active) return;
                disturbLiquid(item.surface, 0.65, 0, 0.35);
                item.active = true;
                wake();
            }, 6000);
        } else {
            for (const item of items) {
                if (!item.surface) continue;
                item.active = false;
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
            if (reduced.matches || document.hidden || !visible || !item.surface)
                return;
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
            if (moving && time - item.lastRipple < 120) return;
            item.lastRipple = time;
            const rect = item.button.getBoundingClientRect();
            disturbLiquid(
                item.surface,
                keyboard ? 0.5 : (event.clientX - rect.left) / rect.width,
                keyboard ? 0.5 : (event.clientY - rect.top) / rect.height,
                moving ? 0.85 : entering ? 1.65 : -2.6
            );
            item.active = true;
            wake();
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
            clearInterval(idleTimer);
        }
    };
}
