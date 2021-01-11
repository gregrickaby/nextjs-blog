import config from '@/functions/config'
import Head from 'next/head'

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
      <meta name="msapplication-TileColor" content="#fffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta
        name="google-site-verification"
        content={process.env.GOOGLE_SITE_VERIFICATION}
      />
      <meta name="theme-color" content="#fff" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
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
