EpiBio Quiz — Offline + Optional Online

This is a static, deployment-ready quiz app for Epidemiology & Biostatistics.

Files:
- index.html: main page
- styles.css: styling
- app.js: main logic
- offline-questions.js: bundled 100 offline questions (Epi & Biostats)

How to deploy:
1. Create a GitHub repository and upload these files.
2. Enable GitHub Pages (Settings → Pages) to serve the site, or drag the folder to Netlify drop for instant hosting.
3. The app works fully offline using the bundled questions.

Optional online mode:
- If you have an API that returns question JSON (same format as the offline questions), set a global JS variable `window.EPIBIO_API_ENDPOINT` to the POST endpoint URL. The app will attempt to fetch online questions when 'Online' mode is selected.

Enjoy!
