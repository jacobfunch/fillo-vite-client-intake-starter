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
          <p className="eyebrow">Before we meet</p>
          <h1 id="intake-title">Prepare the first working session.</h1>
          <p className="intro-copy">
            Share the outcome, timing, and useful reference files. We&rsquo;ll read everything
            before the call.
          </p>

          <section className="next-steps" aria-labelledby="next-steps-title">
            <p id="next-steps-title">What happens next</p>
            <ol>
              <li>
                <span>1</span>
                We review the brief and files.
              </li>
              <li>
                <span>2</span>
                You receive a focused agenda.
              </li>
              <li>
                <span>3</span>
                We use the call for decisions, not admin.
              </li>
            </ol>
          </section>
        </section>

        <IntakeForm />
      </div>

      <footer>Native intake form · Responses and files stay together in Fillo</footer>
    </main>
  </StrictMode>,
);
