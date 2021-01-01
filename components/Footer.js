import config from '@/functions/config'

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono grid gap-y-4">
      <div className="border-t-2"></div>
      <div className="flex justify-center space-x-4">
        {config.socialNetworks?.length &&
          config?.socialNetworks.map((network) => {
            return (
              <a key={network?.label} href={network?.url} rel="noopener">
                <img
                  alt={`Follow ${config?.siteAuthor} on ${network?.label}`}
                  height={network?.height}
                  loading="lazy"
                  src={network?.shield}
                  width={network?.width}
                />
              </a>
            )
          })}
      </div>
      <small>&copy; 2007-{new Date().getFullYear()} </small>
    </footer>
  )
}
