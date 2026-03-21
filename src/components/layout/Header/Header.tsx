import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation('common');
  const location = useLocation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(nextLang);
  };

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.program'), href: '/program' },
    { name: t('nav.apply'), href: '/apply' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-brand-bg/85 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200/50">
      <nav className="container-custom py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo-horizontal.png" alt="Do Dream International" className="h-16 md:h-[5rem] w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${isActive(item.href)
                  ? 'text-brand-primary-blue'
                  : 'text-brand-text hover:text-brand-primary-teal'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <button
                onClick={toggleLanguage}
                className="text-sm font-semibold text-brand-text hover:text-brand-primary-teal transition-colors flex items-center space-x-1"
                aria-label="Toggle language"
              >
                <span>{i18n.language === 'ko' ? 'EN' : 'KO'}</span>
              </button>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
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
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
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
                  className={`text-base font-medium transition-colors ${isActive(item.href)
                    ? 'text-brand-primary-blue'
                    : 'text-brand-text hover:text-brand-primary-teal'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScwgPF5kPO--Yw41STnVkPKYTDJuCNmGZa7r_I2r5JTQOhdBg/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-primary-teal text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-colors text-center shadow-md w-full mt-2"
              >
                {t('nav.applyNow')}
              </a>

              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-2 text-brand-primary-blue font-medium border border-gray-200 rounded-lg mt-2 hover:bg-gray-50 transition-colors"
              >
                {i18n.language === 'ko' ? 'Switch to English' : '한국어로 보기'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
