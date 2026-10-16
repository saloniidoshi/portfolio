"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Server,
  Cloud,
  Lock,
  Calendar,
  Terminal,
  CheckCircle2,
  Menu,
  X,
  Cpu,
  GraduationCap,
  Sparkles,
  Wrench,
} from "lucide-react"

const NAV_ITEMS = [
  { id: "overview", label: "Overview", path: "01. overview" },
  { id: "experience", label: "Experience", path: "02. experience" },
  { id: "skills", label: "Skills", path: "03. skills" },
  { id: "projects", label: "Projects", path: "04. projects" },
  { id: "education", label: "Education", path: "05. education" },
  { id: "contact", label: "Contact", path: "06. contact" },
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Skills Categories including Development Tools & Learning Interests
  const skillCategories = [
    {
      category: "Backend & Systems",
      skills: ["Python","Node.js", "Express.js", "Sails.js", "RESTful APIs", "Microservices", "Socket.IO (Real-time)"],
      icon: Server,
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "SQL Indexing & Query Tuning", "Mongoose", "Sequelize", "Waterline ORM"],
      icon: Database,
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS (S3, SQS)", "Firebase", "CI/CD Pipelines", "Git & Bitbucket Workflow"],
      icon: Cloud,
    },
    {
      category: "Auth, Security & Testing",
      skills: ["JWT & RBAC Middleware", "OAuth (Google/Facebook)", "Mocha & Chai Unit Testing", "Postman / API Docs"],
      icon: Lock,
    },
    {
      category: "Integrations & Tools",
      skills: ["Stripe Payments", "Twilio SMS", "Chargebee Subscriptions", "VS Code", "MySQL Workbench", "DBeaver", "PgAdmin", "MongoDB Compass"],
      icon: Wrench,
    },
    // {
    //   category: "Learning Interests",
    //   skills: ["ReactJS", "React Native", "Next.js"],
    //   icon: Sparkles,
    // },
  ]

  const experience = [
    {
      period: "Nov 2022 — Aug 2025",
      role: "Jr. Web Developer",
      company: "Zignuts Technolab Pvt Ltd",
      description:
        "Led backend engineering for scalable web applications built on Node.js and Sails.js—architecting RESTful APIs, integrating third-party services, tuning database queries, and managing cloud deployments.",
      achievements: [
        "Delivered over 10 high-reliability REST API endpoints integrated with AWS S3, Google Maps, and payment gateways.",
        "Boosted system performance and reduced backend error rates by 30% through strict validation and query optimization in MongoDB and PostgreSQL.",
        "Engineered and integrated third-party RESTful APIs, including payment gateways (Stripe, Chargebee), analytics, and communication pipelines.",
        "Implemented automated unit and integration testing suites, increasing deployment stability and code reliability.",
        "Architected enterprise authentication and authorization flows utilizing JWT, Firebase Auth, and Role-Based Access Control (RBAC).",
        "Coordinated with QA and frontend teams to launch 3+ major client projects on schedule and within scope.",
      ],
    },
     {
    period: "Jan 2026 — Jun 2026",
    role: "Web Developer",
    company: "Dharmik Bharat Pvt Ltd",
    description:
      "Developed and maintained backend services using Node.js and Sails.js, building REST APIs and supporting content, user, event, and subscription-based features.",
    achievements: [
      "Developed and maintained RESTful APIs for content, user, event, and subscription management.",
      "Worked with MongoDB and PostgreSQL to manage application data and implement efficient database queries.",
      "Integrated backend services and business logic using Node.js and Sails.js.",
      "Supported VPS deployments, production maintenance, and troubleshooting of application issues.",
      "Collaborated directly with clients to understand requirements, resolve issues, and deliver requested improvements.",
    ],
  },
  ]

  const projects = [
    {
      title: "AI-Powered Meeting & CRM Integration Platform",
      description:
        "Engineered a high-throughput backend system in Node.js and MongoDB that automates meeting transcriptions, report generation, and multi-CRM syncing with Intelliflo and IRESS. Features include AI/NLP summarization workflows, SharePoint/Zoom API integrations, Chargebee subscription handling, and Firebase real-time notifications.",
      tech: ["Node.js", "Sails.js", "MongoDB", "AWS S3", "JWT", "NLP/ML", "Chargebee", "Firebase"],
      highlights: ["AI Workflows", "Real-time Sync", "CRM Integration"],
    },
    {
      title: "Online Marketplace for Photography & Filmmaking Gear",
      description:
        "Built a scalable backend for a peer-to-peer equipment marketplace. Implemented real-time buyer-seller messaging via Socket.IO, Stripe payment gateway processing, MySQL relational data architecture, AWS S3 media uploads, and multi-channel alerts via Twilio SMS and Firebase.",
      tech: ["Node.js", "Socket.IO", "MySQL", "AWS S3", "Stripe API", "Firebase", "Twilio", "OAuth 2.0"],
      highlights: ["Real-time Chat", "Stripe Checkout", "Role Auth"],
    },
    {
      title: "Assessment & Recruitment Automation Portal",
      description:
        "Architected an enterprise recruitment portal enabling custom candidate tests, live proctoring/monitoring to prevent malpractice, and automated grading. Built role-based access control (RBAC) middleware in Sails.js/Node.js to handle high assessment concurrency safely, optimizing query speeds by 35%.",
      tech: ["Node.js", "Sails.js", "AWS", "SQL", "Firebase", "RESTful APIs", "RBAC Middleware"],
      highlights: ["Proctoring Logic", "Role-Based Access", "35% Speedup"],
    },
  ]

  const goToSection = (id) => {
    setActiveSection(id)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-sans">
      {/* Mobile Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-slate-800 px-5 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <img
            src="/profilepic.jpg"
            alt="Saloni Doshi"
            className="w-9 h-9 rounded-full object-cover border border-slate-700"
          />
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Saloni Doshi</p>
            {/* <p className="text-xs text-indigo-400 font-mono">Node.js Backend Developer</p> */}
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white rounded-lg"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#0F172A] pt-20 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={`font-mono text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.path}
              </button>
            ))}
          </nav>
          <div className="flex justify-around pt-6 border-t border-slate-800">
            <a href="https://github.com/saloniidoshi" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/salonidoshii/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&to=salonidoshi17@gmail.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      )}

      {/* Desktop Navigation Sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-80 bg-[#0F172A] border-r border-slate-800 px-8 py-10 justify-between">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/profilepic.jpg"
              alt="Saloni Doshi"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500/30 shadow-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Saloni Doshi</h1>
              {/* <p className="text-xs font-mono text-indigo-400">Node.js Backend Developer</p> */}
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {/* <span className="text-xs text-emerald-400 font-medium">Available for Node.js backend roles</span> */}
          </div>

          <nav className="space-y-1.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goToSection(item.id)}
                className={`w-full font-mono text-left px-3.5 py-2.5 rounded-lg text-xs tracking-wide transition-all flex items-center justify-between ${
                  activeSection === item.id
                    ? "bg-indigo-600/20 text-indigo-400 font-semibold border-l-2 border-indigo-500"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <span>{item.path}</span>
                {activeSection === item.id && <Terminal className="h-3.5 w-3.5 text-indigo-400" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
          <a
            href="https://github.com/saloniidoshi"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <Github className="h-4 w-4" /> Github
          </a>
          <a
            href="https://www.linkedin.com/in/salonidoshii/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-xs font-mono"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-80 pt-20 lg:pt-0">
        <div
          className={`max-w-4xl mx-auto px-6 sm:px-12 py-12 lg:py-20 transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Section 01: ATS-Friendly Overview */}
          {activeSection === "overview" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">01. Overview</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Software Engineer | Backend & Data Engineering | MSc Data Science & AI
                </h2>
              </div>

              {/* ATS Structured Executive Summary */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  MSc Data Science and AI student with 3+ years’ experience as a software developer building production Node.js applications for UK and UAE clients. Strong in API design, database optimisation, secure authentication and cloud integrations on AWS, with a growing focus on data and AI. Experienced in Agile teams, client communication, code reviews and mentoring. Seeking a technology placement or graduate role from 2027
                </p>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
Experienced in asynchronous programming, middleware development, and Git-based workflows. Adept at deploying backend solutions to cloud environments and automating processes for efficiency.

                </p>
              </div>

              {/* Impact Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-indigo-600">2.5 Yrs</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Backend Experience</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-indigo-600">35%</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Query Speedup</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-indigo-600">10+</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">High-Reliability APIs</p>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                  <p className="text-2xl font-extrabold text-indigo-600">30%</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Error Reduction</p>
                </div>
              </div>

              {/* Core Skill Keywords Box for ATS Scan */}
              <div className="bg-slate-900 text-slate-300 rounded-2xl p-6 shadow-sm space-y-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-indigo-400 font-bold">
                  <Code2 className="h-4 w-4" /> // Core Competencies
                </div>
                <p className="leading-relaxed">
                 Python • Node.js • Express.js • Sails.js • MongoDB • PostgreSQL • MySQL • RESTful APIs • Microservices • AWS S3 & SQS • Firebase • Socket.IO • JWT • OAuth • Stripe API • CI/CD • Unit Testing • Git & Bitbucket
                </p>
              </div>
            </section>
          )}

          {/* Section 02: Experience */}
          {activeSection === "experience" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">02. Experience</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Work History</h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-1">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-sm font-semibold text-indigo-600">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{exp.description}</p>

                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 03: Skills */}
          {activeSection === "skills" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">03. Technical Stack</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Categorized Competencies</h2>
                <p className="text-slate-600 text-sm mt-1">
                  Derived directly from production experience, tools, and technical interests.
                </p>
              </div>

              <div className="space-y-4">
                {skillCategories.map((cat) => {
                  const CategoryIcon = cat.icon
                  return (
                    <div key={cat.category} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3">
                      <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base">
                        <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                          <CategoryIcon className="h-4 w-4" />
                        </div>
                        <h3>{cat.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {cat.skills.map((s) => (
                          <span
                            key={s}
                            className="text-xs font-mono px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          {/* Section 04: Projects */}
          {activeSection === "projects" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">04. Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Featured Projects</h2>
              </div>

              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.title} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.highlights.map((highlight) => (
                        <span key={highlight} className="text-[11px] font-mono font-medium px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100">
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{project.description}</p>

                    <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-2 py-1 bg-slate-100 text-slate-600 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 05: Education */}
          {activeSection === "education" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">05. Education</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Academic Qualification</h2>
              </div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Master of Science Data Science and Artificial Intelligence</h3>
                    <p className="text-sm font-semibold text-indigo-600">Sheffield Hallam University • Sheffield, United Kingdom </p>
                    {/* <p className="text-xs text-slate-500 font-mono mt-1">Cumulative GPA: 7.36 / 10</p> */}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start sm:self-auto border border-slate-200">
                  2026 – Present
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 flex-shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Bachelor of Technology in Computer Science</h3>
                    <p className="text-sm font-semibold text-indigo-600">Parul University • Vadodara, India</p>
                    <p className="text-xs text-slate-500 font-mono mt-1">Cumulative GPA: 7.36 / 10</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg self-start sm:self-auto border border-slate-200">
                  Graduated 2023
                </div>
              </div>
            </section>
          )}

          {/* Section 06: Contact */}
          {activeSection === "contact" && (
            <section className="space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-indigo-600 tracking-wider uppercase">06. Contact</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">Get In Touch</h2>
                <p className="text-slate-600 mt-2">
                  Actively open for mid-level Backend Developer opportunities and software engineering roles.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=salonidoshi17@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition-colors flex flex-col items-start justify-between gap-4 group shadow-sm"
                >
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-xs font-mono text-slate-400">Email Direct</p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 truncate">salonidoshi17@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/salonidoshii/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition-colors flex flex-col items-start justify-between gap-4 group shadow-sm"
                >
                  <Linkedin className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-xs font-mono text-slate-400">LinkedIn</p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">in/salonidoshii</p>
                  </div>
                </a>

                <a
                  href="https://github.com/saloniidoshi"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-indigo-500 transition-colors flex flex-col items-start justify-between gap-4 group shadow-sm"
                >
                  <Github className="h-6 w-6 text-indigo-600" />
                  <div>
                    <p className="text-xs font-mono text-slate-400">GitHub</p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">saloniidoshi</p>
                  </div>
                </a>
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  )
}