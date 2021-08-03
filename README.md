# Greg Rickaby - Blog

✨ [My blog](https://gregrickaby.com) built with Next.js, MDX, TailwindCSS, Formik, and Vercel.

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
3. Place the `.mdx` file in `__posts`, `__pages`, or `__books`
4. Build

### Photo Management

Like adding posts...

1. Add `.jpg` files to `public/photos`
2. Build

> Photos _must_ have [Exif data](https://en.wikipedia.org/wiki/Exif)!

---

## Gotchas

**Tailwind `font-*` and `dark` styles do not work in CSS Modules.**

I don't know why. Instead, add the styles in the component and then use `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

---
