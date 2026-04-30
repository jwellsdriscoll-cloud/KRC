import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import imgLogo from 'figma:asset/e9e16d7a453246bfbb26c7dbb919bc1d546e46ca.png';

const navItems = [
  { label: 'Projects', path: '/projects' },
  { label: 'Services', path: '/services' },
  { label: 'Awards',   path: '/awards'   },
  { label: 'About Us', path: '/about'    },
];

export function NavHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const go = (path: string) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[rgba(0,0,0,0.9)]">

      {/* ── Main bar ── */}
      <div className="krc-section flex items-center pb-4 md:pb-6 pt-4 gap-4">

        {/* Logo */}
        <div className="shrink-0 cursor-pointer" onClick={() => go('/')}>
          <img alt="KR Customs" className="h-10 md:h-[72px] w-auto object-contain" src={imgLogo} />
        </div>

        {/* Desktop nav links + appointment button */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-6 lg:gap-10 flex-nowrap min-w-0">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`krc-font shrink-0 cursor-pointer leading-8 text-[16px] lg:text-[20px] uppercase whitespace-nowrap transition-colors duration-200 ${
                isActive(item.path) ? 'text-[#eb3223]' : 'text-white hover:text-[#f1ea5a]'
              }`}
              onClick={() => go(item.path)}
            >
              {item.label}
            </button>
          ))}

          {/* Responsive label: short on md, full on lg */}
          <button
            className="krc-btn-outline shrink-0 ml-4 px-4 lg:px-6 py-2 text-[14px] lg:text-[20px]"
            onClick={() => go('/about')}
          >
            <span className="lg:hidden">Appointments</span>
            <span className="hidden lg:inline">Make Your Appointment</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-white p-1 shrink-0"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col items-start krc-section pb-4 gap-4 border-t border-white/10">
          {navItems.map((item) => (
            <button
              key={item.path}
              className={`krc-font cursor-pointer text-[18px] uppercase whitespace-nowrap transition-colors duration-200 ${
                isActive(item.path) ? 'text-[#eb3223]' : 'text-white'
              }`}
              onClick={() => go(item.path)}
            >
              {item.label}
            </button>
          ))}
          <button className="krc-btn-outline px-6 py-2" onClick={() => go('/about')}>
            Make Your Appointment
          </button>
        </div>
      )}

    </nav>
  );
}
