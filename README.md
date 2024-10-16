# Astro View Transitions Bug Repro
## Brief
When clicking the browser back button, client-loaded content (and scroll position) are not restored.

## Steps
1. Install dependencies: ```pnpm i```
2. Run dev server: ```pnpm dev```
3. Open site in browser
4. Scroll to bottom of page
5. Click on a post
6. Click back button in browser
7. Scroll position and client-rendered content is not restored