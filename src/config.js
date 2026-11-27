const kernelStatsQueries = ({ repo, authorName }) => ({
  commits: `repo:${repo} author-name:"${authorName}"`,
  reviewed: `repo:${repo} "Reviewed-by: ${authorName}"`,
  acked: `repo:${repo} "Acked-by: ${authorName}"`,
});

module.exports = {
  kernelStatsQueries,

  email: 'puranjay12@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/puranjaymohan',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/puranjaymohan',
    },
    {
      name: 'Medium',
      url: 'https://puranjaymohan.medium.com/',
    },
    {
      name: 'OpenHub',
      url: 'https://www.openhub.net/accounts/puranjaymohan',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Upstream',
      url: '/#upstream',
    },
    {
      name: 'Talks',
      url: '/#talks',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  // Live kernel stats. These are counted with the GitHub commit search API
  // against the torvalds/linux mirror, so they only cover what is in mainline.
  // The numbers are fetched at build time (gatsby-node.js) and refreshed in the
  // browser at most once per cacheHours per visitor (src/hooks/useKernelStats.js).
  // src/data/kernel-stats.json is the fallback when GitHub can't be reached.
  kernelStats: {
    repo: 'torvalds/linux',
    authorName: 'Puranjay Mohan',
    cacheHours: 24,
    logUrl:
      'https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Puranjay+Mohan',
  },

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
