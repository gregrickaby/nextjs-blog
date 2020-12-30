import config from '@/functions/config'

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono space-y-2 pt-4 border-t-2">
      <div className="flex justify-center space-x-4">
        {!config?.length &&
          config.socialNetworks.map((network) => {
            return (
              <a key={network?.label} href={network?.url}>
                <img
                  src={network?.shield}
                  alt={`Follow ${config?.author} on ${network?.label}`}
                />
              </a>
            )
          })}
      </div>
      <p>
        &copy; 2007-{new Date().getFullYear()}{' '}
        <a href={config.authorUrl} rel="noopener">
          {config.siteAuthor}
        </a>
      </p>
    </footer>
  )
}
