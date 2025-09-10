import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'university-edinburgh',
    institution: 'University of Edinburgh',
    type: 'University',
    location: 'Edinburgh, Scotland',
    challenge: 'Needed to improve student engagement and provide personalised learning experiences across 35,000 students.',
    solution: 'Implemented McCaigs AI Tutor Pro and Smart LMS Edinburgh with customized dashboards for faculty.',
    results: [
      '40% increase in student engagement scores',
      '25% improvement in course completion rates',
      '60% reduction in administrative workload for faculty',
      'Zero ongoing subscription costs after initial purchase'
    ],
    testimonial: 'McCaigs AI has transformed how we deliver education. The lifetime updates mean we\'re always current with the latest AI advances without additional costs.',
    contactName: 'Dr. Sarah Mitchell, Director of Digital Learning'
  },
  {
    id: 'glasgow-college',
    institution: 'Glasgow College',
    type: 'Training Center',
    location: 'Glasgow, Scotland',
    challenge: 'Required scalable assessment tools for vocational training programmes with varying skill levels.',
    solution: 'Deployed Assessment AI Suite with adaptive testing capabilities tailored for technical subjects.',
    results: [
      '50% reduction in assessment time',
      '90% accuracy in skill level identification',
      '35% increase in student satisfaction',
      'Complete ownership with no recurring fees'
    ],
    testimonial: 'The buy-once model was perfect for our budget constraints. Three years later, we\'re still receiving valuable updates.',
    contactName: 'James Robertson, Head of Assessment'
  },
  {
    id: 'royal-high-school',
    institution: 'Royal High School Edinburgh',
    type: 'School',
    location: 'Edinburgh, Scotland',
    challenge: 'Needed comprehensive analytics to track student progress and identify at-risk students early.',
    solution: 'Integrated Student Analytics Pro with existing systems to provide real-time insights to teachers.',
    results: [
      '45% early identification of at-risk students',
      '30% improvement in intervention success rates',
      '20% increase in overall academic performance',
      'Significant long-term savings vs. subscription models'
    ],
    testimonial: 'McCaigs AI\'s Edinburgh roots mean they truly understand Scottish education. Their lifetime support is exceptional.',
    contactName: 'Fiona MacLeod, Deputy Head Teacher'
  }
];