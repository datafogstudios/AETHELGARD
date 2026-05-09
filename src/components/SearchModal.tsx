import { useEffect, useRef, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';
import Fuse from 'fuse.js';
import { getLessons, ParsedLesson } from '../lib/courses';

export function SearchModal() {
  const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [lessons, setLessons] = useState<ParsedLesson[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    getLessons().then((data) => {
      if (mounted) {
        setLessons(data);
        setIsReady(true);
      }
    });
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [isSearchOpen, setSearchQuery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  const fuse = useMemo(() => new Fuse(lessons, {
    keys: ['title', 'description', 'content', 'module', 'category'],
    threshold: 0.3,
    ignoreLocation: true,
    includeScore: true,
  }), [lessons]);

  const searchResults = useMemo(() => {
    if (searchQuery.trim() === '') return [];
    return fuse.search(searchQuery).map(res => res.item).slice(0, 15);
  }, [searchQuery, fuse]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && searchResults[selectedIndex]) {
      e.preventDefault();
      setIsSearchOpen(false);
      navigate(`/lesson/${searchResults[selectedIndex].id}`);
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSearchOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
            aria-hidden="true"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-[var(--color-bg)] rounded-xl shadow-2xl z-[101] overflow-hidden border border-[var(--color-champagne)] shadow-[0_0_20px_var(--color-champagne)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-modal-title"
          >
            <div className="sr-only" id="search-modal-title">Institutional Search</div>
            <div className="flex items-center px-8 py-6 border-b border-[var(--color-champagne)]/20 bg-[#002B5B] text-[var(--color-champagne)]">
              <Search className="mr-4 text-[var(--color-champagne)]" size={24} aria-hidden="true" />
              <label htmlFor="search-input" className="sr-only">Search the archive...</label>
              <input
                id="search-input"
                ref={inputRef}
                type="text"
                placeholder="Query the Archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-xl font-serif placeholder:text-[var(--color-champagne)]/40 focus-visible:ring-0 text-[var(--color-champagne)]"
                aria-autocomplete="list"
                aria-controls="search-results-list"
              />
              <button onClick={() => setIsSearchOpen(false)} className="p-3 bg-transparent rounded-full transition-all text-[var(--color-champagne)] hover:text-white" aria-label="Close search">
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto bg-[var(--color-bg)] custom-scrollbar" id="search-results-list" role="region" aria-live="polite">
              {!isReady ? (
                 <div className="p-16 text-center text-[#002B5B] font-serif italic">Loading Archive...</div>
              ) : searchQuery.trim() === '' ? (
                <div className="p-16 text-center text-[#002B5B]/60">
                  <div className="w-20 h-20 bg-[#002B5B]/5 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <BookOpen className="opacity-60" size={40} />
                  </div>
                  <p className="font-serif italic text-lg">Search entire briefings, strategies, and encyclopedic concepts.</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-16 text-center text-[#002B5B]/60 font-serif text-lg italic">
                  <p>No manuscripts found for "{searchQuery}"</p>
                </div>
              ) : (
                <div className="p-6 space-y-3" role="listbox">
                  <div className="sr-only">{searchResults.length} results found.</div>
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      role="option"
                      aria-selected={selectedIndex === idx}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/lesson/${result.id}`);
                      }}
                      className={`w-full text-left p-6 rounded transition-all border group focus-visible:outline-none ${selectedIndex === idx ? 'bg-[#002B5B]/5 border-[#002B5B]/20' : 'border-transparent hover:bg-gray-50'}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-serif text-2xl text-[#002B5B] group-hover:text-amber-800 transition-colors">{result.title}</h4>
                        <span className="text-[10px] uppercase tracking-[0.2em] bg-[#002B5B]/10 px-3 py-1 text-[#002B5B] font-bold">
                          {result.module || 'Syllabus'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 font-serif italic">{result.description}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="px-8 py-4 border-t border-[var(--color-champagne)]/20 bg-[#002B5B] text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--color-champagne)] flex justify-between">
              <div className="flex gap-4">
                <span>ESC <span className="opacity-40">to close</span></span>
                <span>ENTER <span className="opacity-40">to view</span></span>
              </div>
              <span>Aethelgard FX Vault</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
