import { Section, SectionHeader } from '@/components/landing/Section'
import { OpponentCard } from '@/components/OpponentCard'
import { personalities } from '@/data/mockLanding'

export function OpponentsSection() {
  return (
    <Section id="opponents" className="bg-card/30">
      <SectionHeader
        label="Historical Opponents"
        title="Debate the greatest minds in history"
        description="Each personality brings a unique debate style, difficulty level, and strategic approach."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {personalities.map((person, index) => (
          <OpponentCard key={person.id} {...person} index={index} />
        ))}
      </div>
    </Section>
  )
}
