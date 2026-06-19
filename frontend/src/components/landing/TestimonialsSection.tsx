import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

import { Section, SectionHeader } from '@/components/landing/Section'
import { testimonials } from '@/data/mockLanding'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-card/30">
      <SectionHeader
        label="Testimonials"
        title="Trusted by debaters worldwide"
        description="Students, professionals, and thinkers use Debatrix to level up their argumentation."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.blockquote
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={cn(
              'group flex flex-col rounded-xl border border-border bg-card p-6',
              'transition-all duration-300 hover:border-primary/25 hover:shadow-[0_8px_30px_rgba(0,210,255,0.08)]',
            )}
          >
            <Quote className="mb-4 size-5 text-primary/50 transition-colors group-hover:text-primary/80" />

            <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground/90">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="mb-4 flex items-center gap-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-primary text-primary" />
              ))}
            </div>

            <footer className="flex items-center gap-3 border-t border-border/50 pt-4">
              <div
                className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white shadow-lg"
                style={{ background: item.avatarGradient }}
              >
                {item.initials}
              </div>
              <div>
                <p className="text-sm font-medium">{item.author}</p>
                <p className="text-xs text-muted-foreground">{item.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}
