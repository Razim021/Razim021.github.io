const links = {
  email: 'mailto:razimmammadli@gmail.com',
  linkedin: 'https://www.linkedin.com/in/razim-mammadli/',
  github: 'https://github.com/Razim021',
  resume: '/Razim_Mammadli_Resume.pdf',
};

const projects = [
  {
    title: 'TemporalBertSpam',
    sub: 'Transformer-based SMS spam detection',
    date: 'Spring 2026',
    stack: ['Python', 'PyTorch', 'HuggingFace'],
    points: [
      'Custom NLP architecture: DistilBERT embeddings + 4-layer Transformer encoder, jointly modeling message semantics and temporal behavior.',
      'Outperformed a DeBERTa baseline (AUC 0.90, F1 0.84) on a ~43K-row SMS dataset stored in Azure PostgreSQL.',
      'Built with two teammates for a graduate-level NLP course.',
    ],
  },
  {
    title: 'AICC Automated Safety Tester',
    sub: 'Red-team framework for a university AI chatbot',
    date: 'Spring 2026',
    stack: ['Python', 'Playwright', 'Gemini API'],
    points: [
      'Automated adversarial prompts across 6 safety categories with single-turn and multi-turn (up to 6 turns) escalation modes.',
      'Gemini 2.5 Flash as a policy-grounded judge returning PASS/FAIL with structured JSON rationale.',
      '97% pass rate across 33 multi-turn interactions; caught a subtle foul-language failure manual review would likely miss.',
    ],
  },
  {
    title: 'AI Path-Planning & Reinforcement Learning',
    sub: 'Pacman-based agent environment',
    date: 'Sep 2025 – Present',
    stack: ['Python'],
    points: [
      'Four systems: search, multi-agent planning, adversarial agents, and reinforcement learning.',
      'DFS, BFS, UCS, A*, alpha-beta pruning, expectimax, Q-learning, value iteration.',
      'Admissible and consistent heuristics cut node expansions by up to 70% on complex mazes.',
    ],
  },
  {
    title: 'Toga.az',
    sub: 'Multi-vendor fashion marketplace',
    date: 'May 2026 – Present',
    stack: ['WordPress', 'WooCommerce', 'Dokan', 'Docker'],
    points: [
      'Software Lead on a 2-person team; launched with 250 SKUs across 5 onboarded vendors.',
      'Extended Dokan/WooCommerce through custom hooks and block-template overrides instead of forking core.',
      'AI-assisted dev workflow (Claude Code) that sped up the fix-and-ship cycle for routine tickets.',
    ],
  },
];

const skills = [
  ['Languages', 'Python, C, C++, C#, Ruby'],
  ['ML', 'PyTorch, TensorFlow, scikit-learn, Neural Networks, RL'],
  ['LLM / AI', 'Gemini API, OpenAI API, LLM evaluation, AI safety testing'],
  ['Tools', 'Playwright, Git/GitHub, Docker, Linux Bash, VS Code, Emacs'],
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <a href="#top" className="brand">RM</a>
          <nav>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <p className="eyebrow">AI / ML · Software Engineering</p>
          <h1>Razim Mammadli</h1>
          <p className="lead">
            M.S. ECE student (ML/AI track) at Duke. I build LLM evaluation tooling, NLP models, and
            RL agents, and ship production software.
          </p>
          <div className="cta">
            <a className="btn primary" href={links.resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="cardhead">
                  <h3>{p.title}</h3>
                  <span className="date">{p.date}</span>
                </div>
                <p className="sub">{p.sub}</p>
                <ul>
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <div className="tags">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="edu">
            <div>
              <h3>Duke University — Pratt School of Engineering</h3>
              <p className="sub">M.S. Electrical &amp; Computer Engineering, ML/AI Track</p>
            </div>
            <span className="date">Sep 2026 – May 2028</span>
          </div>
          <div className="edu">
            <div>
              <h3>University of South Florida</h3>
              <p className="sub">B.S. Computer Science · GPA 3.64 / 4.0</p>
              <p className="muted">Green &amp; Gold Presidential Scholars Award · Dean’s List (Fall 2022, Fall 2025)</p>
            </div>
            <span className="date">Aug 2022 – May 2026</span>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <dl className="skills">
            {skills.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p className="lead small">
            Looking for Summer 2027 software / AI / ML internships. Best reached by email.
          </p>
          <div className="cta">
            <a className="btn primary" href={links.email}>razimmammadli@gmail.com</a>
            <a className="btn" href={links.resume} target="_blank" rel="noreferrer">Resume (PDF)</a>
          </div>
        </section>
      </main>

      <footer className="wrap foot">© {new Date().getFullYear()} Razim Mammadli</footer>
    </>
  );
}
