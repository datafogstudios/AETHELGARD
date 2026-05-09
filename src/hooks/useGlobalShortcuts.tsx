import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useAppStore } from '../store';

export function useGlobalShortcuts() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsSearchOpen } = useSearch();
  const [keys, setKeys] = useState<string[]>([]);
  const { toggleMute } = useAppStore();
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if inside inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) {
         if (e.key === 'Escape') {
             (e.target as HTMLElement).blur();
         }
         return;
      }
      
      const key = e.key.toLowerCase();
      
      if (key === '?') {
         window.dispatchEvent(new CustomEvent('toggle-help-modal'));
         return;
      }
      
      if (key === '/') {
        e.preventDefault();
        setIsSearchOpen(true);
        return;
      }
      
      if (key === 'm') {
        toggleMute();
        return;
      }
      
      if (key === 'n') {
        window.dispatchEvent(new CustomEvent('lesson-next'));
        return;
      }
      
      if (key === 'p') {
        window.dispatchEvent(new CustomEvent('lesson-prev'));
        return;
      }
      
      if (key === 'c') {
        window.dispatchEvent(new CustomEvent('open-calc'));
        return;
      }
      
      if (key === 's') {
        window.dispatchEvent(new CustomEvent('open-sim'));
        return;
      }
      
      if (key === 'f') {
        navigate('/glossary');
        setTimeout(() => {
           document.getElementById('glossary-search')?.focus();
        }, 100);
        return;
      }
      
      if (e.key === 'Escape') {
        window.dispatchEvent(new CustomEvent('close-all-modals'));
        return;
      }
      
      setKeys(prev => {
         const newKeys = [...prev.slice(-1), key];
         if (newKeys.join('') === 'gh') {
             navigate('/');
         }
         return newKeys;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location, setIsSearchOpen, toggleMute]);
}

export function ShortcutsHelpModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleToggle = () => setIsOpen(v => !v);
    const handleClose = () => setIsOpen(false);
    window.addEventListener('toggle-help-modal', handleToggle);
    window.addEventListener('close-all-modals', handleClose);
    return () => {
       window.removeEventListener('toggle-help-modal', handleToggle);
       window.removeEventListener('close-all-modals', handleClose);
    };
  }, []);
  
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
       <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()} role="dialog" aria-labelledby="shortcuts-title" aria-modal="true">
          <div className="flex justify-between items-center mb-6">
            <h2 id="shortcuts-title" className="text-2xl font-bold font-serif text-[#1A1A1A]">Keyboard Shortcuts</h2>
            <button onClick={() => setIsOpen(false)} aria-label="Close shortcuts help" className="p-2 hover:bg-gray-100 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <ul className="space-y-4 text-sm font-bold text-gray-600">
             <li className="flex justify-between"><span>Show Help</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">?</kbd></li>
             <li className="flex justify-between"><span>Search Lessons</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">/</kbd></li>
             <li className="flex justify-between"><span>Go Home</span> <span><kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">G</kbd> then <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">H</kbd></span></li>
             <li className="flex justify-between"><span>Next Lesson</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">N</kbd></li>
             <li className="flex justify-between"><span>Prev Lesson</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">P</kbd></li>
             <li className="flex justify-between"><span>Open Calculator</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">C</kbd></li>
             <li className="flex justify-between"><span>Open Simulator</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">S</kbd></li>
             <li className="flex justify-between"><span>Search Glossary</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">F</kbd></li>
             <li className="flex justify-between"><span>Toggle Mute</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">M</kbd></li>
             <li className="flex justify-between"><span>Close Modals/Focus</span> <kbd className="bg-gray-100 px-2 py-1 rounded shadow-sm border border-gray-200">Esc</kbd></li>
          </ul>
       </div>
    </div>
  );
}
