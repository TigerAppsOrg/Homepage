```
████████╗██╗ ██████╗ ███████╗██████╗  █████╗ ██████╗ ██████╗ ███████╗
╚══██╔══╝██║██╔════╝ ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝
   ██║   ██║██║  ███╗█████╗  ██████╔╝███████║██████╔╝██████╔╝███████╗
   ██║   ██║██║   ██║██╔══╝  ██╔══██╗██╔══██║██╔═══╝ ██╔═══╝ ╚════██║
   ██║   ██║╚██████╔╝███████╗██║  ██║██║  ██║██║     ██║     ███████║
   ╚═╝   ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝     ╚══════╝
```

Repository for the [TigerApps homepage](https://tigerapps.org). Built with Astro and TailwindCSS.

## 📖 About

TigerApps is a Princeton student-run organization that builds and maintains web applications for the Princeton community. TigerApps is fully funded by Princeton's Undergraduate Student Government.

## 🚀 Development

If you're interested in building a Tiger App or joining the TigerApps team, contact the TigerApps team at it.admin@tigerapps.org.

## 🤝 Contributing

If you've never worked with Astro before, it's essentially like HTML with a bit of JSX sprinkled in. Compared to pure HTML, it makes it easy to have modularity, accessibility, and SEO.

To update members, see [the members data file](./src/utils/members.ts). To update apps, see [the apps data file](./src/utils/apps.ts). We separate the data from the components for easier management.

Run `npm run format` to format code according to the [Prettier settings](./.prettierrc). We also have a pre-commit hook that runs `npm run format` before committing.

## ⚖️ License

This project is licensed under the [BSD 3-Clause License](./LICENSE).
