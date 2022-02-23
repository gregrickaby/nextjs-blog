import config from '@/lib/config'
import {getAllPosts} from '@/lib/posts'
import dayjs from 'dayjs'
import fs from 'fs'

/**
 * Create and write rss.xml.
 *
 * @author Greg Rickaby
 */
export async function generateRssFeed() {
  const posts = getAllPosts(config.postsDirectory)

  const feed = `
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
      <channel>
        <title>${config?.siteName}</title>
        <description>${config?.siteDescription}</description>
        <link>${config?.siteUrl}/rss.xml</link>
        <atom:link href="${
          config?.siteUrl
        }/rss.xml" rel="self" type="application/rss+xml" />
        <language>en-us</language>
        <lastBuildDate>${dayjs(posts[0]?.date).format(
          'ddd, DD MMM YYYY HH:mm:ss ZZ'
        )}</lastBuildDate>
        <managingEditor>${config?.authorEmail} (${
    config?.siteAuthor
  })</managingEditor>
        <webMaster>${config?.authorEmail} (${config?.siteAuthor})</webMaster>
        <generator>https://nextjs.org/</generator>
        <image>
          <url>${config?.siteUrl}${config?.ogImage}</url>
          <title>${config?.siteName}</title>
          <link>${config?.siteUrl}</link>
          <width>144</width>
          <height>144</height>
        </image>
        ${posts.map((post) => {
          return `
        <item>
          <title>${post?.data?.title}</title>
          <description>${post?.data?.excerpt}</description>
          <link>${config?.siteUrl}/article/${post?.data?.slug}</link>
          <pubDate>${dayjs(post?.data?.date).format(
            'ddd, DD MMM YYYY HH:mm:ss ZZ'
          )}</pubDate>
        </item>`
        })}
      </channel>
    </rss>
  `

  fs.writeFileSync('./public/rss.xml', feed)
}
