import { motion } from 'framer-motion'

import { Section, SectionHeader } from '@/components/landing/Section'
import { howItWorks } from '@/data/mockLanding'

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <SectionHeader
        label="How it Works"
        title="Three steps to sharper thinking"
        description="From choosing your opponent to getting detailed feedback — Debatrix makes practice effortless."
      />

      <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

        {howItWorks.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-6 flex size-12 items-center justify-center rounded-full border border-primary/30 bg-card text-sm font-semibold text-primary glow-primary-sm">
              {item.step}
            </div>
            <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
