'use client'

import Link from 'next/link';
import { useCallback } from 'react';

type SharePlatform =
  | 'X'
  | 'LinkedIn'
  | 'Facebook'
  | 'Reddit'
  | 'Bluesky'
  | 'URL';

type ShareLinkProps = {
  platform: SharePlatform;
  url: string;
  text?: string;
  hashtags?: string[];
  via?: string;
  className?: string;
  onCopied?: () => void; // 可选：复制成功回调
};

export default function ShareLink({
  platform,
  url,
  text,
  hashtags = [],
  via,
  className,
  onCopied,
}: ShareLinkProps) {
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
      onCopied?.();
    } catch (err) {
      console.error('Copy failed', err);
    }
  }, [url, onCopied]);

  if (platform === 'URL') {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={
          className ??
          'text-mred animated-underline hover:text-mred hover:cursor-pointer'
        }
        aria-label="Copy URL"
      >
        Copy Link
      </button>
    );
  }

  let shareUrl = '';

  switch (platform) {
    case 'X': {
      const params = new URLSearchParams({
        text: text ?? '',
        url,
      });
      if (hashtags.length) {
        params.append('hashtags', hashtags.join(','));
      }
      if (via) {
        params.append('via', via);
      }
      shareUrl = `https://x.com/intent/tweet?${params.toString()}`;
      break;
    }

    case 'LinkedIn': {
      const params = new URLSearchParams({ url });
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
      break;
    }

    case 'Facebook': {
      const params = new URLSearchParams({ u: url });
      shareUrl = `https://www.facebook.com/sharer/sharer.php?${params.toString()}`;
      break;
    }

    case 'Reddit': {
      const params = new URLSearchParams({
        url,
        title: text ?? '',
      });
      shareUrl = `https://www.reddit.com/submit?${params.toString()}`;
      break;
    }

    case 'Bluesky': {
      const shareText = text ? `${text} ${url}` : url;
      const params = new URLSearchParams({ text: shareText });
      shareUrl = `https://bsky.app/intent/compose?${params.toString()}`;
      break;
    }
  }

  return (
    <Link
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        'text-mred animated-underline hover:text-mred'
      }
    >
      {platform}
    </Link>
  );
}
