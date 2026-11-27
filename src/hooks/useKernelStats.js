import { useState, useEffect } from 'react';
import { kernelStats, kernelStatsQueries } from '@config';
import snapshot from '../data/kernel-stats.json';

const STORAGE_KEY = 'kernel-stats:v1';
const HOUR = 60 * 60 * 1000;
const TTL = kernelStats.cacheHours * HOUR;
// After a failure (usually GitHub's anonymous rate limit) wait a while before
// trying again instead of retrying on every page load.
const FAILURE_BACKOFF = HOUR;

// Never show a smaller number than the build-time snapshot or the last good
// fetch; mainline counts only grow, so a smaller value means a bad response.
const merge = (base, update) => {
  const out = { ...base };
  ['commits', 'reviewed', 'acked'].forEach(k => {
    if (Number.isInteger(update[k])) {
      out[k] = Math.max(update[k], base[k] || 0);
    }
  });
  if (update.updatedAt && update.updatedAt > base.updatedAt) {
    out.updatedAt = update.updatedAt;
  }
  return out;
};

const readCache = () => {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return null;
  }
};

const writeCache = entry => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
  } catch (e) {
    // Private mode or storage full; we'll just fetch again next time.
  }
};

const searchCount = q =>
  fetch(`https://api.github.com/search/commits?per_page=1&q=${encodeURIComponent(q)}`, {
    headers: { Accept: 'application/vnd.github+json' },
  }).then(res => {
    if (!res.ok) {
      throw new Error(`GitHub search returned ${res.status}`);
    }
    return res.json().then(json => json.total_count);
  });

// Shared across every component that uses the hook, so the hero and the
// upstream section don't each fire their own requests.
let inflight = null;

const refresh = () => {
  if (!inflight) {
    const queries = kernelStatsQueries(kernelStats);
    const keys = Object.keys(queries);
    inflight = Promise.all(keys.map(k => searchCount(queries[k])))
      .then(counts => {
        const data = { updatedAt: new Date().toISOString() };
        keys.forEach((k, i) => (data[k] = counts[i]));
        writeCache({ fetchedAt: Date.now(), data });
        return data;
      })
      .catch(() => {
        const cached = readCache();
        writeCache({ ...cached, failedAt: Date.now() });
        return null;
      });
  }
  return inflight;
};

const useKernelStats = () => {
  // Start from the build-time numbers so server and client render the same.
  const [stats, setStats] = useState(snapshot);

  useEffect(() => {
    const cached = readCache();
    const now = Date.now();

    if (cached && cached.data) {
      setStats(s => merge(s, cached.data));
    }

    const fresh = cached && cached.fetchedAt && now - cached.fetchedAt < TTL;
    const backingOff = cached && cached.failedAt && now - cached.failedAt < FAILURE_BACKOFF;
    if (fresh || backingOff) {
      return;
    }

    let cancelled = false;
    refresh().then(data => {
      if (data && !cancelled) {
        setStats(s => merge(s, data));
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return stats;
};

export default useKernelStats;
