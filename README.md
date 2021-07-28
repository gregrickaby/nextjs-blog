# Greg Rickaby - Blog <!-- omit in toc -->

[My blog](https://gregrickaby.com) built on Next.js and hosted at Vercel.

---

## Table of Contents <!-- omit in toc -->

- [Local Development](#local-development)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Setup ENV Variables](#setup-env-variables)
  - [Working with Next.js](#working-with-nextjs)
- [Content Management](#content-management)
  - [Posts & Pages](#posts--pages)
  - [Photo Management](#photo-management)
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
2. Add Front Matter and content. You can even import React components!
3. Place the `.mdx` file in `__posts`, `__pages`, or `__books`
4. Build

> The Front Matter slug _must_ match the blog post filename. This is because Next.js is querying data based on the post slug.

### Photo Management

Like adding posts...

1. Add `.jpg` files to `public/photos`
2. Build

> Photos _must_ be a `.jpg` and have [Exif data](https://en.wikipedia.org/wiki/Exif)!

---

## Gotchas

### TailwindCSS

Tailwind `font-*` and `dark` styles do not work in CSS Modules. Instead, add the styles in the component using `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

---
