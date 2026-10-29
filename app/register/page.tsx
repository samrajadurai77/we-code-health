"use client";

import { useState } from "react";
import Link from "next/link";
import "./register.css";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="register-page">
      <Link href="/" className="register-logo" aria-label="We Code Health home">
        We Code Health<span>.</span>
      </Link>

      <section className="register-card">
        <p className="register-eyebrow">CREATE YOUR ACCOUNT</p>
        <h1>Start your learning journey.</h1>
        <p className="register-description">
          Create an account to explore medical coding courses and continue
          learning with We Code Health.
        </p>

        <form
          className="register-form"
          onSubmit={(event) => {
            event.preventDefault();
            // Connect this form to your registration API/auth provider.
          }}
        >
          <div className="register-field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="register-field">
            <label htmlFor="password">Password</label>
            <div className="register-password-wrap">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                className="register-show-password"
                type="button"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="register-hint">Use at least 8 characters.</p>
          </div>

          <div className="register-field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="register-password-wrap">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your password again"
                autoComplete="new-password"
                minLength={8}
                required
              />
              <button
                className="register-show-password"
                type="button"
                onClick={() => setShowConfirmPassword((current) => !current)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="register-submit" type="submit">
            Create account <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="register-login">
          Already have an account? <Link href="/login">Log in</Link>
        </p>
      </section>

      <Link href="/" className="register-back-home">
        ← Back to home
      </Link>

      <p className="register-bottom-text">
        Learn with purpose. Grow with confidence.
      </p>
    </main>
  );
}
