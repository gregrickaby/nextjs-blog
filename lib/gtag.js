export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url) {
  return window.gtag('config', GA_TRACKING_ID, {
    page_path: url
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({action, category, label, value}) {
  return window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
