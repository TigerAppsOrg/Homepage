<script>
    import { currentMembers } from "../../utils/members";
    import githubIcon from "../../assets/icons/github-mark.svg";

    const roles = [
        "Board",
        "Product Management",
        "Design",
        "Marketing",
        "Engineering"
    ];

    // Rainbow colors for role pills
    const roleColors = {
        "Board": "#FF6B6B",
        "Product Management": "#FFA94D",
        "Design": "#F783AC",
        "Marketing": "#51CF66",
        "Engineering": "#339AF0"
    };

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

    function isBoard(member) {
        return member.roles.includes("Board");
    }
</script>

<!-- Role Filter Pills -->
<div class="pt-4">
    <div class="flex flex-wrap justify-center gap-2 text-sm">
        {#each roles as role}
            <button
                class="role-pill cursor-pointer"
                class:active={selectedRoles.includes(role)}
                style="--role-color: {roleColors[role]}"
                onclick={() => toggleRole(role)}>
                <span class="pill-content">{role}</span>
            </button>
        {/each}
    </div>
</div>

<!-- Compact Inline Members -->
<div class="mt-8">
    <h4 class="text-center mb-6 text-charcoal">Current Members</h4>
    <div class="flex flex-wrap justify-center gap-3 constrained">
        {#each currentMembers as member (member.name)}
            <div
                class="member-chip"
                class:hidden={!filteredMembers.some(m => m.name === member.name)}
                class:board={isBoard(member)}>
                <img
                    class="member-avatar"
                    class:board-avatar={isBoard(member)}
                    src={member.headshot.src}
                    alt={member.name}
                    loading="lazy" />
                <div class="member-content">
                    <div class="member-info">
                        <span class="member-name">{member.name}</span>
                        {#if member.github || member.website}
                            <div class="member-links">
                                {#if member.github}
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="member-link"
                                        aria-label="GitHub Profile">
                                        <img
                                            height="14"
                                            width="14"
                                            src={githubIcon.src}
                                            alt="GitHub" />
                                    </a>
                                {/if}
                                {#if member.website}
                                    <a
                                        aria-label="Personal Website"
                                        href={member.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="member-link">
                                        <svg
                                            class="w-3.5 h-3.5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </a>
                                {/if}
                            </div>
                        {/if}
                    </div>
                    <!-- Position and title shown inline -->
                    <div class="member-details">
                        {#if member.position}
                            <span class="member-position">{member.position}</span>
                        {/if}
                        <span class="member-title">{member.title}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .role-pill {
        display: inline-block;
        transition: all 0.15s ease-out;
        border: none;
        background: none;
        padding: 0;
    }

    .pill-content {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 2px solid #E9ECEF;
        border-radius: 9999px;
        color: #868E96;
        background-color: #FFFFFF;
        transition: all 0.15s ease-out;
        font-weight: 600;
        user-select: none;
    }

    .role-pill:hover .pill-content {
        border-color: var(--role-color);
        color: var(--role-color);
        transform: translateY(-2px);
    }

    .role-pill.active .pill-content {
        background-color: var(--role-color);
        border-color: var(--role-color);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px color-mix(in srgb, var(--role-color) 40%, transparent);
    }

    .member-chip {
        display: inline-flex;
        align-items: center;
        gap: 0.625rem;
        padding: 0.5rem 0.875rem 0.5rem 0.5rem;
        background: #FFFFFF;
        border: 2px solid #E9ECEF;
        border-radius: 9999px;
        transition: all 0.15s ease-out;
        position: relative;
    }

    .member-chip:hover {
        border-color: #339AF0;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(51, 154, 240, 0.15);
    }

    .member-chip.board {
        border-color: #9775FA;
        background: linear-gradient(135deg, #FFFFFF 0%, #F8F4FF 100%);
    }

    .member-chip.board:hover {
        box-shadow: 0 4px 12px rgba(151, 117, 250, 0.2);
    }

    .member-chip.hidden {
        display: none;
    }

    .member-avatar {
        width: 52px;
        height: 52px;
        border-radius: 9999px;
        object-fit: cover;
        object-position: center top;
        border: 2.5px solid #E9ECEF;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    }

    .member-avatar.board-avatar {
        width: 52px;
        height: 52px;
        border-color: #9775FA;
        box-shadow: 0 2px 8px rgba(151, 117, 250, 0.2);
    }

    .member-content {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
        min-width: 0;
    }

    .member-info {
        display: flex;
        align-items: center;
        gap: 0.375rem;
    }

    .member-name {
        font-size: 0.875rem;
        font-weight: 600;
        color: #212529;
        white-space: nowrap;
    }

    .member-links {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        opacity: 0.5;
        transition: opacity 0.15s;
    }

    .member-chip:hover .member-links {
        opacity: 1;
    }

    .member-link {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.125rem;
        color: #868E96;
        transition: color 0.15s;
    }

    .member-link:hover {
        color: #339AF0;
    }

    /* Title and position shown inline */
    .member-details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.2;
    }

    .member-title {
        font-size: 0.6875rem;
        color: #868E96;
    }

    .member-position {
        font-size: 0.625rem;
        color: #9775FA;
        font-weight: 600;
    }
</style>
