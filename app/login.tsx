
"use client";

import { useState, type FormEvent } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Login form submitted for ${email}`);
  }

  return (
    <main className="login-page">
      <a href="/" className="login-logo">
        We Code Health<span>.</span>
      </a>

      <section className="login-card">
        <p className="login-eyebrow">WELCOME BACK</p>
        <h1>Sign in to We Code Health</h1>
        <p className="login-description">
          Continue your learning journey.
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-field">
            <div className="login-password-label">
              <label htmlFor="login-password">Password</label>
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <div className="login-password-wrap">
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="login-show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-submit">
            Sign In <span>→</span>
          </button>
        </form>

        <p className="login-signup">
          Don&apos;t have an account?{" "}
          <a href="/register">Create account</a>
        </p>

        <a href="/" className="login-back-home">
          ← Back to homepage
        </a>
      </section>

      <p className="login-bottom-text">
        Learn something new. Build something great.
      </p>
    </main>
  );
}
