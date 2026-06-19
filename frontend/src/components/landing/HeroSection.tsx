import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { AnimatedStat } from '@/components/landing/AnimatedStat'
import { NetworkBackground } from '@/components/landing/NetworkBackground'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <NetworkBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8 flex justify-center"
        >
          <Logo variant="hero" to="" />
        </motion.div>

        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <Sparkles className="size-3.5 text-primary" />
          AI-Powered Debate Platform
        </motion.div>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-6xl lg:text-7xl"
        >
          Debate Anyone.{' '}
          <span className="text-gradient">Sharpen Your Mind.</span>
        </motion.h1>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg"
        >
          Challenge AI opponents, historical personalities, and improve your
          thinking with real-time scoring on logic, evidence, clarity, and
          persuasion.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <Link to="/signup">
              Start Debating
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
            <a href="#opponents">Explore Opponents</a>
          </Button>
        </motion.div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-12 grid grid-cols-1 gap-6 border-t border-border/50 pt-10 sm:mt-16 sm:grid-cols-3 sm:gap-8"
        >
          <AnimatedStat end={50} suffix="K+" label="Debates completed" />
          <AnimatedStat end={12} label="Historical opponents" />
          <AnimatedStat end={5} label="Scoring dimensions" />
        </motion.div>
      </div>
    </section>
  )
}
