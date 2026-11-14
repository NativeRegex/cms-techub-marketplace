export const SITE = {
  name: 'CMS Techub',
  tagline: 'Your Trusted IT Services Partner',
  description:
    'CMS Techub delivers professional IT services — web development, networking, hardware repair, cybersecurity, and tutoring — with digital products and a curated partner network.',
  owner: 'Calistus Masinde Sirucha',
  role: 'CEO & Founder',
  email: 'masindecalistus411@gmail.com',
  phone: '0702932974',
  phoneFull: '+254702932974',
  location: 'Nairobi, Kenya',
  linkedin: 'https://www.linkedin.com/in/calistus-sirucha-a77b06421/',
  github: 'https://github.com/NativeRegex',
};

export const SERVICES = [
  {
    id: 1,
    title: 'Web Development',
    category: 'Development',
    price: 'From KES 15,000',
    icon: '🌐',
    description:
      'Custom websites and web applications built with modern stacks — Spring Boot, React, and PostgreSQL. From simple landing pages to full admin dashboards.',
    features: [
      'Responsive design (mobile-first)',
      'Custom backend with REST APIs',
      'Database design and integration',
      'Deployment to Netlify / Render / VPS',
    ],
  },
  {
    id: 2,
    title: 'Networking Setup & Support',
    category: 'Infrastructure',
    price: 'From KES 8,000',
    icon: '🔌',
    description:
      'Complete networking solutions — LAN/WAN setup, router configuration, Wi-Fi deployment, and troubleshooting for homes and small businesses.',
    features: [
      'LAN/WAN installation',
      'Router & switch configuration',
      'Wi-Fi optimization',
      'Network security hardening',
    ],
  },
  {
    id: 3,
    title: 'Computer Hardware Repair',
    category: 'Hardware',
    price: 'From KES 1,500',
    icon: '🔧',
    description:
      'Professional computer repair and maintenance — diagnostics, hardware installation, component replacement, and system assembly.',
    features: [
      'Hardware diagnostics',
      'Component replacement',
      'PC assembly & upgrades',
      'System optimization',
    ],
  },
  {
    id: 4,
    title: 'Software Installation & Recovery',
    category: 'Software',
    price: 'From KES 1,000',
    icon: '💻',
    description:
      'Operating system installation (Windows, Linux), driver setup, virus removal, data backup, and system recovery.',
    features: [
      'OS installation (Windows / Linux)',
      'Driver & application setup',
      'Virus & malware removal',
      'Data backup & recovery',
    ],
  },
  {
    id: 5,
    title: 'Cybersecurity & Ethical Hacking',
    category: 'Security',
    price: 'From KES 10,000',
    icon: '🛡️',
    description:
      'Vulnerability assessments, penetration testing, and security audits using Kali Linux tools — nmap, Metasploit, Wireshark, and Burp Suite.',
    features: [
      'Vulnerability scanning',
      'Penetration testing',
      'Security audits & reports',
      'Firewall & network defense',
    ],
  },
  {
    id: 6,
    title: 'Database Design',
    category: 'Development',
    price: 'From KES 6,000',
    icon: '🗄️',
    description:
      'Design and optimization of MySQL, PostgreSQL, and Supabase databases — schema design, indexing, and query optimization.',
    features: [
      'Schema design',
      'Performance optimization',
      'Data migration',
      'Backup strategy',
    ],
  },
  {
    id: 7,
    title: 'IT Tutoring & Training',
    category: 'Training',
    price: 'From KES 2,000/hr',
    icon: '🎓',
    description:
      'One-on-one tutoring on programming (Java, Python, C), Linux basics, cybersecurity, and web development fundamentals.',
    features: [
      'Java / Python / C',
      'Linux & Kali basics',
      'Cybersecurity fundamentals',
      'Web dev (HTML, CSS, JS)',
    ],
  },
  {
    id: 8,
    title: 'IT Consultancy',
    category: 'Consulting',
    price: 'Custom quote',
    icon: '💡',
    description:
      'Strategic IT consultancy for small businesses — technology audits, digital transformation advice, and IT cost optimization.',
    features: [
      'Technology audit',
      'Digital transformation',
      'Cost optimization',
      'Roadmap planning',
    ],
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: 'Kali Linux Setup Guide',
    category: 'eBook',
    price: 'KES 500',
    description:
      'Complete beginner-friendly guide to installing and configuring Kali Linux — including virtual machines, dual boot, and essential tool setup.',
    icon: '📘',
  },
  {
    id: 2,
    title: 'Spring Boot Starter Kit',
    category: 'Template',
    price: 'KES 1,500',
    description:
      'Production-ready Spring Boot template with JWT authentication, PostgreSQL integration, and Docker deployment — save weeks of setup.',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'React Admin Dashboard',
    category: 'Template',
    price: 'KES 2,000',
    description:
      'Full-featured React admin dashboard using Vite, Tailwind, and React Router — with login, CRUD pages, and role-based access.',
    icon: '📊',
  },
  {
    id: 4,
    title: 'Network Setup Playbook',
    category: 'eBook',
    price: 'KES 800',
    description:
      'Step-by-step guide to setting up small-business networks — cabling, router config, Wi-Fi security, and troubleshooting.',
    icon: '📡',
  },
  {
    id: 5,
    title: '5-Hour Network Setup Bundle',
    category: 'Service Package',
    price: 'KES 12,000',
    description:
      'Complete network installation package — site survey, cabling, router/switch setup, and one month of support.',
    icon: '📦',
  },
  {
    id: 6,
    title: 'Cybersecurity Audit Package',
    category: 'Service Package',
    price: 'KES 25,000',
    description:
      'Full security audit of your network or web application — includes penetration testing, vulnerability report, and remediation plan.',
    icon: '🔒',
  },
  // ============ SOFTWARE LICENSES ============
  {
    id: 7,
    title: 'Windows 11 Pro License',
    category: 'Software',
    price: 'KES 3,500',
    description: 'Genuine Microsoft Windows 11 Pro license key. Delivered by email within 24 hours of payment. Activation support included.',
    icon: '🪟',
  },
  {
    id: 8,
    title: 'Microsoft Office 365',
    category: 'Software',
    price: 'KES 4,500',
    description: '1-year Microsoft Office 365 subscription — Word, Excel, PowerPoint, Outlook, Teams. Instant license delivery after payment.',
    icon: '📊',
  },
  {
    id: 9,
    title: 'Windows 10 Pro License',
    category: 'Software',
    price: 'KES 2,800',
    description: 'Genuine Windows 10 Pro license key for PCs and laptops. Full activation support and updates included.',
    icon: '💾',
  },
  {
    id: 10,
    title: 'Antivirus License (1 Year)',
    category: 'Software',
    price: 'KES 1,500',
    description: '1-year antivirus license (Kaspersky / Bitdefender). Protects one device — Windows, macOS, or Android.',
    icon: '🛡️',
  },
  {
    id: 11,
    title: 'Linux Support Package',
    category: 'Software',
    price: 'KES 2,000',
    description: 'Professional Ubuntu/Debian installation + setup. 1 hour remote session, driver installation, and 30 days email support.',
    icon: '🐧',
  },
];


export const PARTNERS = [
  {
    id: 1,
    name: 'Coming Soon',
    category: 'IT Partners',
    description:
      'CMS Techub is building a curated network of trusted IT professionals and companies. Partners will be listed here soon.',
    icon: '🤝',
  },
];
