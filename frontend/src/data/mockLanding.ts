export const features = [
  {
    id: 'ai-opponents',
    title: 'AI Opponents',
    description:
      'Face adaptive AI debaters that challenge your reasoning and push your arguments further.',
    icon: 'Brain',
  },
  {
    id: 'historical',
    title: 'Historical Personalities',
    description:
      'Debate legends like Socrates, Churchill, and Steve Jobs — each with unique styles and strategies.',
    icon: 'Users',
  },
  {
    id: 'scoring',
    title: 'Performance Scoring',
    description:
      'Get scored on logic, evidence, clarity, persuasion, and confidence after every round.',
    icon: 'BarChart3',
  },
  {
    id: 'voice',
    title: 'Voice Debates',
    description:
      'Practice real-time persuasion with voice-enabled debates that feel like the real thing.',
    icon: 'Mic',
  },
  {
    id: 'modes',
    title: 'Multiple Modes',
    description:
      'Classic, Devil\'s Advocate, and Historical modes to train different debate muscles.',
    icon: 'Layers',
  },
  {
    id: 'analytics',
    title: 'Progress Analytics',
    description:
      'Track your growth over time with detailed analytics and personalized AI feedback.',
    icon: 'TrendingUp',
  },
] as const

export const personalities = [
  {
    id: 'steve-jobs',
    name: 'Steve Jobs',
    description: 'Visionary product thinker with relentless focus on simplicity and design.',
    debateStyle: 'Passionate, direct, visionary',
    difficulty: 'Hard',
    elo: 1847,
    debatesCompleted: 12400,
    avatar: 'SJ',
    color: '#3B82F6',
  },
  {
    id: 'socrates',
    name: 'Socrates',
    description: 'Master of the Socratic method — questions everything to expose truth.',
    debateStyle: 'Questioning, philosophical',
    difficulty: 'Expert',
    elo: 1923,
    debatesCompleted: 18700,
    avatar: 'SO',
    color: '#8B5CF6',
  },
  {
    id: 'churchill',
    name: 'Winston Churchill',
    description: 'Oratorical powerhouse with unmatched rhetorical force and wit.',
    debateStyle: 'Rhetorical, commanding',
    difficulty: 'Hard',
    elo: 1865,
    debatesCompleted: 15200,
    avatar: 'WC',
    color: '#F59E0B',
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    description: 'Thought experiments and logical precision from the genius physicist.',
    debateStyle: 'Analytical, thought-provoking',
    difficulty: 'Expert',
    elo: 1901,
    debatesCompleted: 14100,
    avatar: 'AE',
    color: '#10B981',
  },
  {
    id: 'napoleon',
    name: 'Napoleon Bonaparte',
    description: 'Strategic mind with bold assertions and tactical argumentation.',
    debateStyle: 'Strategic, assertive',
    difficulty: 'Hard',
    elo: 1832,
    debatesCompleted: 9800,
    avatar: 'NB',
    color: '#EF4444',
  },
  {
    id: 'gandhi',
    name: 'Mahatma Gandhi',
    description: 'Moral clarity and nonviolent persuasion that disarms opponents.',
    debateStyle: 'Moral, principled',
    difficulty: 'Medium',
    elo: 1756,
    debatesCompleted: 11300,
    avatar: 'MG',
    color: '#F97316',
  },
] as const

export const howItWorks = [
  {
    step: 1,
    title: 'Choose Your Opponent',
    description: 'Pick an AI debater or historical personality matched to your skill level.',
  },
  {
    step: 2,
    title: 'Debate in Real Time',
    description: 'Argue your case with streaming responses, voice support, and round tracking.',
  },
  {
    step: 3,
    title: 'Get Scored & Improve',
    description: 'Receive detailed scores, strengths, weaknesses, and AI coaching feedback.',
  },
] as const

export const testimonials = [
  {
    id: 1,
    quote:
      'Debatrix transformed how I prepare for moot court. The historical opponents feel eerily authentic.',
    author: 'Sarah Chen',
    role: 'Law Student, Stanford',
    initials: 'SC',
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #2563eb)',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The scoring breakdown on logic and evidence helped me identify blind spots I never knew I had.',
    author: 'Marcus Williams',
    role: 'Policy Analyst',
    initials: 'MW',
    avatarGradient: 'linear-gradient(135deg, #8b5cf6, #9333ea)',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Debating Socrates at 2am is my new obsession. This is the future of critical thinking practice.',
    author: 'Priya Sharma',
    role: 'Philosophy Major, Oxford',
    initials: 'PS',
    avatarGradient: 'linear-gradient(135deg, #10b981, #0d9488)',
    rating: 5,
  },
] as const

export const pricingPlans = [
  {
    id: 'free',
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying Debatrix',
    features: ['3 debates per week', 'AI opponents', 'Basic scoring', 'Text debates'],
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    period: '/month',
    description: 'For serious debaters',
    features: [
      'Unlimited debates',
      'All historical opponents',
      'Voice debates',
      'Full analytics',
      'Priority AI responses',
    ],
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$49',
    period: '/month',
    description: 'For schools and organizations',
    features: [
      'Everything in Pro',
      'Team dashboard',
      'Custom opponents',
      'Admin controls',
      'API access',
    ],
    highlighted: false,
  },
] as const

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Opponents', href: '#opponents' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
] as const
