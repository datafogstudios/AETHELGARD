import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, TrendingUp, Zap } from 'lucide-react';
import { selfCheckQs } from '../data';

export function StartLearning() {
  const navigate = useNavigate();
  const [selfCheckIdx, setSelfCheckIdx] = useState(0);
  const [selfCheckScore, setSelfCheckScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const answerSelf = (scoreVal: number) => {
    const newScore = selfCheckScore + scoreVal;
    setSelfCheckScore(newScore);
    if (selfCheckIdx + 1 >= selfCheckQs.length) {
      setShowResult(true);
    } else {
      setSelfCheckIdx(selfCheckIdx + 1);
    }
  };

  const avg = selfCheckScore / selfCheckQs.length;
  let recommendedLevel = 'beginner', recommendedLabel = 'Beginner Path', recommendedAction = () => navigate('/courses/beginner');
  
  if (avg <= 0.8) { 
    recommendedLevel = 'beginner'; 
    recommendedLabel = 'Beginner Path'; 
    recommendedAction = () => navigate('/courses/beginner');
  } else if (avg <= 2) { 
    recommendedLevel = 'intermediate'; 
    recommendedLabel = 'Intermediate Path'; 
    recommendedAction = () => navigate('/courses/intermediate'); 
  } else { 
    recommendedLevel = 'advanced'; 
    recommendedLabel = 'Advanced Path'; 
    recommendedAction = () => navigate('/courses/advanced'); 
  }

  const paths = [
    {
      id: 'beginner',
      title: 'New to Forex?',
      description: 'Start from absolute scratch. Learn what Forex is, how to read charts, and basic risk management.',
      icon: <BookOpen size={32} className="text-navy" />,
      firstLesson: 'M1-L1',
      level: 'Beginner Path'
    },
    {
      id: 'intermediate',
      title: 'Know the basics?',
      description: 'You understand pips and lots. Now learn market structure, supply & demand, and how to build a strategy.',
      icon: <TrendingUp size={32} className="text-navy" />,
      firstLesson: 'M7-L1',
      level: 'Intermediate Path'
    },
    {
      id: 'advanced',
      title: 'Advanced trader?',
      description: 'Master institutional concepts, liquidity grabs, and advanced multi-timeframe analysis.',
      icon: <Zap size={32} className="text-navy" />,
      firstLesson: 'M14-L1',
      level: 'Advanced Path'
    }
  ];

  return (
    <motion.div
      key="start-learning"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32 bg-[#F9F7F2] min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">Choose Your Path</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#002B5B]">
            Where are you in <br /> your journey?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Select the path that best matches your current experience level. 
            You will be taken directly to the first lesson of that curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {paths.map((path, idx) => (
            <motion.div 
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 md:p-12 border border-gray-200 rounded-[2.5rem] hover:border-[#002B5B]/30 hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all group cursor-pointer flex flex-col h-full shadow-sm"
              onClick={() => navigate(`/courses/${path.id}`)}
            >
              <div className="mb-10 p-5 bg-[#002B5B]/5 inline-block rounded-2xl group-hover:scale-110 transition-transform w-fit">
                {path.icon && <div className="text-[#002B5B]">{path.icon}</div>}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] mb-3 block">
                {path.level}
              </span>
              <h3 className="text-3xl font-serif font-bold tracking-tight mb-6 text-[#002B5B] group-hover:text-[#D4AF37] transition-colors">{path.title}</h3>
              <p className="text-gray-600 mb-12 leading-relaxed flex-grow text-lg">
                {path.description}
              </p>
              
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] group/btn mt-auto">
                Start Path <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* SELF-CHECK QUIZ */}
        <div className="mt-40 max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-4">Not sure where to start?</p>
          <h3 className="font-serif text-4xl font-bold tracking-tight mb-16 text-[#002B5B]">Take the 2-minute self-check</h3>
          
          <div className="bg-white p-12 border border-gray-200 rounded-[3rem] text-left shadow-sm">
            {!showResult ? (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Question {selfCheckIdx + 1} of {selfCheckQs.length}</p>
                </div>
                <div className="h-1.5 bg-[#F9F7F2] rounded-full mb-10 overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#002B5B]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${((selfCheckIdx + 1) / selfCheckQs.length) * 100}%` }}
                  />
                </div>
                <p className="font-serif text-2xl font-bold mb-10 text-[#002B5B] leading-tight">{selfCheckQs[selfCheckIdx].q}</p>
                <div className="space-y-4">
                  {selfCheckQs[selfCheckIdx].opts.map((o, i) => (
                    <button 
                      key={i} 
                      className="w-full text-left p-6 border border-gray-200 rounded-2xl hover:border-[#002B5B] hover:bg-[#002B5B]/5 transition-all text-sm font-bold text-[#002B5B]"
                      onClick={() => answerSelf(selfCheckQs[selfCheckIdx].scores[i])}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-[#002B5B]/5 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Zap size={40} className="text-[#002B5B]" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4">Your Result</p>
                <h4 className="font-serif text-3xl font-bold tracking-tight mb-6 text-[#002B5B]">We recommend the <span className="text-[#D4AF37] italic">{recommendedLabel}</span></h4>
                <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                  Based on your answers, this is the most appropriate starting point. You can always switch levels at any time.
                </p>
                <button 
                  className="px-12 py-6 bg-[#002B5B] text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#001f40] transition-all rounded-full shadow-xl shadow-[#002B5B]/20"
                  onClick={recommendedAction}
                >
                  Start {recommendedLabel} →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
