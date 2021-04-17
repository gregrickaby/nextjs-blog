# Contributing <!-- omit in toc -->

## Introduction <!-- omit in toc -->

Thanks for contributing — you rock! 🤘

- [Git Workflow](#git-workflow)
- [PR Preview Deployments](#pr-preview-deployments)
- [Code Linting](#code-linting)
- [Tips to help your PR get approved](#tips-to-help-your-pr-get-approved)

## Git Workflow

1. Create a `feature` branch off `main`
2. Work locally adhering to coding standards
3. Open a Pull Request (PR) and fill out the PR template
4. Your PR must pass assertions and Vercel must complete a preview deployment successfully
5. After peer review, the PR will be merged back into `main`
6. Repeat ♻️

## PR Preview Deployments

[Vercel](https://vercel.com/) is connected to this Github repository and will automatically build and deploy a unique URL for each Pull Request.

Learn more about [Vercel + Github](https://vercel.com/docs/git/vercel-for-github) integration.

## Code Linting

This project has several rulesets and uses ESLint, Prettier, and Stylelint to enforce standards.

In addition to real-time linting, you could run the following commands in your terminal.

> These commands are also used in a pre-commit hook.

Lint JavaScript:

```bash
npm run lint:js
```

Lint CSS:

```bash
npm run lint:css
```

Format your code:

```bash
npm run format
```

## Tips to help your PR get approved

1. Make sure your code editor supports real-time linting
2. [JSDocs](https://jsdoc.app/) are required for all JavaScript functions
3. Run `npm run build && npm run start` before submitting your PR, to ensure a successful build
4. Be courteous in your communications

---
