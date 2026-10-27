import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Instagram, MapPin, ExternalLink, ArrowRight, Award, GraduationCap, FileText, Send, CheckCircle, XCircle } from 'lucide-react';

const projectsData = [
  {
    title: 'Stellar Blade Guide',
    image: '/images/stellarbladeguide.webp',
    deployedLink: 'https://stellarbladeguide.com',
    githubLink: 'https://github.com/kyoriku/stellar-blade-guide',
    keyTechnologies: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL'],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router', 'Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'slowapi', 'httpx', 'Argon2', 'OAuth2', 'Pillow', 'boto3', 'SQLAlchemy', 'asyncpg', 'PostgreSQL', 'Redis', 'Vitest', 'Playwright', 'pytest', 'uv', 'ESLint', 'Docker', 'Railway', 'Cloudflare', 'Cloudflare R2', 'GitHub Actions', 'OpenAI', 'Resend', 'Cloudinary'],
    shortDescription: 'Stellar Blade game guide: 1,078 collectibles, 95 walkthrough pages, 2,800+ screenshots, Postgres search, edge-cached API.',
    description: `An unofficial guide to Stellar Blade: 1,078 collectibles across 21 types, 95 walkthrough pages (main story, side quests, Bulletin Board requests, the NieR and NIKKE DLC, and fishing) and 2,800+ original PS5 screenshots, with written directions and a screenshot for every collectible. Google web search sends it about 2,000 clicks a month, and its top eight queries average positions 1.6 to 7.4 over three months. Search covers collectibles, walkthrough sections, levels and type pages and tolerates typos, collectibles filter by game cycle (NG, NG+, NG++, DLC), and progress tracking works without an account and merges into one on sign-in.

Live since November 2025 on a FastAPI and PostgreSQL stack that replaced a MERN build once the data proved relational. It runs as one Docker service on Railway's Hobby plan behind Cloudflare Pro, with FastAPI serving both the API and the built React app, and Railway-hosted PostgreSQL and Redis that take no public connections. Content is versioned as JSON in its own repository and reaches production through a content pipeline that commits each content type in one transaction and purges only the edge URLs that changed, so API responses stay cached in Redis and at Cloudflare's edge for up to 30 days. Tested by 1,899 pytest, 222 Vitest and 192 Playwright end-to-end tests.`,
    highlights: [
      'Content pipeline from versioned JSON: each content type commits in one transaction, and change detection limits each Cloudflare purge to the API URLs that changed, a median 10 of about 130 across 27 deploys',
      'Every purge is recorded before COMMIT and stays owed until one succeeds; any doubt widens it to every API URL, and Redis must answer before COMMIT and is cleared after it',
      'Images are pre-generated WebP on Cloudflare R2, five sizes each with srcSet matched to the layout at each breakpoint; a changed image gets a new key, so content deploys never purge the image cache, and deletes pass a two-stage gate',
      'Typo-tolerant search over collectibles, walkthrough sections, levels and type pages: one ranked PostgreSQL query over stored, weighted tsvector columns and pg_trgm, plus an edit-distance fallback, checked against a 4,804-query baseline',
      'Google and Discord OAuth bind a single-use state to an HttpOnly cookie and a 10-minute Redis record against login CSRF, and link accounts only on a provider-verified email, never into an account with a password',
      'The origin answers only Cloudflare traffic, through a secret header that a Railway Edge Rule and the app both require; PostgreSQL and Redis take no public connections, and content deploys reach them over SSH tunnels',
      "Workers stay responsive under hostile URLs and Redis stalls: the bot filter's path check is linear-time, capped at 512 characters and held by a subprocess-timeout test, and Redis connects and reads time out after 2 seconds, falling back to memory for rate limits and to PostgreSQL for cache reads",
      'User-submitted avatar URLs are fetched once (https only, every redirect hop checked against private, loopback and metadata ranges, a 10 MB cap enforced mid-stream), so OpenAI moderates the exact bytes uploaded',
      'FastAPI splices per-route titles, descriptions and Open Graph tags into the built React shell, from one JSON file the client also imports and from database rows for walkthroughs, so link previews and non-JS crawlers get real heads without SSR',
    ],
  },
  {
    title: 'Expedition 33dle',
    image: '/images/expedition33dle.webp',
    deployedLink: 'https://expedition33dle.com',
    githubLink: 'https://github.com/kyoriku/expedition-33dle',
    keyTechnologies: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL'],
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router', 'Python', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'asyncpg', 'Alembic', 'PostgreSQL', 'Vitest', 'Testing Library', 'pytest', 'uv', 'Docker', 'Railway', 'Cloudflare', 'GitHub Actions', 'Sentry'],
    shortDescription: 'Daily guessing game for Clair Obscur: Expedition 33. Four modes, 400-entry roster, server-side answers, CI-gated deploys.',
    description: `Daily guessing game for Clair Obscur: Expedition 33, live at expedition33dle.com since August 2026. Four modes (Classic, Pictos, Weapons, Bosses) compare each guess against a hidden daily answer across six to eight typed attributes with match, partial, and directional feedback, over a hand-curated 400-entry roster. The answer never leaves the server before the game ends: each day's puzzle is a pure function of the date, the roster, and a frozen seed, the daily endpoint carries no answer field, and the reveal endpoint requires server-validated proof of a win or a spent guess cap, so the answer cannot be pulled from the network tab.

Runs as a single Docker service on Railway behind Cloudflare, with deploys gated on 264 tests and a healthcheck cutover; predeploy applies Alembic migrations and a count-and-prune-guarded seed. A scheduling fingerprint asserted at import makes any change that would reshuffle past answers fail the healthcheck, holding the previous release live. Operations are part of the project: deploy failures diagnosed from container logs, WAF and rate-limit rules written from observed scanner traffic, over 60% of requests blocked or challenged at the edge, pure-ASGI security headers, injection-escaped access logging with real client IPs, and a deploy runbook with a false-signals triage table.`,
    highlights: [
      'Daily answers derived server-side as a pure function of date, roster, and seed; never sent to the client until a server-validated win or loss',
      'Import-time scheduling fingerprint guard: a deploy that would reshuffle past answers fails the healthcheck and the previous release stays live',
      'Cloudflare WAF and rate-limit rules written from observed scanner traffic; over 60% of requests blocked or challenged at the edge',
      'Four modes on one generic typed rendering core; a grid column referencing a missing feedback field fails compilation',
      'UI tests query only by ARIA role and accessible name (133 role queries, zero test ids); Lighthouse desktop: Accessibility 100, Performance 96, Best Practices 100, SEO 100',
      'CI-gated deploys: 264 tests block the release; predeploy runs Alembic migrations and a count-and-prune-guarded seed',
      'Pure-ASGI middleware for security headers and injection-escaped access logging with real client IPs via CF-Connecting-IP',
      'Four production deploy failures diagnosed from container logs and fixed in the pipeline, each named in its commit message',
      "Long-open tabs roll over cleanly at UTC midnight: a timer plus a visibilitychange refetch remounts the game by puzzle number, re-deriving state from storage so guesses never score against the next day's answer",
    ],
  },
  {
    title: 'StackNova',
    image: '/images/stacknova.webp',
    deployedLink: 'https://stacknova.ca',
    githubLink: 'https://github.com/kyoriku/stacknova',
    keyTechnologies: ['JavaScript', 'React', 'Node.js', 'MySQL'],
    technologies: ['JavaScript', 'React', 'Tailwind CSS', 'TanStack Query', 'Node.js', 'Express', 'Sequelize', 'MySQL', 'Redis', 'bcrypt', 'OAuth2', 'Helmet', 'DOMPurify', 'k6'],
    shortDescription: 'Q&A platform for developers. Markdown editor, syntax highlighting, user auth. Redis caching cut query times by 70%.',
    description: `Developer Q&A platform where users post questions and answers with Markdown formatting and code syntax highlighting. Includes search by title, content, author, date, or comments, pagination, and user profiles with activity tracking.

HTTP-only cookie authentication with Google OAuth, bcrypt password hashing, Redis-backed sessions, and input sanitization for XSS prevention. Multi-tier caching with Redis server-side and TanStack Query client-side — load tested with k6 at 50 concurrent users.`,
    highlights: [
      'HTTP-only cookie auth with Google OAuth',
      'Markdown support with syntax highlighting',
      'Redis caching — 70% faster query times',
      'Multi-tier Redis + TanStack Query caching',
      'Search by title, content, author, date, or comments',
      'Input sanitization for XSS prevention',
      'Light/dark mode',
    ]
  },
  {
    title: 'Invoice Automation',
    image: '/images/invoice-automation.webp',
    deployedLink: '',
    githubLink: 'https://github.com/kyoriku/invoice-automation',
    keyTechnologies: ['Python', 'Gmail API', 'Sheets', 'OAuth2'],
    technologies: ['Python', 'Gmail IMAP/SMTP', 'Google Sheets API', 'Google Drive API', 'OAuth2', 'BeautifulSoup4', 'JSON', 'PDF Generation', 'Excel Export'],
    shortDescription: 'Python CLI that parses work schedule emails, tracks pay periods, generates invoices with HST. Reduced invoicing time by 80%.',
    description: `Python CLI tool that automates bi-weekly invoice generation for contract work — replacing a manual process of copying shifts, calculating hours, updating spreadsheets, and sending emails.

Connects to Gmail via IMAP to parse schedule emails using a dual parsing strategy — regex for the legacy format and BeautifulSoup4 for the current HTML format with automatic fallback. Extracts shifts with duplicate detection, calculates hours and HST, and generates invoices using the Google Sheets API with template copying via Google Drive. Delivers invoices via SMTP with PDF and Excel attachments.`,
    highlights: [
      'Dual parsing strategy: regex for legacy format, BeautifulSoup4 for current HTML format with automatic fallback',
      'Duplicate shift detection',
      'Google Sheets API for invoice generation',
      'OAuth2 authentication',
      'PDF/Excel export and SMTP delivery',
      'Interactive CLI with shift review before sending',
    ]
  },
];

