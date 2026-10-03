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
import commonZhTW from './zh-TW/common.json';
import homeZhTW from './zh-TW/home.json';
import programZhTW from './zh-TW/program.json';
import aboutZhTW from './zh-TW/about.json';
import applyZhTW from './zh-TW/apply.json';
import contactZhTW from './zh-TW/contact.json';
import churchZhTW from './zh-TW/church.json';
import commonZhCN from './zh-CN/common.json';
import homeZhCN from './zh-CN/home.json';
import programZhCN from './zh-CN/program.json';
import aboutZhCN from './zh-CN/about.json';
import applyZhCN from './zh-CN/apply.json';
import contactZhCN from './zh-CN/contact.json';
import churchZhCN from './zh-CN/church.json';

export const SUPPORTED_LANGUAGES = ['en', 'ko', 'ja', 'zh-TW', 'zh-CN'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const LANGUAGE_STORAGE_KEY = 'dodream.language';

function isSupported(value: string | null): value is SupportedLanguage {
  return value !== null && (SUPPORTED_LANGUAGES as readonly string[]).includes(value);
}

/**
 * BCP-47 태그를 지원 언어로 맞춰 줍니다. ('ja-JP' → 'ja', 'zh-HK' → 'zh-TW')
 * 중국어는 간체·번체가 코드만으로 갈리지 않으므로 지역과 표기 체계를 함께 봅니다.
 */
function normalizeLanguage(tag: string | null | undefined): SupportedLanguage | null {
  if (!tag) return null;
  const lower = tag.toLowerCase();
  if (isSupported(tag)) return tag;

  const [base, ...rest] = lower.split('-');
  if (base === 'zh') {
    // 번체권: 대만·홍콩·마카오 또는 Hant 표기. 그 외(중국 본토·싱가포르)는 간체.
    const traditional = rest.some((part) => ['tw', 'hk', 'mo', 'hant'].includes(part));
    return traditional ? 'zh-TW' : 'zh-CN';
  }
  return isSupported(base) ? base : null;
}

/** 지난 방문에서 고른 언어. 스토리지를 쓸 수 없으면 null을 돌려줍니다. */
function readStoredLanguage(): SupportedLanguage | null {
  try {
    return normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    // 시크릿 모드 등 스토리지 접근이 차단된 환경에서는 조용히 넘어갑니다.
    return null;
  }
}

/** 브라우저(기기)에 설정된 선호 언어 중 지원하는 첫 번째 언어. */
function detectBrowserLanguage(): SupportedLanguage | null {
  try {
    const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const tag of preferred) {
      const matched = normalizeLanguage(tag);
      if (matched) return matched;
    }
  } catch {
    // navigator를 쓸 수 없는 환경에서는 기본값으로 넘어갑니다.
  }
  return null;
}

/** 저장된 선택 > 브라우저 언어 > 영어 순으로 시작 언어를 정합니다. */
function resolveInitialLanguage(): SupportedLanguage {
  return readStoredLanguage() ?? detectBrowserLanguage() ?? 'en';
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
      },
      'zh-TW': {
        common: commonZhTW,
        home: homeZhTW,
        program: programZhTW,
        about: aboutZhTW,
        apply: applyZhTW,
        contact: contactZhTW,
        church: churchZhTW,
      },
      'zh-CN': {
        common: commonZhCN,
        home: homeZhCN,
        program: programZhCN,
        about: aboutZhCN,
        apply: applyZhCN,
        contact: contactZhCN,
        church: churchZhCN,
      }
    },
    lng: resolveInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: [...SUPPORTED_LANGUAGES],
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
