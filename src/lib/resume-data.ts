import { ResumeData } from './types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Your Name',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country',
    website: 'https://yourwebsite.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
  },

  background: {
    introduction:
      'I am a passionate software developer with expertise in modern web technologies. I love creating efficient, scalable solutions and learning new technologies to solve complex problems.',
    summary:
      'Experienced software developer with a strong background in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering high-quality applications and leading development teams.',
  },

  skills: [
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
    },
    {
      category: 'Frontend Technologies',
      items: ['React', 'Next.js', 'Vue.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      category: 'Backend Technologies',
      items: [
        'Node.js',
        'Express',
        'Django',
        'Spring Boot',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'AWS', 'Firebase', 'Webpack', 'Jest'],
    },
  ],

  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Stripe API'],
      period: '2024',
      link: 'https://example-ecommerce.com',
      github: 'https://github.com/yourusername/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration features, and advanced filtering options.',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io'],
      period: '2023',
      github: 'https://github.com/yourusername/task-manager',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities using external APIs.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
      period: '2023',
      link: 'https://weather-dashboard-demo.com',
    },
  ],
};
