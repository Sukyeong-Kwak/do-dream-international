import { Analytics } from '@vercel/analytics/react';
import AppRouter from './routes';

export default function App() {
  return (
    <>
      <AppRouter />
      <Analytics />
    </>
  );
}
