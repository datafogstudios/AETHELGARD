import { motion } from 'motion/react';
import { BookOpen, Shield } from 'lucide-react';

export function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 py-32 md:py-48">
        <div className="text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#002B5B]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">The Mission</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] text-[#002B5B]">
            About <span className="text-[#002B5B]">Aethelgard</span> FX
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-tight font-serif font-medium italic">
            "Our mission is to provide high-quality, accessible trading education in a distraction-free environment."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-12">
            <div className="bg-[#F9F7F2] p-12 md:p-16 border border-gray-200 rounded-[3rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <h2 className="font-serif text-4xl font-bold tracking-tight mb-8 text-[#002B5B]">Our Mission</h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  At Aethelgard FX, we believe that everyone deserves access to top-tier financial education. The forex market is complex, and unfortunately, the internet is filled with noise, false promises, and expensive courses that offer little real value.
                </p>
                <p>
                  Our mission is to cut through the noise. We provide a structured, comprehensive curriculum that takes you from the absolute basics to advanced market concepts—completely free of charge.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-[#F9F7F2] p-12 md:p-16 border border-gray-200 rounded-[3rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#002B5B]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
              <h2 className="font-serif text-4xl font-bold tracking-tight mb-8 text-[#002B5B]">Our Vision</h2>
              <div className="space-y-8 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  We envision a world where aspiring traders are empowered with the skills, discipline, and psychological fortitude required to navigate the financial markets successfully.
                </p>
                <p>
                  By fostering a distraction-free learning environment, we aim to help our students focus on what truly matters: understanding market structure and developing a robust trading psychology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#F9F7F2] p-12 md:p-20 border border-gray-200 rounded-[4rem] text-center shadow-sm hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all group">
            <div className="w-24 h-24 bg-[#002B5B]/5 rounded-[2rem] flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-500">
              <BookOpen size={48} className="text-[#002B5B]" />
            </div>
            <h3 className="font-serif text-3xl font-bold tracking-tight mb-6 text-[#002B5B]">Accessible Education</h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">High-quality learning materials available to anyone, anywhere, at any time.</p>
          </div>
          <div className="bg-[#F9F7F2] p-12 md:p-20 border border-gray-200 rounded-[4rem] text-center shadow-sm hover:shadow-2xl hover:shadow-[#D4AF37]/5 transition-all group">
            <div className="w-24 h-24 bg-[#D4AF37]/5 rounded-[2rem] flex items-center justify-center mx-auto mb-12 group-hover:scale-110 transition-transform duration-500">
              <Shield size={48} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-3xl font-bold tracking-tight mb-6 text-[#002B5B]">Distraction-Free</h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">A clean, focused interface designed to maximize your learning and retention.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
