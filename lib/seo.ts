const defaultBase = process.env.NEXT_PUBLIC_SITE_URL || process.env.WEB_BASE_URL || "http://localhost:3000";

export function buildCanonicalUrl(pathname = "/") {
  return new URL(pathname, defaultBase).toString();
}
