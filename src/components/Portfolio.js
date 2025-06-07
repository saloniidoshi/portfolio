"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Cloud,
  ExternalLink,
  Calendar,
  Award,
  ChevronDown,
  Menu,
  X,
} from "lucide-react"

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "Node.js", icon: Server, level: 90 },
    { name: "Express.js", icon: Code, level: 85 },
    { name: "Sails.js", icon: Server, level: 80 },
    { name: "MongoDB", icon: Database, level: 85 },
    { name: "SQL", icon: Database, level: 75 },
    { name: "AWS", icon: Cloud, level: 70 },
    { name: "PostgreSQL", icon: Database, level: 75 },
    { name: "Firebase", icon: Cloud, level: 80 },
    { name: "Git & GitHub", icon: Code, level: 90 },
  ]

  const experience = [
    {
      period: "2022 - Present",
      role: "Web Developer",
      company: "Zignuts Technolab",
      description: "Led development of scalable backend systems, API integrations, and database optimization projects.",
      achievements: [
        "Improved system performance by 40%",
        "Successfully integrated 15+ third-party APIs",
        "Mentored 3 junior developers",
      ],
    },
    {
      period: "2021 - 2022",
      role: "Junior Node.js Developer",
      company: "StartupTech",
      description: "Developed RESTful APIs and worked on microservices architecture using Node.js and MongoDB.",
      achievements: [
        "Built 20+ RESTful APIs",
        "Reduced database query time by 30%",
        "Implemented automated testing suite",
      ],
    },
  ]

  const projects = [
    {
      title: "AI-Powered Meeting & CRM Integration Platform",
      description:
        "Designed and developed a scalable backend system using Node.js, Express, and MongoDB to automate meeting transcription, generate dynamic reports, and integrate with CRMs like Intelliflo and IRESS. Features include AI-driven summarization, SharePoint & Zoom integration, subscription management via Chargebee, and Firebase notifications.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "NLP/ML",
        "SharePoint",
        "Zoom",
        "Intelliflo",
        "IRESS",
        "Chargebee",
        "Firebase",
      ],
      highlights: ["AI Integration", "Real-time Processing", "CRM Integration"],
    },
    {
      title: "Online Marketplace for Used Filmmaking & Photography Equipment",
      description:
        "Built a full-featured eCommerce platform for buying and selling used filmmaking and photography gear. Integrated secure role-based authentication, real-time chat via Socket.IO, social login, Stripe payments, and SMS/email/push notifications. Supported product listing, transaction management, and analytics with a dynamic dashboard.",
      tech: [
        "Node.js",
        "Socket.IO",
        "MySQL",
        "AWS S3",
        "Stripe",
        "Firebase",
        "Twilio",
        "Google & Facebook OAuth",
        "RESTful APIs",
      ],
      highlights: ["Real-time Chat", "Payment Integration", "Social Authentication"],
    },
    {
      title: "Assessment Portal for Recruitment Automation",
      description:
        "Engineered a scalable recruitment platform that streamlines candidate evaluation through customizable tests, quizzes, and interviews. Implemented secure role-based access for admins, recruiters, and candidates, real-time candidate monitoring to prevent malpractice, and optimized backend services for high assessment loads. Automated notifications via email and Firebase, ensuring secure and compliant data handling.",
      tech: ["Node.js", "Sails.js", "AWS", "SQL", "Firebase", "RESTful APIs", "Authentication & RBAC", "Middleware"],
      highlights: ["Role-based Access", "Real-time Monitoring", "Scalable Architecture"],
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SD
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-black" /> : <Menu className="h-6 w-6 text-black" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3 pt-4">
                {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left px-2 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      activeSection === item.toLowerCase() ? "text-blue-600" : "text-slate-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
                <span className="text-2xl sm:text-4xl font-bold text-white">SD</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Saloni Doshi
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-4 max-w-2xl mx-auto px-4">
              Backend Developer specializing in Node.js
            </p>
            <p className="text-base sm:text-lg text-slate-500 mb-8 max-w-xl mx-auto px-4">
              Building scalable, high-performance systems with 2.5+ years of experience
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 px-4">
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors group text-black">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                GitHub
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors group text-black">
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group">
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact Me
              </button>
            </div>
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20 space-y-16 sm:space-y-20">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12 mt-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6">
                  Backend Developer with 2.5 years of hands-on experience building scalable and high-performance systems
                  using Node.js, Sails.js, and MongoDB. Proficient in designing RESTful APIs, integrating third-party
                  services, and optimizing database performance.
                </p>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Experienced in asynchronous programming, middleware development, and Git-based workflows. Adept at
                  deploying backend solutions to cloud environments and automating processes for efficiency.
                </p>
              </div>
              <div className="lg:col-span-4 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">2.5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">15+ API Integrations</span>
                </div>
                <div className="flex items-center gap-3">
                  <Server className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <Database className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-slate-700">Database Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                  <div className="lg:w-1/4">
                    <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{exp.period}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">{exp.role}</h3>
                    <p className="text-sm sm:text-base text-slate-600">{exp.company}</p>
                  </div>
                  <div className="lg:w-3/4">
                    <p className="text-sm sm:text-base text-slate-600 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm sm:text-base text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div
                  key={skill.name}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col xl:flex-row gap-4 sm:gap-6">
                  <div className="xl:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-slate-100 rounded-lg self-start">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="xl:w-1/3">
                    <h4 className="font-semibold text-sm sm:text-base text-slate-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 border border-slate-300 rounded text-xs text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/20">
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
                work together!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="group text-center">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">Email</h3>
                <p className="text-slate-600 break-all text-xs sm:text-sm">salonidoshi17@gmail.com</p>
                <button className="mt-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  Send Email
                </button>
              </div>
              <div className="group text-center">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">LinkedIn</h3>
                <p className="text-slate-600 text-xs sm:text-sm">Connect with me</p>
                <button className="mt-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Profile
                </button>
              </div>
              <div className="group text-center sm:col-span-2 lg:col-span-1">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Github className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">GitHub</h3>
                <p className="text-slate-600 text-xs sm:text-sm">Check out my code</p>
                <button className="mt-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  View Repositories
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Portfolio
