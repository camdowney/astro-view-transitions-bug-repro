## Brief
When navigating away from a page with client-loaded content and then clicking the browser back button, the original content and scroll position are not restored.

## Steps
1. Install dependencies: ```pnpm i```
2. Run dev server: ```pnpm dev```
3. Open site in browser
4. Scroll to bottom of page
5. Click on a post
6. Click back button in browser
7. Scroll position and client-rendered content is not restored

## Further Discussion
This may not be a bug, but rather an unimplemented feature. Either way, I believe restoration of the previous page to its exact state before swap is a massive UX win. This is the default for MPAs (including Astro without View Transitions) and ideally should be the same with View Transitions as well.