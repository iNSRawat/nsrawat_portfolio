import Script from 'next/script.js';

interface UmamiAnalyticsProps {
  websiteId?: string;
  src?: string;
}

export function UmamiAnalytics({ websiteId, src }: UmamiAnalyticsProps) {
  // Only render if websiteId is provided and src is either provided or we use a default external URL
  if (websiteId && src) {
    return <Script async defer data-website-id={websiteId} src={src} />;
  }

  // If websiteId exists but no src, don't render (prevents 404 errors)
  return null;
}
