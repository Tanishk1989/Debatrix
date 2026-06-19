import { motion } from 'framer-motion'
import {
  BarChart3,
  Brain,
  Layers,
  Mic,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/Section'
import { features } from '@/data/mockLanding'

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Users,
  BarChart3,
  Mic,
  Layers,
  TrendingUp,
}

export function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeader
        label="Features"
        title="Everything you need to debate better"
        description="Train against AI and history's greatest minds with tools built for serious thinkers."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon]
          return (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg border border-border bg-muted transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                <Icon className="size-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
