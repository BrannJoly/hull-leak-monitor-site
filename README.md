# Hull Leak Monitor Site

A small Astro and Tailwind static marketing site for Hull Leak Monitor.

## Local Development

```sh
pnpm install
pnpm dev
```

Build and type-check:

```sh
pnpm build
```

## Waitlist Form

The form in `src/components/WaitlistForm.astro` uses Brevo's generated HTML embed and submits directly to Brevo. This site has no backend, no database, and does not store email addresses locally.

## GitHub Pages

Deployment is handled by `.github/workflows/deploy.yml`. The workflow builds the static Astro site and uploads `dist` to GitHub Pages.

The build sets `BASE_PATH` to the repository name so asset and page links work on project pages, for example:

```txt
https://OWNER.github.io/hull-leak-monitor-site/
```
