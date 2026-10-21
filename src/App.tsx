import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Layers3, Sparkles, Database,
  Activity, CheckCircle2
} from 'lucide-react'

type Project = {
  number: string
  name: string
  category: string
  description: string
  stack: string[]
  icon: typeof Sparkles
  image?: string
  accent: string
  status: string
  details: string[]
}

const projects: Project[] = [
  {
    number: '01',
    name: 'AI Reliability Lab',
    category: 'AI ENGINEERING / EVALUATION',
    description: 'A platform concept for evaluating AI systems with repeatable tests, quality checks, and visibility into latency and cost.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript'],
    icon: Sparkles,
    image: '/ai-reliability-lab.png',
    accent: 'violet',
    status: 'In progress',
    details: [
      'Designed around repeatable evaluation runs and side-by-side model comparisons.',
      'Planned regression checks to help surface changes in output quality.',
      'Intended to make quality, latency, and cost easier to inspect together.',
    ],
  },
  {
    number: '02',
    name: 'TaskForge',
    category: 'BACKEND / DISTRIBUTED SYSTEMS',
    description: 'A distributed job-processing project focused on worker coordination, reliable retries, and operational visibility.',
    stack: ['Go', 'PostgreSQL', 'Redis', 'Docker'],
    icon: Layers3,
    image: '/taskforge-dashboard.png',
    accent: 'mint',
    status: 'In progress',
    details: [
      'Designed around concurrent workers and persistent job tracking.',
      'Planned retry policies, worker heartbeats, and recovery for abandoned jobs.',
      'Includes a proposed dashboard and load tests for throughput and latency.',
    ],
  },
  {
    number: '03',
    name: 'FinQuantum Dashboard',
    category: 'FULL-STACK DEVELOPMENT / INTERNSHIP',
    description: 'Improved a reporting dashboard and helped translate product requirements into practical full-stack features.',
    stack: ['Javascript', 'TypeScript', 'Remix', 'React', 'MongoDB'],
    icon: Database,
    accent: 'blue',
    status: 'Internship',
    details: [
      'Implemented reporting UI and reusable React hooks.',
      'Improved report loading time by about 33% through server-side caching.',
      'Optimized MongoDB schema and indexing, reducing query execution time by about 40%.',
      'Project preview unavailable because the work is covered by a signed NDA.',
    ],
  },
]

