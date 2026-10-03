import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiChevronDown, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { APPLY_FORM_URL } from '../../../lib/constants';
import type { SupportedLanguage } from '../../../locales/i18n.config';

/** 각 언어를 그 언어 사용자가 바로 알아볼 수 있도록 자국어 표기로 보여줍니다. */
const LANGUAGES: { code: SupportedLanguage; label: string }[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'zh-CN', label: '简体中文' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation('common');
  const location = useLocation();

  const current = LANGUAGES.find((lang) => lang.code === i18n.language) ?? LANGUAGES[1];

  // 바깥을 클릭하거나 ESC를 누르면 언어 메뉴를 닫습니다.
  useEffect(() => {
    if (!langMenuOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!langMenuRef.current?.contains(event.target as Node)) setLangMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLangMenuOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [langMenuOpen]);

  const selectLanguage = (code: SupportedLanguage) => {
    i18n.changeLanguage(code);
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.program'), href: '/program' },
    { name: t('nav.church'), href: '/church' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.apply'), href: '/apply' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-brand-bg/85 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="container-custom py-1">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/logo-horizontal.png" alt="DO DREAM TWO-GETHER International" className="h-16 md:h-[5rem] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? 'text-brand-primary-blue' : 'text-brand-text hover:text-brand-primary-teal'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <div className="relative" ref={langMenuRef}>
                <button
                  onClick={() => setLangMenuOpen((open) => !open)}
                  aria-haspopup="listbox"
                  aria-expanded={langMenuOpen}
                  aria-label="Select language"
                  className="flex items-center gap-1.5 text-sm font-semibold text-brand-text hover:text-brand-primary-teal transition-colors"
                >
                  <HiOutlineGlobeAlt className="w-4 h-4" aria-hidden="true" />
                  <span>{current.label}</span>
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${langMenuOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {langMenuOpen && (
                  <ul
                    role="listbox"
                    className="absolute right-0 mt-2 w-36 py-1 rounded-xl bg-white border border-gray-200 shadow-lg overflow-hidden"
                  >
                    {LANGUAGES.map((lang) => (
                      <li key={lang.code} role="option" aria-selected={lang.code === current.code}>
                        <button
                          onClick={() => selectLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            lang.code === current.code
                              ? 'font-semibold text-brand-primary-teal bg-brand-bg/60'
                              : 'text-brand-text hover:bg-gray-50'
                          }`}
                        >
                          {lang.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary-teal text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-sm text-sm"
              >
                {t('nav.applyNow')}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-text hover:bg-white/50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href) ? 'text-brand-primary-blue' : 'text-brand-text hover:text-brand-primary-teal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={APPLY_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-primary-teal text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors text-center shadow-md w-full mt-2"
              >
                {t('nav.applyNow')}
              </a>
              <div className="pt-2 border-t border-gray-200" role="group" aria-label="Select language">
                <p className="flex items-center gap-1.5 mb-2 text-xs font-semibold uppercase tracking-wider text-brand-muted">
                  <HiOutlineGlobeAlt className="w-4 h-4" aria-hidden="true" />
                  Language
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      aria-current={lang.code === current.code ? 'true' : undefined}
                      className={`py-2 text-sm font-medium border rounded-lg transition-colors ${
                        lang.code === current.code
                          ? 'bg-brand-primary-teal text-white border-brand-primary-teal'
                          : 'text-brand-primary-blue border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
