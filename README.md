# puranjay.netlify.app

My personal website, built with [Gatsby](https://www.gatsbyjs.com/) and hosted on Netlify.
It is based on [Brittany Chiang's v4](https://github.com/bchiang7/v4), used under the MIT license.

## Editing

- Hero, about and contact text: `src/components/sections/{hero,about,contact}.js`
- Talks: the `talks` array in `src/components/sections/talks.js`
- Jobs, upstream areas, projects and papers: markdown under `content/`
- Nav, social links and email: `src/config.js`

## Kernel stats

The commit and review numbers on the site come from the GitHub commit search API,
run against the `torvalds/linux` mirror (so they only count what is in mainline).

- Every production build calls `scripts/fetch-kernel-stats.js` from `gatsby-node.js`
  and writes the result to `src/data/kernel-stats.json`, which is baked into the HTML.
  Set `GITHUB_TOKEN` in the Netlify environment to avoid the anonymous rate limit.
- In the browser, `src/hooks/useKernelStats.js` refreshes the numbers at most once every
  24 hours per visitor, caching them in `localStorage`. If GitHub fails it backs off for an hour.
- Numbers never go down: a smaller count than the last good one is treated as a bad response.
- `npm run stats` refreshes the JSON by hand. Commit it now and then so the fallback stays close.

## Running locally

```sh
nvm install   # Node version from .nvmrc
yarn
npm start
```

`npm run build && npm run serve` for a production build.
