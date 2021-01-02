import config from '@/functions/config'

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono grid gap-y-3">
      <hr />
      <div className="flex justify-center space-x-4">
        {config.socialNetworks?.length &&
          config?.socialNetworks.map((network) => {
            return (
              <a
                className="shadow-none no-underline"
                key={network?.label}
                href={network?.url}
              >
                <img
                  alt={`Follow ${config?.siteAuthor} on ${network?.label}`}
                  className="m-0"
                  height={network?.height}
                  loading="lazy"
                  src={network?.shield}
                  width={network?.width}
                />
              </a>
            )
          })}
      </div>
      <small>
        &copy; 2007-{new Date().getFullYear()} &middot; Powered by{' '}
        <a href="https://nextjs.org">Next.js</a>
      </small>
    </footer>
  )
}
