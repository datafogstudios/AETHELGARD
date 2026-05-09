import { motion } from 'motion/react';
import { Bitcoin, Coffee, CreditCard, Heart, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Support() {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 py-32 md:py-48 relative overflow-hidden">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none technical-grid" />

        <div className="text-center mb-32 relative z-10">
          <div className="w-24 h-24 bg-[#D4AF37]/5 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-[#D4AF37]/10">
            <Heart size={48} className="text-[#D4AF37] animate-pulse" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-tight text-[#002B5B]">
            Support <span className="text-[#002B5B]">Aethelgard FX</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-tight font-serif font-medium italic">
            "We believe high-quality trading education should be accessible to everyone, without expensive paywalls or hidden fees."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-7 bg-white p-12 md:p-16 border border-gray-200 rounded-[3rem] shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000" />
            <div className="flex items-center gap-6 mb-12">
              <div className="p-4 bg-amber-500/10 rounded-2xl">
                <Bitcoin size={32} className="text-amber-500" />
              </div>
              <h3 className="font-serif text-4xl font-bold tracking-tight text-[#002B5B]">Cryptocurrency</h3>
            </div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">Support us directly via decentralized networks. Fast, secure, and borderless.</p>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-200 group/addr shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Bitcoin (BTC)</span>
                  <span className="text-[10px] font-mono text-gray-400">NETWORK: MAINNET</span>
                </div>
                <code className="text-sm break-all font-mono text-[#002B5B] bg-[#F9F7F2] p-4 rounded-xl block border border-gray-200 group-hover/addr:border-[#002B5B] transition-colors">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</code>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 group/addr shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Ethereum (ETH)</span>
                  <span className="text-[10px] font-mono text-gray-400">NETWORK: ERC-20</span>
                </div>
                <code className="text-sm break-all font-mono text-[#002B5B] bg-[#F9F7F2] p-4 rounded-xl block border border-gray-200 group-hover/addr:border-[#002B5B] transition-colors">0x71C7656EC7ab88b098defB751B7401B5f6d8976F</code>
              </div>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 group/addr shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">Tether (USDT)</span>
                  <span className="text-[10px] font-mono text-gray-400">NETWORK: TRC-20</span>
                </div>
                <code className="text-sm break-all font-mono text-[#002B5B] bg-[#F9F7F2] p-4 rounded-xl block border border-gray-200 group-hover/addr:border-[#002B5B] transition-colors">TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t</code>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-12">
            <div className="bg-white p-12 border border-gray-200 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all group">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-[#002B5B]/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Wallet size={32} className="text-[#002B5B]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#002B5B]">M-Pesa</h3>
              </div>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">Fast, frictionless mobile money donations directly from your local line.</p>
              <button className="w-full py-6 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#1DA851] transition-all rounded-full shadow-xl shadow-[#25D366]/20 mb-4">
                Lipa na M-Pesa
              </button>
              <p className="text-center text-xs font-mono text-gray-500">PAYBILL: 888888 | A/C: AETHELGARD</p>
            </div>

            <div className="bg-white p-12 border border-gray-200 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all group">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-[#D4AF37]/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Coffee size={32} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#002B5B]">Buy Me a Coffee</h3>
              </div>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">A quick and easy way to say thanks for a specific lesson or strategy.</p>
              <button className="w-full py-6 bg-[#002B5B] text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#001f40] transition-all rounded-full shadow-2xl shadow-[#002B5B]/20">
                Support with $5
              </button>
            </div>

            <div className="bg-white p-12 border border-gray-200 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#002B5B]/5 transition-all group">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 bg-gray-100 rounded-2xl group-hover:scale-110 transition-transform">
                  <CreditCard size={32} className="text-gray-600" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#002B5B]">Card / PayPal</h3>
              </div>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">Secure fiat donations via global payment processors.</p>
              <button className="w-full py-6 border-2 border-gray-200 text-[#002B5B] text-[10px] uppercase tracking-[0.3em] font-bold hover:border-[#002B5B] transition-all rounded-full">
                Donate via Card
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-32 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-5xl font-bold tracking-tighter mb-4 text-[#002B5B]">Transparency Report</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See exactly where your contributions go. No secrets, full accountability.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <div className="bg-white p-12 border border-gray-200 rounded-[3rem] shadow-sm">
              <h3 className="font-bold text-2xl text-[#1A1A1A] mb-8 font-serif">Operating Costs (Monthly)</h3>
              <ul className="space-y-6">
                <li className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Server Hosting</span>
                    <span className="text-sm text-gray-500">Cloud Run / Vercel Edge</span>
                  </div>
                  <span className="font-mono text-[#D4AF37] font-bold">~$45.00</span>
                </li>
                <li className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Live Market Data API</span>
                    <span className="text-sm text-gray-500">Real-time quotes & charts</span>
                  </div>
                  <span className="font-mono text-[#D4AF37] font-bold">~$150.00</span>
                </li>
                <li className="flex justify-between items-center pb-6 border-b border-gray-100">
                  <div>
                    <span className="font-bold text-gray-800 block mb-1">Domain & DNS</span>
                    <span className="text-sm text-gray-500">fogx.academy</span>
                  </div>
                  <span className="font-mono text-[#D4AF37] font-bold">~$2.00</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="font-bold text-[#002B5B] uppercase tracking-widest text-[10px]">Total Goal</span>
                  <span className="font-mono font-bold text-[#002B5B]">~$197.00 / mo</span>
                </li>
              </ul>
              
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-4">
                  <span className="text-[#002B5B]">Covered: $140</span>
                  <span className="text-gray-400">Target: $197</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 mb-4 overflow-hidden">
                  <div className="bg-[#002B5B] h-full rounded-full transition-all" style={{ width: '71%' }} />
                </div>
                <p className="text-sm text-gray-500 font-medium">We are currently 71% funded for this month.</p>
              </div>
            </div>

            <div className="bg-white p-12 border border-gray-200 rounded-[3rem] shadow-sm">
               <h3 className="font-bold text-2xl text-[#1A1A1A] mb-8 font-serif">Top Supporters (Sept 2025)</h3>
               <div className="space-y-6">
                 {[
                   { name: 'Anonymous Shark', amount: '$50.00', date: 'Sept 14' },
                   { name: 'TradingWiz', amount: '$25.00', date: 'Sept 12' },
                   { name: 'Alice_M', amount: '$15.00', date: 'Sept 10' },
                   { name: 'EuroPoundFan', amount: '$10.00', date: 'Sept 05' },
                 ].map((supporter, idx) => (
                   <div key={idx} className="flex justify-between items-center p-4 bg-[#F9F7F2] rounded-2xl border border-transparent hover:border-[#002B5B]/20 transition-colors">
                     <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-[#002B5B] text-sm">
                         {idx + 1}
                       </div>
                       <div>
                         <span className="font-bold text-gray-800 block text-sm">{supporter.name}</span>
                         <span className="text-xs text-gray-500">{supporter.date}</span>
                       </div>
                     </div>
                     <span className="font-mono text-[#1A1A1A] font-bold">{supporter.amount}</span>
                   </div>
                 ))}
               </div>
               <div className="mt-8 text-center text-sm text-gray-500 italic">
                 Thank you all for keeping the platform free!
               </div>
            </div>
          </div>
        </div>
        
        <div className="text-center p-16 md:p-24 bg-[#F9F7F2] border border-gray-200 rounded-[4rem] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-[0.02] technical-grid pointer-events-none" />
          <h4 className="font-serif text-4xl font-bold tracking-tighter mb-8 relative z-10 text-[#002B5B]">Other ways to contribute</h4>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium relative z-10">
            Can't donate right now? No problem! You can also support us by sharing Aethelgard FX with other traders, joining our <button onClick={() => navigate('/community')} className="text-[#002B5B] font-bold hover:underline">Community</button>, and providing feedback.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
