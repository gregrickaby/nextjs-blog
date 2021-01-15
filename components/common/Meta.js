import config from '@/functions/config'
import Head from 'next/head'

/**
 * Render extra meta tags in the document head.
 *
 * @author Greg Rickaby
 * @return {Element} The Meta component.
 */
export default function Meta() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0 user-scalable=no"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
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
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon/icon.png" />
      <link rel="icon" href="/favicon/icon.png" sizes="192x192" />
      <meta name="msapplication-TileImage" content="/favicon/icon.png" />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `
        }}
      />
    </Head>
  )
}
