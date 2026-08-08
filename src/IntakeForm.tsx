import { createClient, defineForm, FilloForm } from "@usefillo/react";

const intake = defineForm({
  id: "vite-client-intake",
  title: "Tell us about your project",
  description: "Tell us what you need, when you need it and which files will help us prepare.",
  pages: [
    {
      id: "intake",
      blocks: [
        { id: "name", kind: "short_text", label: "Your name", required: true },
        { id: "email", kind: "email", label: "Work email", required: true },
        {
          id: "outcome",
          kind: "long_text",
          label: "What result do you need?",
          required: true,
        },
        { id: "target-date", kind: "date", label: "Target date" },
        {
          id: "documents",
          kind: "file_upload",
          label: "Briefs or reference files (PDF, DOCX, PNG or JPG)",
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
          <p className="form-kicker">Project details</p>
          <h2>What do you need?</h2>
        </div>
        <span>Takes about 4 minutes</span>
      </div>

      {!fillo ? (
        <aside className="setup" role="status">
          <strong>Preview mode</strong>
          <span>
            Add <code>VITE_FILLO_KEY</code> to connect this form to Fillo. You can then upload files
            and collect responses.
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
              <h3>Preview finished</h3>
              <p>
                We did not send or save your answers. Add a publishable key to collect responses.
              </p>
            </div>
          )}
        />
      )}

      <p className="form-footnote">
        {fillo
          ? "Your answers and file references appear together in Fillo."
          : "Preview only. We do not send or save what you enter."}
      </p>
    </section>
  );
}
