
export default function Home()
{
  return (
    <>
      <header className="navbar">
        <a href="#home" className="logo">
          Learnora<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="/courses">Courses</a>
          <a href="#about">About</a>
        </nav>

        
<div className="nav-actions">
  <a href="/login" className="login-nav-button">
    Login
  </a>

  <a href="/courses" className="nav-button">
    Explore Courses
  </a>
</div>

      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">LEARN. BUILD. GROW.</p>

            <h1>
              Skills that move your <span>future forward.</span>
            </h1>

            <p className="hero-description">
              Learn coding, business and design through practical,
              expert-led courses built for your next big step.
            </p>

            <a href="#courses" className="primary-button">
              Explore Courses &rarr;
            </a>

            <p className="hero-note">
              Practical skills. Real-world projects.
            </p>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-top">
                <span className="dot purple"></span>
                <span className="dot green"></span>
                <span className="dot orange"></span>
                <span className="visual-label">
                  YOUR NEXT CHAPTER
                </span>
              </div>

              <div className="visual-content">
                <div className="visual-icon">✦</div>
                <p className="visual-small">
                  LEARNING IN PROGRESS
                </p>
                <h2>
                  Build skills.
                  <br />
                  Build your future.
                </h2>

                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>

                <p className="progress-text">
                  Keep learning. Keep growing.
                </p>
              </div>
            </div>

            <div className="floating-card">
              <span>✦</span>
              Learn something new
            </div>
          </div>
        </section>

        <section className="categories" id="courses">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR NEXT SKILL</p>
              <h2>Explore our courses</h2>
            </div>

            <p className="section-description">
              Knowledge for wherever you want to go.
            </p>
          </div>

          <div className="course-grid">
            <article className="course-card">
              <div className="course-art coding-art">
                <span className="art-symbol">&lt;/&gt;</span>
                <span className="art-tag">01 / CREATE</span>
              </div>

              <div className="course-info">
                <p className="course-category">DEVELOPMENT</p>
                <h3>Full-Stack Web Development</h3>
                <p>
                  Build modern websites and turn ideas into real projects.
                </p>

                <div className="course-bottom">
                  <strong>₹1,999</strong>
                  <a href="#about" className="course-link">
                    Explore &rarr;
                  </a>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="course-art business-art">
                <span className="art-symbol">↗</span>
                <span className="art-tag">02 / GROW</span>
              </div>

              <div className="course-info">
                <p className="course-category">BUSINESS</p>
                <h3>Business &amp; Entrepreneurship</h3>
                <p>
                  Learn strategy, marketing and how to grow your ideas.
                </p>

                <div className="course-bottom">
                  <strong>₹1,499</strong>
                  <a href="#about" className="course-link">
                    Explore &rarr;
                  </a>
                </div>
              </div>
            </article>

            <article className="course-card">
              <div className="course-art design-art">
                <span className="art-symbol">✳</span>
                <span className="art-tag">03 / DESIGN</span>
              </div>

              <div className="course-info">
                <p className="course-category">DESIGN</p>
                <h3>UI/UX Design Masterclass</h3>
                <p>
                  Create thoughtful digital experiences and strong portfolios.
                </p>

                <div className="course-bottom">
                  <strong>₹1,799</strong>
                  <a href="#about" className="course-link">
                    Explore &rarr;
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bottom-banner" id="about">
          <div>
            <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
            <h2>Make your next move count.</h2>
          </div>

          <a href="/courses" className="primary-button">
            Find your course &rarr;
          </a>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          Learnora<span>.</span>
        </a>
        <p>Learn something extraordinary.</p>
        <p>&copy; 2026 Learnora</p>
      </footer>
    </>
  );
}
