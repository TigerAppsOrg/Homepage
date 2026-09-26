import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// run after npm run build
const html = readFileSync(
    new URL("../dist/index.html", import.meta.url),
    "utf8"
);
const groups = [
    ...html.matchAll(
        /<section[^>]*aria-labelledby="members-([^" ]+)"[^>]*>([\s\S]*?)<\/section>/g
    )
];
assert.deepEqual(
    groups.map(([, id]) => id),
    ["board", "team-leads", "members"]
);
for (const [index, name] of [
    "Ammaar Alam",
    "Niyathi Kukkapalli",
    "Emily Zou"
].entries()) {
    assert.ok(
        groups[index][2].includes(name),
        `${name} is in the correct group`
    );
}
assert.ok(groups[0][2].includes("Infrastructure &amp; DevOps Engineer"));
assert.ok(groups[0][2].includes("Software &amp; Infrastructure Engineer"));
const names = groups.flatMap(([, , body]) =>
    [...body.matchAll(/class="member-name[^"]*">([\s\S]*?)<\/span>/g)].map(
        ([, name]) => name.replace(/<[^>]*>/g, "").trim()
    )
);
const roster = readFileSync(
    new URL("../src/utils/members.ts", import.meta.url),
    "utf8"
);
const expected = [...roster.matchAll(/name: "([^"]+)"/g)].map(
    ([, name]) => name
);
assert.ok(
    expected.every(name => / '\d{2}$/.test(name)),
    "every member has a class year"
);
assert.deepEqual(
    names.toSorted(),
    expected.toSorted(),
    "every member appears exactly once"
);
assert.match(
    html,
    /aria-pressed="true"[^>]*>[\s\S]*?<span[^>]*>All<\/span>\s*<\/button>/
);
assert.match(html, /class="member-year[^"]*"> '27<\/span>/);
const masks = [...html.matchAll(/<mask id="([^"]+)"/g)].map(([, id]) => id);
assert.equal(
    masks.length,
    new Set(masks).size,
    "each icon mask has a unique id"
);
console.log(
    `Verified ${names.length} members across Board, Team Leads, and Members`
);

const component = readFileSync(
    new URL("../src/components/landing/RoleFilter.svelte", import.meta.url),
    "utf8"
);
const { parse } = await import("svelte/compiler");
const { runInNewContext } = await import("node:vm");
const functions = parse(component, { modern: true })
    .instance.content.body.filter(node => node.type === "FunctionDeclaration")
    .map(node => component.slice(node.start, node.end))
    .join("\n");
const pending = [];
const classes = new Set();
const reducedMotion = { current: false };
let skipped = 0;
const document = {
    documentElement: {
        style: { setProperty() {}, removeProperty() {} },
        classList: {
            add: name => classes.add(name),
            remove: name => classes.delete(name)
        }
    }
};
const api = runInNewContext(
    `
    let selectedRoles = [], requestedRoles = [], filterTransition;
    ${functions}
    ({ selectRole, roles: () => selectedRoles.join(",") });
`,
    {
        document,
        reducedMotion,
        flushSync: update => update()
    }
);
api.selectRole("Board");
api.selectRole("Design");
assert.equal(api.roles(), "Board,Design", "unsupported browsers still filter");
api.selectRole(null);

document.startViewTransition = update => {
    let finish;
    const finished = new Promise(resolve => {
        finish = resolve;
    });
    pending.push(() => {
        update();
        finish();
    });
    return {
        ready: Promise.resolve(),
        finished,
        skipTransition: () => skipped++
    };
};
api.selectRole("Board");
api.selectRole("Engineering");
api.selectRole(null);
while (pending.length) pending.shift()();
await Promise.resolve();
assert.equal(api.roles(), "", "rapid toggles end on the latest selection");
assert.equal(skipped, 2);
assert.equal(
    classes.size,
    0,
    "completed transitions clean up their page class"
);

api.selectRole("Board");
reducedMotion.current = true;
api.selectRole(null);
assert.equal(pending.length, 1, "reduced motion skips starting a transition");
pending.shift()();
await Promise.resolve();
assert.equal(api.roles(), "", "a pending transition cannot undo a newer reset");
const transitionNames = [
    ...html.matchAll(/view-transition-name:\s*([\w-]+)/g)
].map(([, name]) => name);
assert.equal(transitionNames.length, expected.length + 4);
assert.equal(new Set(transitionNames).size, transitionNames.length);
console.log(
    "Verified filter interruption, fallback, reduced motion, and unique transition names"
);

const { createLiquid, disturbLiquid, stepLiquid, liquidOutline } = await import(
    "../src/components/landing/liquidFilters.js"
);
for (const width of [64, 160, 340]) {
    const surface = createLiquid(width, 44);
    const rest = liquidOutline(surface);
    disturbLiquid(surface, 0.3, 0, 3.4);
    const initialArea = surface.current.filter(
        value => Math.abs(value) > 0.01
    ).length;
    assert.notEqual(
        liquidOutline(surface),
        rest,
        "hover changes the actual silhouette"
    );
    for (let frame = 0; frame < 12; frame++) stepLiquid(surface);
    assert.ok(
        surface.current.filter(value => Math.abs(value) > 0.01).length >
            initialArea,
        "waves travel around the silhouette"
    );
    assert.ok(
        Math.abs(surface.current.reduce((sum, value) => sum + value, 0)) <
            0.0001,
        "ripples do not inflate the whole button"
    );
    assert.ok(
        Math.max(...surface.current.map(Math.abs)) > 0.8,
        "shape motion stays noticeable"
    );
    const coordinates = liquidOutline(surface)
        .match(/-?\d+\.\d+/g)
        .map(Number);
    coordinates.forEach((value, index) =>
        assert.ok(value >= -4 && value <= (index % 2 ? 44 : width) + 4)
    );
    for (let frame = 0; frame < 600; frame++) stepLiquid(surface);
    assert.ok(
        surface.current.every(
            value => Number.isFinite(value) && Math.abs(value) < 0.01
        ),
        "ripples settle"
    );
}
assert.ok(!component.includes("--members-transition-top"));
assert.ok(!component.includes("clip-path:"));
assert.ok(!component.includes("<canvas"));
const { default: sharp } = await import("sharp");
const initial = html.match(
    /<svg[^>]+class="role-surface[^"]*"[^>]*>([\s\S]*?)<\/svg>/
)[1];
const { data, info } = await sharp(
    Buffer.from(
        `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="44">${initial}</svg>`
    )
)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
assert.equal(
    data[(340 + 64) * info.channels + info.channels - 1],
    255,
    "initial silhouette is a capsule"
);
console.log(
    "Verified dynamic outlines, propagation, bounded motion, settling, and initial capsule"
);
