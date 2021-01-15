# Greg Rickaby Blog

My blog built on Next.js and hosted at Vercel. https://gregrickaby.com

---

## Dependencies

- [Day.js](https://day.js.org/en/)
- [ESLint](https://eslint.org/)
- [EXIFR](https://github.com/MikeKovarik/exifr)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [MDX](https://mdxjs.com/)
- [Netlify CMS](https://www.netlifycms.org/)
- [Next SEO](https://github.com/garmeeh/next-seo#usage)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Next.js](https://nextjs.org/)
- [Prettier](https://github.com/prettier/prettier)
- [Prism](https://github.com/sergioramos/remark-prism)
- [Storybook](https://storybook.js.org/)
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

You will need two ENV variables in order to develop locally. Create an `.env` file in the root of the project and add the following:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="YOUR_VERIFICATION_CODE"
```

```
NEXT_PUBLIC_GOOGLE_ANALYTICS="UA-1234567-X"
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
yarn dev
```

Test a build prior to deployment:

```bash
yarn build && yarn start
```

Bulk linting via CLI:

```bash
yarn lint
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

Just drag and drop `.jpg` files into `__photos` then build.

---

## Storybook

Stories are written in `.mdx` ([learn more](https://storybook.js.org/docs/react/writing-docs/mdx)) and should be placed in the same folder as the component.

Start Storybook:

```bash
$ yarn storybook
```

---

## Gotchas

**Tailwind `font-*` and `dark` styles do not work in CSS Modules.**

I don't know why. Instead, add the styles in the component and then use `cn()` to merge them.

```js
className={cn(styles.date, 'font-roboto dark:text-gray-100')}
```

**Storybook does support this website's dark mode.**

That's because Tailwind expects the `dark` class to be set on `<html>`, while Storybook's background toggle just swaps hard-coded CSS values in `<head>`.

To test dark mode, right-click to inspect the component's `<iframe>`. Add `class="dark"` to `<html>`.

![screenshot](https://dl.dropbox.com/s/6jzc1jq8frss5qc/Screen%20Shot%202021-01-15%20at%2010.53.54%20AM.png?dl=0)

**Storybook v6.1 does not support PostCSS 8**

They're working on it for Storybook v7. Because of this, do not upgrade PostCSS, AutoPrefixer, and TailwindCSS to `@latest`.

**Netlify CMS only works locally.**

When I try on production? I get a "configuration error". 🤷‍♂️

---
