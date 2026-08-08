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
        <a className="brand" href="./" aria-label="Fieldwork Studio home">
          <span className="brand-mark" aria-hidden="true">
            F
          </span>
          <span>Fieldwork Studio</span>
        </a>
        <p>New project</p>
      </header>

      <div className="intake-layout">
        <IntakeForm />
      </div>
    </main>
  </StrictMode>,
);
