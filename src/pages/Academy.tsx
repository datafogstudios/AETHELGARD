import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronDown, CheckCircle, Lock, BookOpen, Search, Filter, PlayCircle, Clock, Target, Shield, Zap, Award, ArrowRight } from 'lucide-react';
import { getLessons, ParsedLesson } from '../lib/courses';
import { courseCategories } from '../data';
import { useAppStore } from '../store';

export function Academy() {
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const [lessons, setLessons] = useState<ParsedLesson[]>([]);
  const completedLessons = useAppStore((state) => state.completedLessons);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});

  const activeCategory = useMemo(() => 
    courseCategories.find(c => c.id === courseId) || courseCategories[0], 
  [courseId]);

  useEffect(() => {
    getLessons().then((data) => {
      // Filter by category
      const categoryLessons = data.filter(d => d.category === activeCategory.id);
      setLessons(categoryLessons);
      
      // Auto-expand the first module
      if (categoryLessons.length > 0) {
        setExpandedModules((prev) => ({ ...prev, [categoryLessons[0].module]: true }));
      }
    });
  }, [activeCategory.id]);

  const toggleModule = (moduleName: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleName]: !prev[moduleName],
    }));
  };

  const moduleGroups = lessons.reduce((acc, lesson) => {
    if (!acc[lesson.module]) {
      acc[lesson.module] = [];
    }
    acc[lesson.module].push(lesson);
    return acc;
  }, {} as Record<string, ParsedLesson[]>);

  const totalLessons = lessons.length;
  const completedCount = completedLessons.filter(id => lessons.some(l => l.id === id)).length;
  const completionPercent = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  const firstUnfinishedLesson = lessons.find(l => !completedLessons.includes(l.id)) || lessons[0];

  return (
    <motion.div
      key={`academy-${activeCategory.id}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F7F2] pb-32"
    >
      {/* Dark Header Banner */}
      <div className="bg-[#002B5B] text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-[50%] -right-[10%] w-[70%] h-[150%] rounded-full bg-[#D4AF37]/40 blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400 font-medium tracking-wide">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li aria-hidden="true"><ChevronRight size={14} /></li>
              <li><span aria-current="page" className="text-white font-bold">{activeCategory.title}</span></li>
            </ol>
          </nav>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-xs font-bold tracking-widest uppercase mb-6" style={{ color: activeCategory.color }}>
              {activeCategory.level} Level
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">{activeCategory.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">{activeCategory.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Main Content Column */}
          <div className="flex-1 w-full space-y-12">
            
            {/* Highlights Grid */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
               <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mb-6">What You'll Learn</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle size={14}/></div>
                   <span className="text-gray-600 font-medium">Master structured, rules-based execution logic.</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle size={14}/></div>
                   <span className="text-gray-600 font-medium">Understand the 'why' behind price fluctuations.</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle size={14}/></div>
                   <span className="text-gray-600 font-medium">Develop unshakeable trading psychology.</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-6 h-6 rounded-full bg-green-50 text-green-500 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle size={14}/></div>
                   <span className="text-gray-600 font-medium">Navigate institutional footprint patterns.</span>
                 </div>
               </div>
            </div>

            {/* Prerequisites */}
            {activeCategory.prerequisites.length > 0 && (
              <div className="bg-[#002B5B]/5 rounded-3xl p-8 border border-[#002B5B]/10">
                <h2 className="text-lg font-bold text-[#1A1A1A] mb-3 flex items-center gap-2"><Lock size={18} className="text-[#002B5B]" /> Prerequisites</h2>
                <p className="text-gray-600 mb-4">To get the most out of this course, you should have already completed the following pathways:</p>
                <div className="flex flex-wrap gap-3">
                  {activeCategory.prerequisites.map(p => {
                    const prereq = courseCategories.find(c => c.id === p);
                    if (!prereq) return null;
                    return (
                      <Link key={p} to={`/courses/${p}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-bold text-[#1A1A1A] hover:border-[#002B5B]/50 hover:text-[#002B5B] transition-colors shadow-sm">
                        {prereq.title} <ArrowRight size={14} />
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Module Accordions */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif font-bold text-[#1A1A1A]">Curriculum Modules</h2>
                <span className="text-sm font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">{Object.keys(moduleGroups).length} Modules</span>
              </div>

              <div className="space-y-4">
                {Object.entries(moduleGroups).map(([moduleName, moduleLessons], moduleIdx) => {
                  const isExpanded = expandedModules[moduleName];
                  const modCompletedCount = moduleLessons.filter(l => completedLessons.includes(l.id)).length;
                  
                  return (
                    <div key={moduleName} className={`bg-white rounded-2xl border transition-all overflow-hidden ${isExpanded ? 'border-[#002B5B]/20 shadow-lg shadow-[#002B5B]/5' : 'border-gray-200 hover:border-gray-300'}`}>
                      <button 
                        onClick={() => toggleModule(moduleName)}
                        className="w-full text-left p-6 md:p-8 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] focus-visible:ring-inset"
                        aria-expanded={isExpanded}
                      >
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D4AF37] mb-2 block uppercase tracking-widest">Module 0{moduleIdx + 1}</span>
                          <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">{moduleName}</h3>
                          <p className="text-sm text-gray-500 font-medium flex items-center gap-3">
                            <span>{moduleLessons.length} Lessons</span>
                            {modCompletedCount > 0 && <span>•</span>}
                            {modCompletedCount > 0 && <span className="text-green-600">{modCompletedCount} Completed</span>}
                          </p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isExpanded ? 'bg-[#002B5B]/10 border-[#002B5B]/20 text-[#002B5B]' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
                          <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="px-6 pb-6 space-y-2 border-t border-gray-100 pt-6 bg-gray-50/30">
                              {moduleLessons.map((lesson, idx) => {
                                const isCompleted = completedLessons.includes(lesson.id);
                                const previousLessonId = idx > 0 ? moduleLessons[idx - 1].id : null;
                                const isLocked = false; // previousLessonId && !completedLessons.includes(previousLessonId);

                                return (
                                  <li key={lesson.id}>
                                    {isLocked ? (
                                      <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white grayscale opacity-60 pointer-events-none">
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 flex-shrink-0 border border-gray-200">
                                          <Lock size={14} />
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="font-bold text-[#1A1A1A]"><span className="text-gray-400 mr-2">{lesson.order}.</span> {lesson.title}</h4>
                                          <div className="text-xs font-bold text-gray-500 mt-1">Complete previous lesson to unlock</div>
                                        </div>
                                      </div>
                                    ) : (
                                      <Link 
                                        to={`/lesson/${lesson.slug}`} 
                                        className={`flex items-center gap-4 p-4 rounded-xl border transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] group bg-white ${isCompleted ? 'border-green-200 shadow-sm' : 'border-gray-200 hover:border-[#002B5B]/50 hover:shadow-md'}`}
                                      >
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors border ${isCompleted ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-50 text-gray-400 border-gray-200 group-hover:bg-[#002B5B]/10 group-hover:text-[#002B5B] group-hover:border-[#002B5B]/20'}`}>
                                          {isCompleted ? <CheckCircle size={18} /> : <PlayCircle size={18} className="translate-x-0.5" />}
                                        </div>
                                        <div className="flex-1">
                                          <h4 className="font-bold text-[#1A1A1A] group-hover:text-[#002B5B] transition-colors"><span className="text-gray-400 mr-2">{lesson.order}.</span> {lesson.title}</h4>
                                          <p className="text-sm text-gray-500 mt-1 line-clamp-1">{lesson.description}</p>
                                        </div>
                                        <div className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm hidden sm:block ${isCompleted ? 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50' : 'bg-[#002B5B] text-white group-hover:bg-[#001f40]'}`}>
                                          {isCompleted ? 'Review' : 'Start'}
                                        </div>
                                      </Link>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {lessons.length === 0 && (
                <div className="bg-white p-12 text-center rounded-2xl border border-gray-200 shadow-sm">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">No lessons found</h3>
                  <p className="text-gray-500">Checking for available curriculum...</p>
                </div>
              )}
            </div>

          </div>
          
          {/* Sticky Sidebar */}
          <div className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-24 space-y-6">
             <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xl shadow-gray-200/50">
               
               {/* Progress Status */}
               <div className="mb-6">
                 <div className="flex justify-between items-end mb-2">
                   <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Progress</div>
                   <div className="font-bold text-2xl leading-none" style={{ color: activeCategory.color }}>{completionPercent}%</div>
                 </div>
                 <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                   <div 
                     className="h-full rounded-full transition-all duration-1000 ease-out" 
                     style={{ width: `${completionPercent}%`, backgroundColor: activeCategory.color }}
                   />
                 </div>
                 <div className="text-sm text-gray-500 font-medium">
                   {completedCount} of {totalLessons || activeCategory.lessons} lessons completed
                 </div>
               </div>
               
               {/* Primary CTA */}
               <Link
                 to={firstUnfinishedLesson ? `/lesson/${firstUnfinishedLesson.slug}` : '#'}
                 className={`w-full py-4 rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 mb-6 ${
                   completionPercent === 100 
                    ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/20' 
                    : 'bg-[#002B5B] text-white hover:bg-[#001f40] shadow-lg shadow-[#002B5B]/20'
                 }`}
               >
                 {completionPercent === 0 ? 'Start Course' : completionPercent === 100 ? 'Review Saved Notes' : 'Continue Learning'}
                 {completionPercent !== 100 && <ArrowRight size={18} />}
               </Link>
               
               <hr className="border-gray-100 mb-6" />
               
               {/* Course Stats */}
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400"><Clock size={16}/></div>
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Time</div>
                     <div className="text-sm font-bold text-[#1A1A1A]">{Math.round(activeCategory.totalTime / 60)} Hours</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400"><BookOpen size={16}/></div>
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Lessons</div>
                     <div className="text-sm font-bold text-[#1A1A1A]">{totalLessons || activeCategory.lessons} Interactive Lessons</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400"><Award size={16}/></div>
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Certificate</div>
                     <div className="text-sm font-bold text-[#1A1A1A]">Included upon completion</div>
                   </div>
                 </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

