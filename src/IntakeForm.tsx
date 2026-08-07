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
  if (!fillo) {
    return (
      <aside className="setup" role="status">
        Copy <code>.env.example</code> to <code>.env.local</code> and add your Fillo publishable
        key.
      </aside>
    );
  }

  return (
    <section className="form-card" aria-label="Client intake">
      <FilloForm form={intake} client={fillo} />
    </section>
  );
}
