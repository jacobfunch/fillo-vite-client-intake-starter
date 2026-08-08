# Client intake with file uploads for Vite + React

[![CI](https://github.com/jacobfunch/fillo-vite-client-intake-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/jacobfunch/fillo-vite-client-intake-starter/actions/workflows/ci.yml)

A focused intake flow that keeps the contact, project outcome, target date, and
reference files in one response. The UI renders natively with `@usefillo/react`;
files go browser-direct to the workspace's configured storage.

[Read the implementation guide](https://fillo.so/guides/client-intake-form-with-file-uploads) ·
[Open the no-signup demo](https://jacobfunch.github.io/fillo-vite-client-intake-starter/) ·
[React SDK](https://www.npmjs.com/package/@usefillo/react) ·
[Fillo upload docs](https://fillo.so/docs/uploads)

![Client intake page with project context and a native Fillo form](docs/preview-desktop.png)

<details>
<summary>View the mobile layout</summary>
<br />
<img src="docs/preview-mobile.png" alt="The same intake flow on a mobile viewport" width="390" />
</details>

## What this starter proves

- A typed schema can render as native React controls inside a client-facing page.
- Answers and completed file references remain attached to one accepted response.
- The upload bytes travel browser-direct instead of passing through this Vite app.
- A missing key opens a safe, non-submitting preview so the clone is useful immediately.
- Storage, workspace, identity, and webhook credentials stay outside the browser bundle.

The repository stays intentionally compact: one schema component, one entry point,
and one stylesheet.

## See the UI first

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). No Fillo account is required
for the local UI preview. The page labels itself **Preview mode**, keeps the
fields and local success interaction inspectable, disables uploads, and never
sends a response or makes remote form changes.

## Collect the first real intake

1. [Create or open a Fillo workspace](https://fillo.so/start?from=github-vite-client-intake).
2. Connect durable storage: Google Drive, Box, Amazon S3, or an S3-compatible
   bucket such as Cloudflare R2.
3. Copy `.env.example` to `.env.local` and set `VITE_FILLO_KEY` to the public
   workspace `pk_` key.
4. Add `http://localhost:5173` to the workspace's allowed origins.
5. Restart Vite. Open the page once to sync `vite-client-intake`.
6. Review and publish the staged form in Fillo.
7. Submit one safe test response with a small file, then confirm the answers and
   provider file reference in the response workspace.

Eligible new workspaces may have a capped seven-day transit lane for evaluation.
Connect customer-owned storage before treating this as a durable client document flow.

## Hand it to a coding agent

This repository includes [AGENTS.md](AGENTS.md) with the source map, stable IDs,
upload boundaries, and acceptance checks.

For full Fillo instructions, connect your existing workspace and install the
project skill from the repository root:

```bash
npx @usefillo/cli@latest login
npx @usefillo/cli@latest skill install
```

No workspace yet? Replace the login command with:

```bash
npx @usefillo/cli@latest agent bootstrap --email you@company.com
```

Then give the agent the actual job:

> Use the build-with-fillo skill. Adapt this intake flow to our client portal.
> Keep the existing host design, preserve the stable intake field IDs, verify
> storage readiness before changing the upload field, run the production build,
> inspect desktop and mobile states, and tell me the exact publish and real-response
> checks that remain.

The skill works with Codex, Cursor, GitHub Copilot, Gemini CLI, Claude Code, and
other compatible agents. See [Fillo's agent setup](https://fillo.so/agents) for
installation paths and MCP options.

## Repository map

| Path | Responsibility |
| --- | --- |
| `src/IntakeForm.tsx` | Typed schema, upload field, preview fallback, and Fillo embed |
| `src/main.tsx` | Client-facing layout and surrounding workflow copy |
| `src/styles.css` | Host-product styling and responsive layout |
| `index.html` | Document metadata and Vite entry point |
| `AGENTS.md` | Instructions and acceptance checks for coding agents |
| `.github/workflows/ci.yml` | Clean-install and production-build check for every pull request |
| `.github/workflows/pages.yml` | No-key preview deployment to GitHub Pages |

## Customize without breaking old responses

- Change labels, helper copy, colors, and layout freely.
- Preserve `vite-client-intake`, `name`, `email`, `outcome`, `target-date`, and
  `documents` after collecting real responses.
- Keep field visibility in the schema instead of changing its shape per visitor.
- Check `canPublishFileFields` before adding or materially changing file fields.
- Do not upload bytes to a second app endpoint; let the renderer use Fillo's
  scoped browser-direct upload lifecycle.
- Use a signed webhook when another backend must react durably to accepted intake.

## Production check

```bash
npm run build
```

Then test required-field errors, a rejected file type, an interrupted upload,
desktop and mobile layouts, keyboard focus, and the final accepted response.
Rendering a dropzone alone does not prove that durable storage is ready.

## Learn the boundaries

- [Client intake implementation guide](https://fillo.so/guides/client-intake-form-with-file-uploads)
- [File upload setup](https://fillo.so/docs/uploads)
- [Client intake template](https://fillo.so/templates/client-intake-form)
- [Native form request lifecycle](https://fillo.so/guides/native-form-request-lifecycle)
