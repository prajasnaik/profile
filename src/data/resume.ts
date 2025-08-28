import { ResumeData } from '@/types/resume';

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Software Developer',
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, State',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    website: 'https://yourwebsite.com',
  },
  summary:
    'Passionate software developer with expertise in modern web technologies. Experienced in building scalable applications using React, Next.js, and TypeScript. Strong problem-solving skills and a commitment to writing clean, maintainable code.',
  skills: [
    { name: 'TypeScript', category: 'languages', level: 'advanced' },
    { name: 'JavaScript', category: 'languages', level: 'expert' },
    { name: 'Python', category: 'languages', level: 'intermediate' },
    { name: 'React', category: 'frontend', level: 'advanced' },
    { name: 'Next.js', category: 'frontend', level: 'advanced' },
    { name: 'Tailwind CSS', category: 'frontend', level: 'intermediate' },
    { name: 'Node.js', category: 'backend', level: 'intermediate' },
    { name: 'Express.js', category: 'backend', level: 'intermediate' },
    { name: 'PostgreSQL', category: 'database', level: 'intermediate' },
    { name: 'MongoDB', category: 'database', level: 'intermediate' },
    { name: 'Git', category: 'tools', level: 'advanced' },
    { name: 'Docker', category: 'tools', level: 'beginner' },
  ],
  projects: [
    {
      id: '1',
      title: 'Personal Portfolio Website',
      description:
        'A responsive portfolio website built with Next.js, TypeScript, and shadcn/ui. Features multiple viewing modes including professional and terminal interfaces.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://yourportfolio.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Task Management App',
      description:
        'A full-stack task management application with real-time updates, user authentication, and collaborative features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      featured: true,
    },
    {
      id: '3',
      title: 'Weather Dashboard',
      description:
        'A weather dashboard that displays current conditions and forecasts using third-party APIs with a clean, responsive design.',
      technologies: ['JavaScript', 'CSS3', 'Weather API'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://your-weather-app.com',
      featured: false,
    },
  ],
  experience: [
    {
      id: '1',
      company: 'Tech Company Inc.',
      position: 'Software Developer',
      startDate: '2023-01',
      description: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Implemented responsive designs and improved application performance by 30%',
        'Participated in code reviews and mentored junior developers',
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      id: '2',
      company: 'Startup Solutions',
      position: 'Frontend Developer Intern',
      startDate: '2022-06',
      endDate: '2022-12',
      description: [
        'Built user interfaces for web applications using React and CSS',
        'Worked closely with designers to implement pixel-perfect designs',
        'Optimized application performance and improved user experience',
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Git'],
    },
  ],
  education: [
    {
      id: '1',
      institution: 'University Name',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2020-09',
      endDate: '2024-05',
      gpa: '3.8',
    },
  ],
};
