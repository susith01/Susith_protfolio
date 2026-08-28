import {
  PersonalInfo,
  EducationItem,
  SkillItem,
  ProjectItem,
  CertificationItem,
  WhatIBuildItem,
  JourneyStage,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: 'Susith Ravichandran',
  firstName: 'Susith',
  lastName: 'Ravichandran',
  title: 'AI & Data Science Enthusiast | Python Developer',
  heroSubtext:
    'Building smart, efficient software solutions with Python, automation, AI-assisted development and data analytics.',
  aboutSummary:
    'Final-year AI & Data Science student with hands-on experience in Python, automation, and AI-assisted development. Built real-world projects using Flask, Power BI, MCP Server, n8n, and Vibe Coding. Passionate about building smart, efficient software solutions and eager to contribute as a Software Developer.',
  email: 'susithravichandran@gmail.com',
  phone: '+91 9442133612',
  linkedin: 'linkedin.com/in/susith-ravichandran-3338ab276',
  linkedinUrl: 'https://linkedin.com/in/susith-ravichandran-3338ab276',
  github: 'github.com/susith01',
  githubUrl: 'https://github.com/susith01',
  statusBadge: '🟢 Open to Software Development Opportunities',
};

export const aboutHighlights = [
  {
    title: 'AI & Data Science',
    description: 'Neural networks, predictive modeling, data pipelines & intelligent systems.',
    tag: 'Core Domain',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
  },
  {
    title: 'Python Development',
    description: 'Scalable backend scripting, Flask web services, algorithmic problem solving.',
    tag: 'Primary Language',
    color: 'from-amber-500/20 to-yellow-500/20',
    border: 'border-amber-500/30',
  },
  {
    title: 'Data Analytics',
    description: 'Power BI dashboards, exploratory data analysis with Pandas, NumPy, Matplotlib.',
    tag: 'Insights & BI',
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30',
  },
  {
    title: 'Automation',
    description: 'Automated workflow pipelines using n8n and robotic process automation with UiPath.',
    tag: 'Workflow Ops',
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
  },
  {
    title: 'Software Development',
    description: 'End-to-end full stack architecture, structured REST APIs, clean modular code.',
    tag: 'Engineering',
    color: 'from-indigo-500/20 to-blue-500/20',
    border: 'border-indigo-500/30',
  },
  {
    title: 'AI-Assisted Development',
    description: 'Vibe coding methodologies, MCP server integrations, rapid production prototyping.',
    tag: 'Modern Stack',
    color: 'from-violet-500/20 to-fuchsia-500/20',
    border: 'border-violet-500/30',
  },
];

export const educationList: EducationItem[] = [
  {
    id: 'msc-ai-ds',
    degree: 'MSc Artificial Intelligence & Data Science',
    institution: 'Karunya Institute of Technology and Sciences',
    university: 'Karunya University',
    status: 'Currently Pursuing',
    isCurrentlyStudying: true,
    focus: ['Artificial Intelligence', 'Data Science', 'Machine Learning Systems', 'Advanced Analytics'],
    description:
      'Master of Science curriculum centered on advanced artificial intelligence architectures, computational data science, neural computing, and statistical optimization.',
  },
  {
    id: 'bsc-ai-ds',
    degree: 'Bachelor of Science in Artificial Intelligence & Data Science',
    institution: 'Nandha Arts and Science College',
    university: 'Bharathiar University',
    status: 'Expected Graduation: 2026',
    expectedGraduation: '2026',
    isCurrentlyStudying: false,
    focus: ['Python Programming', 'Data Structures & Algorithms', 'Data Analysis', 'Database Management'],
    description:
      'Undergraduate foundation spanning core computer science fundamentals, data structures, relational database engineering, and practical AI application development.',
  },
];

