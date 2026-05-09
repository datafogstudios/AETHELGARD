import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearch } from '../contexts/SearchContext';
import { useAppStore } from '../store';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { setIsSearchOpen } = useSearch();
  const { isDarkMode, toggleDarkMode } = useAppStore();

  const toggleMenuRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      if (document.activeElement && document.activeElement.closest('.mobile-menu-panel')) {
         toggleMenuRef.current?.focus();
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMenuKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="bg-[#002B5B] text-[#D4AF37] hidden lg:block border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs tracking-[0.2em] uppercase font-bold">
          <div className="flex items-center">
            <Link to="/brokers" className="flex items-center gap-3 py-3 px-4 hover:bg-[#D4AF37]/10 transition-colors">
              <span className="opacity-80">📈</span> INSTITUTIONAL BROKERS
            </Link>
          </div>
          <Link to="/support" className="flex items-center gap-3 py-3 px-4 hover:bg-[#D4AF37]/10 transition-colors bg-[#D4AF37]/5">
            <span className="opacity-80">🏛️</span> PATRON SUPPORT
          </Link>
        </div>
      </div>

      <header role="banner" className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-12 py-4 md:py-6 bg-[#F9F7F2]/90 backdrop-blur-[10px] border-b border-[#002B5B]/10 transition-colors duration-300">
      <Link 
        to="/"
        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1"
        aria-label="Aethelgard FX Home"
      >
        <Logo className="w-10 h-10 md:w-12 md:h-12" />
      </Link>
      
      <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 xl:gap-8">
        <Link 
          to="/courses"
          aria-current={isActive('/courses') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/courses') ? 'text-[#002B5B]' : 'text-gray-500'}`}
        >
          The Syllabus
        </Link>
        <Link 
          to="/community"
          aria-current={isActive('/community') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/community') ? 'text-[#002B5B]' : 'text-gray-500'}`}
        >
          Community
        </Link>
        <Link 
          to="/glossary"
          aria-current={isActive('/glossary') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/glossary') ? 'text-[#002B5B]' : 'text-gray-500'}`}
        >
          Glossary
        </Link>
        <Link 
          to="/lab"
          aria-current={isActive('/lab') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/lab') ? 'text-[#002B5B]' : 'text-gray-500'}`}
        >
          Trading Lab
        </Link>
        <Link 
          to="/brokers"
          aria-current={isActive('/brokers') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/brokers') ? 'text-[#002B5B]' : 'text-gray-500'}`}
        >
          Brokers
        </Link>
        <Link 
          to="/support"
          aria-current={isActive('/support') ? 'page' : undefined}
          className={`text-[10px] uppercase tracking-[0.15em] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded p-1 ${isActive('/support') ? 'text-[#D4AF37]' : 'text-[#D4AF37] hover:text-[#002B5B]'}`}
        >
          Donate
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <button onClick={() => setIsSearchOpen(true)} className="p-2 text-gray-500 hover:text-[#002B5B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded" aria-label="Open Search">
          <Search size={18} aria-hidden="true" />
        </button>
        <button 
          ref={toggleMenuRef}
          className="md:hidden p-2 text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu-panel"
        >
          {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[60] md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
              <motion.div 
            id="mobile-menu-panel"
              onKeyDown={handleMenuKeydown}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-[#F9F7F2] text-[#002B5B] p-8 border-l border-[#002B5B]/10 flex flex-col shadow-2xl mobile-menu-panel overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
            >
               <div className="flex justify-between items-center mb-12">
                 <Logo className="w-8 h-8" />
                 <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 text-[#002B5B]/60 hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded">
                   <X size={24} aria-hidden="true" />
                 </button>
               </div>
               
               <nav aria-label="Mobile" className="flex flex-col gap-2">
                 <Link to="/" className="text-xl font-bold text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-3 px-2 border-b border-[#002B5B]/10" onClick={() => setIsMenuOpen(false)}>Home</Link>
                 <Link to="/glossary" className="text-xl font-bold text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-3 px-2 border-b border-[#002B5B]/10" onClick={() => setIsMenuOpen(false)}>Glossary</Link>
                 
                 <div className="flex flex-col border-b border-[#002B5B]/10">
                    <span className="text-xl font-bold text-[#D4AF37] py-3 px-2 uppercase text-[10px] tracking-widest mt-2">Courses</span>
                    <Link to="/courses" className="text-lg font-medium text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-2 px-4 mb-2" onClick={() => setIsMenuOpen(false)}>Academy Curriculum</Link>
                 </div>

                 <div className="flex flex-col border-b border-[#002B5B]/10">
                    <span className="text-xl font-bold text-[#D4AF37] py-3 px-2 uppercase text-[10px] tracking-widest mt-2">Tools</span>
                    <Link to="/lab" className="text-lg font-medium text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-2 px-4" onClick={() => setIsMenuOpen(false)}>Trading Lab</Link>
                    <Link to="/brokers" className="text-lg font-medium text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-2 px-4 mb-2" onClick={() => setIsMenuOpen(false)}>Featured Brokers</Link>
                 </div>

                 <div className="flex flex-col border-b border-[#002B5B]/10 pb-4">
                    <span className="text-xl font-bold text-[#D4AF37] py-3 px-2 uppercase text-[10px] tracking-widest mt-2">Community</span>
                    <Link to="/community" className="text-lg font-medium text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-2 px-4" onClick={() => setIsMenuOpen(false)}>Web Forum</Link>
                    <Link to="/community" className="text-lg font-medium text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-2 px-4 mb-2" onClick={() => setIsMenuOpen(false)}>Discord Server</Link>
                 </div>

                 <Link to="/support" className="text-xl font-bold text-[#D4AF37] hover:text-[#002B5B] transition-colors mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] rounded py-3 px-2" onClick={() => setIsMenuOpen(false)}>Donate to Academy</Link>
               </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
