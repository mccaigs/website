import { EducationalModel } from '@/types';

export const educationalModels: EducationalModel[] = [
  {
    id: 'ai-tutor-pro',
    name: 'AI Tutor Pro',
    description: 'Personalised AI tutoring system that adapts to each student\'s learning style and pace.',
    category: 'AI Tutoring',
    features: [
      'Adaptive learning algorithms',
      'Real-time progress tracking',
      'Multi-subject support',
      'Instant feedback system',
      'Performance analytics dashboard'
    ],
    institutions: ['University of Edinburgh', 'Glasgow College', 'St. Andrews Academy'],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg'
  },
  {
    id: 'smart-lms',
    name: 'Smart LMS Edinburgh',
    description: 'Comprehensive Learning Management System with AI-powered insights and automation.',
    category: 'LMS',
    features: [
      'AI-powered content recommendations',
      'Automated grading system',
      'Student engagement analytics',
      'Mobile-responsive interface',
      'Integration with existing tools'
    ],
    institutions: ['Heriot-Watt University', 'Edinburgh Academy', 'Napier College'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    id: 'assessment-ai',
    name: 'Assessment AI Suite',
    description: 'Advanced AI-driven assessment tools for comprehensive student evaluation.',
    category: 'Assessment',
    features: [
      'Automated essay scoring',
      'Plagiarism detection',
      'Adaptive testing',
      'Real-time proctoring',
      'Detailed analytics reports'
    ],
    institutions: ['Royal High School', 'Edinburgh Business School', 'Leith Academy'],
    image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg'
  },
  {
    id: 'student-analytics',
    name: 'Student Analytics Pro',
    description: 'Comprehensive analytics platform for tracking student performance and institutional insights.',
    category: 'Analytics',
    features: [
      'Predictive performance modelling',
      'Early intervention alerts',
      'Institutional benchmarking',
      'Custom report generation',
      'Data visualisation tools'
    ],
    institutions: ['Queen Margaret University', 'James Gillespie\'s High', 'Stevenson College'],
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg'
  }
];