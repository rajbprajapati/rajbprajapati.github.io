export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeCode: string;
  featured?: boolean;
}

export interface MetricItem {
  value: string;
  label: string;
  detail: string;
  category: "scale" | "cost" | "reliability" | "data" | "leadership";
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  technologies: string[];
  subDomains?: {
    name: string;
    points: string[];
  }[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  category: "Distributed Systems" | "Cloud & IoT" | "Research & AI" | "Data Pipelines";
  description: string;
  impact: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  honors: string[];
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export const portfolioData = {
  personal: {
    name: "Raj B Prajapati",
    firstName: "Raj",
    title: "Backend & Distributed Systems Engineer · Tech Lead",
    location: "Gujarat, India",
    email: "rajprajapatibusiness@gmail.com",
    phone: "+91 7573938004",
    availability: "Open to Staff / Lead Distributed Systems & Cloud Roles",
    bio: "Backend & Distributed Systems Engineer with 5+ years shipping production platforms across power-grid simulation, IoT ecosystems, and bioinformatics. Multi-cloud certified across AWS & GCP. Led cross-functional teams of up to 8 engineers end-to-end — from architecture through post-launch reliability — cutting infrastructure cost by ~80% and scaling simulation throughput 10x.",
    resumeUrl: "/Raj_B_Prajapati_Resume.pdf",
    photoUrl: "/profile.jpg",
    socialLinks: {
      github: "https://github.com/rajbprajapati",
      linkedin: "https://www.linkedin.com/in/rajbprajapati11",
      twitter: "https://twitter.com/r11_raj",
      youtube: "https://www.youtube.com/channel/UCLKq6JabfhgWvmJi1JWbGEQ",
    },
    languages: ["English (Professional)", "Hindi (Native)", "Gujarati (Native)", "German (A1.1)"],
  },

  metrics: [
    {
      value: "10x",
      label: "Simulation Throughput",
      detail: "Scaled daily power-grid simulations from 100+ to 1,000+/day without added infrastructure cost.",
      category: "scale",
    },
    {
      value: "~80%",
      label: "Cloud Spend Reduced",
      detail: "Optimized Elasticsearch indexing strategy and Firebase I/O patterns to slash operational spend.",
      category: "cost",
    },
    {
      value: "99.99%",
      label: "Production Availability",
      detail: "Sustained zero data loss and uninterrupted uptime during major Elasticsearch cluster upgrades.",
      category: "reliability",
    },
    {
      value: "50+ GB",
      label: "Daily Data Pipeline",
      detail: "Processed daily biological sequence workloads at >90% test coverage with automated retries.",
      category: "data",
    },
    {
      value: "8 Engineers",
      label: "Team Leadership",
      detail: "Led cross-functional teams across frontend, backend, and cloud to take platforms from prototype to production.",
      category: "leadership",
    },
    {
      value: "100%",
      label: "Commitment Velocity",
      detail: "Achieved 100% on-time feature delivery across consecutive quarters as technical team lead.",
      category: "leadership",
    },
  ] as MetricItem[],

  certifications: [
    {
      title: "Solutions Architect Certification",
      issuer: "Amazon Web Services (AWS)",
      date: "July 2026",
      badgeCode: "AWS-SAA",
      featured: true,
    },
    {
      title: "Professional Cloud Developer",
      issuer: "Google Cloud Platform (GCP)",
      date: "January 2025",
      badgeCode: "GCP-PCD",
      featured: true,
    },
    {
      title: "Professional Data Engineer",
      issuer: "Google Cloud Platform (GCP)",
      date: "December 2025",
      badgeCode: "GCP-PDE",
      featured: true,
    },
    {
      title: "Technology Associate – Python 3",
      issuer: "Microsoft",
      date: "2020",
      badgeCode: "MTA-PY",
      featured: false,
    },
  ] as Certification[],

  featuredProjects: [
    {
      title: "Power-Grid Decarbonization & Simulation Engine",
      subtitle: "High-Throughput CIM/GML Ingestion & GridLAB-D Automation",
      category: "Distributed Systems",
      description:
        "Built a large-scale grid-planning and decarbonization platform powering advanced simulation and analysis workflows. Designed a high-throughput Kotlin data-ingestion pipeline parsing and normalizing CIM/GML power-grid topologies into an internal unified model, eliminating manual data prep.",
      impact:
        "Automated simulation pre/post-processing integrated with GridLAB-D, lifting capacity from 100+ to 1,000+ simulations/day (10x boost). Deployed containerized serverless workloads on GCP for N-1 contingency analysis and benchmarking.",
      technologies: ["Kotlin", "GridLAB-D", "CIM/GML", "GCP Serverless", "Docker", "Python", "REST/gRPC"],
      featured: true,
    },
    {
      title: "IoT Smart Mattress Platform & Cluster Evolution",
      subtitle: "Cross-Functional Leadership & Zero-Downtime Elasticsearch Upgrades",
      category: "Cloud & IoT",
      description:
        "Led a cross-functional team of 8 engineers across frontend, backend, and cloud to bring the platform from prototype to production. Drove sprint planning, stakeholder alignment, third-party integrations, and architecture proposals.",
      impact:
        "Redesigned Elasticsearch indexing strategy and Firebase I/O patterns, cutting Firebase operational cost by ~80%. Executed a zero-downtime Elasticsearch cluster upgrade to latest major version with zero data loss (99.99% uptime).",
      technologies: ["AWS IoT Core", "Elasticsearch", "Firebase", "Python", "FastAPI", "React.js", "Docker"],
      featured: true,
    },
    {
      title: "Bioinformatics High-Throughput Batch Infrastructure",
      subtitle: "Resilient Distributed Processing of Genomic Sequences",
      category: "Data Pipelines",
      description:
        "Built resilient backend services and distributed batch jobs processing 50+ GB of biological sequence data daily. Engineered operational monitoring, dead-letter recovery, retries, and alerting to minimize on-call incident recovery time.",
      impact:
        "Maintained >90% test coverage, cutting production defects significantly quarter over quarter and drastically reducing failed-job recovery duration.",
      technologies: ["Python", "FastAPI", "RabbitMQ", "Pytest", "Docker", "CI/CD", "PostgreSQL"],
      featured: true,
    },
    {
      title: "AI-Based Learning & Development Platform",
      subtitle: "Tech Lead for 8 Full-Stack Developers & Model Ingestion",
      category: "Research & AI",
      description:
        "Currently leading a team of 8 full-stack developers on an AI-based learning and development project, owning ideation, scoping, milestone definition, and task management end-to-end.",
      impact:
        "Received the company-wide Appreciation award for Q2 deliverables, recognized for standout performance in model ingestion and benchmarking, and for supporting multiple cross-functional workstreams.",
      technologies: ["AI Models", "Model Benchmarking", "Python", "FastAPI", "React.js", "PostgreSQL", "Docker"],
      featured: true,
    },
    {
      title: "Neural Machine Translation for Indian Languages",
      subtitle: "DA-IICT Information Retrieval Lab Research",
      category: "Research & AI",
      description:
        "Researched and implemented transformer-based Neural Machine Translation (NMT) architectures tailored for low-resource Indian language pairs (Gujarati-Hindi and Gujarati-English).",
      impact:
        "Achieved state-of-the-art BLEU benchmark scores on low-resource language pairs using subword tokenization and custom back-translation techniques.",
      technologies: ["PyTorch", "Transformers", "NLP", "Python", "DA-IICT Research"],
      github: "https://github.com/rajbprajapati",
    },
    {
      title: "Cellular Automata on CUDA",
      subtitle: "GPU-Parallel Game of Life on 2D/3D Grids",
      category: "Distributed Systems",
      description:
        "Engineered Conway's Game of Life (23/3 rule) with custom CUDA kernels executing on massive 2D and 3D grids with GPU-parallel state validation and memory coalescing.",
      impact:
        "Massively reduced iteration cycle times compared to CPU-bound sequential and multi-threaded baselines.",
      technologies: ["CUDA", "C++", "Parallel Computing", "GPU Acceleration"],
      github: "https://github.com/rajbprajapati",
    },
  ] as ProjectItem[],

  experiences: [
    {
      role: "Software Engineer 3",
      company: "Infocusp Innovations LLP",
      location: "Ahmedabad, India",
      period: "Jul 2025 — Present",
      highlights: [
        "Leading a team of 8 full-stack developers on a new AI-based learning and development project, owning ideation, scoping, milestone definition, and task management end-to-end.",
        "Received the company-wide Appreciation for Q2 deliverables, recognized for standout performance in model ingestion and benchmarking, and consistently supporting the team across multiple workstreams.",
        "Led end-to-end delivery of a full-stack application for a 3-engineer team, setting coding and review standards that kept 100% of committed features on schedule across two quarters.",
        "Architected an event-driven, auto-scaling simulation engine for power systems, lifting daily throughput from 100+ to 1,000+ simulations/day (10x) without added infrastructure cost.",
        "Led a zero-downtime upgrade of a production Elasticsearch cluster to the latest major version with zero data loss, sustaining 99.99% availability throughout.",
        "Redesigned Elasticsearch indexing strategy and Firebase I/O patterns, cutting Firebase operational cost by ~80% while improving query latency.",
      ],
      technologies: ["Python", "FastAPI", "Kotlin", "Elasticsearch", "GCP", "AWS", "Firebase", "Docker", "Event-Driven Architecture"],
    },
    {
      role: "Software Engineer 2",
      company: "Infocusp Innovations LLP",
      location: "Ahmedabad, India",
      period: "Nov 2022 — Jul 2025",
      highlights: [
        "Power Systems: Built large-scale grid-planning and decarbonization platform, designed high-throughput Kotlin ingestion pipeline parsing and normalizing CIM/GML power topologies, and automated GridLAB-D simulations scaling to 100+ daily runs.",
        "Bioinformatics: Built backend services and batch pipelines processing 50+ GB biological sequence data/day at >90% test coverage; owned operational workflows (monitoring, retries, alerting) reducing recovery time.",
        "IoT Smart Mattress: Led cross-functional team of 8 engineers across frontend, backend, and cloud; drove sprint planning, third-party integrations, and architecture proposals.",
        "Mentored interns and junior engineers, cutting new-hire onboarding time and lifting engineering velocity across the team.",
      ],
      technologies: ["Kotlin", "GridLAB-D", "CIM/GML", "GCP Serverless", "AWS IoT Core", "RabbitMQ", "Elasticsearch", "Pytest", "Docker"],
      subDomains: [
        {
          name: "Power Systems & Grid Planning",
          points: [
            "High-throughput Kotlin ingestion pipeline parsing and normalizing CIM/GML power-grid topologies.",
            "Automated simulation framework integrated with GridLAB-D scaling from 0 to 100+ simulations/day.",
            "Deployed containerized serverless workloads on GCP for N-1 contingency analysis and benchmarking.",
          ],
        },
        {
          name: "Bioinformatics Infrastructure",
          points: [
            "Distributed backend batch pipelines processing 50+ GB sequence data/day at >90% test coverage.",
            "Engineered operational monitoring, alerting, and automated retries to minimize recovery time.",
          ],
        },
        {
          name: "IoT Smart Mattress Platform",
          points: [
            "Led cross-functional team of 8 engineers across frontend, backend, and cloud from prototype to production.",
            "Authored and executed system migration and architecture proposals with minimal disruption.",
          ],
        },
      ],
    },
    {
      role: "Software Engineer 1",
      company: "Infocusp Innovations LLP",
      location: "Ahmedabad, India",
      period: "Jun 2021 — Nov 2022",
      highlights: [
        "Built and shipped scalable REST APIs and web applications with React.js and Python on AWS, sustaining 99.9% uptime in production.",
        "Built CI/CD pipelines and Karate-based integration test suites, reaching 100% test coverage as a release gate before every production deploy.",
        "Designed backend subsystems for push notifications and scheduled jobs handling 500+ events/day across distributed services.",
        "Engineered and operated AWS cloud infrastructure for high availability and fault tolerance across production workloads.",
      ],
      technologies: ["Python", "React.js", "AWS", "CI/CD", "Karate", "REST APIs", "Docker", "PostgreSQL"],
    },
    {
      role: "Software Engineer Intern",
      company: "MMSI Technologies Pvt. Ltd.",
      location: "Ahmedabad, India",
      period: "Feb 2019 — Jun 2019",
      highlights: [
        "Built and maintained client projects in PHP, including static websites in HTML/CSS.",
        "Automated data migration using Python web scraping (BeautifulSoup), replacing manual data collection.",
      ],
      technologies: ["PHP", "Python", "BeautifulSoup", "HTML/CSS", "MySQL"],
    },
  ] as WorkExperienceItem[],

  education: [
    {
      degree: "Master of Technology (M.Tech), Machine Learning",
      institution: "Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)",
      period: "Aug 2019 — May 2021",
      gpa: "8.0 / 10.0",
      honors: ["Teaching Assistant (Computer Networks, Discrete Mathematics)", "NLP/Machine Translation Research (Information Retrieval Lab)"],
      details: [
        "Specialized in Machine Learning, Distributed Algorithms, and Natural Language Processing.",
        "Conducted research on Transformer models for low-resource Indian languages (Gujarati-Hindi and Gujarati-English).",
      ],
    },
    {
      degree: "Bachelor of Technology (B.Tech), Computer Science & Engineering",
      institution: "Parul University",
      period: "Aug 2015 — May 2019",
      gpa: "9.02 / 10.0",
      honors: [
        "Academic Excellence Awards (Gold, Silver, Bronze)",
        "ERASMUS+ Fully-Funded Exchange Scholar at Wrocław University of Science and Technology, Poland (2017)",
      ],
      details: [
        "Ranked among top graduates with CPI 9.02/10.",
        "Selected for competitive European Union Erasmus+ exchange program, studying distributed systems and software engineering in Poland.",
      ],
    },
  ] as EducationItem[],

  skillCategories: [
    {
      category: "Languages & Core",
      skills: [
        { name: "Python", highlight: true },
        { name: "Kotlin", highlight: true },
        { name: "JavaScript / TypeScript", highlight: true },
        { name: "Java" },
        { name: "C / C++" },
        { name: "SQL" },
        { name: "HTML5 / CSS3" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS (Solutions Architect)", highlight: true },
        { name: "Google Cloud Platform (GCP)", highlight: true },
        { name: "Docker", highlight: true },
        { name: "Terraform", highlight: true },
        { name: "AWS SAM" },
        { name: "CI/CD Automation", highlight: true },
        { name: "Bazel" },
        { name: "Kubernetes / Serverless Containers", highlight: true },
      ],
    },
    {
      category: "Backend & Systems",
      skills: [
        { name: "FastAPI", highlight: true },
        { name: "RESTful APIs", highlight: true },
        { name: "gRPC & Protobuf", highlight: true },
        { name: "GraphQL" },
        { name: "Microservices Architecture", highlight: true },
        { name: "Event-Driven Architecture", highlight: true },
        { name: "GridLAB-D" },
        { name: "CIM / GML Data Norm" },
      ],
    },
    {
      category: "Databases & Storage",
      skills: [
        { name: "Elasticsearch", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "DynamoDB", highlight: true },
        { name: "MongoDB" },
        { name: "MySQL" },
        { name: "Firestore / Firebase", highlight: true },
      ],
    },
    {
      category: "Data, Streaming & IoT",
      skills: [
        { name: "RabbitMQ", highlight: true },
        { name: "MQTT", highlight: true },
        { name: "GCP Pub/Sub", highlight: true },
        { name: "AWS IoT Core", highlight: true },
        { name: "Apache Spark" },
        { name: "Apache Airflow" },
        { name: "Batch Pipelines (50+ GB/day)", highlight: true },
      ],
    },
    {
      category: "Testing & Practices",
      skills: [
        { name: "Pytest", highlight: true },
        { name: "Karate Framework", highlight: true },
        { name: "Test-Driven Development (TDD)", highlight: true },
        { name: "Artillery (Load Testing)" },
        { name: "Zero-Downtime Migration", highlight: true },
        { name: "On-Call Reliability & SRE" },
      ],
    },
  ] as SkillCategory[],
};