const workExperienceData = [
  {
    title: 'Systems Technician (Hardware-Software Integration)',
    company: 'Instacart (Caper AI)',
    location: 'Burlington, ON',
    period: 'June 2025 – Present',
    summary: "Bridge between field hardware and software teams for Instacart's Caper smart carts, which run on NVIDIA Jetson edge AI hardware: provisioning devices, debugging failures across Android, Linux, and Kubernetes, and testing internal tooling on live carts before release.",
    responsibilities: [
      "Prepared 100+ smart carts for production deployment by running multi-device Bash scripts over ADB and SSH to install APKs, load Docker images, and configure embedded Android and Linux (NVIDIA Jetson) systems",
      "Traced repeat failures in an internal CLI pipeline to a cleanup step that removed a Kubernetes deployment without restoring it, then recovered affected carts using the tool's own diagnostics until the fix shipped in the next release",
      "Partnered with the pipeline's developers through 19 release candidates, testing each build on live carts (186 total), reporting reproducible defects with JSON run logs and repro steps, and verifying fixes on hardware",
      "As the warehouse's only technical resource since February 2026, owned 200+ field device replacements end to end, catching units marked complete that were still mid-update or stuck syncing before they shipped",
      "Diagnosed device faults from the Android shell (adb, pm, dumpsys, getprop, ip link, ARP), recovering stuck units and isolating a failed internal network link at layer 2",
      "Isolated a cart battery-reading fault to firmware rather than hardware by cross-testing batteries across carts, routing the fix to the right team",
      "Trained the team's first backup technician on replacement workflows to cover during an absence"
    ],
    technologies: ['Bash', 'ADB', 'SSH', 'Docker', 'Kubernetes', 'Android', 'Linux', 'NVIDIA Jetson']
  }
];

