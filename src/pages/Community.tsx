import { motion } from 'motion/react';
import { MessageSquare, ShieldAlert, Users } from 'lucide-react';
import { ChatPlatform } from '../components/ChatPlatform';

export function Community() {
  return (
    <motion.div
      key="community"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F7F2] relative overflow-hidden"
    >
      {/* Technical Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none technical-grid" />

      <div className="py-24 md:py-48 max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#002B5B]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Connect & Grow</span>
          </div>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 leading-[0.85] text-[#002B5B]">
            Community
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto leading-tight font-serif font-medium italic">
            "Trading is a solitary endeavor, but you don't have to do it alone."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.a 
            whileHover={{ scale: 1.02, y: -5 }}
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#5865F2] text-white p-12 md:p-16 rounded-[4rem] transition-all flex flex-col items-center text-center shadow-2xl shadow-[#5865F2]/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <MessageSquare size={120} />
            </div>
            <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mb-10 relative z-10">
              <MessageSquare size={48} />
            </div>
            <h3 className="font-serif text-4xl font-bold tracking-tight mb-6 relative z-10">Discord Server</h3>
            <p className="text-white/80 mb-12 text-xl font-medium leading-relaxed relative z-10">
               Our main hub for structured discussions, chart sharing, and voice channels.
            </p>
            <span className="px-12 py-6 bg-white text-[#5865F2] text-[10px] uppercase tracking-[0.3em] font-bold rounded-full shadow-2xl relative z-10">
              Join Discord
            </span>
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.02, y: -5 }}
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0088cc] text-white p-12 md:p-16 rounded-[4rem] transition-all flex flex-col items-center text-center shadow-2xl shadow-[#0088cc]/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <Users size={120} />
            </div>
            <div className="w-24 h-24 bg-white/10 rounded-[2rem] flex items-center justify-center mb-10 relative z-10">
              <Users size={48} />
            </div>
            <h3 className="font-serif text-4xl font-bold tracking-tight mb-6 relative z-10">Telegram Group</h3>
            <p className="text-white/80 mb-12 text-xl font-medium leading-relaxed relative z-10">
              Fast-paced chat for quick questions and general market discussion.
            </p>
            <span className="px-12 py-6 bg-white text-[#0088cc] text-[10px] uppercase tracking-[0.3em] font-bold rounded-full shadow-2xl relative z-10">
              Join Telegram
            </span>
          </motion.a>
        </div>

        <div className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter text-[#002B5B] mb-4">Live Chat</h3>
              <p className="text-gray-600 text-xl max-w-2xl">Connect with other traders in real-time, share insights, and ask questions.</p>
            </div>
          </div>

          <ChatPlatform />
        </div>

        <div className="bg-white p-12 md:p-20 border border-gray-200 rounded-[4rem] shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] technical-grid pointer-events-none" />
          <div className="flex items-center gap-6 mb-16 relative z-10">
            <div className="p-4 bg-[#D4AF37]/10 rounded-2xl">
              <ShieldAlert size={40} className="text-[#D4AF37]" />
            </div>
            <h3 className="font-serif text-4xl md:text-5xl font-bold tracking-tighter text-[#002B5B]">Community Protocol</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="p-10 bg-[#F9F7F2] border border-gray-200 rounded-[2.5rem] group hover:border-[#002B5B]/40 transition-colors shadow-sm">
              <p className="font-bold text-[#002B5B] mb-4 text-[10px] uppercase tracking-[0.3em]">01. Education First</p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">This is a learning environment. Discussions should focus on concepts, strategies, and logic-based analysis.</p>
            </div>
            <div className="p-10 bg-[#F9F7F2] border border-gray-200 rounded-[2.5rem] group hover:border-[#002B5B]/40 transition-colors shadow-sm">
              <p className="font-bold text-[#002B5B] mb-4 text-[10px] uppercase tracking-[0.3em]">02. No Signals</p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">Do not ask for or provide trading signals. We are here to learn how to fish, not to be handed a fish.</p>
            </div>
            <div className="p-10 bg-[#F9F7F2] border border-gray-200 rounded-[2.5rem] group hover:border-[#002B5B]/40 transition-colors shadow-sm">
              <p className="font-bold text-[#002B5B] mb-4 text-[10px] uppercase tracking-[0.3em]">03. Respect & Feedback</p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">Treat everyone with respect. When reviewing charts, provide constructive, logic-based feedback.</p>
            </div>
            <div className="p-10 bg-[#F9F7F2] border border-gray-200 rounded-[2.5rem] group hover:border-[#002B5B]/40 transition-colors shadow-sm">
              <p className="font-bold text-[#002B5B] mb-4 text-[10px] uppercase tracking-[0.3em]">04. No Promotions</p>
              <p className="text-gray-600 leading-relaxed text-lg font-medium">Self-promotion, affiliate links, or selling of any kind will result in an immediate and permanent ban.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
