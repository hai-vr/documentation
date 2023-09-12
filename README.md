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

# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
