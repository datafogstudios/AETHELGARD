import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BarChart, TrendingUp, Star, Users, Globe, Building, MessageSquare, BookOpen, Shield, HelpCircle, Coffee, Clock, Activity, MonitorPlay, ChevronDown, ChevronRight, Play, Zap, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LivePricesWidget } from '../components/LivePricesWidget';
import { courseCategories } from '../data';

export function Home() {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Modal States
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isEmailCaptureModalOpen, setIsEmailCaptureModalOpen] = useState(false);
  
  const [donationTier, setDonationTier] = useState<number | 'custom'>(25);
  const [isDonationSuccess, setIsDonationSuccess] = useState(false);
  
  const [emailCaptureSuccess, setEmailCaptureSuccess] = useState(false);
  
  // Testimonials
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    { name: "Sarah L.", stage: "Beginner → Consistent", text: "The free tier here is better than the $2,000 course I bought last year. Crystal clear fundamentals." },
    { name: "David K.", stage: "Struggling → Funded", text: "The risk management templates in the Lab saved my career. Currently trading a $50k funded account." },
    { name: "Elena M.", stage: "Intermediate → Advanced", text: "Finally learned how to read institutional footprints. No indicators, just pure price action." }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#002B5B] overflow-hidden text-white pt-20">
        {/* Subtle Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Animated Candlestick Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-end justify-around px-4">
          {[...Array(20)].map((_, i) => {
            const height = 20 + Math.random() * 60;
            const isGreen = Math.random() > 0.5;
            const delay = Math.random() * 2;
            return (
              <motion.div
                key={i}
                initial={{ height: `${height}%`, opacity: 0.3 }}
                animate={{ 
                  height: [`${height}%`, `${height + (Math.random() * 20 - 10)}%`, `${height}%`],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay }}
                className="relative flex flex-col items-center justify-end w-8"
              >
                {/* Wick */}
                <div className={`w-1 h-full absolute bottom-0 ${isGreen ? 'bg-white/30' : 'bg-[#D4AF37]/30'}`} />
                {/* Body */}
                <div 
                  className={`w-full absolute ${isGreen ? 'bg-white/50' : 'bg-[#D4AF37]/50'}`} 
                  style={{ height: '60%', bottom: '20%' }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Top Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002B5B] via-transparent to-[#002B5B] pointer-events-none" />

        {/* Safety Layer (Semi-Transparent Overlay) */}
        <div className="absolute inset-0 bg-[#1A1A1A]/30 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-tight mb-6 text-[#F9F7F2] drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              Master the Sovereign Move.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-sans text-xl md:text-2xl text-[#F9F7F2] font-medium max-w-lg mb-10 leading-[1.6] drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            >
              High-caliber education meets market precision. Access elite curriculum, professional-grade analysis, and a private guild of traders—built for the serious practitioner.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => scrollToSection('course-categories')}
                className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] border border-[#B8860B] text-sm font-bold uppercase tracking-[0.05em] hover:bg-[#B8860B] transition-all rounded shadow-xl shadow-[#D4AF37]/10 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002B5B] focus-visible:ring-[#D4AF37]"
              >
                ENTER THE ACADEMY
              </button>
              <button 
                onClick={() => scrollToSection('course-categories')}
                className="px-8 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-sm font-bold uppercase tracking-[0.05em] hover:bg-[#D4AF37]/10 transition-all rounded hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002B5B] focus-visible:ring-[#D4AF37]"
              >
                VIEW THE SYLLABUS
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - Trust Badges & Featured */}
          <div className="relative h-[400px] hidden lg:block">
            {/* Featured Widget */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-0 right-0 bg-[#002B5B]/80 backdrop-blur-md border border-white/10 p-8 rounded-sm w-80 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.05em] font-bold text-[#D4AF37]">Premium Access</span>
                <span className="flex items-center gap-1 text-[#D4AF37] text-xs font-bold"><Star size={12} fill="currentColor" /> 5.0</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Market Mechanics</h3>
              <p className="text-sm text-white/70 mb-6 font-medium">Decipher institutional footprints without lagging indicators.</p>
              <button 
                onClick={() => navigate('/courses')}
                className="w-full py-3 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-[0.05em] hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#002B5B] focus-visible:ring-white"
              >
                Initialize Module <ArrowRight size={14} aria-hidden="true" />
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute bottom-10 left-0 space-y-4"
            >
              {[
                { icon: '🏛️', text: 'Institutional Grade Education' },
                { icon: '📈', text: '1 in 3 Funded Students' },
                { icon: '🌐', text: '12,000+ Trade Practitioners' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#white]/5 backdrop-blur-md border border-white/10 p-4 rounded-sm shadow-xl w-72 hover:bg-white/10 transition-colors cursor-default">
                  <div className="text-xl">{badge.icon}</div>
                  <span className="text-sm font-bold tracking-wide text-white">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-[#002B5B] py-6 border-y border-white/10 relative z-20 group">
        <div className="max-w-[1200px] mx-auto px-6 hidden md:flex justify-between items-center text-white/70 text-xs font-bold tracking-[0.05em] uppercase">
          <div className="flex items-center gap-3"><Users size={16} className="text-[#D4AF37]" /> 12,000+ Practitioners</div>
          <div className="flex items-center gap-3"><Globe size={16} className="text-[#D4AF37]" /> Elite Global Guild</div>
          <div className="flex items-center gap-3"><Activity size={16} className="text-[#D4AF37]" /> 86% Funded Rate</div>
          <div className="flex items-center gap-3"><Building size={16} className="text-[#D4AF37]" /> Institutional Setup</div>
        </div>

        {/* Mobile Scroller */}
        <div className="flex md:hidden overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center text-white/70 font-bold text-xs tracking-[0.05em] uppercase group-hover:[animation-play-state:paused]"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span className="flex items-center gap-2"><Users size={16} className="text-[#D4AF37]" /> 12,000+ Practitioners</span>
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span className="flex items-center gap-2"><Globe size={16} className="text-[#D4AF37]" /> Elite Global Guild</span>
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                <span className="flex items-center gap-2"><Activity size={16} className="text-[#D4AF37]" /> 86% Funded Rate</span>
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* HOW IT WORKS (3-STEP PATH) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.05em] text-[#D4AF37] mb-4 block font-bold">The Blueprint</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-[#002B5B] mb-20">The Architecture of Trading</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-gray-200 -z-10" />

            {[
              { title: 'The Framework', icon: <BookOpen size={32} className="text-[#D4AF37]" />, desc: 'Structured curriculum mapping market dynamics directly to actionable strategies.', step: 'I', detail: 'Deconstruct price action.', cta: 'Explore Modules' },
              { title: 'The Lab', icon: <Activity size={32} className="text-[#002B5B]" />, desc: 'Professional-grade environment for testing risk models and trade execution.', step: 'II', detail: 'Calibrate your edge without risking capital.', cta: 'Enter Lab' },
              { title: 'The Guild', icon: <MessageSquare size={32} className="text-[#D4AF37]" />, desc: 'An exclusive network of practitioners analyzing flows and opportunities.', step: 'III', detail: 'Engage with professional minds.', cta: 'Audit Network' }
            ].map((step, idx) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStep(activeStep === idx ? null : idx);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeStep === idx}
                aria-controls={`step-content-${idx}`}
                className={`bg-white pt-10 pb-12 px-8 border ${activeStep === idx ? 'border-[#002B5B] shadow-2xl' : 'border-gray-100 shadow-sm hover:shadow-xl'} cursor-pointer transition-all duration-500 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]`}
              >
                <div className={`w-20 h-20 mx-auto bg-gray-50 flex items-center justify-center mb-10 relative border border-gray-200 transition-transform duration-500 ${activeStep === idx ? 'scale-105 shadow-md bg-white' : 'group-hover:scale-105'}`} aria-hidden="true">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#002B5B] text-[#D4AF37] flex items-center justify-center font-serif text-sm shadow-lg">{step.step}</div>
                  {step.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#002B5B]">{step.title}</h3>
                <p className="text-gray-600 font-medium leading-[1.6]">
                  {step.desc}
                </p>
                
                <AnimatePresence>
                  {activeStep === idx && (
                    <motion.div
                      id={`step-content-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-6">{step.detail}</p>
                        <button 
                          onClick={(e) => { e.stopPropagation(); navigate('/courses'); }}
                          className="w-full py-4 border border-[#002B5B] text-[#002B5B] text-xs font-bold uppercase tracking-[0.05em] transition-colors hover:bg-[#002B5B] hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                        >
                          {step.cta}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE CATEGORIES GRID */}
      <section id="course-categories" className="py-24 bg-[#F9F7F2] relative overflow-hidden" aria-labelledby="categories-title">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.05em] text-[#D4AF37] mb-2 block font-bold" aria-hidden="true">Curriculum</span>
              <h2 id="categories-title" className="font-serif text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#002B5B]">The Study Paths</h2>
              <span className="sr-only">3 categories found.</span>
            </div>
            <button 
              onClick={() => navigate('/courses')}
              className="mt-6 md:mt-0 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] p-1"
            >
              View Full Syllabus <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {courseCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                role="listitem"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#D4AF37]/5 p-10 border border-[#D4AF37] hover:border-[#B8860B] shadow-sm hover:shadow-xl cursor-default group transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 border border-gray-200 flex items-center justify-center text-[#002B5B] group-hover:bg-[#002B5B] group-hover:text-[#D4AF37] transition-all duration-500" aria-hidden="true">
                    {category.id === 'beginner' ? <Shield size={24} strokeWidth={1} aria-hidden="true" /> : category.id === 'intermediate' ? <BarChart size={24} strokeWidth={1} aria-hidden="true" /> : <Zap size={24} strokeWidth={1} aria-hidden="true" />}
                  </div>
                  <span className="text-[#002B5B] px-3 py-1 border border-gray-200 text-[10px] font-bold uppercase tracking-[0.05em]">{category.level}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-[#002B5B]">
                  <a href={`/courses/${category.id}`} onClick={(e) => { e.preventDefault(); navigate(`/courses/${category.id}`); }} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded outline-none before:absolute before:inset-0" aria-label={`${category.title}, link, ${category.modules} modules, ${Math.round(category.totalTime / 60)} hours total`}>
                    {category.title}
                  </a>
                </h3>
                <p className="text-gray-500 text-sm mb-6 leading-[1.6] min-h-[40px]" aria-hidden="true">{category.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100" aria-hidden="true">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-[0.05em]">
                    <span className="flex items-center gap-2"><BookOpen size={14} className="text-[#D4AF37]" strokeWidth={2} /> {category.modules} Mods</span>
                    <span className="flex items-center gap-2"><Clock size={14} className="text-[#002B5B]" strokeWidth={2} /> {Math.round(category.totalTime / 60)} Hrs</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CONTENT SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Free Resources */}
            <div>
              <h3 className="font-serif text-3xl font-medium mb-8 text-[#002B5B] flex items-center gap-3">
                <Globe className="text-[#D4AF37]" strokeWidth={1.5} /> This Week's Intelligence
              </h3>
              <div className="space-y-6">
                <div className="bg-[#002B5B] text-white p-8 border border-gray-800 rounded-sm relative overflow-hidden group cursor-pointer" tabIndex={0} onKeyDown={(e)=>(e.key==='Enter'||e.key===' ')&&navigate('/lab')}>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-sm border border-[#D4AF37]/30 text-[10px] font-bold uppercase tracking-[0.05em] mb-6 inline-block" aria-hidden="true">Live Briefing</span>
                  <h4 className="font-serif text-xl font-medium mb-2">Central Bank Rate Decision Analysis</h4>
                  <p className="text-white/60 text-sm mb-6 leading-[1.6]">Join our lead analysts for an institutional breakdown of the upcoming rate announcements.</p>
                  <p className="font-mono text-sm text-[#D4AF37] font-bold">Wednesday, 2:00 PM EST</p>
                </div>
                
                <div className="bg-white border border-gray-200 p-6 rounded-sm flex gap-6 items-center hover:border-[#D4AF37] transition-colors cursor-pointer" onClick={() => setIsEmailCaptureModalOpen(true)}>
                  <div className="w-20 h-20 bg-[#F9F7F2] border border-gray-100 rounded-sm flex-shrink-0 flex items-center justify-center relative overflow-hidden group-hover:bg-[#002B5B] transition-colors group">
                    <BookOpen className="text-[#002B5B] group-hover:text-[#D4AF37] transition-colors" strokeWidth={1} />
                  </div>
                  <div>
                    <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.05em] mb-2 block">Executive Summary</span>
                    <h4 className="font-serif font-bold text-[#002B5B] mb-1">Market Microstructure Guide</h4>
                    <p className="text-sm text-gray-500">Essential reading for understanding limit order books.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Community Highlights */}
            <div>
              <h3 className="font-serif text-3xl font-medium mb-8 text-[#002B5B] flex items-center gap-3">
                <Users className="text-[#D4AF37]" strokeWidth={1.5} /> Network Insights
              </h3>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-8 rounded-sm hover:border-[#D4AF37] transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 bg-[#002B5B] flex items-center justify-center text-[#D4AF37] font-serif text-sm">MC</div>
                    <div>
                      <h4 className="font-bold text-[#002B5B] text-sm">Marcus C. <span className="text-gray-400 font-normal">Junior Portfolio Manager</span></h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.05em] font-bold mt-1">Practitioner Achievement</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-[1.6] font-medium">"The structural framework provided entirely changed how I view market inefficiencies. This isn't retail trading—it's professional risk architecture."</p>
                </div>

                <div className="bg-[#D4AF37]/5 border border-[#D4AF37] p-8 rounded-sm">
                  <span className="text-[10px] uppercase tracking-[0.05em] text-[#D4AF37] font-bold block mb-4">Active Briefing</span>
                  <Link to="/community" className="font-serif text-lg text-[#002B5B] hover:text-[#D4AF37] transition-colors mb-4 block">Liquidity Sweeps on Major Pairs — Institutional Positioning Ahead of CPI</Link>
                  <div className="flex items-center gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-[0.05em]">
                    <span className="flex items-center gap-2"><MessageSquare size={14} /> 28 Notes</span>
                    <span className="flex items-center gap-2"><Activity size={14} /> High Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD & TRANSPARENCY SECTION */}
      <section className="py-24 bg-[#002B5B] text-white border-y border-[#D4AF37]/20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.05em] text-[#D4AF37] mb-4 block font-bold">Verified Edge</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-[-0.02em] text-[#F9F7F2]">Audited Performance & Track Record</h2>
            <p className="text-white/60 max-w-2xl mx-auto mt-6 text-sm leading-relaxed font-medium">We don't sell dreams; we teach probability. Review our strategy performance metrics, updated quarterly and verified by third-party analytics.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { label: 'Win Rate (3yr Avg)', value: '62.4%', detail: 'Across all major pairs' },
              { label: 'Average RR', value: '1:2.8', detail: 'Risk-to-Reward Ratio' },
              { label: 'Max Drawdown', value: '4.2%', detail: 'Strict 1% risk management' },
              { label: 'Verified Accounts', value: '14+', detail: 'MyFxBook Audited' }
            ].map((stat, i) => (
              <div key={i} className="text-center p-8 bg-white/5 border border-white/10 rounded-sm">
                <div className="font-serif text-4xl font-bold text-[#D4AF37] mb-2">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-[0.05em] text-white/90 mb-1">{stat.label}</div>
                <div className="text-[10px] text-white/50">{stat.detail}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#D4AF37]/10 transition-all rounded shadow-sm">
              View Full Trading Logs & Analytics
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="py-32 bg-white overflow-hidden border-t border-gray-200" role="region" aria-roledescription="carousel" aria-label="Student Testimonials">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.05em] text-[#D4AF37] mb-4 block font-bold" aria-hidden="true">The standard</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] text-[#002B5B]">Professionals Built Here.</h2>
          </div>
          
          <div className="max-w-[700px] mx-auto relative group">
            <div aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentTestimonial}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${currentTestimonial + 1} of ${testimonials.length}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#F9F7F2] p-12 md:p-16 border border-gray-200 relative text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-[#002B5B] flex items-center justify-center text-[#D4AF37] font-serif text-2xl mb-8" aria-hidden="true">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="flex justify-center gap-1 text-[#F59E0B] mb-6" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(star => <Star key={star} size={20} fill="currentColor" aria-hidden="true" />)}
                  </div>
                  <p className="text-gray-600 italic leading-[1.6] text-lg md:text-xl mb-8 font-medium">"{testimonials[currentTestimonial].text}"</p>
                  <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">{testimonials[currentTestimonial].name}</h4>
                  <div className="text-sm text-gray-500 font-bold uppercase tracking-[0.05em]">{testimonials[currentTestimonial].stage}</div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Controls */}
            <button 
              className="absolute hidden md:flex left-[-3rem] top-[45%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-gray-500 hover:text-[#007BFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF]"
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              aria-controls="testimonial-carousel"
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              className="absolute hidden md:flex right-[-3rem] top-[45%] w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 items-center justify-center text-gray-500 hover:text-[#007BFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF]"
              onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
              aria-controls="testimonial-carousel"
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  aria-current={currentTestimonial === idx}
                  className={`w-3 h-3 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007BFF] focus-visible:ring-offset-2 ${currentTestimonial === idx ? 'bg-[#007BFF]' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY FREE? (TRANSPARENCY SECTION) */}
      <section className="py-32 bg-[#002B5B] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.02em] mb-6 text-[#D4AF37]">The Aethelgard Mandate</h2>
            <p className="text-xl text-white/50 max-w-[700px] mx-auto font-sans font-light">We believe institutional-grade market education should not be an asset class of its own.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { title: "Unrestricted", desc: "True structural edge requires deep study. Putting fundamental market truths behind a paywall breaks the system.", icon: <BookOpen className="text-[#D4AF37]" strokeWidth={1} /> },
              { title: "Practitioner Funded", desc: "Supported autonomously by the professionals who use our framework daily. Completely independent.", icon: <Users className="text-[#D4AF37]" strokeWidth={1} /> },
              { title: "Capital Preservation", desc: "Your capital should be deployed into the market, not into theoretical courses. We ensure it stays yours.", icon: <Shield className="text-[#D4AF37]" strokeWidth={1} /> },
              { title: "Signal Independent", desc: "We provide architecture, not alerts. We do not sell signals because dependent traders always fail.", icon: <Globe className="text-[#D4AF37]" strokeWidth={1} /> }
            ].map((block, i) => (
              <div key={i} className="bg-transparent border border-[#002B5B] p-10 hover:bg-[#002B5B]/50 transition-colors">
                <div className="mb-8">
                  {block.icon}
                </div>
                <h3 className="font-serif text-lg font-bold mb-4 text-white">{block.title}</h3>
                <p className="text-white/40 text-sm leading-[1.6]">{block.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#002B5B] border border-[#6A6F75] p-12 lg:p-16 text-center max-w-[700px] mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#D4AF37]" />
            <h3 className="font-serif text-3xl font-medium mb-4 text-white">Support The Framework</h3>
            <p className="text-white/50 mb-10 max-w-xl mx-auto">Assist in our mandate to keep professional market analysis free from commercial influence.</p>
            <div className="w-full bg-[#002B5B] h-2 mb-6 border border-[#6A6F75]">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '65%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                className="bg-[#D4AF37] h-full relative" 
              >
              </motion.div>
            </div>
            <p className="text-[10px] text-[#D4AF37] mb-10 uppercase tracking-[0.05em] font-bold">65% of Server Operational Costs Funded</p>
            <button 
              onClick={() => setIsDonationModalOpen(true)}
              className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] border border-[#B8860B] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#B8860B] transition-colors shadow-lg"
            >
              Provide Support
            </button>
          </div>
        </div>
      </section>

      {/* LIVE MARKET SNAPSHOT */}
      <section className="py-32 bg-[#002B5B] relative border-t border-[#6A6F75]" role="region" aria-label="Live market data">
        <div className="max-w-[700px] mx-auto px-6">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] animate-pulse" aria-hidden="true" />
                <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.05em]" aria-hidden="true">Live Market Telemetry</span>
             </div>
             <h2 className="font-serif text-4xl font-medium text-white">Global Capital Flows</h2>
          </div>
          <LivePricesWidget />
        </div>
      </section>

      {/* COMMUNITY & SUPPORT */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Join */}
            <div className="bg-[#D4AF37]/5 p-10 md:p-14 border border-[#D4AF37]">
              <span className="text-[10px] uppercase tracking-[0.05em] text-[#D4AF37] mb-4 block font-bold">Exclusive Access</span>
              <h2 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[#002B5B] mb-8">The Guild</h2>
              <div className="flex items-center gap-4 mb-10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-[#002B5B] flex items-center justify-center text-xs font-serif text-[#D4AF37]">
                      P{i}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.05em] text-gray-500 font-bold">12,450+ Active Practitioners</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#002B5B] text-[#D4AF37] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#6A6F75] transition-colors text-center flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]" aria-label="Discord server, external link, opens in new tab">
                  <MessageSquare size={16} aria-hidden="true" /> Enter Discord
                </a>
                <button className="flex-1 py-4 bg-transparent border border-[#002B5B] text-[#002B5B] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#002B5B] hover:text-[#D4AF37] transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]">
                  Web Terminal
                </button>
              </div>
            </div>

            {/* Right: Get Help */}
            <div className="p-10 md:p-14">
              <span className="text-[10px] uppercase tracking-[0.05em] text-[#D4AF37] mb-4 block font-bold">Mentorship</span>
              <h2 className="font-serif text-4xl font-medium tracking-[-0.02em] text-[#002B5B] mb-8">Direct Access</h2>
              <div className="space-y-4">
                {[
                  { q: "What is the structural framework?", a: "It's an institutional approach to evaluating liquidity and order flow. You map price action the way the algorithms do, discarding retail momentum indicators." },
                  { q: "Is access fully unrestricted?", a: "Yes. Core architectural knowledge should not be paywalled. Only premium data feeds or specific proprietary tools might carry operational costs." },
                  { q: "Are signal services provided?", a: "No. Signal services foster dependency. We provide the blueprint for self-sufficient execution." }
                ].map((faq, i) => (
                  <div key={i} className="border border-gray-200 bg-white hover:border-[#D4AF37] transition-colors" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                    <button className="w-full px-6 py-4 flex justify-between items-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]" aria-expanded={activeFaq === i}>
                      <h4 className="font-serif font-bold text-[#002B5B] text-sm text-left">{faq.q}</h4>
                      <ChevronDown size={16} className={`text-[#D4AF37] transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <p className="px-6 pb-4 text-gray-500 text-sm leading-[1.6] border-t border-gray-100 pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <a 
                href="mailto:mentors@aethelgard.com"
                className="inline-flex mt-8 items-center gap-2 text-xs font-bold uppercase tracking-[0.05em] text-[#002B5B] hover:text-[#D4AF37] transition-colors focus-visible:outline-none"
              >
                Inquire with Mentors <ArrowRight size={14} aria-hidden="true" />
              </a>
              <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-[0.05em] flex items-center gap-2">
                <Clock size={12} /> Standard Response: 24h
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Modals */}
      <AnimatePresence>
        {isDonationModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            role="dialog"
            aria-labelledby="donate-title"
            aria-modal="true"
          >
              <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 max-w-xl w-full relative shadow-2xl"
            >
              <button 
                onClick={() => setIsDonationModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors focus-visible:outline-none"
                aria-label="Close donation modal"
              >
                <X size={20} aria-hidden="true" />
              </button>
              
              {!isDonationSuccess ? (
                <>
                  <div className="w-16 h-16 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center mb-8 mx-auto" aria-hidden="true">
                    <Globe size={24} />
                  </div>
                  <div className="text-center">
                    <h3 id="donate-title" className="font-serif text-3xl font-medium text-white mb-2">Fund the Mandate</h3>
                    <p className="text-white/60 mb-10 leading-[1.6] text-sm">Your contribution keeps servers running, enables high-quality data feeds, and sustains the framework.</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8" role="radiogroup" aria-label="Select donation amount">
                    {[50, 150, 500].map(amt => (
                      <button 
                        key={amt}
                        onClick={() => setDonationTier(amt)}
                        role="radio"
                        aria-checked={donationTier === amt}
                        className={`py-4 border text-xs font-bold uppercase tracking-[0.05em] transition-all focus-visible:outline-none ${donationTier === amt ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-white/20 text-white hover:border-white/50'}`}
                      >
                        Provide ${amt}
                      </button>
                    ))}
                    <button 
                      onClick={() => setDonationTier('custom')}
                      role="radio"
                      aria-checked={donationTier === 'custom'}
                      className={`py-4 border text-xs font-bold uppercase tracking-[0.05em] transition-all focus-visible:outline-none ${donationTier === 'custom' ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]' : 'border-white/20 text-white hover:border-white/50'}`}
                    >
                      Custom Tier
                    </button>
                  </div>
                  
                  {donationTier === 'custom' && (
                    <div className="mb-8 relative">
                      <label htmlFor="custom-amount" className="sr-only">Enter custom amount in dollars</label>
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 font-bold" aria-hidden="true">$</span>
                      <input id="custom-amount" type="number" placeholder="Enter amount" className="w-full pl-8 pr-4 py-4 bg-black/20 border border-white/20 text-white placeholder:text-white/30 text-xs font-bold uppercase tracking-[0.05em] focus:outline-none focus:border-[#D4AF37]" />
                    </div>
                  )}

                  <div className="sr-only">Payment processing by Stripe. Secure connection. Credit card or cryptocurrency options available. No account required.</div>
                  <button 
                    onClick={() => {
                        setIsDonationSuccess(true);
                        setTimeout(() => { setIsDonationModalOpen(false); setIsDonationSuccess(false); }, 3000);
                    }}
                    className="w-full py-4 bg-[#D4AF37] text-[#1A1A1A] border border-[#B8860B] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#B8860B] transition-colors"
                  >
                    Execute Transfer
                  </button>
                </>
              ) : (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <div className="w-20 h-20 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="font-serif text-3xl font-medium text-white mb-4">Capital Received</h3>
                  <p className="text-white/60">Your support sustains the structural framework. Thank you.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {isEmailCaptureModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
            role="dialog"
            aria-labelledby="email-modal-title"
            aria-modal="true"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#002B5B]/80 backdrop-blur-3xl border border-[#D4AF37]/20 p-12 max-w-md w-full relative text-center"
            >
              <button 
                onClick={() => setIsEmailCaptureModalOpen(false)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors focus-visible:outline-none"
                aria-label="Close email capture modal"
              >
                <X size={20} aria-hidden="true" />
              </button>
              
              {!emailCaptureSuccess ? (
                <>
                  <div className="w-16 h-16 bg-[#D4AF37]/10 text-[#D4AF37] rounded-none border border-[#D4AF37]/30 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <BookOpen size={24} />
                  </div>
                  <h3 id="email-modal-title" className="font-serif text-2xl font-medium text-white mb-2">Technical Briefing Access</h3>
                  <p className="text-white/60 mb-8 text-sm">Designate the secure channel for your document delivery.</p>
                  
                  <label htmlFor="cheat-sheet-email" className="sr-only">Valid Electronic Address</label>
                  <input id="cheat-sheet-email" type="email" placeholder="Email Address" className="w-full px-4 py-4 bg-black/40 border border-white/10 text-white placeholder:text-white/30 text-xs font-bold uppercase tracking-[0.05em] mb-6 text-center focus:outline-none focus:border-[#D4AF37]" />
                  <button 
                    onClick={() => {
                        setEmailCaptureSuccess(true);
                        setTimeout(() => { setIsEmailCaptureModalOpen(false); setEmailCaptureSuccess(false); }, 3000);
                    }}
                    className="w-full py-4 bg-[#D4AF37] text-[#1A1A1A] border border-[#B8860B] text-xs font-bold uppercase tracking-[0.05em] hover:bg-[#B8860B] transition-colors focus-visible:outline-none"
                  >
                    Initiate Transfer
                  </button>
                  <p className="text-[10px] text-white/40 mt-6 uppercase tracking-[0.05em] font-bold">Unrestricted Access. Strict Confidentiality.</p>
                </>
              ) : (
                <div className="py-8" role="status" aria-live="polite">
                  <div className="w-20 h-20 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/50 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-white mb-2">Transfer Executed</h3>
                  <p className="text-white/60 text-sm">Please verify your secure channel within 2 minutes.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
