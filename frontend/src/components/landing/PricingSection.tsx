import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Section, SectionHeader } from '@/components/landing/Section'
import { Button } from '@/components/ui/button'
import { pricingPlans } from '@/data/mockLanding'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <Section id="pricing">
      <SectionHeader
        label="Pricing"
        title="Choose your plan"
        description="Start free and upgrade when you're ready to unlock the full Debatrix experience."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cn(
              'relative flex flex-col rounded-xl border p-6',
              plan.highlighted
                ? 'border-primary/50 bg-card glow-primary-sm'
                : 'border-border bg-card',
            )}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                Most Popular
              </span>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? 'default' : 'outline'}
              className="w-full"
              asChild
            >
              <Link to="/signup">
                {plan.id === 'free' ? 'Get Started' : 'Start Free Trial'}
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
