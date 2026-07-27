import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineClipboardDocument, HiOutlineCheck } from 'react-icons/hi2';
import { SiNaver, SiGooglemaps } from 'react-icons/si';
import { fadeInUp } from '../../lib/motion';
import { getMapApps, openMap, type MapAppId, type MapPlace } from '../../lib/mapLinks';

/** 각 지도 서비스의 고유 색으로 채워 모바일에서도 바로 눈에 띄게 합니다. */
const MAP_APP_STYLE: Record<MapAppId, string> = {
  naver: 'bg-[#03C75A] hover:bg-[#02B351]',
  google: 'bg-[#1A73E8] hover:bg-[#1667D4]',
};

const MAP_APP_ICON = { naver: SiNaver, google: SiGooglemaps };

interface LocationCardProps {
  /** 카드 상단의 짧은 라벨 (예: 오시는 길) */
  label: string;
  /** 화면에 보여주고 복사되는 주소 */
  address: string;
  /** 지도 앱이 찾아갈 장소 */
  place: MapPlace;
  /** 버튼 아래 보조 설명. 비우면 렌더하지 않습니다. */
  note?: string;
  className?: string;
}

/** 주소와 지도 앱 바로가기 버튼을 함께 보여주는 카드. */
export default function LocationCard({ label, address, place, note, className = '' }: LocationCardProps) {
  const { t, i18n } = useTranslation('common');
  const mapApps = getMapApps(place, i18n.language);
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 차단된 환경에서는 조용히 넘어갑니다.
    }
  };

  return (
    <motion.div
      {...fadeInUp}
      className={`rounded-3xl border border-gray-100 bg-white p-6 md:p-8 shadow-sm ${className}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="mb-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-primary-teal">
            {label}
          </p>
          <div className="flex items-start gap-2.5">
            <HiOutlineMapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-primary-teal shrink-0 mt-0.5" />
            <p className="text-base md:text-lg font-bold text-brand-text leading-snug">{address}</p>
          </div>
          <button
            type="button"
            onClick={handleCopyAddress}
            className="mt-3 inline-flex items-center gap-1.5 rounded text-xs font-medium text-brand-muted transition-colors hover:text-brand-primary-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2"
          >
            {copied ? (
              <HiOutlineCheck className="w-4 h-4 text-brand-primary-teal" />
            ) : (
              <HiOutlineClipboardDocument className="w-4 h-4" />
            )}
            {copied ? t('map.copied') : t('map.copy')}
          </button>
        </div>

        <div className="lg:shrink-0">
          <p className="mb-2.5 text-sm font-semibold text-brand-text/70 lg:text-right">{t('map.cta')}</p>
          <div className="grid grid-cols-2 gap-3 lg:flex">
            {mapApps.map((app) => {
              const Icon = MAP_APP_ICON[app.id];
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => openMap(app)}
                  className={`inline-flex min-h-[56px] items-center justify-center gap-2 rounded-2xl px-4 lg:px-7 text-[15px] font-bold text-white shadow-md transition-all active:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-teal focus-visible:ring-offset-2 ${MAP_APP_STYLE[app.id]}`}
                >
                  <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>{t(`map.apps.${app.id}`)}</span>
                </button>
              );
            })}
          </div>
          {note && (
            <p className="mt-3 text-xs leading-relaxed text-brand-muted lg:max-w-[300px] lg:text-right">
              {note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
