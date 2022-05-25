import Layout from '@/components/templates/Layout/Layout'
import config from '@/lib/config'

/**
 * Render the Homepage page.
 *
 * @author Greg Rickaby
 * @return {Element} The Homepage component.
 */
export default function Homepage() {
  return (
    <Layout
      title={`${config?.siteName} - Personal Blog`}
      description={config?.ogDescription}
      openGraph={{
        title: `${config?.siteName} - Personal Blog`
      }}
    >
      <article>
        <h2>About</h2>
        <p>
          Hey there! I&apos;m Greg, a published author, photographer, and an
          owner of a{' '}
          <a href="https://www.packers.com/">professional sports team</a>.
          Welcome to my personal blog where I share my thoughts on web
          development, photography, and I like to throw in some personal stuff
          here and there.
        </p>

        <h3>Web Development</h3>
        <p>
          I&apos;m a WordPress Technical Lead at{' '}
          <a href="https://americaneagle.com/">AmericanEagle.com,</a> an
          industry leader in web design, development, hosting, and digital
          marketing with a passionate belief in the power of technology to
          positively transform business practices. I lead a team of engineers as
          we partner with clients to rebuild their frontends with WordPress and
          Next.js.
        </p>
        <p>
          Learn more about my professional history on{' '}
          <a href="https://www.linkedin.com/in/gregrickaby/">LinkedIn</a>.
        </p>

        <h3>Photography</h3>
        <p>
          In 2018, I started to take a deep interest in photography. I bought a
          mirrorless camera and spent months of taking online courses, reading
          books, practicing, and having my work critiqued by peers. What has
          started as an enjoyable hobby, has turned into a passionate way to
          express my creativity and exhaust my bank account!
        </p>
        <p>
          Check out <a href="https://gregrickaby.com">my portfolio</a> to see my
          photos.
        </p>

        <h3>Books</h3>
        <p>
          I contract with <em>For Dummies</em> and <em>WROX</em> brands to write
          and edit technical books. I wrote a children&apos;s book in 2017
          titled{' '}
          <a href="https://amzn.to/34QAxAQ" rel="nofollow">
            <em>Creating a Website for Dummies Jr</em>
          </a>
          . It guides the reader through the website planning and development
          process. My book has been translated into other languages, and
          currently has a near 5-star rating on Amazon.
        </p>

        <p>I also served as the Technical Editor for three other books:</p>
        <ul>
          <li>
            <a href="https://amzn.to/37XCflU" rel="nofollow">
              <em>WordPress for Dummies</em>
            </a>{' '}
            (Sabin-Wilson, 2021)
          </li>
          <li>
            <a href="https://amzn.to/2BgCg7i" rel="nofollow">
              <em>Professional WordPress Plugin Development</em>
            </a>{' '}
            (Williams et al., 2020)
          </li>
          <li>
            <a href="https://amzn.to/37MMDLp" rel="nofollow">
              <em>WordPress All-In-One For Dummies</em>
            </a>{' '}
            (Sabin-Wilson, 2019)
          </li>
        </ul>

        <h3>Contributions</h3>
        <p>
          I&apos;ve been part of the WordPress community since 2008. I&apos;ve
          made contributions to core, documentation, plugins, and themes.
          I&apos;ve also spoken at WordCamps and meet-ups. I&apos;m also a
          contributor to other open-source projects like Next.js, Storybook, and
          Gatsby.
        </p>
        <p>
          Outside of tech, I volunteer my time and efforts at local community
          organizations. The Boy Scouts, Wiregrass Church, and the Enterprise
          High School Band Boosters to name a few.
        </p>
        <p>
          You can find me around the web with the links below. Stay safe out
          there, and thanks for reading!
          <span role="img" aria-label="cheers">
            🍻
          </span>
        </p>
      </article>
    </Layout>
  )
}
