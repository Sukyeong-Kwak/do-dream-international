import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src="/logo-white.png" alt="Do Dream International" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-gray-200 text-center md:text-left max-w-md leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
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
                <Link to="/apply" className="hover:text-white transition-colors">
                  {t('footer.apply')}
                </Link>
              </li>

            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">{t('footer.newsletter')}</h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.newsletterPlaceholder')}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="w-full bg-brand-primary-teal text-white px-4 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors shadow-md text-sm"
              >
                {t('footer.subscribe')}
              </button>
            </form>
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
