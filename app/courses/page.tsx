
"use client";

import { useMemo, useState } from "react";
import "./courses.css";

type Course = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  level: string;
  duration: string;
  symbol: string;
  artClass: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Development",
    description:
      "Build modern websites with frontend, backend, databases and real-world projects.",
    price: 1999,
    level: "Beginner",
    duration: "12 weeks",
    symbol: "</>",
    artClass: "course-art-code",
  },
  {
    id: 2,
    title: "Business & Entrepreneurship",
    category: "Business",
    description:
      "Learn business strategy, marketing, planning and how to grow your ideas.",
    price: 1499,
    level: "Beginner",
    duration: "8 weeks",
    symbol: "↗",
    artClass: "course-art-business",
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    category: "Design",
    description:
      "Design useful digital experiences, create prototypes and build your portfolio.",
    price: 1799,
    level: "Beginner",
    duration: "6 weeks",
    symbol: "✳",
    artClass: "course-art-design",
  },
  {
    id: 4,
    title: "React & Next.js Development",
    category: "Development",
    description:
      "Create responsive, modern web applications using React and Next.js.",
    price: 2499,
    level: "Intermediate",
    duration: "10 weeks",
    symbol: "R",
    artClass: "course-art-react",
  },
  {
    id: 5,
    title: "Digital Marketing Essentials",
    category: "Business",
    description:
      "Explore SEO, social media marketing, content strategy and analytics.",
    price: 1299,
    level: "Beginner",
    duration: "5 weeks",
    symbol: "◎",
    artClass: "course-art-marketing",
  },
  {
    id: 6,
    title: "Graphic Design Fundamentals",
    category: "Design",
    description:
      "Learn visual composition, typography, colour theory and brand design.",
    price: 1599,
    level: "Beginner",
    duration: "6 weeks",
    symbol: "✦",
    artClass: "course-art-graphic",
  },
];

const categories = ["All Courses", "Development", "Business", "Design"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Courses");
  const [sort, setSort] = useState("featured");
  const [level, setLevel] = useState("All Levels");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      const matchesCategory =
        category === "All Courses" || course.category === category;

      const matchesLevel =
        level === "All Levels" || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });

    if (sort === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [search, category, sort, level]);

  return (
    <main className="courses-page">
      <header className="courses-navbar">
        <a href="/" className="courses-logo">
          We Code Health<span>.</span>
        </a>

        <nav className="courses-nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/courses" className="active" aria-current="page">
            Courses
          </a>
          <a href="/about">About</a>
        </nav>

        <a href="/login" className="courses-login-button">
          Login <span aria-hidden="true">→</span>
        </a>
      </header>

      {/* <section className="courses-hero">
        <p className="courses-eyebrow">YOUR NEXT SKILL STARTS HERE</p>
        <h1>
          Learn skills.
          <br />
          <span>Unlock your potential.</span>
        </h1>
        <p className="courses-hero-description">
          Explore practical courses designed to help you learn, create and
          move your future forward.
        </p>

        <div className="courses-stats">
          <div>
            <strong>{courses.length}+</strong>
            <span>Courses to explore</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Learning categories</span>
          </div>
          <div>
            <strong>Learn</strong>
            <span>At your own pace</span>
          </div>
        </div>
      </section> */}

      <section className="courses-catalog">
        <div className="catalog-heading">
          <div>
            <p className="courses-eyebrow">FIND YOUR DIRECTION</p>
            <h2>Explore all courses</h2>
            <p>Find the right course for your next big step.</p>
          </div>

          <span className="course-count">
            {filteredCourses.length}{" "}
            {filteredCourses.length === 1 ? "course" : "courses"}
          </span>
        </div>

        <div className="courses-toolbar">
          <div className="courses-search">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              aria-label="Search courses"
              placeholder="Search courses, skills or topics..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            {search && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className="courses-filter-controls">
            <label className="course-select-wrap">
              <span>Level</span>
              <select
                value={level}
                onChange={(event) => setLevel(event.target.value)}
                aria-label="Filter by course level"
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
              </select>
            </label>

            <label className="course-select-wrap">
              <span>Sort by</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Sort courses"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Course Name</option>
              </select>
            </label>
          </div>
        </div>

        <div className="courses-category-tabs" aria-label="Course categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item
                  ? "courses-category-tab selected"
                  : "courses-category-tab"
              }
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>

        {filteredCourses.length > 0 ? (
          <div className="courses-grid">
            {filteredCourses.map((course, index) => (
              <article className="catalog-course-card" key={course.id}>
                <div className={`catalog-course-art ${course.artClass}`}>
                  <span className="catalog-art-number">
                    {String(index + 1).padStart(2, "0")} / LEARNORA
                  </span>
                  <span className="catalog-art-symbol">{course.symbol}</span>
                  <span className="catalog-art-category">
                    {course.category}
                  </span>
                </div>

                <div className="catalog-course-content">
                  <div className="catalog-course-meta">
                    <span>{course.category}</span>
                    <span>{course.level}</span>
                  </div>

                  <h3>{course.title}</h3>
                  <p className="catalog-course-description">
                    {course.description}
                  </p>

                  <div className="catalog-course-duration">
                    <span aria-hidden="true">◷</span> {course.duration}
                  </div>

                  <div className="catalog-course-footer">
                    <strong>₹{course.price.toLocaleString("en-IN")}</strong>
                    <a
                      href={`/courses/${course.id}`}
                      className="catalog-course-link"
                      aria-label={`View ${course.title}`}
                    >
                      View course <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="courses-empty-state">
            <span aria-hidden="true">⌕</span>
            <h3>No courses found</h3>
            <p>Try another search or change your filters.</p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All Courses");
                setLevel("All Levels");
                setSort("featured");
              }}
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      <section className="courses-cta">
        <div>
          <p className="courses-eyebrow">YOUR FUTURE IS A WORK IN PROGRESS</p>
          <h2>Start learning something new today.</h2>
          <p>Small steps today can open up new opportunities tomorrow.</p>
        </div>
        <a href="#courses-top" onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          Explore courses ↑
        </a>
      </section>

      <footer className="courses-footer">
        <a href="/" className="courses-logo">
          Learnora<span>.</span>
        </a>
        <p>Learn something extraordinary.</p>
        <span>© 2026 Learnora</span>
      </footer>
    </main>
  );
}
