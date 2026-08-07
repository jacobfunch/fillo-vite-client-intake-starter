# Vite React client-intake flow with Fillo

A focused client-intake form with a typed schema and an optional document
upload, rendered as native controls with `@usefillo/react`.

## Run it

1. Create or open a Fillo workspace at [fillo.so](https://fillo.so).
2. Copy `.env.example` to `.env.local` and set the workspace's `pk_` publishable
   key. Add the Vite development origin (normally `http://localhost:5173`) to
   its allowed origins.
3. Install and start the app:

   ```bash
   npm install
   npm run dev
   ```

4. Review and publish the staged `vite-client-intake` form in Fillo. Connect
   durable storage before relying on the upload field in production.
5. Submit a real test response, then confirm its answers and file reference in
   the Fillo response workspace.

The browser receives only a publishable key. See the [client intake template](https://fillo.so/templates/client-intake-form)
for the field decisions and the [upload guide](https://fillo.so/guides/collect-file-uploads)
for provider setup and failure-state checks.
