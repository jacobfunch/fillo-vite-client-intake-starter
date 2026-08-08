import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@usefillo/react/styles.css";
import "./styles.css";
import { IntakeForm } from "./IntakeForm";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root mount element.");

createRoot(root).render(
  <StrictMode>
    <main className="app-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Fieldwork Studio home">
          <span aria-hidden="true">F</span>
          Fieldwork Studio
        </a>
        <p>
          Clients <span>/</span> <strong>New project</strong>
        </p>
      </header>

      <div className="intake-layout">
        <section className="intro" aria-labelledby="intake-title">
          <p className="eyebrow">New project</p>
          <h1 id="intake-title">Tell us about your project.</h1>
          <p className="intro-copy">
            Tell us what you need, when you need it and which files will help us prepare.
          </p>

          <section className="next-steps" aria-labelledby="next-steps-title">
            <p id="next-steps-title">What happens next</p>
            <ol>
              <li>
                <span>1</span>
                We read your brief and files.
              </li>
              <li>
                <span>2</span>
                We send you a plan for the call.
              </li>
              <li>
                <span>3</span>
                We use the call to make decisions.
              </li>
            </ol>
          </section>
        </section>

        <IntakeForm />
      </div>

      <footer>Built with Fillo · Answers and file references appear in one response</footer>
    </main>
  </StrictMode>,
);
