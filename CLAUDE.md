# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the static marketing website for TigerApps, a Princeton University student organization. Built with Astro.js and TailwindCSS, it showcases current apps, team members, and serves as the main landing page.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check code formatting with Prettier
npm run format     # Format code with Prettier (auto-fix)
```

## Code Quality

### Formatting
- Prettier configuration in `.prettierrc` with 4-space indentation
- Pre-commit hook automatically runs `npm run format` before commits
- Astro-specific formatting with `prettier-plugin-astro`

## Architecture

### Tech Stack

-   **Astro 4.16.18** - Static site generator with component-based architecture
-   **TailwindCSS** - Utility-first CSS with custom design system
-   **TypeScript** - Type safety for component props and data structures

### Key Directories

-   `src/pages/` - Route-based pages (index, archive, resources)
-   `src/components/landing/` - Homepage-specific components with co-located data
-   `src/components/page/` - Shared page components (header, footer)
-   `src/components/*/ui/` - Reusable UI components
-   `src/assets/` - Images organized by category (apps/, members/, companies/, archive/)

### Data Management

All content data is **separated into utility files** as TypeScript objects:

-   Apps data: `src/utils/apps.ts` - Contains all current app sections with imports and metadata
-   Members data: `src/utils/members.ts` - Contains current/past members and company logos
-   Type definitions: `src/utils/types.ts` - TypeScript interfaces for data structures
-   Archive apps: `src/pages/archive.astro` - Archive app data co-located in the page component

### Design System

Custom TailwindCSS configuration in `tailwind.config.mjs`:

-   Primary: `#3EE0BF` (teal green) with hover variant `#4BD9B0`
-   Secondary: `#2B3E50` (dark blue-gray) with hover variant `#34495E`
-   On-primary/secondary text colors for accessibility
-   Use `.cont` and `.constrained` utility classes for consistent layouts

### Component Architecture

- **Astro Components**: Use `.astro` extension with component scripts in frontmatter
- **Image Optimization**: Import images as ES modules for Astro's built-in optimization
- **TypeScript Integration**: Type-safe props and data structures throughout
- **UI Components**: Reusable components in `ui/` subdirectories with standardized props

### Asset Guidelines

-   Use `.webp` format for all images
-   Import images as ES modules for Astro optimization
-   Organize by category in `/src/assets/`

## Common Tasks

### Adding New Apps

1. Add app data object to appropriate section in `src/utils/apps.ts`
2. Add screenshot to `src/assets/apps/` in `.webp` format
3. Import image at top of `apps.ts` file

### Adding Team Members

1. Add member data to `currentMembers` array in `src/utils/members.ts`
2. Add headshot to `src/assets/members/` in `.webp` format
3. Import image at top of `members.ts` file

### Moving Apps to Archive

1. Move data from `src/utils/apps.ts` to the archive array in `src/pages/archive.astro`
2. Move screenshot from `assets/apps/` to `assets/archive/`
3. Update import paths in the archive page
