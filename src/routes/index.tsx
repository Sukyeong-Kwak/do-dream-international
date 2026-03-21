import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../components/layout/Layout';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home/Home'));
const Program = lazy(() => import('../pages/Program/Program'));
const Apply = lazy(() => import('../pages/Apply/Apply'));


// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
  </div>
);

// Create router
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Home />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/program',
    element: (
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Program />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/apply',
    element: (
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Apply />
        </Suspense>
      </Layout>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
