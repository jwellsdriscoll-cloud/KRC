import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const STORAGE_KEY = 'krc_build_time';

/**
 * Detects when a new Netlify deploy has gone live.
 *
 * Vite bakes __BUILD_TIME__ (a Unix timestamp string) into the JS bundle at
 * compile time, so every deploy produces a new value.  On first load we store
 * the value; on subsequent loads we compare.  If they differ the user is
 * running freshly-deployed code for the first time → send them to the Home
 * page so they see the latest content rather than a potentially stale view.
 */
export function useVersionCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    // In development Vite re-evaluates Date.now() on every server start, so
    // __BUILD_TIME__ would always differ from the stored value and trigger a
    // redirect on every HMR reload — causing "send was called before connect".
    // Version checking is only meaningful in production (Netlify deploys).
    if (!import.meta.env.PROD) return;

    const currentBuild = __BUILD_TIME__;
    const storedBuild  = localStorage.getItem(STORAGE_KEY);

    // Always persist the latest build stamp.
    localStorage.setItem(STORAGE_KEY, currentBuild);

    // Only redirect when there WAS a previous session and the build changed.
    if (storedBuild && storedBuild !== currentBuild) {
      navigate('/', { replace: true });
    }
  }, []); // run once on mount
}