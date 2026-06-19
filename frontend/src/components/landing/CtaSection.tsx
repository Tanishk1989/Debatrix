import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-24">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-3xl rounded-2xl border border-border bg-card/80 p-10 text-center backdrop-blur-sm md:p-16"
      >
        <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to sharpen your mind?
        </h2>
        <p className="mb-8 text-muted-foreground">
          Join thousands of debaters practicing persuasion against AI and history&apos;s
          greatest minds.
        </p>
        <Button size="lg" asChild>
          <Link to="/signup">
            Start Debating Free
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}
