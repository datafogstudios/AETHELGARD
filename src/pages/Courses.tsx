import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle, Lock, BookOpen } from "lucide-react";
import { courseCategories } from "../data";
import { useAppStore } from "../store";

export function Courses() {
  const navigate = useNavigate();
  const completedLessons = useAppStore((state) => state.completedLessons);

  const getStatus = (categoryId: string) => {
    // Determine status based on completed lessons
    // For visual purposes, let's hardcode some statuses for the phases based on user prompt.
    // Phase I: Completed
    // Phase II: In Progress
    // Phase III: Locked
    if (categoryId === 'beginner') return 'completed';
    if (categoryId === 'intermediate') return 'in-progress';
    return 'locked';
  }

  const romanNumerals = ["I", "II", "III", "IV", "V"];

  return (
    <motion.div
      key="courses"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] pb-24 font-sans before:content-[''] before:fixed before:inset-0 before:opacity-30 before:pointer-events-none before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--color-champagne)] shadow-[0_0_10px_var(--color-champagne)] z-50"></div>
      
      <div className="max-w-[800px] mx-auto px-6 pt-32 relative z-10">
        <header className="mb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-normal text-[#002B5B] mb-8">The Path to Sovereignty</h1>
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Curriculum Progress</span>
            <div className="w-64 h-1 bg-gray-200">
               <div className="h-full bg-[var(--color-champagne)] w-1/3 shadow-[0_0_8px_var(--color-champagne)]"></div>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[var(--color-champagne)]">33%</span>
          </div>
        </header>

        {/* The Welcome Briefing */}
        <div className="bg-[#002B5B] p-10 md:p-16 mb-20 shadow-2xl border border-[#D4AF37]/20 relative mx-auto max-w-[800px]">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center tracking-wide text-[#D4AF37]">The Welcome Briefing</h2>
          
          <div className="font-serif text-lg leading-[1.6] space-y-6 max-w-[650px] mx-auto text-[#F9F7F2]/90">
            <p>To the Aspiring Sovereign,</p>
            <p>You have entered Aethelgard FX.</p>
            <p className="opacity-90">This is not a school of "signals" or shortcuts. It is an archive of market logic designed for those who seek to transition from the chaos of retail speculation to the precision of institutional mastery.</p>
            <p className="opacity-90">The path before you is divided into Architectural Phases. We do not use video because true mastery requires the deep focus of the written word. Every briefing in this academy is a deliberate manuscript; every chart is a formal plate of evidence.</p>
            
            <h3 className="text-xl font-bold text-[#D4AF37] pt-6 mb-2 border-t border-[#D4AF37]/20">Your Objective:</h3>
            <p className="opacity-90">Do not rush the text. Internalize the mechanics of liquidity, understand the mathematics of risk, and respect the discipline of the guild. At Aethelgard, we do not trade to be "right"—we trade to be consistent.</p>
            <p className="opacity-90">The markets are an auction of human emotion. You are here to learn the language of the auctioneer.</p>
            <p className="font-bold text-[#D4AF37] pt-4">The Syllabus is open. Begin your first treatise below.</p>
            
            <div className="mt-16 pt-8 text-right border-t border-transparent">
              <span className="font-['Great_Vibes'] text-4xl md:text-5xl text-[#D4AF37]/80 block transform -rotate-2 origin-right">The Dean of Aethelgard</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {courseCategories.map((category, index) => {
            const status = getStatus(category.id);
            
            return (
              <div key={category.id} className="w-full">
                <button 
                  onClick={() => {
                    if (status !== 'locked') {
                       navigate(`/courses/${category.id}`);
                    }
                  }}
                  className={`w-full flex items-center justify-between p-8 bg-[#F9F7F2] border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${status === 'locked' ? 'border-gray-200 opacity-60 cursor-not-allowed' : 'border-gray-300 hover:border-[#002B5B] hover:shadow-md'}`}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Phase {romanNumerals[index]}</span>
                    <h2 className="font-serif text-2xl md:text-3xl text-[#002B5B]">{category.title}</h2>
                  </div>
                  <div className="flex items-center gap-4">
                    {status === 'completed' && <span className="text-xs uppercase tracking-[0.1em] font-bold text-green-600 flex items-center gap-1 bg-green-50 px-2 py-1 rounded border border-green-200"><CheckCircle size={14} /> Completed</span>}
                    {status === 'in-progress' && <span className="text-xs uppercase tracking-[0.1em] font-bold text-[#002B5B] flex items-center gap-1 bg-[#002B5B]/10 px-2 py-1 rounded border border-[#002B5B]/20">In Progress</span>}
                    {status === 'locked' && <span className="text-xs uppercase tracking-[0.1em] font-bold text-gray-500 flex items-center gap-1 bg-gray-100 px-2 py-1 rounded border border-gray-200"><Lock size={14} /> Locked</span>}
                    {status !== 'locked' && (
                      <div className="text-[#002B5B] p-2 bg-[#002B5B]/5 rounded-full"><BookOpen size={20} strokeWidth={1.5} /></div>
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
