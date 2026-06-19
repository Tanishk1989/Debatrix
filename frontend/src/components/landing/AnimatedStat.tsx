import { useCountUp, useIntersectionObserver } from '@/hooks/useCountUp'

interface AnimatedStatProps {
  end: number
  suffix?: string
  label: string
}

export function AnimatedStat({ end, suffix = '', label }: AnimatedStatProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.4 })
  const count = useCountUp({ end, isActive: isVisible, duration: 2000 })

  return (
    <div ref={ref}>
      <p className="text-xl font-semibold text-foreground sm:text-2xl md:text-3xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-muted-foreground md:text-sm">{label}</p>
    </div>
  )
}
