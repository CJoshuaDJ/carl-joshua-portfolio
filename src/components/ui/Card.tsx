import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  className?: string
  as?: 'article' | 'div' | 'li'
}

export function Card({ children, className = '', as: Tag = 'div' }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-edge bg-surface-850/80 p-6 transition-colors duration-200 hover:border-edge-strong hover:bg-surface-800/90 ${className}`}
    >
      {children}
    </Tag>
  )
}
