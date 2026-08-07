# AGENTS.md

This is a deliberately small Vite + React starter for a client intake form with
browser-direct file uploads. Keep it understandable in one sitting.

## Goal

The host application owns the client-facing route, layout, styling, account
authorization, and after-submit behavior. Fillo owns the form schema, validation,
upload lifecycle, accepted response, versions, exports, and delivery workflow.

## Start here

1. Read `README.md` and inspect `src/IntakeForm.tsx`.
2. Run `npm install`, `npm run build`, and then `npm run dev`.
3. Without a key, verify that the page renders the labeled non-submitting preview.
4. For a Fillo task, run `npx @usefillo/cli@latest skill install` and use the
   installed `build-with-fillo` skill.

## Repository map

- `src/IntakeForm.tsx`: code-defined schema and preview/connected states.
- `src/main.tsx`: client-facing page and workflow context.
- `src/styles.css`: host UI and scoped renderer styling.
- `index.html`: browser metadata and application entry point.

## Stable contract

- Form ID: `vite-client-intake`
- Field IDs: `name`, `email`, `outcome`, `target-date`, `documents`

Once real responses exist, preserve those IDs. Labels and helper copy may change
without changing stored answer keys.

## Guardrails

- Keep the form inside the client flow; do not replace it with an iframe or a
  separate upload portal.
- Keep the preview fallback. A clone should show the form without accepting a
  response or uploading a file.
- Before changing file fields, verify `canPublishFileFields` with Fillo bootstrap,
  `npx @usefillo/cli@latest whoami --json`, or
  `npx @usefillo/cli@latest storage status --json` as appropriate.
- Do not drop the upload field merely because storage needs a human connection step.
- Never put an `fsk_` key, storage credential, identity secret, webhook secret,
  login token, or provider URL in browser code or committed files.
- Do not add a second upload API. Fillo opens scoped sessions, the browser sends
  bytes to the active provider, and the server accepts the completed reference.
- Keep field conditions in the schema. Do not change schema shape per visitor.
- Preserve accessible labels, errors, focus behavior, disabled states, and keyboard use.
- Do not add analytics, a state library, or unrelated portal features to this starter.

## Verification

- `npm run build` passes.
- The no-key page shows `Preview mode`, visible form fields, and a disabled upload preview.
- Desktop and mobile layouts do not overflow.
- With a configured key, the form stages or resolves according to workspace sync policy.
- Durable storage is connected before a production upload test.
- One safe test response and its file reference appear in the Fillo response workspace.

When handing work back, state the build result and the exact remaining dashboard
action: connect storage, publish, or verify a response. Never report private workspace URLs.
