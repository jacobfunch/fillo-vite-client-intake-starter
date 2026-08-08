# AGENTS.md

This repository contains a small Vite and React client intake form. Keep the
example small enough to understand in one sitting.

## Purpose

The app controls the route, access, layout, styles and success state. Fillo
controls the form schema, validation, uploads, responses, versions, exports and
delivery.

## Start

1. Read `README.md`.
2. Read `src/IntakeForm.tsx`.
3. Run `npm install`.
4. Run `npm run build`.
5. Run `npm run dev`.
6. Remove the Fillo key and check Preview mode.
7. For Fillo work, run `npx @usefillo/cli@latest skill install`.
8. Follow the installed `build-with-fillo` skill.

## Files

- `src/IntakeForm.tsx`: form schema and connected or preview state.
- `src/main.tsx`: page layout and instructions for the client.
- `src/styles.css`: page styles and Fillo form styles.
- `index.html`: page metadata and the Vite entry point.

## IDs to keep

- Form ID: `vite-client-intake`
- Field IDs: `name`, `email`, `outcome`, `target-date`, `documents`

Keep these IDs after the first response. Fillo uses the field IDs as stored
answer keys. You can change labels and help text.

## Rules

- Keep the form in the client page. Do not replace it with an iframe or another
  upload page.
- Keep Preview mode. It must show the form without sending answers or files.
- Check `canPublishFileFields` before you add or change a file field. Use Fillo
  bootstrap, `npx @usefillo/cli@latest whoami --json`, or
  `npx @usefillo/cli@latest storage status --json`.
- Do not remove the file field because storage needs a person to connect it.
- Do not put an `fsk_` key, storage credential, identity secret, webhook secret,
  login token or provider URL in browser code or committed files.
- Do not add another upload API. Fillo creates an upload session. The browser
  sends the file to the storage provider. Fillo records the completed file
  reference.
- Put field conditions in the form schema. Do not change the schema for each
  visitor.
- Keep labels, errors, focus, disabled states and keyboard controls accessible.
- Do not add analytics, a state library or unrelated portal features.

## Checks

- `npm run build` passes.
- Preview mode shows the fields and a disabled file field.
- Preview mode does not send a response.
- The desktop and mobile pages do not overflow.
- With a key, Fillo stages or loads the form according to the workspace sync
  setting.
- Connect your own storage before a production upload test.
- Submit one test response. Find its file reference in Fillo.

When you finish, report the build result. State the next action in Fillo:
connect storage, publish the form or check the response. Do not report private
workspace URLs.
