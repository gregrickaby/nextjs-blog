# Greg Rickaby Blog

My blog built on Next.js and hosted at Vercel. https://gregrickaby.com

---

## Packages

- [Day.js](https://day.js.org/en/)
- [ESLint](https://eslint.org/)
- [EXIFR](https://github.com/MikeKovarik/exifr)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [MDX](https://mdxjs.com/)
- [Netlify CMS](https://www.netlifycms.org//)
- [Next SEO](https://github.com/garmeeh/next-seo#usage)
- [Next Sitemap](https://github.com/iamvishnusankar/next-sitemap)
- [Next.js](https://nextjs.org/)
- [Prettier](https://github.com/prettier/prettier)
- [Prism](https://github.com/sergioramos/remark-prism)
- [Storybook](https://storybook.js.org/)
- [Stylelint](https://stylelint.io/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel Ready](https://vercel.com/)

---

## Install

Use [create-next-app](https://www.npmjs.com/package/create-next-app) to get up and running with either Yarn or NPX:

```bash
$ yarn create next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog

or

$ npx create-next-app gregrickaby-blog --example https://github.com/gregrickaby/gregrickaby-blog
```

---

## ENV Variables

### Set up

You will need the following ENV variables in order to develop.

Create an `.env` file and add:

```text
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION="YOUR_VERIFICATION_CODE"
```

```text
NEXT_PUBLIC_GOOGLE_ANALYTICS="UA-1234567-X"
```

### Optional: Pull from Vercel

If you have a project on Vercel, you could also add the ENV variables there, and then pull them down:

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
yarn build && yarn serve
```

Bulk linting via CLI:

```bash
yarn lint
```

---

## Storybook

Stories are written in `.mdx`. Clone the `StoryTemplate.stories.mdx` file to get started.

Start Storybook:

```bash
$ yarn storybook
```

---
