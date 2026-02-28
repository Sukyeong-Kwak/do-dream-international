import type { ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col font-body">
      {/* Subtle Analog Paper Texture (Noise) for warmth and sincerity */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/200/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Structured top accent line - Warm Stone */}
      <div className="h-1 w-full bg-brand-primary relative z-10"></div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col flex-grow">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
