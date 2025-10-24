export interface Resource {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  description: string;
  link?: string;
  type: 'documentation' | 'tutorial' | 'course' | 'tool' | 'community' | 'research';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface StudyPlan {
  id: string;
  title: string;
  duration: string;
  description: string;
  modules: StudyModule[];
}

export interface StudyModule {
  title: string;
  duration: string;
  topics: string[];
  projects: string[];
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  category: 'fullstack' | 'devops' | 'aiml';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  type: 'coding' | 'quiz' | 'project';
}

export const categories = {
  fullstack: {
    basics: ['HTML', 'CSS', 'JavaScript'],
    languages: ['JavaScript', 'Python', 'TypeScript', 'Ruby', 'Java', 'PHP'],
    frontend: ['React.js', 'Angular', 'Vue.js'],
    backend: ['Node.js', 'Django', 'Flask', 'Express.js', 'Ruby on Rails', 'Spring Boot'],
    databases: ['SQL', 'NoSQL', 'MongoDB', 'Firebase'],
    tools: ['Docker', 'Git', 'Jenkins', 'VSCode', 'Postman']
  },
  devops: {
    basics: ['Version Control', 'CI/CD', 'Infrastructure Management'],
    cicd: ['Jenkins', 'GitHub Actions', 'GitLab CI'],
    containerization: ['Docker', 'Kubernetes'],
    iac: ['Terraform', 'Ansible'],
    monitoring: ['Prometheus', 'Grafana', 'ELK Stack']
  },
  aiml: {
    basics: ['Data Types', 'Algorithms', 'Statistics', 'Probability'],
    languages: ['Python', 'R'],
    frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'],
    topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'NLP', 'Computer Vision']
  }
};

export const studyPlans: StudyPlan[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    duration: '3 months',
    description: 'Master front-end and back-end development with modern frameworks and databases',
    modules: [
      {
        title: 'Month 1: Foundations and Front-End Basics',
        duration: '4 weeks',
        topics: ['HTML Basics', 'CSS Fundamentals', 'JavaScript Basics', 'Responsive Design'],
        projects: ['Personal Portfolio', 'Weather App']
      },
      {
        title: 'Month 2: Front-End Frameworks and Back-End Basics',
        duration: '4 weeks',
        topics: ['React.js', 'Node.js', 'Express.js', 'API Development'],
        projects: ['Task Management App', 'RESTful API']
      },
      {
        title: 'Month 3: Databases and Deployment',
        duration: '4 weeks',
        topics: ['SQL Databases', 'NoSQL Databases', 'Full-Stack Integration', 'Deployment'],
        projects: ['Full-Stack Application', 'CI/CD Pipeline']
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    duration: '3 months',
    description: 'Learn containerization, CI/CD, infrastructure as code, and monitoring',
    modules: [
      {
        title: 'Month 1: Foundations and Version Control',
        duration: '4 weeks',
        topics: ['Linux Fundamentals', 'Shell Scripting', 'Git Basics', 'Collaborative Git'],
        projects: ['Linux Server Setup', 'Git Workflow']
      },
      {
        title: 'Month 2: Containerization and CI/CD',
        duration: '4 weeks',
        topics: ['Docker', 'Docker Compose', 'Jenkins', 'GitHub Actions', 'GitLab CI'],
        projects: ['Containerized Application', 'CI/CD Pipeline']
      },
      {
        title: 'Month 3: Infrastructure as Code and Kubernetes',
        duration: '4 weeks',
        topics: ['Terraform', 'Ansible', 'Kubernetes', 'Monitoring', 'Logging'],
        projects: ['Infrastructure Provisioning', 'Kubernetes Deployment']
      }
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML',
    duration: '3 months',
    description: 'Master machine learning algorithms, deep learning, and AI applications',
    modules: [
      {
        title: 'Month 1: Foundations',
        duration: '4 weeks',
        topics: ['Python for Data Science', 'Statistics', 'Linear Algebra', 'Calculus'],
        projects: ['Data Analysis Project', 'Statistical Analysis']
      },
      {
        title: 'Month 2: Machine Learning Fundamentals',
        duration: '4 weeks',
        topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Deployment'],
        projects: ['Classification Model', 'Clustering Project']
      },
      {
        title: 'Month 3: Deep Learning and Advanced Topics',
        duration: '4 weeks',
        topics: ['Neural Networks', 'TensorFlow/PyTorch', 'CNNs', 'RNNs', 'Transformers'],
        projects: ['Image Classification', 'NLP Project']
      }
    ]
  }
];

export const challenges: Challenge[] = [
  {
    id: 'responsive-nav',
    title: 'Build a Responsive Navigation Bar',
    description: 'Create a responsive navigation bar that collapses into a hamburger menu on mobile devices. Use HTML, CSS, and JavaScript to implement this common UI pattern.',
    category: 'fullstack',
    difficulty: 'beginner',
    points: 50,
    type: 'coding'
  },
  {
    id: 'responsive-layout',
    title: 'Create a Responsive Layout',
    description: 'Build a responsive webpage layout using CSS Grid and Flexbox that adapts to different screen sizes.',
    category: 'fullstack',
    difficulty: 'beginner',
    points: 30,
    type: 'coding'
  },
  {
    id: 'docker-quiz',
    title: 'Docker Concepts Quiz',
    description: 'Test your knowledge of Docker concepts, container orchestration, and best practices.',
    category: 'devops',
    difficulty: 'intermediate',
    points: 40,
    type: 'quiz'
  },
  {
    id: 'image-classification',
    title: 'Image Classification Model',
    description: 'Build and train an image classification model using TensorFlow or PyTorch on a provided dataset.',
    category: 'aiml',
    difficulty: 'advanced',
    points: 100,
    type: 'project'
  },
  {
    id: 'todo-app',
    title: 'Todo List Application',
    description: 'Create a full-stack todo list application with React frontend and Node.js backend.',
    category: 'fullstack',
    difficulty: 'intermediate',
    points: 75,
    type: 'project'
  },
  {
    id: 'cicd-pipeline',
    title: 'CI/CD Pipeline Setup',
    description: 'Set up a complete CI/CD pipeline using GitHub Actions for a web application.',
    category: 'devops',
    difficulty: 'advanced',
    points: 80,
    type: 'coding'
  },
  {
    id: 'ml-basics',
    title: 'Machine Learning Basics',
    description: 'Test your knowledge of fundamental machine learning concepts and algorithms.',
    category: 'aiml',
    difficulty: 'beginner',
    points: 25,
    type: 'quiz'
  }
];

export const progressData = {
  fullstack: 20,
  devops: 10,
  aiml: 10
};

export const userProfile = {
  name: 'John Doe',
  title: 'Full-Stack Developer in Training',
  streak: 15,
  points: 750,
  badges: 12,
  completedChallenges: 24,
  hoursSpent: 87,
  topicsMastered: 8
};

