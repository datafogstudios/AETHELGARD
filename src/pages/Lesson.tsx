import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import {
  ChevronLeft,
  CheckCircle,
  Eye,
  Menu,
  X,
  BookOpen,
  Download,
  AlertTriangle
} from "lucide-react";
import { useAppStore } from "../store";
import { getLessons, ParsedLesson } from "../lib/courses";
import { Logo } from "../components/Logo";
import * as Illustrations from "../components/Illustrations";

export function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { completedLessons, markLessonComplete } = useAppStore();

  const [lessons, setLessons] = useState<ParsedLesson[]>([]);
  const [activeLesson, setActiveLesson] = useState<ParsedLesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLogicRevealed, setIsLogicRevealed] = useState(false);

  // Load Lessons
  useEffect(() => {
    let isMounted = true;
    getLessons().then((data) => {
      if (isMounted) {
        setLessons(data);
        const current = data.find((l) => l.slug === lessonId || l.id === lessonId);
        if (current) {
          setActiveLesson(current);
          document.title = `${current.title} - Aethelgard FX`;
          setTimeout(() => {
            window.scrollTo(0, 0);
            document.getElementById("main-content")?.focus();
          }, 100);
        }
        setIsLoading(false);
        setIsLogicRevealed(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [lessonId]);

  const toc = useMemo(() => {
    if (!activeLesson?.content) return [];
    const lines = activeLesson.content.split("\n");
    const headings = lines.filter(line => line.startsWith("## ") || line.startsWith("### "));
    return headings.map((h) => {
      const level = h.startsWith("### ") ? 3 : 2;
      // Remove header prefix and common markdown tags (bold, italic)
      const title = h.replace(/^#+\s/, "").replace(/(\*\*|__|\*|_)/g, "");
      // Create a URL-friendly slug
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return { id, title, level };
    });
  }, [activeLesson?.content]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = (totalScroll / windowHeight) * 100;
        setScrollProgress(scroll);
      }

      if (toc.length > 0) {
        const headingElements = toc.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
        let currentActive = '';
        for (let i = 0; i < headingElements.length; i++) {
          const rect = headingElements[i].getBoundingClientRect();
          // Header is around 60px, so trigger when it gets close to top
          if (rect.top <= 120) {
            currentActive = headingElements[i].id;
          }
        }
        if (currentActive) {
          setActiveHeadingId(currentActive);
        } else if (headingElements.length > 0 && document.documentElement.scrollTop < 100) {
          setActiveHeadingId(''); // At top
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toc]);
  
  // Custom markdown renderer to add IDs to headings for the Navigation Map
  const generateId = (children: any): string => {
    if (typeof children === 'string') {
      return children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }
    if (Array.isArray(children)) {
      return children.map(generateId).join('-');
    }
    if (children && children.props && children.props.children) {
      return generateId(children.props.children);
    }
    return '';
  };
  
  // Add DropCap to the first paragraph
  let pCounter = 0;

  if (isLoading) return <div className="p-24 text-center text-[#002B5B] font-serif">Retrieving Manuscript...</div>;
  if (!activeLesson) return <div className="p-24 text-center text-[#002B5B] font-serif">Manuscript not found.</div>;

  const handleReveal = () => {
    setIsLogicRevealed(true);
    markLessonComplete(activeLesson.id);
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg)] pb-24 font-sans text-gray-800 before:content-[''] before:fixed before:inset-0 before:opacity-50 before:pointer-events-none before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
      
      {/* Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[150]">
        <div 
          className="h-full bg-[var(--color-champagne)] shadow-[0_0_8px_var(--color-champagne)]" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className="fixed top-0 left-0 w-full bg-[#002B5B]/90 backdrop-blur-md border-b border-[#1A1A1A]/20 z-[100] flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to={`/courses`} className="text-[var(--color-slate)] hover:text-[var(--color-champagne)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] rounded-lg p-1">
             <Logo className="w-8 h-8" />
          </Link>
          <div className="h-4 w-px bg-white/20 hidden md:block" />
          <Link to={`/courses`} className="hidden md:flex items-center gap-2 text-[var(--color-slate)] hover:text-[var(--color-champagne)] transition-colors text-[10px] uppercase tracking-[0.2em] font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-champagne)] rounded px-2 py-1">
            <ChevronLeft size={14} /> The Syllabus
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => setIsNavOpen(true)} className="md:hidden text-[var(--color-slate)] p-2">
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[110]"
            onClick={() => setIsNavOpen(false)}
          >
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ type: "spring", damping: 25, stiffness: 200 }}
               className="absolute top-0 left-0 w-[80%] max-w-sm h-full bg-[var(--color-bg)] p-6 shadow-2xl flex flex-col pt-12"
               onClick={(e) => e.stopPropagation()}
            >
               <button onClick={() => setIsNavOpen(false)} className="self-end mb-8 p-2 text-gray-500">
                 <X size={24} />
               </button>
               <div className="flex-1 overflow-y-auto">
                 <h3 className="text-xs uppercase tracking-[0.2em] font-bold mb-4 text-[#002B5B]">Syllabus Navigation</h3>
                 {lessons.map(l => (
                    <Link key={l.id} to={`/lesson/${l.id}`} onClick={() => setIsNavOpen(false)} className={`block p-3 border-b border-gray-200 text-sm ${l.id === activeLesson.id ? 'font-bold text-[#002B5B]' : 'text-gray-500'}`}>
                      {l.title}
                    </Link>
                 ))}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      <main id="main-content" className="max-w-[1440px] mx-auto px-6 pt-32 pb-16" tabIndex={-1}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
          
          {/* LEFT COLUMN: Navigation Map */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 thin-scrollbar">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 pb-2 border-b border-gray-200">The Navigation Map</h4>
            <div className="space-y-6">
               {lessons.filter(l => l.category === activeLesson.category && l.module === activeLesson.module).map(l => {
                 const isCompleted = completedLessons.includes(l.id);
                 const isActive = l.id === activeLesson.id;

                 return (
                   <div key={l.id} className="space-y-2">
                      <Link 
                        to={`/lesson/${l.id}`}
                        className={`flex items-start gap-3 text-sm leading-snug transition-colors ${isActive ? 'font-bold text-[#002B5B]' : 'font-medium text-gray-500 hover:text-[#002B5B]'}`}
                      >
                        {isCompleted ? (
                          <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                        ) : isActive ? (
                          <div className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" /></div>
                        ) : (
                          <div className="w-4 h-4 border border-gray-300 rounded-full mt-0.5 shrink-0" />
                        )}
                        <span>{l.title}</span>
                      </Link>

                      {/* For the Active Lesson, show its Headings */}
                      {isActive && toc.length > 0 && (
                        <div className="pl-7 space-y-3 py-2 border-l border-gray-200 ml-2">
                          {toc.map((heading, i) => (
                            <a 
                              key={i} 
                              href={`#${heading.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }}
                              className={`block text-xs leading-relaxed transition-colors ${heading.id === activeHeadingId ? 'font-bold text-[#D4AF37]' : 'font-medium hover:text-[#002B5B] ' + (heading.level === 3 ? 'pl-4 text-gray-400' : 'text-gray-500')}`}
                            >
                              {heading.title}
                            </a>
                          ))}
                        </div>
                      )}
                   </div>
                 );
               })}
            </div>
          </aside>

          {/* CENTER COLUMN: The Main Treatise */}
          <article className="lg:col-span-7 bg-transparent border-l border-gray-200 pl-12">
             <header className="mb-16 border-b border-gray-200 pb-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] bg-[#002B5B]/5 inline-flex p-2 border border-[#002B5B]/10">
                    Briefing No. {activeLesson.order} | Est. Reading Time: {activeLesson.time || 5} Minutes | Revised: Oct 2023
                  </div>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#002B5B] text-white text-[10px] uppercase tracking-[0.15em] font-bold rounded-sm hover:bg-[#D4AF37] hover:text-[#002B5B] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-[#002B5B] shrink-0">
                    <Download size={14} /> Download PDF
                  </button>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl text-[#002B5B] mb-6 leading-tight">
                  {activeLesson.title}
                </h1>
                {activeLesson.description && (
                  <p className="font-serif italic text-xl text-gray-600 leading-relaxed border-l-2 border-[#1A1A1A] pl-6">
                    Mastery Objective: {activeLesson.description}
                  </p>
                )}
             </header>

             <div className="font-sans text-[18px] leading-[1.6] text-[#1A1A1A] max-w-[750px] mx-auto treatise-content">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h2: ({ node, children, ...props }) => {
                       const id = generateId(children);
                       return <h2 id={id} className="text-3xl font-serif text-[#002B5B] mt-16 mb-6" {...props}>{children}</h2>;
                    },
                    h3: ({ node, children, ...props }) => {
                       const id = generateId(children);
                       return <h3 id={id} className="text-xl font-serif font-bold text-gray-800 mt-12 mb-4 uppercase tracking-wider" {...props}>{children}</h3>;
                    },
                    p: ({ node, ...props }: any) => {
                       pCounter++;
                       // Apply DropCap to the very first paragraph
                       if (pCounter === 1 && typeof props.children === 'string') {
                          const text = props.children;
                          const firstLetter = text.charAt(0);
                          const rest = text.slice(1);
                          return (
                            <p className="mb-8 text-gray-800">
                               <span className="float-left text-6xl font-serif text-[#002B5B] bg-[#002B5B]/5 border border-[#1A1A1A] p-2 mr-4 mt-2 leading-none">{firstLetter}</span>
                               {rest}
                            </p>
                          );
                       }
                       // Otherwise, normal paragraph
                       // A check if it contains a chart wrapper from our logic
                       return <p className="mb-8 text-gray-800" {...props} />;
                    },
                    ul: ({ node, ...props }) => <ul className="list-disc pl-8 mb-8 space-y-3" {...props} />,
                    ol: ({ node, ...props }) => <ol className="list-decimal pl-8 mb-8 space-y-3" {...props} />,
                    li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="my-12 p-8 bg-[var(--color-bg)] border border-[#1A1A1A] text-[#002B5B] font-serif italic text-xl shadow-sm" {...props} />
                    ),
                    div: ({ node, className, "data-embed": embed, "data-type": type, "data-pair": pair, "data-time": time, "data-id": id, ...props }: any) => {
                      if (embed === "chart") {
                        return (
                           <figure className="my-12">
                              <div className="border border-[#1A1A1A] p-2 bg-white">
                                 <div className="aspect-video bg-gray-100 flex items-center justify-center font-mono text-gray-400 border border-gray-200">
                                   [Institutional Chart Data: {pair || 'EUR/USD'} | {time || '1D'}]
                                 </div>
                              </div>
                              <figcaption className="mt-4 text-center font-serif italic text-sm text-gray-500">
                                Figure {activeLesson.order}.{Math.floor(Math.random() * 5) + 1}: Institutional Order Flow at the London Open.
                              </figcaption>
                           </figure>
                        );
                      }
                      if (embed === "illustration") {
                        const IllustrationComponent = (Illustrations as any)[id];
                        if (IllustrationComponent) {
                          return <div className="my-12"><IllustrationComponent /></div>;
                        }
                        return <div className="my-12 p-4 bg-red-100 text-red-500 font-mono">Illustration not found: {id}</div>;
                      }
                      return <div className={className} {...props} />;
                    }
                  }}
                >
                  {(() => {
                    let text = activeLesson.content;
                    if (activeLesson.illustration && !text.includes('::illustration')) {
                       // insert the illustration right after the first paragraph or at top
                       // let's put it as the very first element.
                       text = `::illustration{id="${activeLesson.illustration}"}\n\n` + text;
                    }
                    return text
                      .replace(
                        /::chart\{type="([^"]+)" pair="([^"]+)" timeframe="([^"]+)"\}/g,
                        `<div data-embed="chart" data-type="$1" data-pair="$2" data-time="$3"></div>`
                      )
                      .replace(
                        /::chart\{symbol="([^"]+)" timeframe="([^"]+)"\}/g,
                        `<div data-embed="chart" data-pair="$1" data-time="$2"></div>`
                      )
                      .replace(
                        /::illustration\{id="([^"]+)"\}/g,
                        `<div data-embed="illustration" data-id="$1"></div>`
                      );
                  })()}
                </ReactMarkdown>
             </div>

             {/* The Mastery Check Footer */}
             {activeLesson.quiz && activeLesson.quiz.length > 0 && (
                <div className="mt-24 pt-16 border-t border-[#1A1A1A]/50 max-w-[750px] mx-auto">
                   <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] mb-8 text-center bg-[#D4AF37] py-2">Mastery Check</h3>
                   
                   <div className="bg-white border border-gray-200 p-10 shadow-sm relative">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#002B5B]"></div>
                      <p className="font-serif text-xl text-[#002B5B] mb-8 leading-relaxed">
                        {activeLesson.quiz[0].question}
                      </p>
                      
                      {!isLogicRevealed ? (
                         <button 
                           onClick={handleReveal}
                           className="w-full py-4 border border-[#1A1A1A] bg-transparent text-[#002B5B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]"
                         >
                           Reveal The Architect's Logic
                         </button>
                      ) : (
                         <motion.div 
                           initial={{ opacity: 0, y: 10 }} 
                           animate={{ opacity: 1, y: 0 }}
                           className="bg-[#D4AF37]/20 border border-[#1A1A1A] p-6 font-serif text-lg text-[#002B5B]"
                         >
                            <span className="font-bold block mb-2 text-xs uppercase tracking-widest text-[#002B5B]/50">The Logic:</span>
                            {activeLesson.quiz[0].explanation}
                         </motion.div>
                      )}
                   </div>
                </div>
             )}

             {/* Disclaimer */}
             <div className="mt-16 bg-[#002B5B]/5 border border-[#002B5B]/20 p-6 rounded-sm flex gap-4 max-w-[750px] mx-auto">
               <AlertTriangle className="text-[#002B5B] shrink-0" size={24} />
               <div className="text-sm text-gray-700 leading-relaxed">
                 <strong className="block text-[#002B5B] mb-1">Important Risk Disclaimer</strong>
                 The material presented in this lesson is for educational purposes only and does not constitute financial advice. Forex trading involves significant risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Never risk capital you cannot afford to lose.
               </div>
             </div>

          </article>

          {/* RIGHT COLUMN: Margin Notes */}
          <aside className="hidden lg:block lg:col-span-2 sticky top-32">
             <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-6 pb-2 border-b border-gray-200">Margin Notes</h4>
             <div className="text-gray-400 font-serif italic text-sm p-4 border border-dashed border-gray-300 bg-gray-50/50">
                Highlight text in the treatise to pin study notes here.
             </div>
          </aside>

        </div>
      </main>
      <style dangerouslySetInnerHTML={{__html: `
        .treatise-content p:first-of-type span {
           float: left;
           font-size: 4rem;
           line-height: 0.8;
           padding-top: 4px;
           padding-right: 8px;
           padding-left: 2px;
           margin-right: 12px;
           color: #002B5B;
           font-family: serif;
        }
      `}} />
    </div>
  );
}
