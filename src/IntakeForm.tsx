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
          label: "Brief or reference file (PDF, PNG or JPG)",
          description: "Demo only. Do not upload private or sensitive files.",
          accept: [".pdf", ".png", ".jpg", ".jpeg"],
          maxFiles: 1,
          maxFileSizeMb: 1,
        },
      ],
    },
  ],
  settings: {
    submitLabel: "Send project details",
    trust: { challenge: "turnstile" },
  },
});

const publishableKey = import.meta.env.VITE_FILLO_KEY;
const fillo = publishableKey ? createClient({ key: publishableKey }) : null;
const formTheme = { colorScheme: "light" as const };

export function IntakeForm() {
  return (
    <section className="form-card" aria-label="Client intake">
      <div className="form-heading">
        <div>
          <p className="form-kicker">Project details</p>
          <h1>What do you need?</h1>
        </div>
        <span>
          <i aria-hidden="true" />
          About 4 minutes
        </span>
      </div>

      {!fillo ? (
        <aside className="setup" role="status">
          <strong>Preview mode</strong>
          <span>
            Add <code>VITE_FILLO_KEY</code> to collect responses and enable uploads.
          </span>
        </aside>
      ) : null}

      {fillo ? (
        <FilloForm form={intake} client={fillo} showTitle={false} theme={formTheme} />
      ) : (
        <FilloForm
          form={intake}
          renderOnly
          showTitle={false}
          theme={formTheme}
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
    </section>
  );
}
