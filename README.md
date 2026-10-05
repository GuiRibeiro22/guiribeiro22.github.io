# Thesis progress site (Chirpy theme, GitHub Pages)

Same theme as the example blog, with a dark green accent.

## Publish (once)
1. Create a GitHub repo named `<username>.github.io` and push this folder to it.
2. In `_config.yml` set `url: "https://<username>.github.io"`, `github.username`, your email and social links.
3. Repo **Settings > Pages > Build and deployment > Source: GitHub Actions**. The included workflow builds and deploys on every push.

## Every week (no installs needed)
On github.com open your repo, go to `_posts`, click **Add file > Create new file**, name it
`YYYY-MM-DD-week-N.md`, paste the header from `_posts/NEW-WEEK-TEMPLATE.txt`, write the post and click **Commit**.
The site updates by itself in about a minute. Drag and drop images into `assets/img/` the same way.

## Share with your supervisor
Send him `https://<username>.github.io`. (Free GitHub Pages needs a public repository.)

## Details
Add `_posts/YYYY-MM-DD-week-N.md` (see `_posts/NEW-WEEK-TEMPLATE.txt`) and push.
At the bottom of each week, a **Next** button only appears if a newer week exists and a
**Previous** button only if an older one exists. The order follows the dates.

## Look
Green colours live in `assets/css/jekyll-theme-chirpy.scss`. To force dark mode (no toggle) set `theme_mode: dark` in `_config.yml`.
