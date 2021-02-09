# My Blog

Built on Next.js and hosted at Vercel. https://gregrickaby.com

---

## Dependencies

- [Day.js](https://day.js.org/en/)
- [ESLint](https://eslint.org/)
- [EXIFR](https://github.com/MikeKovarik/exifr)
- [Formik](https://formik.org/)
- [Formium](https://formium.io)
- [Lefthook](https://github.com/Arkweid/lefthook/)
- [MDX](https://mdxjs.com/)
- [Next SEO](https://github.com/garmeeh/next-seo#usage)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Next.js](https://nextjs.org/)
- [Prettier](https://github.com/prettier/prettier)
- [Prism](https://github.com/sergioramos/remark-prism)
- [Stylelint](https://stylelint.io/)
- [TailwindCSS](https://tailwindcss.com/)

---

## Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to get up and running with either Yarn or NPX:

```bash
$ yarn create next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog

or

$ npx create-next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog
```

---

## Setup

### ENV Variables

You'll need a few ENV variables in order to develop locally. Create an `.env` file in the root of the project. Add the following:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="YOUR_VERIFICATION_CODE"
```

```
NEXT_PUBLIC_GOOGLE_ANALYTICS="UA-1234567-X"
```

```
NEXT_PUBLIC_FORMIUM_PROJECTID="YOUR_PROJECT_ID"
```

```
FORMIUM_TOKEN="YOUR_FORMIUM_TOKEN"
```

```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY="YOUR_SITE_KEY"
```

### Optional: Pull ENV Variables from Vercel

If you have a project on Vercel, add the ENV variables show above to your "Project Settings" and then pull them down:

Link project w/ Vercel:

```bash
$ vercel link
```

Pull ENV variables:

```bash
$ vercel env pull
```

This will create a `.env` file on your local.

---

## Development

Start the development server:

```bash
npm run dev
```

Test a build prior to deployment:

```bash
npm run build && npm run start
```

Bulk linting via CLI:

```bash
npm run lint
```

---

## Content Management

It's very simple:

1. Create an `.mdx` file
2. Add front matter and content
3. Place the `.mdx` file in `__posts`, `__pages`, or `__books`
4. Build

That's it!

## Photo Management

Just drag and drop `.jpg` files into `public/photos` then build.

Note: photos _must_ have Exif data!

---

## Gotchas

**Tailwind `font-*` and `dark` styles do not work in CSS Modules.**

I don't know why. Instead, add the styles in the component and then use `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

---
