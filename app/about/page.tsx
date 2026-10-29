
import "./about.css";

const values = [
  {
    number: "01",
    title: "Accuracy First",
    description:
      "We emphasize precise coding practices, attention to detail and the importance of accurate healthcare documentation.",
    symbol: "+",
  },
  {
    number: "02",
    title: "Learn with Purpose",
    description:
      "We connect foundational concepts with practical learning so students can build knowledge with confidence.",
    symbol: "◎",
  },
  {
    number: "03",
    title: "Integrity Always",
    description:
      "We encourage ethical coding practices, professional responsibility and respect for patient information.",
    symbol: "◇",
  },
  {
    number: "04",
    title: "Grow Continuously",
    description:
      "We believe in lifelong learning, adaptability and keeping pace with changes in healthcare coding.",
    symbol: "↗",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-navbar">
        <a href="/" className="about-logo">
          We Code Health<span>.</span>
        </a>

        <nav className="about-nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/courses">Courses</a>
          <a href="/about" className="active" aria-current="page">
            About
          </a>
        </nav>

        <a href="/login" className="about-login-button">
          Login <span>→</span>
        </a>
      </header>

      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-label">
            <span className="about-label-dot" />
            ABOUT WE CODE HEALTH
          </div>

          <h1>
            Empowering the people
            <br />
            behind <span>better healthcare.</span>
          </h1>

          <p className="about-hero-description">
            We are building a learning experience that helps aspiring
            professionals understand medical coding, strengthen their skills
            and prepare for opportunities in the healthcare industry.
          </p>

          <div className="about-hero-actions">
            <a href="/courses" className="about-primary-button">
              Explore our courses <span>→</span>
            </a>
            <a href="#our-mission" className="about-text-link">
              Discover our purpose ↓
            </a>
          </div>

          <div className="about-hero-note">
            <span>+</span>
            Accuracy · Knowledge · Professional Growth
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-visual-glow" />

          <div className="about-visual-card">
            <div className="about-visual-top">
              <span
                className="about-medical-mark"
                style={{ display: "grid", placeItems: "center", lineHeight: 1 }}
              >
                +
              </span>
              <div>
                <strong>MEDICAL CODING</strong>
                <span>LEARN WITH PURPOSE</span>
              </div>
              <span className="about-visual-status">LEARN</span>
            </div>

            <div className="about-visual-divider" />

            <p className="about-visual-kicker">WHERE HEALTHCARE MEETS DETAIL</p>
            <h2>
              Every code
              <br />
              tells a story.
            </h2>
            <p className="about-visual-description">
              Understand the language of healthcare documentation and
              the importance of coding it accurately.
            </p>

            <div className="about-code-illustration">
              <div className="about-code-line">
                <span>01</span>
                <i className="code-short" />
                <i className="code-long" />
              </div>
              <div className="about-code-line">
                <span>02</span>
                <i className="code-long" />
                <i className="code-medium" />
              </div>
              <div className="about-code-line">
                <span>03</span>
                <i className="code-medium" />
                <i className="code-short" />
              </div>
            </div>

            <div className="about-visual-bottom">
              <span>KNOWLEDGE</span>
              <span>PRECISION</span>
              <span>GROWTH ↗</span>
            </div>
          </div>

          <div className="about-floating-note">
            <span className="about-floating-icon">✓</span>
            <div>
              <strong>Learn with confidence</strong>
              <p>Build knowledge step by step</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="about-intro-label">
          <span>01</span>
          <span>OUR STORY</span>
        </div>

        <div className="about-intro-content">
          <h2>
            Building a bridge between
            <span> learning and healthcare careers.</span>
          </h2>
          <div className="about-intro-copy">
            <p>
              Medical coding plays an important role in translating
              healthcare documentation into standardized codes used in
              medical billing, claims processing, reporting and healthcare
              administration.
            </p>
            <p>
              At We Code Health, our focus is to make medical coding education
              structured, understandable and career-oriented. We aim to help
              learners develop a strong foundation, practise their knowledge
              and understand the professional standards expected in this field.
            </p>
          </div>
        </div>
      </section>

      <section className="about-purpose" id="our-mission">
        <div className="about-purpose-heading">
          <p className="about-eyebrow">OUR PURPOSE</p>
          <h2>
            One purpose.
            <br />
            <span>A meaningful impact.</span>
          </h2>
          <p>
            Everything we build starts with our commitment to better learning
            and professional development.
          </p>
        </div>

        <div className="about-purpose-grid">
          <article className="about-purpose-card mission-card">
            <div className="about-purpose-icon">◎</div>
            <p className="about-purpose-overline">WHY WE EXIST</p>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, structured and practical medical coding
              education that helps learners build coding knowledge, develop
              accuracy and prepare for professional opportunities in the
              healthcare industry.
            </p>
            <span className="about-card-index">01 / MISSION</span>
          </article>

          <article className="about-purpose-card vision-card">
            <div className="about-purpose-icon">↗</div>
            <p className="about-purpose-overline">WHERE WE ARE GOING</p>
            <h3>Our Vision</h3>
            <p>
              To become a trusted learning destination for aspiring medical
              coding professionals, known for quality education, ethical
              learning practices and a commitment to continuous improvement.
            </p>
            <span className="about-card-index">02 / VISION</span>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <p className="about-eyebrow">WHAT GUIDES US</p>
          <h2>
            The values behind
            <br />
            <span>every lesson.</span>
          </h2>
          <p>
            We believe strong professionals are built through knowledge,
            responsibility and consistent practice.
          </p>
        </div>

        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.number}>
              <div className="about-value-top">
                <span>{value.number}</span>
                <span className="about-value-symbol">{value.symbol}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-approach">
        <div className="about-approach-content">
        <p className="about-eyebrow">THE WE CODE HEALTH APPROACH</p>
          <h2>
            Learn the concepts.
            <br />
            <span>Practise the details.</span>
            <br />
            Build your confidence.
          </h2>
          <p>
            We aim to make learning progressive and practical, with a focus on
            coding fundamentals, documentation, code selection concepts and
            professional learning habits.
          </p>
          <a href="/courses" className="about-primary-button">
            Find your learning path <span>→</span>
          </a>
        </div>

        <div className="about-approach-steps">
          <div className="about-step">
            <span className="about-step-number">01</span>
            <div>
              <h3>Understand</h3>
              <p>Build a foundation in medical terminology and coding concepts.</p>
            </div>
          </div>
          <div className="about-step">
            <span className="about-step-number">02</span>
            <div>
              <h3>Practise</h3>
              <p>Apply concepts through structured exercises and examples.</p>
            </div>
          </div>
          <div className="about-step">
            <span className="about-step-number">03</span>
            <div>
              <h3>Progress</h3>
              <p>Strengthen your knowledge and prepare for your next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div>
          <p className="about-eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
          <h2>
            Build your knowledge.
            <br />
            Move your future forward.
          </h2>
          <p>
            Explore our learning paths and take the next step in your
            medical coding journey.
          </p>
        </div>

        <a href="/courses" className="about-cta-button">
          Explore Courses <span>→</span>
        </a>
      </section>

      <footer className="about-footer">
        <a href="/" className="about-logo">
          We Code Health<span>.</span>
        </a>
        <p>Learn with purpose. Grow with confidence.</p>
        <span>© 2026 We Code Health</span>
      </footer>
    </main>
  );
}
