import Document, {Head, Html, Main, NextScript} from 'next/document'
import config from '../lib/config'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title={`${config?.siteName} - Feed`}
            href={`${config?.siteUrl}/rss.xml`}
          />
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon/icon.png" />
          <link rel="icon" href="/favicon/icon.png" sizes="192x192" />
          <meta name="msapplication-TileImage" content="/favicon/icon.png" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Greg Rickaby",
              "url": "https://gregrickaby.blog",
              "sameAs": [
                "https://500px.com/p/gregrickaby",
                "https://codepen.io/gregrickaby",
                "https://github.com/gregrickaby",
                "https://linkedin.com/in/gregrickaby",
                "https://profiles.wordpress.org/gregrickaby"
                "https://twitter.com/gregrickaby",
                "https://www.amazon.com/author/gregrickaby",
                "https://www.goodreads.com/gregrickaby",
                "https://www.gregrickaby.com",
                "https://www.youtube.com/c/GregRickaby",
              ]
            }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