export const skillsList: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    category: 'Programming',
    description: 'Core scripting, OOP, Flask backend, data processing modules and automation logic.',
    highlight: 'Primary',
    color: '#38bdf8',
  },
  {
    name: 'SQL',
    category: 'Programming',
    description: 'Relational database querying, schema design, joins, aggregations, and data retrieval.',
    highlight: 'Database',
    color: '#60a5fa',
  },

  // Data Analysis
  {
    name: 'Pandas',
    category: 'Data Analysis',
    description: 'High-performance data manipulation, dataframe transformations, and data cleaning.',
    color: '#818cf8',
  },
  {
    name: 'NumPy',
    category: 'Data Analysis',
    description: 'Multidimensional array computations, numerical linear algebra, and mathematical operations.',
    color: '#a78bfa',
  },
  {
    name: 'Matplotlib',
    category: 'Data Analysis',
    description: 'Data visualization, distribution plotting, time-series graphs, and figure customization.',
    color: '#c084fc',
  },
  {
    name: 'Excel',
    category: 'Data Analysis',
    description: 'Structured data organization, pivot tables, lookup formulas, and business data analysis.',
    color: '#34d399',
  },
  {
    name: 'Power BI',
    category: 'Data Analysis',
    description: 'Interactive business intelligence reports, dynamic dashboards, DAX queries, and KPI trackers.',
    highlight: 'Analytics',
    color: '#fbbf24',
  },

  // Web & Development Tools
  {
    name: 'Streamlit',
    category: 'Web & Dev Tools',
    description: 'Rapid prototyping of interactive web apps for AI models and data science insights.',
    color: '#f87171',
  },
  {
    name: 'Flask',
    category: 'Web & Dev Tools',
    description: 'Lightweight Python web framework for microservices, REST API endpoints, and web routing.',
    highlight: 'Framework',
    color: '#38bdf8',
  },
  {
    name: 'Git',
    category: 'Web & Dev Tools',
    description: 'Distributed version control, branch management, collaborative workflows, and commit history.',
    color: '#fb923c',
  },
  {
    name: 'GitHub',
    category: 'Web & Dev Tools',
    description: 'Repository hosting, collaborative code management, issue tracking, and project documentation.',
    color: '#e2e8f0',
  },

  // Core Concepts
  {
    name: 'Data Structures',
    category: 'Core Concepts',
    description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Hash Maps, and efficient memory utilization.',
    color: '#38bdf8',
  },
  {
    name: 'Algorithms',
    category: 'Core Concepts',
    description: 'Sorting, searching, recursion, time & space complexity optimization (Big-O analysis).',
    color: '#818cf8',
  },
  {
    name: 'Problem Solving',
    category: 'Core Concepts',
    description: 'Analytical problem decomposition, algorithmic debugging, and structured solution design.',
    color: '#a855f7',
  },

  // Automation Tools
  {
    name: 'n8n',
    category: 'Automation Tools',
    description: 'Workflow automation platform, multi-node webhook pipelines, and third-party service connections.',
    highlight: 'Automation',
    color: '#ec4899',
  },
  {
    name: 'UiPath',
    category: 'Automation Tools',
    description: 'Robotic Process Automation (RPA), desktop & web robotic workflow design, and task bots.',
    highlight: 'RPA',
    color: '#f97316',
  },
];

