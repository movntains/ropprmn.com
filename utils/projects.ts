import { Role } from '@/enums/Role'
import type { Project } from '@/types/Project'

const projects: Project[] = [
  {
    title: 'Workify',
    bgColor: '#5B0ED6',
    role: Role.FULLSTACK,
    link: 'https://workify.co',
    logo: '/projects/workify.svg',
    highlights:
      '4 different user modes, multiple Stripe integrations, handling of custom domains and subdomains, and a bespoke real-time chat interface.',
    techStack: [
      'Vue',
      'Nuxt.js',
      'Tailwind',
      'Laravel',
      'Laravel Nova',
      'PostgreSQL',
      'Stripe',
      'Vercel',
      'WebSockets',
    ],
  },
  {
    title: 'Garbanzo',
    bgColor: '#516DDD',
    role: Role.FULLSTACK,
    link: 'https://garbanzo.io',
    logo: '/projects/garbanzo.svg',
    highlights:
      'Real-time notifications, a fully custom and accessible learning interface, a content CMS for lessons, and Algolia integration.',
    techStack: [
      'Vue',
      'Nuxt.js',
      'Tailwind',
      'Laravel',
      'Laravel Nova',
      'PostgreSQL',
      'Stripe',
      'Algolia',
      'WebSockets',
    ],
  },
  {
    bgColor: '#215380',
    role: Role.FULLSTACK,
    logo: '/projects/hafa.svg',
    link: 'https://heritageaction.com',
    title: 'Heritage Action for America',
    highlights:
      'Vue 3 integration with Craft CMS on the public-facing site and a private admin site for importing and organizing data retrieved from the ProPublica API.',
    techStack: ['Vue', 'Tailwind', 'Laravel', 'MySQL', 'Algolia'],
  },
  {
    title: 'HireRight',
    bgColor: '#FAFCFF',
    role: Role.FULLSTACK,
    logo: '/projects/hire-right.svg',
    link: 'https://www.hireright.com',
    highlights:
      'Content retrieval from Contentful, Netlify serverless functions, Algolia integration, and custom CLI commands.',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Algolia', 'Contentful', 'Netlify'],
  },
  {
    bgColor: '#FAFCFF',
    role: Role.FRONTEND,
    title: 'Relias Media',
    logo: '/projects/relias.png',
    link: 'https://www.reliasmedia.com',
    highlights: `Vue 3 integration with Craft CMS and ecommerce functionality provided via Magento's GraphQL API.`,
    techStack: ['Vue', 'TypeScript', 'Magento', 'GraphQL'],
  },
  {
    bgColor: '#656565',
    role: Role.ACCESSIBILITY,
    logo: '/projects/ad-council.svg',
    link: 'https://getvaccineanswers.org',
    title: 'Ad Council COVID Collaborative',
    highlights:
      'Performed manual and automated accessibility audits and helped other engineers to implement solutions to ensure a fully accessible experience.',
  },
]

export { projects }
