<script>
    import { scale } from "svelte/transition";
    import { currentMembers } from "../../utils/members";
    import githubIcon from "../../assets/icons/github-mark.svg";

    const roles = [
        "Engineering",
        "Design",
        "Product Management",
        "Marketing",
        "Board"
    ];

    let selectedRoles = $state([]);

    let filteredMembers = $derived(
        selectedRoles.length === 0
            ? currentMembers
            : currentMembers.filter(member =>
                  member.roles.some(role => selectedRoles.includes(role))
              )
    );

    function toggleRole(role) {
        if (selectedRoles.includes(role)) {
            selectedRoles = selectedRoles.filter(r => r !== role);
        } else {
            selectedRoles = [...selectedRoles, role];
        }
    }
</script>

<!-- Role Filter Pills -->
<div class="pt-4">
    <div class="flex flex-wrap justify-center gap-2 text-sm">
        {#each roles as role}
            <button
                class="role-pill cursor-pointer"
                class:active={selectedRoles.includes(role)}
                onclick={() => toggleRole(role)}>
                <span class="pill-content">{role}</span>
            </button>
        {/each}
    </div>
</div>

<!-- Members Grid -->
<div class="space-y-16 mt-8">
    <article>
        <h4 class="mb-4">Current Members</h4>
        <div
            class="grid justify-center gap-4 md:gap-y-8 md:gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 constrained">
            {#each filteredMembers as member (member.name)}
                <div
                    class="text-center mx-auto"
                    in:scale={{ duration: 300, start: 0.8 }}
                    out:scale={{ duration: 300, start: 0.8 }}>
                    <img
                        class="rounded-full shadow-xl mb-1 aspect-square object-cover border border-gray-200 w-full"
                        src={member.headshot.src}
                        alt={member.name}
                        loading="lazy" />
                    <div class="mt-2">
                        <h5 class="text-sm sm:text-lg">{member.name}</h5>
                        <p class="text-sm sm:text-base -mb-1 font-semibold">
                            {member.position}
                        </p>
                        <p class="text-sm sm:text-base mb-1">{member.title}</p>
                        <div
                            class="flex items-center justify-center gap-4 mt-1">
                            {#if member.github}
                                <a
                                    href={member.github}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img
                                        height="20"
                                        width="20"
                                        src={githubIcon.src}
                                        alt="GitHub Icon" />
                                </a>
                            {/if}
                            {#if member.website}
                                <a
                                    href={member.website}
                                    aria-label="{member.name}'s personal website"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-6">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                    </svg>
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </article>
</div>

<style>
    .role-pill {
        display: inline-block;
        transition: all 0.1s ease-in-out;
        border: none;
        background: none;
        padding: 0;
    }

    .pill-content {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid #d1d5db;
        border-radius: 9999px;
        color: #6b7280;
        background-color: transparent;
        transition: all 0.2s ease-in-out;
        font-weight: 500;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    .role-pill:hover .pill-content {
        border-color: #2b3e50;
        color: #2b3e50;
        transform: translateY(-1px);
    }

    .role-pill.active .pill-content {
        background-color: #2b3e50;
        border-color: #2b3e50;
        color: white;
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(43, 62, 80, 0.3);
    }

    .role-pill:active .pill-content {
        transform: translateY(0);
    }
</style>
