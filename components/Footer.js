import config from '@/functions/config'

export default function Footer() {
  return (
    <footer className="text-center text-xs font-mono py-4 border-t-2">
      <div className="flex justify-center space-x-4 mb-2">
        {!config?.length &&
          config.socialNetworks.map((network) => {
            return (
              <a key={network?.label} href={network?.url} rel="noopener">
                <img
                  alt={`Follow ${config?.author} on ${network?.label}`}
                  height={config?.height}
                  loading="lazy"
                  src={network?.shield}
                  width={config?.width}
                />
              </a>
            )
          })}
      </div>
      <small>&copy; 2007-{new Date().getFullYear()} </small>
    </footer>
  )
}
