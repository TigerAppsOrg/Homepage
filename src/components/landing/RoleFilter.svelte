<script>
    import { flushSync } from "svelte";
    import { MediaQuery } from "svelte/reactivity";
    import { liquidFilters } from "./liquidFilters.js";

    let { currentMembers } = $props();

    const roles = [
        "Board",
        "Product Management",
        "Design",
        "Marketing",
        "Outreach",
        "Engineering"
    ];

    const roleColors = {
        "All": "#9775FA",
        "Board": "#FF6B6B",
        "Product Management": "#FFA94D",
        "Design": "#F783AC",
        "Marketing": "#51CF66",
        "Outreach": "#20C997",
        "Engineering": "#339AF0"
    };

    const reducedMotion = new MediaQuery("(prefers-reduced-motion: reduce)", true);
    let selectedRoles = $state([]);
    let requestedRoles = $state([]);
    let filterTransition;
    let filteredMembers = $derived(
        selectedRoles.length === 0
            ? currentMembers
            : currentMembers.filter(member =>
                  member.roles.some(role => selectedRoles.includes(role))
              )
    );

    function selectRole(role) {
        requestedRoles = role === null
            ? []
            : requestedRoles.includes(role)
              ? requestedRoles.filter(r => r !== role)
              : [...requestedRoles, role];
        const update = () =>
            flushSync(() => {
                selectedRoles = requestedRoles;
            });

        filterTransition?.skipTransition();
        if (reducedMotion.current || !document.startViewTransition) {
            update();
            return;
        }

        document.documentElement.classList.add("members-transition");
        const transition = document.startViewTransition(update);
        filterTransition = transition;
        // skipped transitions still run their update callback
        transition.ready.catch(() => {});
        transition.finished.finally(() => {
            if (filterTransition === transition) {
                document.documentElement.classList.remove("members-transition");
                filterTransition = undefined;
            }
        });
    }

    function trackPointer(event) {
        if (reducedMotion.current || event.pointerType !== "mouse") return;
        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        target.style.setProperty(
            "--hover-x",
            `${((event.clientX - rect.left) / rect.width - 0.5) * 6}px`
        );
        target.style.setProperty(
            "--hover-y",
            `${((event.clientY - rect.top) / rect.height - 0.5) * 6}px`
        );
    }

    function resetPointer(event) {
        event.currentTarget.style.removeProperty("--hover-x");
        event.currentTarget.style.removeProperty("--hover-y");
    }
</script>

