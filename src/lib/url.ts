/**
 * Returns a short, human-readable form of a URL, e.g. "vanniinn.lk" or "bhs.allaboutwebservices.com/blog".
 */
export function displayUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === '/' ? '' : parsed.pathname.replace(/\/$/, '');
    return `${parsed.hostname.replace(/^www\./, '')}${path}`;
  } catch {
    return url;
  }
}
