import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/',         label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/partners', label: 'Partners' },
    { to: '/products', label: 'Products' },
    { to: '/about',    label: 'About' },
    { to: '/contact',  label: 'Contact' },
  ];

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-[#050810]/90 backdrop-blur-md border-b border-[#00F0C8]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-2xl font-bold text-[#00F0C8] tracking-wider">
            CMS<span className="text-[#FFB020]">·</span>TECHUB
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-sm font-medium tracking-wide uppercase transition ${
                  isActive(l.to)
                    ? 'text-[#00F0C8]'
                    : 'text-[#8B98A5] hover:text-[#00F0C8]'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/book"
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-lg bg-[#00F0C8] text-[#050810] hover:bg-[#00A88C] transition"
            >
              Book Now
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#00F0C8] text-2xl"
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#00F0C8]/20 bg-[#050810]/95">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-3 text-sm uppercase tracking-wide ${
                    isActive(l.to) ? 'text-[#00F0C8]' : 'text-[#8B98A5]'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-sm uppercase tracking-wide text-[#FFB020]"
              >
                Book Now →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
