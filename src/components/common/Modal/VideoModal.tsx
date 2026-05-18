import { useEffect, useRef, useState } from 'react';
import { HiX, HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { loadYouTubeAPI, YT_STATE, type YTPlayer, type YTPlayerEvent } from '../../../lib/youtube';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  youtubeId: string;
  ariaLabel?: string;
  closeAriaLabel?: string;
  closeHint?: string;
  unmuteAriaLabel?: string;
  muteAriaLabel?: string;
}

const DEFAULT_VOLUME = 80;
const AUTOPLAY_FALLBACK_MS = 700;
const SEEK_STEP_SECONDS = 5;
const YT_HOST = 'https://www.youtube-nocookie.com';

const PLAYER_VARS = {
  autoplay: 1,
  controls: 0,
  disablekb: 1,
  modestbranding: 1,
  rel: 0,
  iv_load_policy: 3,
  playsinline: 1,
  fs: 0,
} as const;

function enableSound(player: YTPlayer) {
  player.unMute();
  player.setVolume(DEFAULT_VOLUME);
}

function createMountNode() {
  const node = document.createElement('div');
  node.style.position = 'absolute';
  node.style.inset = '0';
  node.style.width = '100%';
  node.style.height = '100%';
  return node;
}

export default function VideoModal({
  isOpen,
  onClose,
  youtubeId,
  ariaLabel,
  closeAriaLabel,
  closeHint,
  unmuteAriaLabel,
  muteAriaLabel,
}: VideoModalProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    const player = playerRef.current;
    if (!player) return;
    try {
      if (player.isMuted()) {
        enableSound(player);
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    } catch {
      // player not ready
    }
  };

  useEffect(() => {
    if (!isOpen || !hostRef.current) return;
    const host = hostRef.current;
    let cancelled = false;

    loadYouTubeAPI().then((YT) => {
      if (cancelled) return;

      const mount = createMountNode();
      host.appendChild(mount);

      playerRef.current = new YT.Player(mount, {
        videoId: youtubeId,
        host: YT_HOST,
        playerVars: PLAYER_VARS,
        events: {
          onReady: ({ target }) => {
            try {
              enableSound(target);
              setIsMuted(false);
            } catch {
              // ignore
            }
            target.playVideo();

            window.setTimeout(() => {
              const player = playerRef.current;
              if (!player) return;
              try {
                const state = player.getPlayerState();
                const isPlayingOrBuffering =
                  state === YT_STATE.PLAYING || state === YT_STATE.BUFFERING;
                if (!isPlayingOrBuffering) {
                  player.mute();
                  setIsMuted(true);
                  player.playVideo();
                }
              } catch {
                // ignore
              }
            }, AUTOPLAY_FALLBACK_MS);
          },
          onStateChange: ({ data }: YTPlayerEvent) => {
            if (data === YT_STATE.PLAYING) setHasStarted(true);
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try {
        playerRef.current?.destroy();
      } catch {
        // ignore
      }
      playerRef.current = null;
      host.replaceChildren();
      setHasStarted(false);
    };
  }, [isOpen, youtubeId]);

  useEffect(() => {
    if (!isOpen) return;

    const seekBy = (deltaSeconds: number) => {
      const player = playerRef.current;
      if (!player) return;
      try {
        const current = player.getCurrentTime();
        const duration = player.getDuration();
        const next = Math.max(0, Math.min(duration || Infinity, current + deltaSeconds));
        player.seekTo(next, true);
      } catch {
        // ignore
      }
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        const player = playerRef.current;
        if (!player) return;
        try {
          if (player.getPlayerState() === YT_STATE.PLAYING) player.pauseVideo();
          else player.playVideo();
        } catch {
          // ignore
        }
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        seekBy(SEEK_STEP_SECONDS);
        return;
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        seekBy(-SEEK_STEP_SECONDS);
      }
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative w-full mx-auto"
            style={{ maxWidth: 'min(64rem, calc((100svh - 8rem) * 16 / 9))' }}
          >
            <button
              onClick={onClose}
              aria-label={closeAriaLabel}
              className="absolute -top-12 right-0 sm:-top-10 sm:-right-2 p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            >
              <HiX className="w-7 h-7" />
            </button>

            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <div
                ref={hostRef}
                className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${
                  hasStarted ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {hasStarted && (
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? unmuteAriaLabel : muteAriaLabel}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-black/55 hover:bg-black/75 text-white backdrop-blur-sm transition-colors"
                >
                  {isMuted ? (
                    <HiVolumeOff className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <HiVolumeUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </button>
              )}
            </div>

            {closeHint && (
              <p className="mt-3 text-center text-xs sm:text-sm text-white/55 select-none">
                {closeHint}
              </p>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
