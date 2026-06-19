import { motion } from 'framer-motion'

export function NetworkBackground() {
  const nodes = [
    { x: '8%', y: '15%' },
    { x: '18%', y: '35%' },
    { x: '5%', y: '55%' },
    { x: '22%', y: '72%' },
    { x: '88%', y: '18%' },
    { x: '78%', y: '38%' },
    { x: '92%', y: '58%' },
    { x: '75%', y: '75%' },
  ]

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-pattern opacity-60" />

      <svg className="absolute inset-0 size-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0072ff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {nodes.slice(0, 4).map((node, i) => {
          const next = nodes[(i + 1) % 4]
          return (
            <motion.line
              key={`left-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: i * 0.3, ease: 'easeOut' }}
            />
          )
        })}

        {nodes.slice(4).map((node, i) => {
          const next = nodes[4 + ((i + 1) % 4)]
          return (
            <motion.line
              key={`right-${i}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 + i * 0.3, ease: 'easeOut' }}
            />
          )
        })}

        {nodes.map((node, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="#00d2ff"
            fillOpacity="0.4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
          />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/3 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-0 top-0 size-[400px] rounded-full bg-secondary/5 blur-[100px]" />
    </div>
  )
}
