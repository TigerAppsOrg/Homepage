# TigerApps Homepage

Repository for the TigerApps homepage. Built with Astro and TailwindCSS.

## About

TigerApps is a Princeton student-run organization that builds and maintains web applications for the Princeton community. TigerApps is fully funded by Princeton's Undergraduate Student Government.

## Development

If you're interested in building a Tiger App or joining the TigerApps team, check out the [TigerApps website](https://tigerapps.org) for more information.

## Updating

If you've never worked with Astro before, it's essentially like HTML with a bit of JSX sprinkled in. Compared to pure HTML, it makes it easy to have modularity, accessibility, and SEO.

When updating data (apps, members, companies, etc.), be sure to decouple the data from the HTML/Astro markup. For example, MEMBERS (in [index.astro](./src/pages/index.astro)) holds the data for current members that will be rendered by the Astro markup. Global CSS styles should be used sparingly; TailwindCSS is preferred. However, you can place global CSS in [Layout.astro](./src/layouts/Layout.astro).

Run `npm run format` to format code according to the [Prettier settings](./.prettierrc).