const skills = [
  { label: 'Languages', items: ['C++', 'Python', 'TypeScript', 'JavaScript', 'Java', 'C#'] },
  { label: 'Frameworks & Libraries', items: ['React', 'Remix', 'FastAPI', 'Unity'] },
  { label: 'Databases & Caching', items: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { label: 'DevOps & Infrastructure', items: ['GitHub Actions', 'Docker', 'AWS'] },
  { label: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [copied, setCopied] = useState(false)

  const closeMenu = () => setMenuOpen(false)
  const email = 'settpainghtin03@gmail.com'

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sett Paing Htin home" onClick={closeMenu}>
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">SETT PAING HTIN</span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <h1>Building software<br />with <span className="gradient-text">purpose.</span></h1>
            <p className="hero-intro">
              I’m Sett — a computer science graduate who enjoys turning complex problems into useful, reliable software.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <div className="meta-item"><span className="meta-label">BASED IN</span><span>San Jose, California</span></div>
              <div className="meta-divider" />
              <div className="meta-item"><span className="meta-label">EDUCATION</span><span>UC Santa Cruz · Computer Science: Game Design</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile photo and developer illustration">
            <div className="profile-photo-frame"><img src="/sett-profile.JPG" alt="Sett Paing Htin at the coast" className="profile-photo" /></div>
            <div className="visual-grid" />
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="orbit-node node-one" />
            <div className="orbit-node node-two" />
            <div className="orbit-node node-three" />
            <div className="code-window">
              <div className="window-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>developer.ts</span>
                <span className="window-lock">TS</span>
              </div>
              <div className="code-lines">
                <div><span className="line-no">01</span><span className="syntax-purple">const</span> <span className="syntax-blue">engineer</span> = {'{'}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;focus: <span className="syntax-green">'full-stack'</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;mindset: <span className="syntax-green">'keep learning'</span>,</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;quality: <span className="syntax-orange">true</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;curiosity: <span className="syntax-orange">Infinity</span></div>
                <div><span className="line-no">06</span>{'}'}</div>
                <div className="code-spacer"><span className="line-no">07</span></div>
                <div><span className="line-no">08</span><span className="syntax-purple">while</span> (learning) {'{'}</div>
                <div><span className="line-no">09</span>&nbsp;&nbsp;buildSomethingUseful()</div>
                <div><span className="line-no">10</span>{'}'}<span className="cursor" /></div>
              </div>
              <div className="window-footer"><span><span className="tiny-green" /> All systems operational</span><span>UTF-8&nbsp;&nbsp; TypeScript</span></div>
            </div>
            
            
          </div>
          <a href="#work" className="scroll-cue"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><div className="section-kicker">01 / SELECTED WORK</div><h2>Projects & experience<span className="heading-period">.</span></h2></div>
            <p>A mix of hands-on product development and systems projects I’m building to deepen my engineering skills.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article className={`project-card accent-${project.accent}`} key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number} / 03</span>
                    <span className={`project-status ${project.status === 'Internship' ? 'status-complete' : ''}`}>{project.status === 'Internship' && <CheckCircle2 size={12} />}{project.status}</span>
                  </div>
                  <div className={`project-art ${project.image ? 'project-art-image' : ''}`}>
                    {project.image && <img className="project-screenshot" src={project.image} alt={`${project.name} dashboard preview`} />}
                    <div className="art-grid" />
                    {!project.image && <div className="art-icon"><Icon size={27} strokeWidth={1.5} /></div>}
                    {project.number === '03' && <div className="nda-overlay"><span>PREVIEW UNAVAILABLE</span><b>Signed NDA</b></div>}
                  </div>
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <button className="project-link" onClick={() => setActiveProject(project)}>{project.status === 'Internship' ? 'View project overview' : 'View project overview'} <ArrowUpRight size={15} /></button>
                </article>
              )
            })}
          </div>
          <p className="project-note"><span>*</span> AI Reliability Lab and TaskForge are in-progress projects. Planned features are labeled as such, details will be updated as implementation progresses.</p>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="section-heading">
            <div><div className="section-kicker">02 / A LITTLE ABOUT ME</div><h2>Curious by default<span className="heading-period">.</span></h2></div>
          </div>
          <div className="about-grid">
            <div className="about-main">
              <div className="about-mark">“</div>
              <p className="about-statement">I like understanding <span>how things work</span> — then making them work better.</p>
              <p className="about-body">I graduated from UC Santa Cruz with a degree in Computer Science: Game Design. My experience spans full-stack web development, database performance, and user-focused interfaces. Outside of shipping features, I’m interested in the engineering behind dependable systems.</p>
              <p className="about-body">I value clear communication, thoughtful implementation, and learning from feedback. I’m looking for a team where I can contribute, grow, and build software people can rely on.</p>
            </div>
            <div className="education-card">
              <div className="ucsc-logo" aria-label="UC Santa Cruz wordmark"><span className="ucsc-slug">UC</span><span className="ucsc-wordmark">SANTA CRUZ</span></div>
              <div className="education-label">EDUCATION</div>
              <h3>University of California,<br />Santa Cruz</h3>
              <p>B.S. Computer Science: Game Design</p>
              <div className="education-bottom"><span>Dean’s Honors</span><span>2026</span></div>
              <div className="edu-watermark">UCSC</div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <div><div className="section-kicker">03 / TOOLKIT</div><h2>Tools I work with<span className="heading-period">.</span></h2></div>
            <p>A practical toolkit built through coursework, projects, and internship experience.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-intro"><div className="skills-icon"><Code2 size={22} /></div><h3>Learn. Build.<br /><span>Improve.</span></h3><p>I’m comfortable moving between UI details and backend logic, and I keep expanding my toolkit through hands-on projects.</p></div>
            <div className="skills-list">
              {skills.map((group, index) => (
                <div className="skill-row" key={group.label}>
                  <div className="skill-row-label"><span>0{index + 1}</span>{group.label}</div>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-glow" />
            <div className="section-kicker">04 / NEXT STEP</div>
            <h2>Let’s build something<br /><span className="gradient-text">meaningful.</span></h2>
            <p>I’m looking for opportunities to contribute to a thoughtful engineering team. If my background looks like a fit, I’d love to hear from you.</p>
            <div className="contact-actions">
              <button className="button button-primary" onClick={copyEmail}><Mail size={16} /> {copied ? 'Email copied' : 'Copy email address'} <ArrowUpRight size={15} /></button>
              <a className="button button-quiet" href={`mailto:${email}`}>Send an email <ArrowRight size={15} /></a>
            </div>
            
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name">SETT PAING HTIN</span></a>
        <span className="footer-copy">Designed & built with care <span>© 2026</span></span>
        <div className="social-links">
          <a href="https://github.com/SettPaingHtin" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/settpainghtin" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={17} /></a>
          <a href={`mailto:${email}`} aria-label="Email"><Mail size={17} /></a>
        </div>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveProject(null) }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X size={19} /></button>
            <div className="section-kicker">{activeProject.number} / {activeProject.category}</div>
            <div className="modal-title-row"><h2 id="modal-title">{activeProject.name}</h2><span className={`project-status ${activeProject.status === 'Internship' ? 'status-complete' : ''}`}>{activeProject.status}</span></div>
            <p className="modal-description">{activeProject.description}</p>
            <div className="modal-detail-label">{activeProject.status === 'Internship' ? 'CONTRIBUTIONS & IMPACT' : 'SCOPE & DIRECTION'}</div>
            <ul className="modal-details">{activeProject.details.map((detail) => <li key={detail}><span><CheckCircle2 size={16} /></span>{detail}</li>)}</ul>
            <div className="modal-stack">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
            {activeProject.status !== 'Internship' && <p className="modal-footnote">This project is in progress. The overview describes its current direction, not a claim that every listed feature is complete.</p>}
            <button className="button button-primary modal-done" onClick={() => setActiveProject(null)}>Close overview <X size={15} /></button>
          </section>
        </div>
      )}
    </div>
  )
}

export default App