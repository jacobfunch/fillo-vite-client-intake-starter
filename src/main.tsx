import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@usefillo/react/styles.css";
import "./styles.css";
import { IntakeForm } from "./IntakeForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <div className="intro">
        <p className="eyebrow">New client</p>
        <h1>Prepare the first working session.</h1>
        <p>Collect the outcome, timing, and reference files in one response.</p>
      </div>
      <IntakeForm />
    </main>
  </StrictMode>,
);
