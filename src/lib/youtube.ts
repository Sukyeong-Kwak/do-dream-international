export interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (v: number) => void;
  getPlayerState: () => number;
  getCurrentTime: () => number;
  getDuration: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
}

export interface YTPlayerEvent {
  target: YTPlayer;
  data: number;
}

interface YTNamespace {
  Player: new (
    el: HTMLElement | string,
    options: {
      videoId: string;
      host?: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (e: YTPlayerEvent) => void;
        onStateChange?: (e: YTPlayerEvent) => void;
      };
    }
  ) => YTPlayer;
}

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const YT_STATE = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

const API_SCRIPT_URL = 'https://www.youtube.com/iframe_api';
const API_SCRIPT_MARKER = 'data-yt-iframe-api';

let apiPromise: Promise<YTNamespace> | null = null;

export function loadYouTubeAPI(): Promise<YTNamespace> {
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      if (window.YT) resolve(window.YT);
    };
    if (!document.querySelector(`script[${API_SCRIPT_MARKER}]`)) {
      const tag = document.createElement('script');
      tag.src = API_SCRIPT_URL;
      tag.setAttribute(API_SCRIPT_MARKER, '1');
      document.head.appendChild(tag);
    }
  });
  return apiPromise;
}
