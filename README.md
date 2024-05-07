# Astronomy

An open source application built using the latest features in Astro v4 with shadcn/ui.

![blog](public/og.jpg)

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@miickasmt](https://twitter.com/miickasmt).
> See the roadmap below.

## About this project

This project as an experiment to see how a modern app (with features like authentication, subscriptions, API routes, Markdown, Content Collections ...etc) would work in Astro v4 and shadcn/ui.

> **Note**
> I would like to inform you that for the time being, my example app built with Astro.js is still under development and **cannot yet be considered a starter template**.

## Project Structure

```
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   ├── config/
│   ├── content/
│   ├── hooks/
│   ├── icons/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   ├── styles/
│   └── types/
├── astro.config.mjs
├── README.md
├── package.json
├── tailwind.config.cjs
└── tsconfig.json
```

## Features

- Config files
- Views Transitions
- Routing and Layouts
- React components & hooks
- UI Components built using **shadcn/ui**
- Documentation and blog using **MDX** and **Content Collections**
- Styled using **Tailwind CSS**
- Validations using **Zod**
- Written in **TypeScript**
- 100/100 Lighthouse performance
- Minimal styling (make it your own!)
- RSS Feed support
- Sitemap support
- Data Fetching
- API Endpoint

_Not implemented yet :_

- SEO component
- Subscriptions using **Lemon Squeezy** ?

## Roadmap

- [x] ~Dark mode~
- [x] ~Add Markdown & MDX support~
- [x] ~Sheet mobile nav~
- [x] ~Build **changelog pages**~
- [x] ~Build **waitlist with React Hook Form**~
- [x] ~Build **newsletter with Simple Form**~
- [x] ~Build **animes pages** (graphql)~
- [ ] Build **blog with Astro DB** (work on it)
- [ ] Build **ecommerce pages** (work on it)
- [ ] Build **auth/dashboard pages**
- [ ] Add search support for blog
- [ ] Add OG image for blog and others
- [ ] Add SEO component & metadata
- [ ] Subscriptions using Stripe (or Lemon Squeezy?)

## Running Locally

1. Install dependencies using pnpm:

```sh
pnpm install
```

2. Start the development server:

```sh
pnpm run dev
```

## Credit

This theme is based off of the example app [Taxonomy](https://tx.shadcn.com/) of shadcn.

## License

Licensed under the [MIT license](https://github.com/mickasmt/astro-nomy/blob/main/LICENSE.md).
