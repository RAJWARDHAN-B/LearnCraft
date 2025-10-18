// Centralized course data for Learncraft
import dataScience from '../assets/data-science.jpg';
import digitalMarketing from '../assets/digital-marketing.jpg';
import civilEngineering from '../assets/civil-engineering.jpg';

const IMAGE_MAP = {
  'data-science': dataScience,
  'digital-marketing': digitalMarketing,
  'civil-engineering': civilEngineering,
  'programming': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=60',
  'finance': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=60',
  'design': 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=60',
};

const courses = [
  // Data Science Courses
  {
    id: 1,
    title: 'Data Science Fundamentals',
    author: 'freeCodeCamp',
    rating: 4.4,
    reviews: 1240,
    price: 20,
    classes: 12,
    students: 150,
    image: IMAGE_MAP['data-science'],
    bestSeller: true,
    category: 'data-science',
    content: {
      sections: [
        {
          title: 'Introduction to Data Science',
          videoUrl: 'https://www.youtube.com/watch?v=ua-CiDNNj30',
          duration: '2:30:00',
          description: 'Complete overview of data science field and career paths'
        },
        {
          title: 'Data Cleaning & Preprocessing',
          videoUrl: 'https://www.youtube.com/watch?v=zoJzmwD1Y8Y',
          duration: '1:45:00',
          description: 'Essential data cleaning techniques and preprocessing methods'
        },
        {
          title: 'Data Visualization',
          videoUrl: 'https://www.youtube.com/watch?v=3G5Z6XYF2Z4',
          duration: '1:20:00',
          description: 'Creating compelling visualizations with Python and R'
        },
        {
          title: 'Statistical Analysis',
          videoUrl: 'https://www.youtube.com/watch?v=xxpc-HPKN28',
          duration: '2:00:00',
          description: 'Fundamental statistical concepts and hypothesis testing'
        }
      ]
    }
  },
  {
    id: 2,
    title: 'Machine Learning Basics',
    author: 'freeCodeCamp',
    rating: 4.7,
    reviews: 890,
    price: 25,
    classes: 15,
    students: 220,
    image: IMAGE_MAP['data-science'],
    bestSeller: true,
    category: 'data-science',
    content: {
      sections: [
        {
          title: 'Introduction to Machine Learning',
          videoUrl: 'https://www.youtube.com/watch?v=Cr6VqTRO1v0',
          duration: '3:00:00',
          description: 'Complete machine learning course from basics to advanced'
        },
        {
          title: 'Algorithms and Models',
          videoUrl: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI',
          duration: '2:15:00',
          description: 'Understanding different ML algorithms and model selection'
        },
        {
          title: 'Supervised Learning',
          videoUrl: 'https://www.youtube.com/watch?v=7eh4d6sabA0',
          duration: '1:50:00',
          description: 'Regression and classification techniques'
        },
        {
          title: 'Unsupervised Learning',
          videoUrl: 'https://www.youtube.com/watch?v=8p6XaQsIFvU',
          duration: '1:30:00',
          description: 'Clustering and dimensionality reduction'
        }
      ]
    }
  },
  {
    id: 3,
    title: 'Python for Data Analysis',
    author: 'freeCodeCamp',
    rating: 4.5,
    reviews: 1560,
    price: 18,
    classes: 10,
    students: 340,
    image: IMAGE_MAP['data-science'],
    bestSeller: false,
    category: 'data-science',
    content: {
      sections: [
        {
          title: 'Python Libraries for Data Science',
          videoUrl: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI',
          duration: '2:45:00',
          description: 'Complete Python data science tutorial'
        },
        {
          title: 'Pandas and NumPy',
          videoUrl: 'https://www.youtube.com/watch?v=vmEHCJofslg',
          duration: '2:00:00',
          description: 'Master Pandas for data manipulation and analysis'
        },
        {
          title: 'Data Analysis with Python',
          videoUrl: 'https://www.youtube.com/watch?v=daefaLgNkw0',
          duration: '1:30:00',
          description: 'Practical data analysis projects'
        },
        {
          title: 'Data Import and Export',
          videoUrl: 'https://www.youtube.com/watch?v=ZyhVh-qRZPA',
          duration: '1:15:00',
          description: 'Working with different data formats'
        }
      ]
    }
  },
  {
    id: 4,
    title: 'Advanced Statistics',
    author: 'freeCodeCamp',
    rating: 4.6,
    reviews: 720,
    price: 30,
    classes: 18,
    students: 180,
    image: IMAGE_MAP['data-science'],
    bestSeller: false,
    category: 'data-science',
    content: {
      sections: [
        {
          title: 'Advanced Probability Theory',
          videoUrl: 'https://www.youtube.com/watch?v=cKlnR-CB3tk',
          duration: '2:30:00',
          description: 'Advanced statistical concepts and probability distributions'
        },
        {
          title: 'Hypothesis Testing & Regression',
          videoUrl: 'https://www.youtube.com/watch?v=9gF-JQXEZhA',
          duration: '2:00:00',
          description: 'Statistical inference and regression analysis'
        },
        {
          title: 'Bayesian Statistics',
          videoUrl: 'https://www.youtube.com/watch?v=3OJEae7Qb_o',
          duration: '1:45:00',
          description: 'Introduction to Bayesian methods'
        },
        {
          title: 'Time Series Analysis',
          videoUrl: 'https://www.youtube.com/watch?v=UFuo7EHI8zc',
          duration: '1:30:00',
          description: 'Analyzing temporal data patterns'
        }
      ]
    }
  },

  // Digital Marketing Courses
  {
    id: 5,
    title: 'Digital Marketing Mastery',
    author: 'freeCodeCamp',
    rating: 4.5,
    reviews: 980,
    price: 20,
    classes: 12,
    students: 130,
    image: IMAGE_MAP['digital-marketing'],
    bestSeller: true,
    category: 'digital-marketing',
    content: {
      sections: [
        {
          title: 'Introduction to Digital Marketing',
          videoUrl: 'https://www.youtube.com/watch?v=2fnpDZjZckQ',
          duration: '2:30:00',
          description: 'Complete digital marketing course for beginners'
        },
        {
          title: 'Email Marketing & Strategy',
          videoUrl: 'https://www.youtube.com/watch?v=Jb6bLCcbJFc',
          duration: '1:30:00',
          description: 'Email marketing fundamentals and automation'
        },
        {
          title: 'Google Ads and PPC',
          videoUrl: 'https://www.youtube.com/watch?v=7rU_KyudW-Y',
          duration: '1:45:00',
          description: 'Pay-per-click advertising strategies'
        },
        {
          title: 'Analytics and Tracking',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Measuring and optimizing marketing campaigns'
        }
      ]
    }
  },
  {
    id: 6,
    title: 'Social Media Marketing',
    author: 'Simplilearn',
    rating: 4.3,
    reviews: 650,
    price: 15,
    classes: 8,
    students: 280,
    image: IMAGE_MAP['digital-marketing'],
    bestSeller: false,
    category: 'digital-marketing',
    content: {
      sections: [
        {
          title: 'Facebook and Instagram Ads',
          videoUrl: 'https://www.youtube.com/watch?v=QgRZP7DoJwI',
          duration: '2:00:00',
          description: 'Social media marketing strategies and ad creation'
        },
        {
          title: 'Social Media Campaigns',
          videoUrl: 'https://www.youtube.com/watch?v=5T9JldQ-5nA',
          duration: '1:45:00',
          description: 'Advanced social media marketing techniques'
        },
        {
          title: 'Content Creation for Social Media',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Creating engaging social media content'
        },
        {
          title: 'Social Media Analytics',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:15:00',
          description: 'Measuring social media performance'
        }
      ]
    }
  },
  {
    id: 7,
    title: 'SEO Optimization',
    author: 'Neil Patel',
    rating: 4.8,
    reviews: 1120,
    price: 22,
    classes: 14,
    students: 190,
    image: IMAGE_MAP['digital-marketing'],
    bestSeller: true,
    category: 'digital-marketing',
    content: {
      sections: [
        {
          title: 'SEO Basics and Strategies',
          videoUrl: 'https://www.youtube.com/watch?v=Dvwuwme5iKo',
          duration: '2:15:00',
          description: 'Complete SEO course for beginners'
        },
        {
          title: 'Keyword Research & Content SEO',
          videoUrl: 'https://www.youtube.com/watch?v=3CRV5LoN8R0',
          duration: '1:30:00',
          description: 'SEO for beginners - keyword research and content optimization'
        },
        {
          title: 'Technical SEO',
          videoUrl: 'https://www.youtube.com/watch?v=GxwHXxumXvY',
          duration: '1:45:00',
          description: 'Website technical optimization'
        },
        {
          title: 'Link Building Strategies',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Building quality backlinks for SEO'
        }
      ]
    }
  },
  {
    id: 8,
    title: 'Content Marketing Strategy',
    author: 'Neil Patel',
    rating: 4.4,
    reviews: 540,
    price: 18,
    classes: 10,
    students: 150,
    image: IMAGE_MAP['digital-marketing'],
    bestSeller: false,
    category: 'digital-marketing',
    content: {
      sections: [
        {
          title: 'Content Creation & Promotion',
          videoUrl: 'https://www.youtube.com/watch?v=I2mQnFiv3ak',
          duration: '1:45:00',
          description: 'Content marketing strategy and promotion techniques'
        },
        {
          title: 'Blog Writing and SEO',
          videoUrl: 'https://www.youtube.com/watch?v=3CRV5LoN8R0',
          duration: '1:30:00',
          description: 'Creating SEO-optimized blog content'
        },
        {
          title: 'Video Content Marketing',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:20:00',
          description: 'Video content creation and distribution'
        },
        {
          title: 'Content Calendar and Planning',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:15:00',
          description: 'Strategic content planning and scheduling'
        }
      ]
    }
  },

  // Civil Engineering Courses
  {
    id: 9,
    title: 'Civil Engineering Principles',
    author: 'CivilEngineeringAcademy',
    rating: 5.0,
    reviews: 420,
    price: 20,
    classes: 12,
    students: 120,
    image: IMAGE_MAP['civil-engineering'],
    bestSeller: true,
    category: 'civil-engineering',
    content: {
      sections: [
        {
          title: 'Introduction to Civil Engineering',
          videoUrl: 'https://www.youtube.com/watch?v=5uDntDR5mbg',
          duration: '2:00:00',
          description: 'Fundamental principles of civil engineering'
        },
        {
          title: 'Materials & Construction Basics',
          videoUrl: 'https://www.youtube.com/watch?v=2Pp_zx2APco',
          duration: '1:45:00',
          description: 'Construction materials and their properties'
        },
        {
          title: 'Structural Design Principles',
          videoUrl: 'https://www.youtube.com/watch?v=bv8Ow4xoHjk',
          duration: '2:15:00',
          description: 'Basic structural design concepts'
        },
        {
          title: 'Surveying and Site Planning',
          videoUrl: 'https://www.youtube.com/watch?v=FPzI8pzSY1Y',
          duration: '1:30:00',
          description: 'Land surveying and site preparation'
        }
      ]
    }
  },
  {
    id: 10,
    title: 'Structural Analysis',
    author: 'TheCivilEngineer',
    rating: 4.9,
    reviews: 380,
    price: 28,
    classes: 16,
    students: 95,
    image: IMAGE_MAP['civil-engineering'],
    bestSeller: false,
    category: 'civil-engineering',
    content: {
      sections: [
        {
          title: 'Structural Theory & Applications',
          videoUrl: 'https://www.youtube.com/watch?v=bv8Ow4xoHjk',
          duration: '2:30:00',
          description: 'Advanced structural analysis methods'
        },
        {
          title: 'Load Distribution & Mechanics',
          videoUrl: 'https://www.youtube.com/watch?v=_1x6g_rZWaw',
          duration: '2:00:00',
          description: 'Advanced structural mechanics and load analysis'
        },
        {
          title: 'Finite Element Analysis',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:45:00',
          description: 'Computer-aided structural analysis'
        },
        {
          title: 'Bridge and Building Design',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:30:00',
          description: 'Practical structural design applications'
        }
      ]
    }
  },
  {
    id: 11,
    title: 'Construction Management',
    author: 'The Constructor',
    rating: 4.7,
    reviews: 290,
    price: 24,
    classes: 13,
    students: 85,
    image: IMAGE_MAP['civil-engineering'],
    bestSeller: false,
    category: 'civil-engineering',
    content: {
      sections: [
        {
          title: 'Project Management Basics',
          videoUrl: 'https://www.youtube.com/watch?v=FPzI8pzSY1Y',
          duration: '2:00:00',
          description: 'Construction project management fundamentals'
        },
        {
          title: 'Construction Scheduling',
          videoUrl: 'https://www.youtube.com/watch?v=k0U5jshOwB8',
          duration: '1:45:00',
          description: 'Construction scheduling and planning techniques'
        },
        {
          title: 'Cost Estimation and Budgeting',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Construction cost estimation methods'
        },
        {
          title: 'Quality Control and Safety',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Construction quality and safety management'
        }
      ]
    }
  },

  // Programming Courses
  {
    id: 12,
    title: 'JavaScript Fundamentals',
    author: 'freeCodeCamp',
    rating: 4.6,
    reviews: 2100,
    price: 16,
    classes: 12,
    students: 450,
    image: IMAGE_MAP['programming'],
    bestSeller: true,
    category: 'programming',
    content: {
      sections: [
        {
          title: 'JavaScript Basics',
          videoUrl: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
          duration: '3:30:00',
          description: 'Complete JavaScript course for beginners'
        },
        {
          title: 'Functions & Objects',
          videoUrl: 'https://www.youtube.com/watch?v=BoWiLPtHgsE',
          duration: '1:45:00',
          description: 'JavaScript functions and object-oriented programming'
        },
        {
          title: 'DOM Manipulation',
          videoUrl: 'https://www.youtube.com/watch?v=0ik6X4DJKCc',
          duration: '1:30:00',
          description: 'Working with the Document Object Model'
        },
        {
          title: 'Async JavaScript',
          videoUrl: 'https://www.youtube.com/watch?v=8aGhZQkoFbQ',
          duration: '1:20:00',
          description: 'Promises, async/await, and asynchronous programming'
        }
      ]
    }
  },
  {
    id: 13,
    title: 'React Development',
    author: 'freeCodeCamp',
    rating: 4.8,
    reviews: 1680,
    price: 22,
    classes: 15,
    students: 320,
    image: IMAGE_MAP['programming'],
    bestSeller: true,
    category: 'programming',
    content: {
      sections: [
        {
          title: 'React Introduction',
          videoUrl: 'https://www.youtube.com/watch?v=DLX62G4lc44',
          duration: '2:45:00',
          description: 'Complete React course for beginners'
        },
        {
          title: 'React Components & Hooks',
          videoUrl: 'https://www.youtube.com/watch?v=Ke90Tje7VS0',
          duration: '2:00:00',
          description: 'React for beginners - components and hooks'
        },
        {
          title: 'State Management',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Managing state in React applications'
        },
        {
          title: 'React Router and Navigation',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:15:00',
          description: 'Client-side routing with React Router'
        }
      ]
    }
  },
  {
    id: 14,
    title: 'Node.js Backend',
    author: 'freeCodeCamp',
    rating: 4.5,
    reviews: 920,
    price: 20,
    classes: 14,
    students: 180,
    image: IMAGE_MAP['programming'],
    bestSeller: false,
    category: 'programming',
    content: {
      sections: [
        {
          title: 'Node.js Basics',
          videoUrl: 'https://www.youtube.com/watch?v=Oe421EPjeDg',
          duration: '2:30:00',
          description: 'Complete Node.js course for beginners'
        },
        {
          title: 'Building REST APIs',
          videoUrl: 'https://www.youtube.com/watch?v=pKd0Rpw7O48',
          duration: '2:00:00',
          description: 'Node.js REST API tutorial and best practices'
        },
        {
          title: 'Database Integration',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:45:00',
          description: 'Connecting Node.js with databases'
        },
        {
          title: 'Authentication and Security',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:30:00',
          description: 'Implementing authentication and security measures'
        }
      ]
    }
  },
  {
    id: 15,
    title: 'Python Programming',
    author: 'freeCodeCamp',
    rating: 4.7,
    reviews: 1340,
    price: 18,
    classes: 11,
    students: 290,
    image: IMAGE_MAP['programming'],
    bestSeller: false,
    category: 'programming',
    content: {
      sections: [
        {
          title: 'Python Basics',
          videoUrl: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
          duration: '4:30:00',
          description: 'Complete Python course for beginners'
        },
        {
          title: 'Object-Oriented Programming',
          videoUrl: 'https://www.youtube.com/watch?v=JeznW_7DlB0',
          duration: '1:45:00',
          description: 'Python OOP tutorial and best practices'
        },
        {
          title: 'Python Libraries and Modules',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Working with Python standard library'
        },
        {
          title: 'File Handling and Data Processing',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'File I/O and data manipulation in Python'
        }
      ]
    }
  },

  // Finance Courses
  {
    id: 16,
    title: 'Personal Finance Management',
    author: 'freeCodeCamp',
    rating: 4.4,
    reviews: 780,
    price: 14,
    classes: 8,
    students: 220,
    image: IMAGE_MAP['finance'],
    bestSeller: false,
    category: 'finance',
    content: {
      sections: [
        {
          title: 'Budgeting and Saving',
          videoUrl: 'https://www.youtube.com/watch?v=pYgr0g5ke5M',
          duration: '1:30:00',
          description: 'Personal finance basics and budgeting strategies'
        },
        {
          title: 'Investing & Retirement Planning',
          videoUrl: 'https://www.youtube.com/watch?v=lFSkp-MYvUk',
          duration: '2:00:00',
          description: 'Personal finance mastery and retirement planning'
        },
        {
          title: 'Debt Management',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:15:00',
          description: 'Strategies for managing and eliminating debt'
        },
        {
          title: 'Tax Planning',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Understanding taxes and tax optimization'
        }
      ]
    }
  },
  {
    id: 17,
    title: 'Investment Strategies',
    author: 'Ben Felix',
    rating: 4.6,
    reviews: 650,
    price: 26,
    classes: 12,
    students: 140,
    image: IMAGE_MAP['finance'],
    bestSeller: true,
    category: 'finance',
    content: {
      sections: [
        {
          title: 'Stock Market Basics',
          videoUrl: 'https://www.youtube.com/watch?v=V6Z71Ezx4RA',
          duration: '2:15:00',
          description: 'Investing in stocks and market fundamentals'
        },
        {
          title: 'Real Estate & Bonds',
          videoUrl: 'https://www.youtube.com/watch?v=0gMOjzmWfs8',
          duration: '1:45:00',
          description: 'Investing in real estate and bond markets'
        },
        {
          title: 'Portfolio Diversification',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Building diversified investment portfolios'
        },
        {
          title: 'Risk Management',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Investment risk assessment and management'
        }
      ]
    }
  },
  {
    id: 18,
    title: 'Cryptocurrency Trading',
    author: 'CryptoZombie',
    rating: 4.3,
    reviews: 890,
    price: 32,
    classes: 16,
    students: 180,
    image: IMAGE_MAP['finance'],
    bestSeller: false,
    category: 'finance',
    content: {
      sections: [
        {
          title: 'Bitcoin & Blockchain',
          videoUrl: 'https://www.youtube.com/watch?v=ykp0ZHZtT4Q',
          duration: '2:00:00',
          description: 'Crypto trading for beginners and blockchain basics'
        },
        {
          title: 'Crypto Technical Analysis',
          videoUrl: 'https://www.youtube.com/watch?v=8GRWdd0oXyw',
          duration: '1:45:00',
          description: 'Technical analysis for cryptocurrency trading'
        },
        {
          title: 'Trading Strategies',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Advanced crypto trading strategies'
        },
        {
          title: 'Risk Management in Crypto',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Managing risk in cryptocurrency investments'
        }
      ]
    }
  },

  // Design Courses
  {
    id: 19,
    title: 'UI/UX Design Principles',
    author: 'freeCodeCamp',
    rating: 4.7,
    reviews: 1120,
    price: 24,
    classes: 14,
    students: 260,
    image: IMAGE_MAP['design'],
    bestSeller: true,
    category: 'design',
    content: {
      sections: [
        {
          title: 'Design Thinking & Prototyping',
          videoUrl: 'https://www.youtube.com/watch?v=F8K1x7Zz0XI',
          duration: '2:30:00',
          description: 'Complete UI/UX design course'
        },
        {
          title: 'User Research & Wireframing',
          videoUrl: 'https://www.youtube.com/watch?v=F0bXjNh3pLg',
          duration: '1:45:00',
          description: 'UX design fundamentals and user research'
        },
        {
          title: 'Visual Design Principles',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Color theory, typography, and visual hierarchy'
        },
        {
          title: 'Usability Testing',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Testing and validating design decisions'
        }
      ]
    }
  },
  {
    id: 20,
    title: 'Graphic Design Mastery',
    author: 'The Futur',
    rating: 4.5,
    reviews: 760,
    price: 20,
    classes: 12,
    students: 190,
    image: IMAGE_MAP['design'],
    bestSeller: false,
    category: 'design',
    content: {
      sections: [
        {
          title: 'Typography & Layout Design',
          videoUrl: 'https://www.youtube.com/watch?v=kXaDfiQ_9uw',
          duration: '2:15:00',
          description: 'Complete graphic design course'
        },
        {
          title: 'Logo Design & Photoshop',
          videoUrl: 'https://www.youtube.com/watch?v=E4XIJ2OsYZM',
          duration: '1:45:00',
          description: 'Logo design tutorial and Photoshop techniques'
        },
        {
          title: 'Brand Identity Design',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:30:00',
          description: 'Creating cohesive brand identities'
        },
        {
          title: 'Print Design Fundamentals',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Design for print media and publications'
        }
      ]
    }
  },
  {
    id: 21,
    title: 'Web Design Fundamentals',
    author: 'freeCodeCamp',
    rating: 4.4,
    reviews: 680,
    price: 18,
    classes: 10,
    students: 150,
    image: IMAGE_MAP['design'],
    bestSeller: false,
    category: 'design',
    content: {
      sections: [
        {
          title: 'HTML/CSS Basics',
          videoUrl: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
          duration: '2:00:00',
          description: 'HTML and CSS full course for beginners'
        },
        {
          title: 'Responsive Web Design',
          videoUrl: 'https://www.youtube.com/watch?v=XB66mAHaUw4',
          duration: '1:30:00',
          description: 'Creating responsive web layouts'
        },
        {
          title: 'CSS Grid and Flexbox',
          videoUrl: 'https://www.youtube.com/watch?v=8JnfIjaLDO0',
          duration: '1:15:00',
          description: 'Modern CSS layout techniques'
        },
        {
          title: 'Web Design Best Practices',
          videoUrl: 'https://www.youtube.com/watch?v=8oRjf8J42ZQ',
          duration: '1:20:00',
          description: 'Design principles for web interfaces'
        }
      ]
    }
  },
].map(course => ({
  ...course,
  image: IMAGE_MAP[course.category] || course.image
}));

export default courses; 