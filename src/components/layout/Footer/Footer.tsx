import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// 소셜 링크 재활성화 시 주석 해제: import { SOCIAL_LINKS } from '../../../lib/constants';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/logo-white.png" alt="DO DREAM TWO-GETHER" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-200 text-center md:text-left max-w-md leading-relaxed whitespace-pre-line">
              {t('footer.description')}
            </p>
            {/* 소셜 링크: 실제 계정 주소가 준비되면 SOCIAL_LINKS 업데이트 후 아래 블록 주석 해제 */}
            {/*
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm flex flex-col items-center md:items-start">
              <li>
                <Link to="/program" className="hover:text-white transition-colors">
                  {t('footer.program')}
                </Link>
              </li>
              <li>
                <Link to="/church" className="hover:text-white transition-colors">
                  {t('footer.church')}
                </Link>
              </li>
              <li>
                <Link to="/apply" className="hover:text-white transition-colors">
                  {t('footer.apply')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center text-gray-300">
          <p>{t('footer.copyright').replace('2026', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
}
