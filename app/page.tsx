"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsAtTop(true);
        setIsNavbarVisible(true);
      } else {
        setIsAtTop(false);

        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`navbar ${
          isNavbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        <a href="#home" className="logo">
          We Code Health<span>.</span>
        </a>

        <nav>
          {!isAtTop && <a href="/home">Home</a>}
          <a href="/courses">Courses</a>
          <a href="/about">About Us</a>
        </nav>

        <div className="nav-actions">
          <a href="/login" className="login-nav-button">
            Login
          </a>

          <a href="/signup" className="nav-button">
            Register
          </a>
        </div>
      </header>

      <main className="wc-main">
        {/* HERO SECTION */}
        <section className="wc-hero" id="home">
          <div className="wc-hero-glow"></div>

          <div className="wc-hero-content">
            <div className="wc-badge">
              <span className="wc-status-dot"></span>
              WE CODE HEALTH ACADEMY
            </div>

            <h1>
              Build Skills.
              <br />
              Unlock Your
              <br />
              <span className="wc-gradient-text">Potential.</span>
            </h1>

            <p className="wc-hero-description">
              Practical, focused online courses designed to help
              you move forward with confidence — learn at your
              own pace, from wherever you are.
            </p>

            <div className="wc-hero-actions">
              <a href="/courses" className="wc-primary-button">
                Explore Courses <span>↗</span>
              </a>

              <a href="/signup" className="wc-secondary-button">
                Create Account <span>→</span>
              </a>
            </div>

            <div className="wc-trust-line">
              <span className="wc-trust-stars">★★★★★</span>
              <span>Learn. Build. Grow.</span>
              <span className="wc-trust-divider"></span>
              <span>Skills for your future</span>
            </div>
          </div>

          {/* LEARNING DASHBOARD — NO EXTERNAL IMAGE */}
          <div className="wc-hero-visual">
            <div className="wc-orbit wc-orbit-one"></div>
            <div className="wc-orbit wc-orbit-two"></div>

            <div className="wc-floating-symbol wc-symbol-one">
              {"</>"}
            </div>

            <div className="wc-floating-symbol wc-symbol-two">
              ✳
            </div>

            <div className="wc-dashboard">
              <div className="wc-dashboard-top">
                <div className="wc-window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <span className="wc-dashboard-label">
                  LEARNING SPACE
                </span>

                <span className="wc-live-indicator">
                  LIVE
                </span>
              </div>

              <div className="wc-dashboard-body">
                <p className="wc-dashboard-eyebrow">
                  YOUR LEARNING JOURNEY
                </p>

                <h2>
                  Level up
                  <br />
                  your skills<span>.</span>
                </h2>

                <p className="wc-dashboard-description">
                  Every skill you learn takes you one step further.
                </p>

                <div className="wc-stat-grid">
                  <div className="wc-stat-card">
                    <span className="wc-stat-icon">&lt;/&gt;</span>
                    <span className="wc-stat-number">01</span>
                    <span className="wc-stat-caption">
                      Learn
                    </span>
                  </div>

                  <div className="wc-stat-card">
                    <span className="wc-stat-icon">✳</span>
                    <span className="wc-stat-number">02</span>
                    <span className="wc-stat-caption">
                      Practice
                    </span>
                  </div>

                  <div className="wc-stat-card">
                    <span className="wc-stat-icon">↗</span>
                    <span className="wc-stat-number">03</span>
                    <span className="wc-stat-caption">
                      Grow
                    </span>
                  </div>
                </div>

                <div className="wc-progress-heading">
                  <span>Your next chapter</span>
                  <span>START HERE</span>
                </div>

                <div className="wc-progress-track">
                  <div className="wc-progress-fill"></div>
                </div>

                <div className="wc-progress-footer">
                  <span>Knowledge in progress</span>
                  <span className="wc-progress-dot"></span>
                </div>
              </div>
            </div>

            <div className="wc-floating-card wc-floating-top">
              <span className="wc-floating-icon">✦</span>
              <div>
                <strong>Keep learning</strong>
                <p>Your future starts here</p>
              </div>
            </div>

            <div className="wc-floating-card wc-floating-bottom">
              <span className="wc-floating-icon">↗</span>
              <div>
                <strong>Think. Build. Create.</strong>
                <p>Make your next move count</p>
              </div>
            </div>
          </div>

          {/* FEATURE CARDS */}
          <div className="wc-feature-grid">
            <article className="wc-feature-card">
              <div className="wc-feature-icon wc-icon-cyan">
                ◷
              </div>

              <div>
                <h3>Learn at Your Pace</h3>
                <p>
                  Study when it suits you, on any device.
                </p>
              </div>

              <span className="wc-feature-arrow">↗</span>
            </article>

            <article className="wc-feature-card">
              <div className="wc-feature-icon wc-icon-purple">
                {"</>"}
              </div>

              <div>
                <h3>Practical by Design</h3>
                <p>
                  Hands-on courses focused on real skills.
                </p>
              </div>

              <span className="wc-feature-arrow">↗</span>
            </article>

            <article className="wc-feature-card">
              <div className="wc-feature-icon wc-icon-pink">
                ✦
              </div>

              <div>
                <h3>One Learning Space</h3>
                <p>
                  Keep your learning journey moving forward.
                </p>
              </div>

              <span className="wc-feature-arrow">↗</span>
            </article>
          </div>
        </section>

        {/* COURSES SECTION */}
        <section className="wc-courses" id="courses">
          <div className="wc-section-heading">
            <div>
              <p className="wc-section-eyebrow">
                DISCOVER YOUR POTENTIAL
              </p>

              <h2>
                Find your next
                <br />
                <span className="wc-gradient-text">
                  big opportunity.
                </span>
              </h2>
            </div>

            <p>
              Explore new skills, discover your interests and
              build something extraordinary.
            </p>
          </div>

          <div className="wc-course-grid">
            <article className="wc-course-card">
              <div className="wc-course-art wc-art-code">
                <span className="wc-art-number">01 / CREATE</span>
                <span className="wc-art-symbol">{"</>"}</span>
                <span className="wc-art-caption">
                  CODE YOUR IDEAS
                </span>
              </div>

              <div className="wc-course-info">
                <span className="wc-course-category">
                  DEVELOPMENT
                </span>

                <h3>Full-Stack Web Development</h3>

                <p>
                  Learn to build modern websites and transform
                  your ideas into digital experiences.
                </p>

                <a href="/courses" className="wc-course-link">
                  Explore course <span>↗</span>
                </a>
              </div>
            </article>

            <article className="wc-course-card">
              <div className="wc-course-art wc-art-business">
                <span className="wc-art-number">02 / GROW</span>
                <span className="wc-art-symbol">↗</span>
                <span className="wc-art-caption">
                  THINK BIGGER
                </span>
              </div>

              <div className="wc-course-info">
                <span className="wc-course-category">
                  BUSINESS
                </span>

                <h3>Business &amp; Entrepreneurship</h3>

                <p>
                  Discover business fundamentals, develop
                  strategies and bring your ideas to life.
                </p>

                <a href="/courses" className="wc-course-link">
                  Explore course <span>↗</span>
                </a>
              </div>
            </article>

            <article className="wc-course-card">
              <div className="wc-course-art wc-art-design">
                <span className="wc-art-number">03 / DESIGN</span>
                <span className="wc-art-symbol">✳</span>
                <span className="wc-art-caption">
                  DESIGN THE FUTURE
                </span>
              </div>

              <div className="wc-course-info">
                <span className="wc-course-category">
                  DESIGN
                </span>

                <h3>UI/UX Design Masterclass</h3>

                <p>
                  Explore user experience, visual design and
                  the art of creating intuitive interfaces.
                </p>

                <a href="/courses" className="wc-course-link">
                  Explore course <span>↗</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ABOUT / CTA SECTION */}
        <section className="wc-cta" id="about">
          <div className="wc-cta-glow"></div>

          <p className="wc-section-eyebrow">
            YOUR JOURNEY STARTS HERE
          </p>

          <h2>
            Your potential
            <br />
            has <span className="wc-gradient-text">no limits.</span>
          </h2>

          <p className="wc-cta-description">
            Start learning today. Build practical skills.
            Take the next step towards your future.
          </p>

          <a href="/signup" className="wc-primary-button">
            Start Your Journey <span>↗</span>
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="wc-footer">
        <a href="#home" className="logo">
          We Code Health<span>.</span>
        </a>

        <p>Learn. Build. Grow.</p>

        <p>© 2026 We Code Health. All rights reserved.</p>
      </footer>
    </>
  );
}