import React, { useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function CalculatorProfitLoss() {
  const [direction, setDirection] = useState<'long' | 'short'>('long');
  const [entryPrice, setEntryPrice] = useState<number | ''>('');
  const [exitPrice, setExitPrice] = useState<number | ''>('');
  const [lotSize, setLotSize] = useState<number | ''>(1.0);
  const [pair, setPair] = useState('EUR/USD');
  const [accountCurrency, setAccountCurrency] = useState('USD');

  const entryVal = Number(entryPrice) || 0;
  const exitVal = Number(exitPrice) || 0;
  const lotVal = Number(lotSize) || 0;

  // Simple static rates for demonstration
  const getSimulatedExchangeRate = (from: string, to: string) => {
    if (from === to) return 1.0;
    const rates: Record<string, number> = {
      'EURUSD': 1.08, 'USDEUR': 0.92,
      'GBPUSD': 1.26, 'USDGBP': 0.79,
      'USDJPY': 150.0, 'JPYUSD': 0.0066,
      'USDCHF': 0.88, 'CHFUSD': 1.13,
      'AUDUSD': 0.65, 'USDAUD': 1.53
    };
    return rates[`${from}${to}`] || 1.0;
  };

  const getPipSize = (p: string) => {
    if (p.includes('JPY')) return 0.01;
    if (p.startsWith('XAU')) return 0.1;
    return 0.0001;
  };

  const getPipValue = () => {
    const quote = pair.substring(4, 7);
    const pipSize = getPipSize(pair);
    const units = lotVal * 100000;
    const valueInQuote = pipSize * units;
    
    if (accountCurrency !== quote) {
      return valueInQuote * getSimulatedExchangeRate(quote, accountCurrency);
    }
    return valueInQuote;
  };

  const calculatePL = () => {
    if (entryVal <= 0 || exitVal <= 0 || lotVal <= 0) return { pips: 0, profit: 0, status: 'neutral' };

    const pSize = getPipSize(pair);
    let pipDiff = 0;

    if (direction === 'long') {
      pipDiff = (exitVal - entryVal) / pSize;
    } else {
      pipDiff = (entryVal - exitVal) / pSize;
    }

    const pipValue = getPipValue();
    const totalPL = pipDiff * pipValue;
    
    let status = 'neutral';
    if (totalPL > 0) status = 'profit';
    if (totalPL < 0) status = 'loss';

    return { pips: pipDiff, profit: totalPL, status };
  };

  const results = calculatePL();

  const handleQuickLot = (val: number) => setLotSize(val);

  const currencySymbol = (cur: string) => cur === 'USD' ? '$' : cur === 'EUR' ? '€' : cur === 'GBP' ? '£' : cur === 'JPY' ? '¥' : '';

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B]" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-serif text-[#1A1A1A] mb-1">Profit/Loss Calculator</h3>
        <p className="text-sm text-gray-500 font-medium">Calculate potential outcomes before executing</p>
      </div>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="flex gap-4 p-2 bg-gray-50 border border-gray-200 rounded-xl">
          <button 
            type="button" 
            onClick={() => setDirection('long')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all ${direction === 'long' ? 'bg-green-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <ArrowUpRight size={16} /> Long (Buy)
          </button>
          <button 
            type="button" 
            onClick={() => setDirection('short')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold tracking-widest uppercase transition-all ${direction === 'short' ? 'bg-red-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-100'}`}
          >
            <ArrowDownRight size={16} /> Short (Sell)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="pl-open" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Entry Price</label>
            <input 
              id="pl-open" type="number" min="0" step="0.00001" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
              placeholder="e.g. 1.08450" value={entryPrice} onChange={(e) => setEntryPrice(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor="pl-close" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Exit Price</label>
            <input 
              id="pl-close" type="number" min="0" step="0.00001" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
              placeholder="e.g. 1.08950" value={exitPrice} onChange={(e) => setExitPrice(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="pl-pair" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Currency Pair</label>
            <select 
              id="pl-pair" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-bold text-[#1A1A1A]"
              value={pair}
              onChange={(e) => setPair(e.target.value)}
            >
              <optgroup label="Majors">
                <option value="EUR/USD">EUR/USD</option>
                <option value="GBP/USD">GBP/USD</option>
                <option value="USD/JPY">USD/JPY</option>
                <option value="USD/CHF">USD/CHF</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label htmlFor="pl-currency" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Account Currency</label>
            <select 
              id="pl-currency" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-bold text-[#1A1A1A]"
              value={accountCurrency}
              onChange={(e) => setAccountCurrency(e.target.value)}
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="GBP">GBP (£)</option>
              <option value="JPY">JPY (¥)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2 flex justify-between">
            <span>Trade Size (Lots)</span>
            <span className="text-[#002B5B]">{lotVal.toFixed(2)} Lots</span>
          </label>
          <div className="flex gap-2 mb-3">
            {[{ label: 'Micro', val: 0.01 }, { label: 'Mini', val: 0.1 }, { label: 'Standard', val: 1.0 }].map(btn => (
              <button 
                key={btn.label} type="button" onClick={() => handleQuickLot(btn.val)}
                className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${lotVal === btn.val ? 'bg-[#002B5B]/10 border-[#002B5B]/30 text-[#002B5B]' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <input 
            type="number" min="0.01" step="0.01" 
            className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
            placeholder="Lot size..." value={lotSize} onChange={(e) => setLotSize(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
      </form>

      {/* Results Section */}
      <div className="mt-8 pt-8 border-t border-gray-100" aria-live="polite">
        <div className={`p-8 rounded-2xl flex flex-col justify-center shadow-lg relative overflow-hidden transition-colors duration-500 ${results.status === 'profit' ? 'bg-green-500' : results.status === 'loss' ? 'bg-red-500' : 'bg-[#1A1A1A]'}`}>
           <div className="absolute inset-0 bg-black/10 pointer-events-none" />
           <span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1 relative z-10 text-center">Net Profit/Loss</span>
           <span className="text-5xl text-white font-black tracking-tighter relative z-10 text-center mb-4">
             {results.profit > 0 ? '+' : ''}{currencySymbol(accountCurrency)}{results.profit.toFixed(2)}
           </span>
           <div className="flex justify-center items-center gap-2 relative z-10">
             <span className="bg-white/20 px-3 py-1 rounded-full text-white font-mono text-sm font-bold">
               {results.pips > 0 ? '+' : ''}{results.pips.toFixed(1)} Pips
             </span>
           </div>
        </div>

        <div className="mt-6 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 flex justify-between items-center text-sm border-b border-gray-200">
            <span className="font-bold text-gray-600">Direction</span>
            <span className={`font-bold uppercase tracking-widest ${direction === 'long' ? 'text-green-600' : 'text-red-600'}`}>{direction}</span>
          </div>
          <div className="px-6 py-4 flex justify-between items-center text-sm border-b border-gray-200">
            <span className="font-bold text-gray-600">Pip Value</span>
            <span className="font-mono text-[#002B5B]">{currencySymbol(accountCurrency)}{getPipValue().toFixed(2)} / pip</span>
          </div>
          <div className="px-6 py-4 flex justify-between items-center text-sm text-gray-500">
            Assumes standard fractional pip calculation for {pair}.
          </div>
        </div>
      </div>
    </div>
  );
}
