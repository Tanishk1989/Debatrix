import { useId } from 'react'

import { cn } from '@/lib/utils'

interface LogoMarkProps {
  className?: string
  size?: number
}

export function LogoMark({ className, size = 36 }: LogoMarkProps) {
  const grad = useId()
  const glow = useId()

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={grad} x1="14" y1="8" x2="34" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67E8F9" />
          <stop offset="1" stopColor="#00D2FF" />
        </linearGradient>
        <filter id={glow} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Soft plate */}
      <rect x="3" y="3" width="34" height="34" rx="9" fill="#0F1623" stroke="#1E293B" strokeWidth="0.75" />

      {/* Stance — silver stem */}
      <path
        d="M14 11 V29"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Voice A — upper arc */}
      <path
        d="M14 11 H23 L29 20"
        stroke={`url(#${grad})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glow})`}
      />

      {/* Voice B — lower arc (debate gap at apex) */}
      <path
        d="M29 20 L23 29 H14"
        stroke={`url(#${grad})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${glow})`}
      />

      {/* Apex — the exchange point */}
      <circle cx="29" cy="20" r="2" fill="#00D2FF" filter={`url(#${glow})`} />

      {/* Counter-voice whisper */}
      <circle cx="14" cy="29" r="1.5" fill="#64748B" />
    </svg>
  )
}
