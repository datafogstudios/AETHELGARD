import { motion } from 'motion/react';
import { ExternalLink, Shield, Star, TrendingUp } from 'lucide-react';

export function Brokers() {
  const brokers = [
    {
      name: 'GlobalTrade FX',
      type: 'Forex Broker',
      rating: 4.9,
      features: ['Tight Spreads', 'High Leverage', 'MT4/MT5 Support'],
      url: '#',
      recommended: true
    },
    {
      name: 'AlphaForex',
      type: 'Forex Broker',
      rating: 4.8,
      features: ['Zero Commission', 'Fast Execution', 'Copy Trading'],
      url: '#',
      recommended: false
    },
    {
      name: 'PrimeMarkets',
      type: 'Forex Broker',
      rating: 4.7,
      features: ['Direct Market Access', 'Advanced Charting', 'Institutional Liquidity'],
      url: '#',
      recommended: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F9F7F2] py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] mb-4 block font-bold">Recommended Platforms</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-[#002B5B] mb-6">Trusted Brokers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have partnered with industry-leading brokers to provide you with the best trading conditions, tightest spreads, and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brokers.map((broker, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-2xl p-8 border ${broker.recommended ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10' : 'border-gray-200 shadow-sm'} relative overflow-hidden`}
            >
              {broker.recommended && (
                <div className="absolute top-4 right-4 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-[#D4AF37]" /> Top Pick
                </div>
              )}
              
              <div className="w-16 h-16 bg-[#002B5B]/5 rounded-xl flex items-center justify-center mb-6">
                <Shield size={32} className="text-[#002B5B]" />
              </div>
              
              <h3 className="font-display text-2xl font-bold text-[#002B5B] mb-2">{broker.name}</h3>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">{broker.type}</p>
              
              <div className="space-y-3 mb-8">
                {broker.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-gray-600">
                    <TrendingUp size={16} className="text-[#D4AF37]" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={broker.url}
                className={`w-full py-4 rounded-lg font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-colors ${broker.recommended ? 'bg-[#D4AF37] text-white hover:bg-[#B8860B]' : 'bg-[#002B5B]/10 text-[#002B5B] hover:bg-[#002B5B]/20'}`}
              >
                Open Account <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
