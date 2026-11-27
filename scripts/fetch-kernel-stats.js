/*
 * Refresh src/data/kernel-stats.json from the GitHub commit search API.
 *
 * Runs automatically from gatsby-node.js before production builds, and can be
 * run by hand with `npm run stats`. Set GITHUB_TOKEN to avoid the anonymous
 * search rate limit (10 requests/minute). If anything goes wrong the existing
 * file is left alone, so a GitHub outage never breaks a deploy.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const { kernelStats, kernelStatsQueries } = require('../src/config');

const OUT = path.resolve(__dirname, '../src/data/kernel-stats.json');

const searchCount = q =>
  new Promise((resolve, reject) => {
    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'puranjay-website-build',
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const url = `https://api.github.com/search/commits?per_page=1&q=${encodeURIComponent(q)}`;
    const req = https.get(url, { headers, timeout: 15000 }, res => {
      let body = '';
      res.on('data', chunk => (body += chunk));
      res.on('end', () => {
        if (res.statusCode !== 200) {
          reject(new Error(`GitHub search returned ${res.statusCode} for ${q}`));
          return;
        }
        try {
          const { total_count } = JSON.parse(body);
          if (!Number.isInteger(total_count)) {
            throw new Error('no total_count in response');
          }
          resolve(total_count);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('timeout', () => req.destroy(new Error('GitHub search timed out')));
    req.on('error', reject);
  });

// eslint-disable-next-line no-console
const fetchKernelStats = async ({ log = console.log } = {}) => {
  const current = JSON.parse(fs.readFileSync(OUT, 'utf8'));
  try {
    const queries = kernelStatsQueries(kernelStats);
    const keys = Object.keys(queries);
    const counts = await Promise.all(keys.map(k => searchCount(queries[k])));

    // Counts in mainline only ever go up. Never let a flaky or partial search
    // result make the site show a smaller number than the last good one.
    const next = { ...current, updatedAt: new Date().toISOString() };
    keys.forEach((k, i) => {
      next[k] = Math.max(counts[i], current[k] || 0);
    });

    fs.writeFileSync(OUT, `${JSON.stringify(next, null, 2)}\n`);
    log(`kernel stats: ${keys.map(k => `${k}=${next[k]}`).join(' ')}`);
    return next;
  } catch (e) {
    log(`kernel stats: keeping snapshot from ${current.updatedAt} (${e.message})`);
    return current;
  }
};

module.exports = fetchKernelStats;

if (require.main === module) {
  fetchKernelStats();
}
