import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { RefreshCw } from 'lucide-react';

interface PriceData {
  symbol: string;
  bid: number;
  ask: number;
  change: number;
  history: number[];
}

const mockInitialData: PriceData[] = [
  { symbol: 'EUR/USD', bid: 1.08452, ask: 1.08458, change: 0.12, history: Array.from({length: 24}, () => 1.08 + Math.random() * 0.01) },
  { symbol: 'GBP/USD', bid: 1.26321, ask: 1.26330, change: -0.05, history: Array.from({length: 24}, () => 1.26 + Math.random() * 0.01) },
  { symbol: 'USD/JPY', bid: 149.852, ask: 149.865, change: 0.22, history: Array.from({length: 24}, () => 149 + Math.random() * 2) },
  { symbol: 'USD/CHF', bid: 0.88210, ask: 0.88220, change: -0.15, history: Array.from({length: 24}, () => 0.88 + Math.random() * 0.01) },
  { symbol: 'AUD/USD', bid: 0.65420, ask: 0.65430, change: 0.45, history: Array.from({length: 24}, () => 0.65 + Math.random() * 0.01) },
  { symbol: 'XAU/USD', bid: 2024.10, ask: 2024.40, change: 0.85, history: Array.from({length: 24}, () => 2020 + Math.random() * 10) },
];

export function LivePricesWidget() {
  const [data, setData] = useState<PriceData[]>(mockInitialData);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [announceChanges, setAnnounceChanges] = useState(false);
  const [flashedRows, setFlashedRows] = useState<Record<string, 'up' | 'down'>>({});
  const [lastAnnouncement, setLastAnnouncement] = useState('');

  const generateSparkline = (history: number[]) => {
    const min = Math.min(...history);
    const max = Math.max(...history);
    const range = max - min || 1;
    
    const points = history.map((val, idx) => {
      const x = (idx / (history.length - 1)) * 60;
      const y = 20 - ((val - min) / range) * 20;
      return `${x},${y}`;
    });
    
    const path = `M ${points.join(' L ')}`;
    const isPositive = history[history.length - 1] >= history[0];
    const color = isPositive ? '#4ade80' : '#f87171';
    
    return <path d={path} fill="none" stroke={color} strokeWidth="1.5" className="opacity-80" />;
  };

  const fetchPrices = useCallback(() => {
    setIsRefreshing(true);
    
    // Simulate API Call via timeout
    setTimeout(() => {
      setData(prevData => {
        const newData = prevData.map(pair => {
          // Add small randomization
          const volatile = pair.symbol.includes('JPY') || pair.symbol.includes('XAU') ? 0.05 : 0.0005;
          const shift = (Math.random() - 0.5) * volatile;
          
          const newBid = Math.max(0, pair.bid + shift);
          const spread = pair.ask - pair.bid;
          const newAsk = newBid + spread;
          const newChange = pair.change + (shift > 0 ? 0.02 : -0.02);
          
          const newHistory = [...pair.history.slice(1), newBid];
          
          if (Math.abs(newBid - pair.bid) > 0.00001) {
            const direction = newBid > pair.bid ? 'up' : 'down';
            setFlashedRows(prev => ({ ...prev, [pair.symbol]: direction }));
            
            if (announceChanges && Math.abs(newChange) > 0.5) {
               setLastAnnouncement(`${pair.symbol} ${newBid.toFixed(pair.symbol === 'USD/JPY' ? 3 : 5)}, ${direction} ${Math.abs(newChange).toFixed(2)} percent`);
            }
            
            setTimeout(() => {
               setFlashedRows(prev => {
                 const res = { ...prev };
                 delete res[pair.symbol];
                 return res;
               });
            }, 1000);
          }
          
          return {
            ...pair,
            bid: newBid,
            ask: newAsk,
            change: newChange,
            history: newHistory,
          };
        });
        
        return newData;
      });
      
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 600);
  }, [announceChanges]);

  useEffect(() => {
    const timer = setInterval(fetchPrices, 15000); // 15s refresh 
    return () => clearInterval(timer);
  }, [fetchPrices]);

  const decimalPlaces = (symbol: string) => symbol === 'USD/JPY' || symbol === 'XAU/USD' ? 3 : 5;

  return (
    <div className="bg-[#002B5B] border border-[#6A6F75] p-8 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <header className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-2xl font-serif text-white tracking-tight mb-1">Exchange Feeds</h3>
          <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.2em]">Updated: {lastUpdated.toLocaleTimeString()} UTC</p>
        </div>
        <button 
          onClick={fetchPrices}
          className={`p-2 text-white/50 hover:text-[#D4AF37] bg-transparent hover:bg-[#D4AF37]/10 rounded border border-[#6A6F75] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] ${isRefreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
          aria-label="Refresh rates"
          disabled={isRefreshing}
        >
          <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} aria-hidden="true" />
        </button>
      </header>
      
      <div className="overflow-x-auto" role="region" aria-label="Currency exchange rates">
        <div className="min-w-[500px]">
          <div className="grid grid-cols-6 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 py-4 border-b border-[#6A6F75]">
            <span className="pl-4">Pair</span>
            <span>Bid</span>
            <span>Ask</span>
            <span>Spread</span>
            <span>Change</span>
            <span>24h</span>
          </div>
          
          <div className="divide-y divide-[#6A6F75]">
            {data.map((pair) => (
              <div 
                key={pair.symbol} 
                className={`grid grid-cols-6 items-center py-5 transition-colors duration-[1000ms] ${flashedRows[pair.symbol] === 'up' ? 'bg-[#E8F0E8]/10' : flashedRows[pair.symbol] === 'down' ? 'bg-[#F9F7F2]/10' : 'bg-transparent'}`}
                data-pair={pair.symbol}
              >
                <span className="font-bold text-white pl-4 font-serif tracking-widest">{pair.symbol}</span>
                <span className="font-mono text-sm text-white/90">{pair.bid.toFixed(decimalPlaces(pair.symbol))}</span>
                <span className="font-mono text-sm text-white/90">{pair.ask.toFixed(decimalPlaces(pair.symbol))}</span>
                <span className="font-mono text-xs text-white/50">{((pair.ask - pair.bid) * (pair.symbol.includes('JPY') ? 100 : 10000)).toFixed(1)}</span>
                <span className={`text-sm font-mono font-bold ${pair.change >= 0 ? 'text-[#E8F0E8]' : 'text-[#F9F7F2]/80'}`}>
                  {pair.change >= 0 ? '+' : ''}{pair.change.toFixed(2)}%
                </span>
                <svg className="w-[60px] h-[20px]" viewBox="0 0 60 20" aria-hidden="true">
                  {generateSparkline(pair.history)}
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-4 border-t border-[#6A6F75]">
        <label className="flex items-center gap-3 cursor-pointer text-xs text-white/40 font-bold uppercase tracking-widest group">
          <input 
            type="checkbox" 
            className="w-3 h-3 text-[#D4AF37] rounded-sm bg-transparent border-[#6A6F75] focus:ring-[#D4AF37] transition-colors"
            checked={announceChanges}
            onChange={(e) => setAnnounceChanges(e.target.checked)}
          />
          <span className="group-hover:text-white/60 transition-colors">Acoustic Signals</span>
        </label>
      </div>

      {announceChanges && <div aria-live="polite" className="sr-only">{lastAnnouncement}</div>}
    </div>
  );
}
