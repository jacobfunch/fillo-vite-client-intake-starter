import { createClient, defineForm, FilloForm } from "@usefillo/react";

const intake = defineForm({
  id: "vite-client-intake",
  title: "Tell us about your project",
  description: "Share the context we need before the first working session.",
  pages: [
    {
      id: "intake",
      blocks: [
        { id: "name", kind: "short_text", label: "Your name", required: true },
        { id: "email", kind: "email", label: "Work email", required: true },
        {
          id: "outcome",
          kind: "long_text",
          label: "What should be different when this work is done?",
          required: true,
        },
        { id: "target-date", kind: "date", label: "Target date" },
        {
          id: "documents",
          kind: "file_upload",
          label: "Briefs or reference files (PDF, DOCX, PNG, or JPG)",
          accept: [".pdf", ".doc", ".docx", ".png", ".jpg", ".jpeg"],
          maxFiles: 5,
        },
      ],
    },
  ],
  settings: { submitLabel: "Send project details" },
});

const publishableKey = import.meta.env.VITE_FILLO_KEY;
const fillo = publishableKey ? createClient({ key: publishableKey }) : null;

export function IntakeForm() {
  return (
    <section className="form-card" aria-label="Client intake">
      <div className="form-heading">
        <div>
          <p className="form-kicker">Project brief</p>
          <h2>Tell us what the work needs.</h2>
        </div>
        <span>About 4 minutes</span>
      </div>

      {!fillo ? (
        <aside className="setup" role="status">
          <strong>Preview mode</strong>
          <span>
            Add <code>VITE_FILLO_KEY</code> to sync this form, enable uploads, and collect a
            response.
          </span>
        </aside>
      ) : null}

      {fillo ? (
        <FilloForm form={intake} client={fillo} showTitle={false} />
      ) : (
        <FilloForm
          form={intake}
          renderOnly
          showTitle={false}
          renderSuccess={() => (
            <div className="preview-success">
              <span aria-hidden="true">✓</span>
              <h3>Preview complete.</h3>
              <p>Nothing was sent or saved. Add a publishable key to collect a real response.</p>
            </div>
          )}
        />
      )}

      <p className="form-footnote">
        {fillo
          ? "Your answers and file references arrive together in one response."
          : "Preview only. Anything you enter stays in this browser tab."}
      </p>
    </section>
  );
}
