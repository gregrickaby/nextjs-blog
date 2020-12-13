---
title: 'Reddit Image Viewer'
date: '2020-06-16'
slug: 'reddit-image-viewer'
excerpt: ''
category:
  - 'code'
tags:
  - 'next.js'
  - 'vercel'
coverImage: '/assets/blog/images/generic.jpg'
author:
  name: 'Greg Rickaby'
  picture: '/assets/blog/authors/greg.jpg'
ogImage:
  url: '/assets/blog/images/generic.jpg'
---

**TL;DR:** [**https://reddit-image-viewer.vercel.app**](https://reddit-image-viewer.vercel.app)

I've been deep diving with [React](https://reactjs.org/) and [Next.js](https://nextjs.org) lately. A big part of that immersion, is the simplicity of Next.js.

For me, Next.js has the perfect amount of abstraction…somewhere between [Create React App](https://github.com/facebook/create-react-app) and [Gatsby.](https://gatsbyjs.org) You don't have to know Webpack or routing, but you're also not locked into an opinionated way of doing React things alongside Node.

> Next.js just blends into the background, so you can focus on building components and ship a static (or SSR) website in no time.

Anyway, there are a bunch of other Reddit image websites and apps out there, but I've always wanted to create my own. Here goes...

## About

The Reddit Image Viewer app uses Next.js as the platform, the [React Hooks](https://reactjs.org/docs/hooks-intro.html) `useEffect()`and `useState()`, relies on native [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to grab the data, and [React Cool Image](https://github.com/wellyshen/react-cool-img) to lazy-load the media of any subreddit. I also hooked up [Tailwind CSS](https://tailwindcss.com/) for styling the cards and grid.

![](/assets/blog/images/Kapture-2020-06-19-at-13.20.38.gif)

## Challenges

There were some challenges though, like dealing with [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) since web browsers are becoming more and more strict on cross-site content. Luckily, I was able to use [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) to get around this.

Parsing the JSON for embeds was difficult too. Reddit allows all types of embedded media, so being able to check for, and display certain types of media was definitely a fun little challenge, and I ended up [building a switch statement](https://github.com/gregrickaby/reddit-image-viewer/blob/master/components/Card.js#L29-L81).

Another gotcha? Reddit encodes rich media, like videos, so I had to [decode it into a `<textarea>` first](https://github.com/gregrickaby/reddit-image-viewer/blob/master/components/Card.js#L8-L14) before I could render out the markup.

I really like the "live search" functionality, but hitting an API each time someone types a letter doesn't work. I used another React Hook called `[useDebounce()](https://usehooks.com/useDebounce/)` to force the search bar to wait 1 second before sending a fetch request.

But the biggest lesson I learned on this project? How to do inline `if/else` statements in React components! A topic that is worth its very own blog post, and makes me very excited for [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html).

## Wrap Up

In the end, the app works pretty well. I've already opened a few issues on Github for some enhancements I'd like to add. All and all, it was a fun learning experience!

Check out the [code on Github](https://github.com/gregrickaby/reddit-image-viewer) and view the live app here: [https://reddit-image-viewer.vercel.app](https://reddit-image-viewer.vercel.app/)
