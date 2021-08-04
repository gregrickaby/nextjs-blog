# Greg Rickaby - Blog <!-- omit in toc -->

✨ [My blog](https://gregrickaby.com) built with Next.js, MDX, TailwindCSS, Formik, and Vercel.

---

## Table of Contents <!-- omit in toc -->

- [Local Development](#local-development)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [ENV Variables](#env-variables)
- [Working with Next.js](#working-with-nextjs)
- [Content Management](#content-management)
  - [Posts & Pages](#posts--pages)
  - [Photo Management](#photo-management)
  - [Photo Optimization](#photo-optimization)
- [Gotchas](#gotchas)

---

## Local Development

### Prerequisites

- A [Formium](https://formium.io/) token
- A [reCAPTCHA](https://developers.google.com/recaptcha/) site key

### Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to get up and running quickly:

```bash
npx create-next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog
```

### ENV Variables

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

## Working with Next.js

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

---

## Content Management

### Posts & Pages

It's very simple:

1. Create an `.mdx` file
2. Add front matter and content
3. Place the `.mdx` file in `data/posts`, `data/pages`, or `data/books`

### Photo Management

When I export photos from Lightroom, I just want to drag-n-drop them into the `data/photos` folder, then let a computer deal with serving an optimized version to a user.

With that workflow in mind:

1. Photos _must_ be a **JPG** have [Exif data](https://en.wikipedia.org/wiki/Exif)
2. Add your `.jpg` photos to `data/photos`
3. Your photo will be optimized at build time

### Photo Optimization

This blog uses Sharp, a Node.js module, in concert with Next.js' `<Image />` component for image optimization. At build time Sharp will optimize images, while preserving EXIF data, for you. This makes `<Image />` faster since it doesn't have to work as hard to optimize images in real-time.

You can also run `npm run optimize` to optimize all photos in `data/photos` and `public/blog/images` manually.

---

## Gotchas

**Tailwind `font-*` and `dark` styles do not work in CSS Modules.**

I don't know why. Instead, add the styles in the component and then use `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

---
