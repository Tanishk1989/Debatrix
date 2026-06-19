import { Link } from 'react-router-dom'

import { LogoMark } from '@/components/LogoMark'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'hero' | 'nav' | 'footer'
  to?: string
}

function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('select-none font-bold tracking-[-0.02em] text-white', className)}>
      Debati
      <span className="text-primary">x</span>
    </span>
  )
}

const config = {
  nav: { mark: 32, gap: 'gap-2.5', text: 'text-xl' },
  footer: { mark: 30, gap: 'gap-2.5', text: 'text-lg' },
  hero: { mark: 52, gap: 'gap-3.5', text: 'text-4xl sm:text-5xl md:text-[3.25rem]' },
} as const

export function Logo({ className, variant = 'nav', to = '/' }: LogoProps) {
  const { mark, gap, text } = config[variant]

  const content = (
    <div className={cn('inline-flex items-center', gap, className)}>
      <LogoMark size={mark} />
      <Wordmark className={cn(text, 'leading-none')} />
    </div>
  )

  if (to) {
    return (
      <Link
        to={to}
        className="inline-flex border-0 outline-none ring-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-0"
      >
        {content}
      </Link>
    )
  }

  return content
}
