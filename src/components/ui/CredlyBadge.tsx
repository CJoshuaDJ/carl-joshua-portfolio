import { useEffect, useRef } from 'react'

type CredlyBadgeProps = {
  badgeId: string
  width?: number
  height?: number
  className?: string
}

const SCRIPT_SRC = 'https://cdn.credly.com/assets/utilities/embed.js'

let scriptLoadToken = 0

function reloadCredlyScript() {
  const token = ++scriptLoadToken

  window.setTimeout(() => {
    if (token !== scriptLoadToken) return

    document
      .querySelectorAll(`script[src="${SCRIPT_SRC}"]`)
      .forEach((node) => node.remove())

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, 50)
}

export function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
  className = '',
}: CredlyBadgeProps) {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    host.innerHTML = ''

    const badge = document.createElement('div')
    badge.setAttribute('data-iframe-width', String(width))
    badge.setAttribute('data-iframe-height', String(height))
    badge.setAttribute('data-share-badge-id', badgeId)
    badge.setAttribute('data-share-badge-host', 'https://www.credly.com')
    host.appendChild(badge)

    reloadCredlyScript()
  }, [badgeId, width, height])

  return (
    <div
      ref={hostRef}
      className={`flex min-h-[270px] items-center justify-center ${className}`}
      aria-label="Credly certification badge"
    />
  )
}
