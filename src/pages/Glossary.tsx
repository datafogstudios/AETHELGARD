import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { glossaryData } from '../data';

export function Glossary() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('term') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const termRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const term = searchParams.get('term');
    if (term) {
       setSearchTerm(term);
       // We can optionally clear the activeLetter filter if a specific term is queried
       setActiveLetter(null);
    }
  }, [searchParams]);

  useEffect(() => {
    const term = searchParams.get('term');
    if (term && termRefs.current[term]) {
      termRefs.current[term]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [searchParams, searchTerm]);

  // Sort the glossaryData alphabetically by word
  const sortedGlossaryData = [...glossaryData].sort((a, b) => a.word.localeCompare(b.word));

  const filteredTerms = sortedGlossaryData.filter(item => {
    const searchWords = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
    
    const matchesSearch = searchWords.length === 0 || searchWords.every(word => 
      item.word.toLowerCase().includes(word) ||
      item.def.toLowerCase().includes(word) ||
      item.cat.toLowerCase().includes(word) ||
      (item.related && item.related.some(r => r.toLowerCase().includes(word)))
    );
    
    const matchesLetter = activeLetter ? item.word.toUpperCase().startsWith(activeLetter) : true;
    return matchesSearch && matchesLetter;
  });

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <motion.div
      key="glossary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32 bg-[#F9F7F2] min-h-screen relative overflow-hidden"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none technical-grid" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#002B5B] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Reference Hub</span>
          </div>
          <h2 id="glossary-title" className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#002B5B]">
            Glossary
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            The language of the markets, simplified.
          </p>
          <div className="flex justify-center items-center gap-4">
             <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">EN</span>
             <button aria-label="Toggle language to Swahili" className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2" onClick={() => alert("Swahili translations are currently in Beta review for EA region. Coming soon!")}>
               <span className="inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white transition-transform" />
             </button>
             <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">SWA</span>
          </div>
        </div>

        <div className="space-y-6 mb-16 relative">
          <div className="relative group">
            <label htmlFor="glossary-search" className="sr-only">Search terms</label>
            <input 
              id="glossary-search"
              type="search" 
              placeholder="Search terms..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-8 bg-white border border-gray-200 rounded-[2rem] focus:outline-none focus:border-[#002B5B] transition-all text-[#002B5B] shadow-sm text-xl pl-16 focus-visible:ring-2 focus-visible:ring-[#002B5B]"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#002B5B] transition-colors" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
          </div>
          
          <nav aria-label="A to Z index filter" className="flex flex-wrap justify-center gap-2">
            <button 
              onClick={() => setActiveLetter(null)}
              aria-pressed={activeLetter === null}
              className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${activeLetter === null ? 'bg-[#002B5B] text-white border-[#002B5B]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#002B5B]/50 hover:text-[#002B5B]'}`}
            >
              ALL
            </button>
            {alphabet.map(letter => (
              <button
                key={letter}
                onClick={() => setActiveLetter(letter)}
                aria-pressed={activeLetter === letter}
                className={`w-10 h-10 rounded-lg text-sm font-bold border flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${activeLetter === letter ? 'bg-[#002B5B] text-white border-[#002B5B]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#002B5B]/50 hover:text-[#002B5B]'}`}
                aria-label={`Filter by letter ${letter}`}
              >
                {letter}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-12" role="region" aria-live="polite" aria-labelledby="glossary-title">
          {filteredTerms.map((item, idx) => (
            <motion.div 
              key={idx} 
              id={item.word}
              ref={(el) => { termRefs.current[item.word] = el; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-white p-10 md:p-14 border rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#002B5B]/5 hover:border-[#002B5B]/30 transition-all group scroll-m-32 ${searchParams.get('term') === item.word ? 'border-[#002B5B] ring-4 ring-[#002B5B]/10' : 'border-gray-200'}`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#002B5B] tracking-tight group-hover:text-[#D4AF37] transition-colors">{item.word}</h3>
                  <span className="inline-block px-3 py-1 mt-3 bg-gray-100 text-gray-600 font-bold text-[10px] uppercase tracking-widest rounded-full">{item.cat}</span>
                </div>
                <span className="text-[10px] font-mono text-[#D4AF37]/60">REF-{(idx + 1).toString().padStart(3, '0')}</span>
              </div>
              
              <p className="text-gray-600 mb-12 leading-relaxed text-xl font-medium">{item.def}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10 border-t border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Example</span>
                  </div>
                  <div className="p-6 bg-[#F9F7F2] border border-gray-200 rounded-2xl font-mono text-sm leading-relaxed text-[#002B5B] italic">
                    {item.example}
                  </div>
                </div>
                {item.related && item.related.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#002B5B]" />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Related</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {item.related.map((rel, i) => (
                           <Link 
                             key={i} 
                             to={`/glossary?term=${encodeURIComponent(rel)}`}
                             className="text-xs px-3 py-1.5 bg-[#002B5B]/5 text-[#002B5B] hover:bg-[#002B5B] hover:text-white rounded-md transition-colors font-bold tracking-wider uppercase inline-block"
                           >
                             {rel}
                           </Link>
                       ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
          {filteredTerms.length === 0 && (
            <div className="text-center py-32 bg-white border border-gray-200 rounded-[3rem] border-dashed">
              <p className="text-gray-500 font-medium text-lg">No terms found matching "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="mt-4 text-[#002B5B] font-bold text-sm uppercase tracking-widest hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] p-1 rounded">Clear Search</button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
