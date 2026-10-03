import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from './en/common.json';
import homeEn from './en/home.json';
import programEn from './en/program.json';
import aboutEn from './en/about.json';
import applyEn from './en/apply.json';
import contactEn from './en/contact.json';
import churchEn from './en/church.json';
import commonKo from './ko/common.json';
import homeKo from './ko/home.json';
import programKo from './ko/program.json';
import aboutKo from './ko/about.json';
import applyKo from './ko/apply.json';
import contactKo from './ko/contact.json';
import churchKo from './ko/church.json';
import commonJa from './ja/common.json';
import homeJa from './ja/home.json';
import programJa from './ja/program.json';
import aboutJa from './ja/about.json';
import applyJa from './ja/apply.json';
import contactJa from './ja/contact.json';
import churchJa from './ja/church.json';

export const SUPPORTED_LANGUAGES = ['en', 'ko', 'ja'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_STORAGE_KEY = 'dodream.language';

function isSupported(value: string | null): value is SupportedLanguage {
  return value !== null && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

/** 'ja-JP' 처럼 지역이 붙은 코드도 지원 언어로 맞춰 줍니다. */
function normalizeLanguage(tag: string | null | undefined): SupportedLanguage | null {
  if (!tag) return null;
  const base = tag.toLowerCase().split('-')[0];
  return isSupported(base) ? base : null;
}

/** 지난 방문에서 고른 언어. 스토리지를 쓸 수 없으면 null을 돌려줍니다. */
function readStoredLanguage(): SupportedLanguage | null {
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    // 시크릿 모드 등 스토리지 접근이 차단된 환경에서는 조용히 기본값을 씁니다.
    return null;
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: commonEn,
        home: homeEn,
        program: programEn,
        about: aboutEn,
        apply: applyEn,
        contact: contactEn,
        church: churchEn,
      },
      ko: {
        common: commonKo,
        home: homeKo,
        program: programKo,
        about: aboutKo,
        apply: applyKo,
        contact: contactKo,
        church: churchKo,
      },
      ja: {
        common: commonJa,
        home: homeJa,
        program: programJa,
        about: aboutJa,
        apply: applyJa,
        contact: contactJa,
        church: churchJa,
      }
    },
    lng: readStoredLanguage() ?? 'en',
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
    // 'ja-JP' 같은 지역 코드가 들어와도 'ja' 리소스를 쓰게 합니다.
    load: 'languageOnly',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

// 선택한 언어를 저장해 다음 방문에도 유지합니다.
i18n.on('languageChanged', (lng) => {
  try {
    const normalized = normalizeLanguage(lng);
    if (normalized) window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
  } catch {
    // 저장이 막혀 있어도 현재 세션의 언어 전환은 그대로 동작합니다.
  }
});

export default i18n;
