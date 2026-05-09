import { motion } from 'motion/react';
import { Download, FileText, Calendar, Clock, Shield, CheckSquare } from 'lucide-react';
import { pairs } from '../data';

export function Resources() {
  const resources = [
    {
      category: 'Trading Tools',
      items: [
        { title: 'Pre-Trade Checklist', description: 'Ensure all criteria are met before execution.', icon: <CheckSquare size={24} /> },
        { title: 'Trade Journal Template', description: 'Track your trades, emotions, and performance.', icon: <FileText size={24} /> },
        { title: 'Risk Management Calculator Sheet', description: 'Excel template for position sizing.', icon: <Shield size={24} /> },
      ]
    },
    {
      category: 'Market Reference',
      items: [
        { title: 'Global Session Timings', description: 'Visual map of Asian, London, and NY overlaps.', icon: <Clock size={24} /> },
        { title: 'Economic Calendar Guide', description: 'How to read and trade high-impact news.', icon: <Calendar size={24} /> },
      ]
    }
  ];

  return (
    <motion.div
      key="resources"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#F9F7F2]"
    >
      <div className="py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">Downloads & Tools</span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#002B5B]">
            Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Essential tools, templates, and reference guides to support your daily trading routine.
          </p>
        </div>

        <div className="space-y-24">
          {resources.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-serif text-3xl font-bold tracking-tight mb-10 border-b border-gray-200 pb-6 text-[#002B5B]">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} className="bg-white p-10 border border-gray-200 rounded-[2.5rem] hover:border-[#002B5B]/30 transition-all group flex flex-col h-full shadow-sm">
                    <div className="text-[#002B5B] mb-8 p-4 bg-[#002B5B]/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-serif font-bold text-xl mb-3 text-[#002B5B]">{item.title}</h4>
                    <p className="text-sm text-gray-500 mb-10 flex-grow leading-relaxed">{item.description}</p>
                    <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] group-hover:opacity-60 transition-opacity mt-auto">
                      <Download size={16} /> Download PDF
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* REFERENCE TABLES */}
        <div className="mt-32">
          <div className="mb-12">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">Market Reference</span>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#002B5B]">Currency Pair Reference</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#F9F7F2] border-b border-gray-200">
                    <th className="text-left p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Pair</th>
                    <th className="text-left p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Type</th>
                    <th className="text-left p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Base</th>
                    <th className="text-left p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Quote</th>
                    <th className="text-left p-8 text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Best Session</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {pairs.map((p, i) => (
                    <tr key={i} className="hover:bg-[#002B5B]/[0.02] transition-colors group">
                      <td className="p-8 font-bold text-[#002B5B] group-hover:text-[#D4AF37] transition-colors">{p[0]}</td>
                      <td className="p-8 text-gray-500 font-medium">{p[1]}</td>
                      <td className="p-8 text-gray-500 font-medium">{p[2]}</td>
                      <td className="p-8 text-gray-500 font-medium">{p[3]}</td>
                      <td className="p-8 text-gray-500 font-medium">{p[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
