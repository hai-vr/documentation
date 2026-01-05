# Hai notes on setup

- The file extension doesn't seem to matter `.md` or `.mdx`
- react components don't seem to need to be in a mdx block, but it makes syntax coloring easier???
- If links fail during build, it may be because of the header or the footer, not the contents of the page itself
- Links in index.md somehow need to reference the directory they're in
- Add CNAME in static/ folder, otherwise github pages will clear the custom domain
- Github Pages dropdown needs to be set to github pages mode, not github actions (does it have to, since we set up the action?)
- TODO: migrate video tag to be responsive
- products index.md hides the both TOC and the default title
- TODO: I replaced the landing page with a redirect, but it makes the social embed look like shit, how to fix this?

- Problem: Static videos are still copied and hashed and referenced somewhere else, despite being in the static folder (so it becomes duplicate). why is that the case????
