# Greg Rickaby - Blog <!-- omit in toc -->

✨ [My blog](https://gregrickaby.com) built with Next.js, MDX, TailwindCSS, Formik, and Vercel.

---

## Table of Contents <!-- omit in toc -->

- [Local Development](#local-development)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Setup ENV Variables](#setup-env-variables)
  - [Working with Next.js](#working-with-nextjs)
    - [Folder Structure](#folder-structure)
    - [NPM Scripts](#npm-scripts)
- [Content Management](#content-management)
  - [Posts & Pages](#posts--pages)
- [Gotchas](#gotchas)
  - [TailwindCSS](#tailwindcss)

---

## Local Development

### Prerequisites

- Node 14 and NPM 7
- A [Formium](https://formium.io/) token
- A [reCAPTCHA](https://developers.google.com/recaptcha/) site key

### Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to get up and running quickly:

```bash
npx create-next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog
```

### Setup ENV Variables

Create an `.env` file in the root of the project.

Add the following:

```bash
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="YOUR_VERIFICATION_CODE"
```

```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS="UA-1234567-X"
```

```bash
NEXT_PUBLIC_FORMIUM_PROJECTID="YOUR_PROJECT_ID"
```

```bash
FORMIUM_TOKEN="YOUR_FORMIUM_TOKEN"
```

```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="YOUR_SITE_KEY"
```

---

### Working with Next.js

#### Folder Structure

```text
├── components
|  ├── atoms
|  |  └── Title
|  |     ├── Title.js
|  |     └── Title.module.css
|  ├── molecules
|  ├── organisms
|  └── templates
├── data
|  ├── books
|  ├── pages
|  └── posts
├── lib
├── pages
|  ├── [slug].js
|  ├── _app.js
|  ├── _document.js
|  ├── blog
|  ├── books
|  └── index.js
├── public
|  ├── blog
|  ├── favicon
|  ├── fonts
|  ├── optimized
├── scripts
|  └── generate-rss.js
├── styles
|  ├── global.css
|  └── prism.css
```

**Components** - This folder contains all of the components used on the blog, organized by the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principle.

You'll see a folder with the same name as the component. For example, the `Title` component is contained in the `components/atoms/Title` folder.

In addition, the component's styles are located in next to the component, in the form of CSS Modules: `components/atoms/Title/Title.module.css`.

**Data** - This folder contains all of the MDX files which is what powers the content on the blog.

**Lib** - This folder contains helper functions used throughout the blog.

**Pages** - This folder contains standard Next.js pages and routes, which are used to render pages on the blog.

**Public** - This folder contains all of the static assets used on the blog.

**Scripts** - This folder contains scripts which are used at build time.

**Styles** - This folder contains global styles used on the blog.

---

#### NPM Scripts

Start local dev server:

```bash
npm run dev
```

Test a build prior to deployment:

```bash
npm run build && npm start
```

Bulk linting:

```bash
npm run lint
```

Bulk formatting:

```bash
npm run format
```

Bypass Lefthook:

```bash
git commit -m "my commit message" --no-verify
```

---

## Content Management

### Posts & Pages

It's very simple:

1. Create an `.mdx` file
2. Place the `.mdx` file in `data/posts`, `data/pages`, or `data/books`
3. Add front matter and content

> The Front Matter slug _must_ match the blog post filename. This is because Next.js is querying data based on the post slug.

---

## Gotchas

### TailwindCSS

Tailwind `font-*` and `dark` styles do not work in CSS Modules. Instead, add the styles in the component using `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

---
