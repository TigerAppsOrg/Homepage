# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the static marketing website for TigerApps, a Princeton University student organization. Built with Astro.js and TailwindCSS, it showcases current apps, team members, and serves as the main landing page.

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check code formatting
npm run format     # Format code with Prettier
```

## Architecture

### Tech Stack
- **Astro 4.16.18** - Static site generator with component-based architecture
- **TailwindCSS** - Utility-first CSS with custom design system
- **TypeScript** - Type safety for component props and data structures

### Key Directories
- `src/pages/` - Route-based pages (index, archive, resources)
- `src/components/landing/` - Homepage-specific components with co-located data
- `src/components/page/` - Shared page components (header, footer)
- `src/components/*/ui/` - Reusable UI components
- `src/assets/` - Images organized by category (apps/, members/, companies/, archive/)

### Data Management
All content data is **co-located with components** as TypeScript objects:
- Apps data: `src/components/landing/Apps.astro` (lines 34-188)
- Members data: `src/components/landing/Members.astro` (lines 55-263)  
- Archive apps: `src/pages/archive.astro` (lines 24-165)

### Design System
Custom TailwindCSS configuration in `tailwind.config.mjs`:
- Primary: `#3EE0BF` (teal green)
- Secondary: `#2B3E50` (dark blue-gray)
- Use `.cont` and `.constrained` utility classes for consistent layouts

### Asset Guidelines
- Use `.webp` format for all images
- Import images as ES modules for Astro optimization
- Organize by category in `/src/assets/`

## Common Tasks

### Adding New Apps
1. Add app data object to `Apps.astro`
2. Add screenshot to `src/assets/apps/`
3. Import image in component

### Adding Team Members
1. Add member data to `Members.astro` 
2. Add headshot to `src/assets/members/`
3. Import image in component

### Moving Apps to Archive
1. Move data from `Apps.astro` to `archive.astro`
2. Move screenshot from `assets/apps/` to `assets/archive/`
3. Update import paths