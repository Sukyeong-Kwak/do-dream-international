import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AppRouter from './routes';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <AppRouter />;
}

export default App;