export const projectsList: ProjectItem[] = [
  {
    id: 'speed-monitor',
    title: 'Smart Internet Speed Monitoring & Boosting System',
    category: 'Python & Network Systems',
    tech: ['Python', 'Flask', 'Network Socket API', 'Real-time Charting', 'Automation'],
    shortDescription:
      'Built a real-time internet speed monitor with automated optimization using Python & Flask.',
    fullProblem:
      'Inconsistent network bandwidth and unmonitored ping spikes can severely degrade real-time software workflows and data transfers. Users typically lack automated diagnostics and dynamic optimization routines to detect and mitigate latency degradation.',
    solution:
      'Engineered an intelligent lightweight Flask and Python web system that runs scheduled background ping/throughput tests, logs historical jitter and upload/download telemetry, and provides automated network buffer/adapter optimization triggers.',
    keyFeatures: [
      'Visualized performance metrics through an interactive real-time dashboard',
      'Real-time automated download and upload bandwidth probing',
      'Ping and packet-loss anomaly detection with threshold alerts',
      'Automated DNS flush and socket buffer optimization routines',
    ],
    myContribution:
      'Architected the full Python backend, integrated the diagnostic socket probing algorithms, and built the responsive real-time metric dashboard UI with Flask.',
    githubUrl: 'https://github.com/susith01',
    liveDemoUrl: '#',
    type: 'speed-monitor',
  },
  {
    id: 'grocery-app',
    title: 'Grocery Shopping App',
    category: 'AI-Assisted Development & Vibe Coding',
    tech: ['Vibe Coding', 'AI-assisted Development', 'React', 'TypeScript', 'Tailwind CSS'],
    shortDescription:
      'Built a grocery shopping app with product listing, cart, and order tracking using Vibe Coding.',
    fullProblem:
      'Modern consumer e-commerce experiences require rapid iteration from product discovery to cart management and transparent live order fulfillment tracking.',
    solution:
      'Leveraged modern AI-assisted development ("Vibe Coding") workflows to rapidly construct a clean, modular, and reactive multi-step shopping experience with instantaneous state handling and visual status progression.',
    keyFeatures: [
      'Used AI-assisted development to ship faster with clean, scalable code',
      'Dynamic product catalog with category filtering and instant search',
      'Reactive cart management with price computation and tax breakdowns',
      'Interactive visual milestone progression: Products → Cart → Order → Tracking',
    ],
    myContribution:
      'Prompt-engineered and refined the modular component structure, implemented client state persistence, and fine-tuned UI ergonomics for smooth checkout flow.',
    githubUrl: 'https://github.com/susith01',
    liveDemoUrl: '#',
    type: 'grocery-app',
  },
  {
    id: 'power-bi-ai',
    title: 'AI-Powered Power BI Analytics',
    category: 'Business Intelligence & MCP Server',
    tech: ['Power BI', 'MCP Server', 'AI Integration', 'Python', 'DAX'],
    shortDescription:
      'Built an AI-powered analytics dashboard using Power BI integrated with an MCP server.',
    fullProblem:
      'Traditional BI reporting requires intensive manual data aggregation, static slicing, and manual interpretation of complex cross-table multi-metric variances.',
    solution:
      'Connected Power BI data pipelines to a Model Context Protocol (MCP) server, enabling natural language intelligence retrieval, automated metric extraction, and synthesized narrative summaries.',
    keyFeatures: [
      'Automated data retrieval from dynamic source endpoints',
      'Instant AI-driven insight generation and variance explanation',
      'Reduced manual reporting effort by automating routine analytical summaries',
      'Custom DAX measures connected to generative AI synthesis endpoints',
    ],
    myContribution:
      'Designed the Power BI visual models, set up the MCP integration bridging backend AI contexts, and formulated the automated executive insight summaries.',
    githubUrl: 'https://github.com/susith01',
    liveDemoUrl: '#',
    type: 'power-bi-ai',
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: 'ibm-python-ds',
    title: 'Python for Data Science',
    issuer: 'IBM',
    category: 'Data Science & Programming',
    description:
      'Comprehensive verification of Python programming fundamentals, data structures, working with data in Python, and mathematical computation libraries.',
    skillsGained: ['Python OOP', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Structures'],
    credentialUrl: 'https://www.ibm.com',
  },
  {
    id: 'ibm-data-analytics',
    title: 'Data Analytics',
    issuer: 'IBM',
    category: 'Business Intelligence & Analytics',
    description:
      'Professional coursework focused on exploratory data analysis, data gathering techniques, visualization strategies, and actionable insight synthesis.',
    skillsGained: ['Data Analysis', 'Data Visualization', 'Spreadsheet Modeling', 'Insight Synthesis'],
    credentialUrl: 'https://www.ibm.com',
  },
];

export const whatIBuildList: WhatIBuildItem[] = [
  {
    id: 'python-apps',
    title: 'Python Applications',
    description: 'Building practical applications using Python and Flask with clean architecture, robust error handling, and intuitive interfaces.',
    tools: ['Python', 'Flask', 'REST APIs', 'Algorithms'],
    color: '#38bdf8',
    accentGradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Working with data and creating interactive dashboards using tools such as Power BI, Pandas, and Matplotlib to surface actionable business intelligence.',
    tools: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Excel'],
    color: '#fbbf24',
    accentGradient: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    description: 'Exploring AI-powered analytics and MCP server integration to link language models and automated data context directly to production tools.',
    tools: ['MCP Server', 'AI Integration', 'Context Protocols', 'Prompt Engineering'],
    color: '#a855f7',
    accentGradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'automation',
    title: 'Automation',
    description: 'Using n8n and UiPath for workflow automation, robotic process automation (RPA), and scheduled system optimizations.',
    tools: ['n8n', 'UiPath', 'Webhooks', 'Process Optimization'],
    color: '#34d399',
    accentGradient: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 'ai-assisted-dev',
    title: 'AI-Assisted Development',
    description: 'Using Vibe Coding and AI-assisted development to accelerate application development while ensuring clean, maintainable, and scalable code.',
    tools: ['Vibe Coding', 'AI Tooling', 'Rapid Prototyping', 'Modern Full-Stack'],
    color: '#ec4899',
    accentGradient: 'from-rose-500/20 to-indigo-500/20',
  },
];

export const journeyStages: JourneyStage[] = [
  {
    id: 'stage-1',
    title: 'AI & Data Science Education',
    subtitle: 'Foundation & Rigor',
    description:
      'Pursuing BSc and MSc degrees in Artificial Intelligence & Data Science, mastering computational theory, statistics, mathematics, and algorithms.',
    technologies: ['Mathematics', 'Statistics', 'Data Structures', 'AI Foundations'],
    iconName: 'GraduationCap',
  },
  {
    id: 'stage-2',
    title: 'Python Development',
    subtitle: 'Core Engineering',
    description:
      'Diving deep into Python programming, object-oriented systems, algorithmic problem solving, and Flask web framework development.',
    technologies: ['Python', 'Flask', 'SQL', 'Git & GitHub'],
    iconName: 'Code2',
  },
  {
    id: 'stage-3',
    title: 'Data Analytics',
    subtitle: 'Extracting Insights',
    description:
      'Harnessing Pandas, NumPy, Matplotlib, Excel, and Power BI to turn raw tabular data into dynamic dashboards, KPI metrics, and actionable decisions.',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'DAX'],
    iconName: 'BarChart3',
  },
  {
    id: 'stage-4',
    title: 'Automation',
    subtitle: 'Efficiency & RPA',
    description:
      'Implementing automated robotic workflows and data integration pipelines using n8n and UiPath to eliminate redundant manual processes.',
    technologies: ['n8n', 'UiPath', 'Automation', 'Webhooks'],
    iconName: 'Cpu',
  },
  {
    id: 'stage-5',
    title: 'AI-Assisted Development',
    subtitle: 'Next-Gen Workflows',
    description:
      'Embracing Vibe Coding, AI-augmented development tooling, and MCP server bridges to accelerate the velocity of building functional products.',
    technologies: ['Vibe Coding', 'MCP Server', 'AI Integration', 'Rapid Prototyping'],
    iconName: 'Sparkles',
  },
  {
    id: 'stage-6',
    title: 'Real-World Projects',
    subtitle: 'Application & Execution',
    description:
      'Building tangible software: Smart Internet Speed Monitor with Flask, Vibe-coded Grocery Shopping App, and AI-Powered Power BI Analytics.',
    technologies: ['Flask System', 'E-Commerce App', 'Power BI AI', 'Full Stack'],
    iconName: 'Layers',
  },
  {
    id: 'stage-7',
    title: 'Software Developer Career Goal',
    subtitle: 'Continuous Growth & Impact',
    description:
      'Actively pursuing software development, AI/data engineering internships, placements, and collaborative software roles to build high-impact systems.',
    technologies: ['Software Development', 'AI Engineering', 'Full Stack', 'Continuous Learning'],
    iconName: 'Rocket',
  },
];