const skillsData = {
  languages: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
  ],
  frameworks: [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'FastAPI', icon: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
    { name: 'SQLAlchemy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-plain.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' }
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-plain.svg' },
    { name: 'Sentry', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'pytest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-plain.svg' },
    { name: 'Vitest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitest/vitest-plain.svg' }
  ]
};

const educationData = [
  { name: 'Full Stack Web Development', issuer: 'University of Toronto', date: 'March 2024', id: 'edu1' }
];

const certificatesData = [
  { name: 'Google Project Management', issuer: 'Coursera', date: 'September 2024', link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/GP5HV3DQZC3L', id: 'cert2' }
];

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollToSection('about')} className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all cursor-pointer">
            Austin Graham
          </button>

          <div className="hidden md:flex items-center gap-1 bg-slate-800/80 border border-slate-700/50 rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeSection === item.id ? 'text-white' : 'text-slate-300 hover:text-white'}`}>
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-slate-700 rounded-full" />
                )}
                <span className="relative">{item.label}</span>
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-800/50">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }} className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${activeSection === item.id ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="md:text-6xl lg:text-7xl text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                Austin Graham
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                Software developer building secure, performant web applications with React, TypeScript, Python, and PostgreSQL.
              </p>

              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={20} className="text-cyan-400" />
                <span>Toronto, ON, Canada</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {['TypeScript', 'React', 'Python', 'FastAPI', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-slate-300 text-sm hover:border-cyan-500/50 transition-all">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <button onClick={() => scrollToSection('projects')} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all cursor-pointer">
                View projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-slate-800/80 border border-slate-700 text-white font-semibold rounded-xl hover:border-cyan-500 transition-all cursor-pointer">
                Contact
              </button>
            </div>

            <div className="flex gap-4">
              {[
                { href: 'https://github.com/kyoriku', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/austinmrgraham', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://instagram.com/kyoriku.exe', icon: Instagram, label: 'Instagram' },
                { href: 'mailto:hello@austingraham.ca', icon: Mail, label: 'Email' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl -rotate-6"></div> */}
              <img src="/images/austin.webp" alt="Austin Graham" className="relative w-full h-full object-cover rounded-3xl border border-slate-700/50 shadow-2xl" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="min-h-screen bg-slate-950 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Projects
            </h2>
            <p className="text-xl text-slate-300">
              Source code and live demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div key={index} className="group bg-slate-800/80 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600 transition-all">
                <div className="aspect-video overflow-hidden bg-slate-700">
                  <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="p-4 space-y-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 line-clamp-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.keyTechnologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 font-medium text-cyan-300 bg-slate-700/80 border border-slate-600 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/btn text-sm cursor-pointer">
                    <span>Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    {project.deployedLink ? (
                      <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                        <ExternalLink size={14} />
                        Live Site
                      </a>
                    ) : (
                      <button disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-600 text-sm font-medium rounded-lg cursor-not-allowed">
                        <ExternalLink size={14} />
                        N/A
                      </button>
                    )}
                    {project.githubLink ? (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all">
                        <Github size={14} />
                        Source Code
                      </a>
                    ) : (
                      <button disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 text-slate-600 text-sm font-medium rounded-lg cursor-not-allowed">
                        <Github size={14} />
                        N/A
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="sticky top-4 right-4 ml-auto flex items-center justify-center w-10 h-10 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-xl text-white transition-all z-10 float-right mr-4 cursor-pointer">
              <X size={20} />
            </button>

            <div className="p-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 mt-1">{selectedProject.title}</h3>
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-contain bg-slate-800 rounded-2xl mb-8" />

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">Description</h4>
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    {selectedProject.description.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
                <hr className="border-slate-700" />
                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-400 mb-4">Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-slate-300">
                          <span className="text-cyan-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <hr className="border-slate-700" />
                <div>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-700 border border-slate-600 text-cyan-400 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <hr className="border-slate-700" />
                <div className="flex gap-4  border-t border-slate-800">
                  {selectedProject.deployedLink ? (
                    <a href={selectedProject.deployedLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                      <ExternalLink size={18} />
                      Live Site
                    </a>
                  ) : (
                    <button disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 text-slate-600 font-semibold rounded-xl cursor-not-allowed">
                      <ExternalLink size={18} />
                      N/A
                    </button>
                  )}
                  {selectedProject.githubLink ? (
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 backdrop-blur-sm border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                      <Github size={18} />
                      Source Code
                    </a>
                  ) : (
                    <button disabled className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 text-slate-600 font-semibold rounded-xl cursor-not-allowed">
                      <Github size={18} />
                      N/A
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ExperienceSection = () => {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (skillName) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  const skillCategories = [
    { title: 'Languages', data: skillsData.languages },
    { title: 'Frameworks', data: skillsData.frameworks },
    { title: 'Databases', data: skillsData.databases },
    { title: 'Tools', data: skillsData.tools }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-slate-300">
            Work history and technical skills.
          </p>
        </div>

        <div className="mb-6">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <h3 className="text-lg font-semibold text-white mb-6">
              Work
            </h3>
            {workExperienceData.map((job, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">{job.title}</h4>
                    <p className="text-cyan-400 font-medium">{job.company} • {job.location}</p>
                  </div>
                  <span className="text-slate-300 text-sm md:text-base whitespace-nowrap">{job.period}</span>
                </div>
                {job.summary && (
                  <p className="text-slate-200 leading-relaxed">{job.summary}</p>
                )}
                <ul className="space-y-2 mt-4">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-cyan-400 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
                {job.technologies && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 font-medium text-cyan-300 bg-slate-700/80 border border-slate-600 text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 gap-4">
                  {category.data.map((skill) => (
                    <div key={skill.name} className="group flex flex-col items-center gap-2" title={skill.name}>
                      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-700/50 border border-slate-600 group-hover:border-cyan-500/50 group-hover:scale-110 transition-all">
                        {imageErrors[skill.name] ? (
                          <span className="text-2xl font-bold text-cyan-400">{skill.name.charAt(0)}</span>
                        ) : (
                          <img src={skill.icon} alt="" loading="lazy" className="w-10 h-10 object-contain" onError={() => handleImageError(skill.name)} />
                        )}
                      </div>
                      <span className="text-xs text-slate-300 text-center font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1  gap-6 mb-6">
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <h3 className="text-lg font-semibold text-white mb-6">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                    <GraduationCap size={24} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{edu.name}</h4>
                    <p className="text-slate-300 text-sm">{edu.issuer} • {edu.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 
          <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
            <h3 className="text-lg font-semibold text-white mb-6">Certifications</h3>
            <div className="space-y-4">
              {certificatesData.map((cert) => (
                <div key={cert.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                    <Award size={24} className="text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    {cert.link ? (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="group">
                        <h4 className="text-white font-semibold mb-1 inline-flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                          {cert.name}
                          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                        </h4>
                      </a>
                    ) : (
                      <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    )}
                    <p className="text-slate-300 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-3">
                Resume
              </h3>
              <p className="text-slate-300 leading-relaxed sm:mb-0 md:mb-4">
                PDF with full work history and project details.
              </p>
            </div>
            <a href="/documents/Austin_Graham_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              <FileText size={20} />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [botField, setBotField] = useState('');
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getValidationMessage = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return { visual: 'Required' };
        return null;
      case 'email':
        if (!value.trim()) return { visual: 'Required' };
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { visual: 'Invalid' };
        return null;
      case 'message':
        if (!value.trim()) return { visual: 'Required' };
        if (value.trim().length < 10) return { visual: 'Too short' };
        return null;
      default:
        return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: getValidationMessage(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (botField) {
      setSubmitStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      setBotField('');
      return;
    }

    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const result = getValidationMessage(key, formData[key]);
      if (result) newErrors[key] = result;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const submitData = {
          "form-name": "contact",
          ...formData,
          "subject": botField
        };

        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(submitData)
        });

        setSubmitStatus('Message sent!');
        setFormData({ name: '', email: '', message: '' });
        setBotField('');
        setErrors({});
      } catch (error) {
        setSubmitStatus('Error sending message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="md:text-5xl text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
                Contact
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Available for work.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:hello@austingraham.ca" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    hello@austingraham.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-slate-300">Toronto, ON, Canada</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <Github size={20} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Links</h3>
                  <div className="flex gap-3 mt-2">
                    {[
                      { href: 'https://github.com/kyoriku', icon: Github, label: 'GitHub' },
                      { href: 'https://linkedin.com/in/austinmrgraham', icon: Linkedin, label: 'LinkedIn' },
                      { href: 'https://instagram.com/kyoriku.exe', icon: Instagram, label: 'Instagram' }
                    ].map((social, idx) => (
                      <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-slate-300 hover:text-cyan-400 transition-colors">
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="subject"
            className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-6 space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="sr-only">
              <label htmlFor="subject">Don't fill this out</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                tabIndex={-1}
                aria-label="Leave this field empty"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="name" className="=font-medium text-slate-300">Name</label>
                {errors.name && <span className="text-sm text-red-400">{errors.name.visual}</span>}
              </div>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete='name' className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                {errors.email && <span className="text-sm text-red-400">{errors.email.visual}</span>}
              </div>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete='email' className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                {errors.message && <span className="text-sm text-red-400">{errors.message.visual}</span>}
              </div>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 focus:border-cyan-500 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 transition-all disabled:opacity-50 cursor-pointer">
              <Send size={18} />
              <span>{isSubmitting ? 'Sending...' : 'Send'}</span>
            </button>

            {submitStatus && (
              <div className={`flex items-center gap-3 p-4 rounded-xl ${submitStatus.includes('Error') ? 'bg-red-900/20 border border-red-900/50 text-red-400' : 'bg-green-900/20 border border-green-900/50 text-green-400'}`}>
                {submitStatus.includes('Error') ? <XCircle size={20} /> : <CheckCircle size={20} />}
                <span>{submitStatus}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-300 text-sm">
            © {new Date().getFullYear()} Austin Graham
          </div>
          <div className="flex gap-6">
            {[
              { href: 'https://github.com/kyoriku', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/austinmrgraham', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://instagram.com/kyoriku.exe', icon: Instagram, label: 'Instagram' },
              { href: 'mailto:hello@austingraham.ca', icon: Mail, label: 'Email' }
            ].map((social, idx) => (
              <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-slate-300 hover:text-cyan-400 transition-colors">
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}