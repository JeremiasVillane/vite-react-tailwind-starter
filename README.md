# vite-react-typescript-tailwind-docker-starter

Template to initialize a Vite React-SWC-TS app with Docker setup and TailwindCSS, shadcn/ui ready.

- ⚡ blazing fast dev server and build
- 🔗 route management added (`react-router-dom` configured)

## Getting Started

You can either click [`Use this template`](https://github.com/JeremiasVillane/vite-react-typescript-tailwind-docker-starter/generate) button on this repository and clone the repo or use npx degit like so:

```bash
npx degit JeremiasVillane/vite-react-typescript-tailwind-docker-starter <app_name>
```

```
pnpm i
```

Then, run the development server:

```bash
pnpm dev
```

## Deployment

- build command: `pnpm build`
- build docker: `pnpm build:docker`
- release docker locally: `pnpm release:local`
- output directory: `dist`

## References

- [vite](https://vitejs.dev)
  - [avoid manual import](https://vitejs.dev/guide/features.html#jsx)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org)
- [Docker](https://forums.docker.com/)