{#snippet memberLinks(member)}
    {#if member.github || member.website}
        <div class="member-links">
            {#if member.github}
                <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="member-link"
                    onpointermove={trackPointer}
                    onpointerleave={resetPointer}
                    aria-label={`GitHub profile for ${member.name}`}
                    title="GitHub">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 98 96"
                        aria-hidden="true">
                        <defs>
                            <mask
                                id={`github-tail-${currentMembers.indexOf(member)}`}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="98"
                                height="96">
                                <rect
                                    width="98"
                                    height="96"
                                    fill="white" />
                                <path
                                    class="github-tail"
                                    fill="black"
                                    d="M36.641 84.418c-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074L40 77.492V84.418Z" />
                            </mask>
                        </defs>
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            mask={`url(#github-tail-${currentMembers.indexOf(member)})`}
                            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127 .081-2.309 .161-4.617 .242-6.926.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                    </svg>
                </a>
            {/if}
            {#if member.website}
                <a
                    aria-label={`Personal website for ${member.name}`}
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="member-link"
                    onpointermove={trackPointer}
                    onpointerleave={resetPointer}
                    title="Personal website">
                    <svg
                        width="16"
                        height="16"
                        aria-hidden="true"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5" />
                        <path
                            class="external-arrow"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 16.5L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </a>
            {/if}
        </div>
    {/if}
{/snippet}

<div
    use:liquidFilters
    class="role-filters flex flex-wrap justify-center gap-2 pt-8"
    role="group"
    aria-label="Filter members by role">
    {#each [null, ...roles] as role}
        {@const active = role === null ? requestedRoles.length === 0 : requestedRoles.includes(role)}
        <button
            class="role-pill"
            class:active
            style:--role-color={roleColors[role ?? "All"]}
            aria-pressed={active}
            onclick={() => selectRole(role)}>
            <svg class="role-surface" aria-hidden="true">
                <rect width="100%" height="100%" rx="1.375rem" ry="1.375rem" />
                <path />
            </svg>
            <span>{role ?? "All"}</span>
        </button>
    {/each}
</div>

<div class="member-groups constrained">
    {#each ["Board", "Team Leads", "Members"] as group}
        {@const members = filteredMembers.filter(member =>
            (member.roles.includes("Board")
                ? "Board"
                : member.position
                  ? "Team Leads"
                  : "Members") === group
        )}
        {@const groupId = `members-${group.replaceAll(" ", "-").toLowerCase()}`}
        {#if members.length}
            <section
                class="member-group"
                class:board={group === "Board"}
                aria-labelledby={groupId}>
                <div
                    class="group-heading flex items-center gap-4 mb-8"
                    style:view-transition-name={`heading-${groupId}`}>
                    <h4 id={groupId} class="text-charcoal">{group}</h4>
                    <div class="flex-1 h-px bg-light-mid"></div>
                </div>
                <ul class="member-grid">
                    {#each members as member (member.name)}
                        <li
                            class="member-profile"
                            style:view-transition-name={`member-${currentMembers.indexOf(member)}`}
                            style:view-transition-class="roster-member">
                            <div class="member-portrait">
                                <img
                                    class="member-avatar"
                                    src={member.headshot.src}
                                    alt=""
                                    width="56"
                                    height="56"
                                    decoding="async"
                                    loading="lazy" />
                                {#if group !== "Board"}
                                    {@render memberLinks(member)}
                                {/if}
                            </div>
                            <div class="member-content">
                                <span class="member-name">
                                    {member.name.slice(0, -4)}<span class="member-year">{member.name.slice(-4)}</span>
                                </span>
                                {#if member.position}
                                    <span class="member-position">
                                        {member.position}
                                    </span>
                                {/if}
                                <span class="member-title">{member.title}</span>
                                {#if group === "Board"}
                                    {@render memberLinks(member)}
                                {/if}
                            </div>
                        </li>
                    {/each}
                </ul>
            </section>
        {/if}
    {/each}
</div>

<style>
    .role-pill {
        position: relative;
        isolation: isolate;
        min-height: 2.75rem;
        padding: 0.625rem 1rem;
        border: none;
        border-radius: 9999px;
        color: #495057;
        background: none;
        font-size: 0.875rem;
        font-weight: 600;
        cursor: pointer;
        transition: color 200ms ease-out;
    }

    .role-pill::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -2;
        border-radius: inherit;
        box-shadow: 0 4px 12px var(--role-color);
        opacity: 0;
        pointer-events: none;
        transition: opacity 200ms ease-out;
    }

    .role-surface {
        position: absolute;
        inset: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        overflow: visible;
        pointer-events: none;
        fill: #E9ECEF;
        fill: color-mix(in srgb, var(--role-color) 18%, #F8F9FA);
        transition: fill 200ms ease-out;
    }

    .role-pill:is(.active, :hover, :focus-visible) {
        color: #FFFFFF;
    }

    .role-pill:is(.active, :hover, :focus-visible)::before {
        opacity: 0.4;
    }

    .role-pill:is(.active, :hover, :focus-visible) .role-surface {
        fill: var(--role-color);
    }

    @media (prefers-contrast: more) {
        .role-pill:is(.active, :hover, :focus-visible) {
            color: #212529;
        }
    }

    .member-link:active {
        transform: scale(0.94);
        transition-duration: 80ms;
    }

    .role-pill:focus-visible,
    .member-link:focus-visible {
        outline: 2px solid #6741D9;
        outline-offset: 4px;
    }

    .member-groups {
        display: grid;
        gap: 3.5rem;
        margin-top: 2.5rem;
    }

    .member-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
        gap: 2rem;
    }

    .member-profile {
        max-width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        min-width: 0;
    }

    .member-portrait {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        width: 5.5rem;
        flex-shrink: 0;
    }

    .board .member-portrait {
        width: auto;
    }

    .member-avatar {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center top;
        flex-shrink: 0;
    }

    .board .member-avatar {
        width: 5rem;
        height: 5rem;
    }

    .member-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
        min-width: 0;
        overflow-wrap: anywhere;
    }

    .member-name {
        font-size: 1rem;
        line-height: 1.4;
        font-weight: 700;
        color: #212529;
        white-space: normal;
        overflow-wrap: anywhere;
    }

    .board .member-name {
        font-size: 1.125rem;
    }

    .member-year {
        font-size: 0.8125rem;
        font-weight: 400;
        color: #687078;
        white-space: nowrap;
    }

    .member-position,
    .member-title {
        font-size: 0.875rem;
        line-height: 1.5;
    }

    .member-position {
        color: #6741D9;
        font-weight: 700;
    }

    .member-title {
        color: #495057;
    }

    .member-links {
        display: flex;
        gap: 0.125rem;
    }

    .member-portrait .member-links {
        gap: 0;
    }

    .member-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        position: relative;
        isolation: isolate;
        border-radius: 0.625rem;
        color: #495057;
        transition:
            color 150ms ease-out,
            transform 150ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .member-link::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 1.75rem;
        height: 1.75rem;
        border-radius: 0.5rem;
        background: #E9DFFF;
        opacity: 0;
        transform: scale(0.65) rotate(-12deg);
        transition:
            opacity 150ms ease-out,
            transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .github-tail {
        transform-box: view-box;
        transform-origin: 37px 81px;
    }

    .member-link svg {
        transition: transform 180ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .member-link:focus-visible .github-tail {
        animation: tail-wave 800ms ease-in-out infinite;
    }

    .member-link:focus-visible .external-arrow {
        animation: arrow-launch 450ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    .member-link:focus-visible {
        color: #6741D9;
    }

    .member-link:focus-visible::before {
        opacity: 1;
        transform: scale(1);
    }

    @media (pointer: fine) {
        .member-portrait {
            width: 4rem;
        }

        .member-link {
            width: 2rem;
            height: 2rem;
        }
    }

    @media (hover: hover) {
        .member-link:hover {
            color: #6741D9;
        }

        .member-link:hover::before {
            opacity: 1;
            transform:
                translate(var(--hover-x, 0px), var(--hover-y, 0px))
                scale(1) rotate(0deg);
        }

        .member-link:hover svg {
            transform: translate(var(--hover-x, 0px), var(--hover-y, 0px));
        }

        .member-link:hover .github-tail {
            animation: tail-wave 800ms ease-in-out infinite;
        }

        .member-link:hover .external-arrow {
            animation: arrow-launch 450ms cubic-bezier(0.22, 1, 0.36, 1);
        }
    }

    @media (min-width: 40rem) {
        .board .member-profile {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
            text-align: center;
        }

        .board .member-content {
            align-items: center;
            gap: 0.125rem;
        }

        .board .member-name,
        .board .member-position,
        .board .member-title {
            text-wrap: balance;
        }

        .board .member-links {
            justify-content: center;
        }

        .board .member-position,
        .board .member-title {
            line-height: 1.4;
        }
    }

    @media (min-width: 64rem) {
        .board .member-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            column-gap: 1.5rem;
        }
    }

    .group-heading {
        view-transition-class: roster-heading;
    }

    :global(.members-transition::view-transition) {
        pointer-events: none;
    }

    :global(.members-transition::view-transition-old(root)) {
        animation: none;
        opacity: 0;
    }

    :global(.members-transition::view-transition-new(root)) {
        animation: none;
    }

    :global(::view-transition-group(.roster-member)),
    :global(::view-transition-group(.roster-heading)),
    :global(::view-transition-group(roster-alumni)) {
        animation-duration: 280ms;
        animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    }

    :global(::view-transition-old(.roster-member)),
    :global(::view-transition-old(.roster-heading)),
    :global(::view-transition-old(roster-alumni)) {
        animation: none;
        opacity: 0;
    }

    :global(::view-transition-new(.roster-member)),
    :global(::view-transition-new(.roster-heading)),
    :global(::view-transition-new(roster-alumni)) {
        animation: none;
    }

    :global(::view-transition-old(.roster-member):only-child),
    :global(::view-transition-old(.roster-heading):only-child) {
        opacity: 1;
        animation: roster-exit 140ms ease-in both;
    }

    :global(::view-transition-new(.roster-member):only-child),
    :global(::view-transition-new(.roster-heading):only-child) {
        animation: roster-enter 240ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    @keyframes -global-roster-enter {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes -global-roster-exit {
        to {
            opacity: 0;
            transform: translateY(-4px);
        }
    }

    @keyframes tail-wave {
        0%, 100% {
            transform: rotate(0deg);
        }
        20% {
            transform: rotate(-22deg);
        }
        40% {
            transform: rotate(16deg);
        }
        60% {
            transform: rotate(-14deg);
        }
        80% {
            transform: rotate(8deg);
        }
    }

    @keyframes arrow-launch {
        0%, 100% {
            opacity: 1;
            transform: translate(0, 0);
        }
        40% {
            opacity: 0;
            transform: translate(8px, -8px);
        }
        41% {
            opacity: 0;
            transform: translate(-4px, 4px);
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .member-link .github-tail,
        .member-link .external-arrow,
        .member-link:hover .github-tail,
        .member-link:hover .external-arrow,
        .member-link:focus-visible .github-tail,
        .member-link:focus-visible .external-arrow {
            animation: none;
        }

        :global(.members-transition::view-transition-group(*)),
        :global(.members-transition::view-transition-old(*)),
        :global(.members-transition::view-transition-new(*)) {
            animation: none !important;
        }

        .role-pill,
        .role-pill::before,
        .role-surface,
        .member-link,
        .member-link svg,
        .member-link::before {
            transition: none;
        }

        .role-surface,
        .member-link:active,
        .member-link:hover svg,
        .member-link::before,
        .member-link:hover::before,
        .member-link:focus-visible::before {
            transform: none;
        }
    }
</style>
