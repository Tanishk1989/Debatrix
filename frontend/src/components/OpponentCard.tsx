import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { cn } from '@/lib/utils'

interface OpponentCardProps {
  name: string
  description: string
  debateStyle: string
  difficulty: string
  elo: number
  debatesCompleted: number
  avatar: string
  color: string
  index?: number
}

export function OpponentCard({
  name,
  description,
  debateStyle,
  difficulty,
  elo,
  debatesCompleted,
  avatar,
  color,
  index = 0,
}: OpponentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-xl border bg-card p-6 transition-all duration-300"
      style={{ borderColor: `${color}40` }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${color}14 0%, transparent 60%)` }}
      />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex size-12 items-center justify-center rounded-lg border text-sm font-semibold"
            style={{
              borderColor: `${color}50`,
              backgroundColor: `${color}18`,
              color,
            }}
          >
            {avatar}
          </div>
          <span
            className="rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider"
            style={{
              color,
              backgroundColor: `${color}18`,
              border: `1px solid ${color}40`,
            }}
          >
            {difficulty}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight">{name}</h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="mb-4 space-y-1 text-xs text-muted-foreground">
          <p>
            <span className="text-foreground/70">Style:</span> {debateStyle}
          </p>
        </div>

        <div className="mb-5 flex items-center gap-4 text-xs">
          <div>
            <span className="text-muted-foreground">ELO </span>
            <span className="font-semibold" style={{ color }}>
              {elo}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Debates </span>
            <span className="font-medium text-foreground">
              {debatesCompleted.toLocaleString()}
            </span>
          </div>
        </div>

        <Link
          to="/signup"
          className={cn(
            'inline-flex h-10 w-full items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200',
            'hover:brightness-110',
          )}
          style={{
            borderColor: color,
            color,
            backgroundColor: `${color}10`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${color}22`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${color}10`
          }}
        >
          Debate Now
        </Link>
      </div>
    </motion.article>
  )
}
