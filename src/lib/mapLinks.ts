// 지도 앱 연결 (네이버 지도 · Google Maps)
// - 네이버: 앱 스킴을 먼저 시도하고 전환이 없으면 웹 지도로 폴백합니다.
//   한국은 지도 데이터 반출 규제로 Google Maps의 국내 길찾기가 제한되므로,
//   실제 이동 안내는 네이버가 정확합니다. 네이버 지도 앱은 영어 UI도 지원합니다.
// - 구글: 유니버설 링크 하나로 모바일은 앱, PC는 웹이 열리며 hl로 표기 언어를 맞춥니다.

export interface MapPlace {
  /** 지도 앱에서 찾을 검색어. 동명 장소가 많으므로 지역명을 함께 넣습니다. */
  query: string;
  /**
   * 좌표가 확인되면 여기에 채워 넣으세요. 값이 있으면 검색 대신 그 지점에
   * 정확히 핀을 찍습니다. 비워 두면 검색어로 장소를 찾아갑니다.
   */
  coord?: { lat: number; lng: number };
}

/** 포도나무교회 본당 — 경기도 용인시 기흥구 신정로 123-1 */
export const CHURCH_PLACE: MapPlace = {
  query: '용인 포도나무교회',
};

/** 훈련이 진행되는 기도원 — 경기도 용인시 기흥구 신정로151번길 11-17 */
export const PRAYER_HOUSE_PLACE: MapPlace = {
  query: '경기도 용인시 기흥구 신정로151번길 11-17',
};

const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isMobile = /iphone|ipad|ipod|android/i.test(ua);

export type MapAppId = 'naver' | 'google';

export interface MapApp {
  id: MapAppId;
  /** 'link' = 유니버설 링크 그대로 열기 / 'scheme' = 앱 스킴 시도 후 폴백 */
  kind: 'link' | 'scheme';
  url: string;
  fallback: string;
}

/**
 * 장소와 화면 언어에 맞춰 지도 앱 목록을 만듭니다.
 * 한국어는 네이버를, 영어는 Google Maps를 앞에 둡니다.
 */
export function getMapApps(place: MapPlace, language: string): MapApp[] {
  const isKorean = language.startsWith('ko');
  const encoded = encodeURIComponent(place.query);
  // 네이버 앱 스킴은 호출한 서비스 이름(appname)을 요구합니다.
  const appname = typeof window !== 'undefined' ? window.location.hostname : 'dodream';
  const hl = isKorean ? 'ko' : 'en';

  const googleQuery = place.coord ? `${place.coord.lat},${place.coord.lng}` : encoded;
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${googleQuery}&hl=${hl}`;

  const naver: MapApp = {
    id: 'naver',
    kind: 'scheme',
    url: place.coord
      ? `nmap://place?lat=${place.coord.lat}&lng=${place.coord.lng}&name=${encoded}&appname=${appname}`
      : `nmap://search?query=${encoded}&appname=${appname}`,
    fallback: `https://map.naver.com/p/search/${encoded}`,
  };

  const google: MapApp = {
    id: 'google',
    kind: 'link',
    url: googleUrl,
    fallback: googleUrl,
  };

  return isKorean ? [naver, google] : [google, naver];
}

export function openMap(app: MapApp): void {
  // 유니버설 링크: 그대로 열면 모바일은 앱, PC는 웹
  if (app.kind === 'link') {
    window.open(app.url, '_blank', 'noopener,noreferrer');
    return;
  }
  // 데스크톱: 앱 스킴이 동작하지 않으므로 바로 폴백
  if (!isMobile) {
    window.open(app.fallback, '_blank', 'noopener,noreferrer');
    return;
  }
  // 모바일: 앱 스킴을 시도하고, 앱으로 전환되지 않으면 웹 지도로 폴백
  const start = Date.now();
  const timer = window.setTimeout(() => {
    if (Date.now() - start < 2000) window.location.href = app.fallback;
  }, 1600);
  const onHide = () => {
    if (document.hidden) window.clearTimeout(timer);
  };
  document.addEventListener('visibilitychange', onHide, { once: true });
  window.location.href = app.url;
}
