import { createBrowserRouter, Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useVersionCheck } from './hooks/useVersionCheck';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { AwardsPage } from './pages/AwardsPage';
import { AboutPage } from './pages/AboutPage';

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Skip scroll-to-top if the page is requesting a specific scroll target
    if (!(location.state as { scrollToGrid?: boolean } | null)?.scrollToGrid) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  return null;
}

function Root() {
  useVersionCheck();
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <p className="krc-font text-white text-[24px]">Page not found</p>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'projects/:id', Component: ProjectDetailPage },
      { path: 'services', Component: ServicesPage },
      { path: 'awards', Component: AwardsPage },
      { path: 'about', Component: AboutPage },
      { path: '*', Component: NotFound },
    ],
  },
]);