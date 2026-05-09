import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export function CalculatorMargin() {
  const [leverage, setLeverage] = useState<number | ''>(100);
  const [lotSize, setLotSize] = useState<number | ''>(1.0);
  const [pair, setPair] = useState('EUR/USD');
  const [balance, setBalance] = useState<number | ''>('');
  const [accountCurrency, setAccountCurrency] = useState('USD');

  const levVal = Number(leverage) || 1;
  const lotVal = Number(lotSize) || 0;
  const balVal = Number(balance) || 0;

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

  const calculateMargin = () => {
    if (lotVal <= 0 || levVal <= 0) return { required: 0, level: 0, free: 0, status: 'none', usedPercent: 0 };

    const base = pair.substring(0, 3);
    const contractSize = lotVal * 100000;
    const marginInBase = contractSize / levVal;

    let requiredMargin = marginInBase;
    if (accountCurrency !== base) {
      const rate = getSimulatedExchangeRate(base, accountCurrency);
      requiredMargin = marginInBase * rate;
    }

    let level = 0;
    let free = 0;
    let status = 'none';
    let usedPercent = 0;

    if (balVal > 0) {
      free = balVal - requiredMargin;
      level = (balVal / requiredMargin) * 100;
      usedPercent = (requiredMargin / balVal) * 100;
      if (level < 50) status = 'red';
      else if (level < 100) status = 'yellow';
      else status = 'green';
    }

    return { required: requiredMargin, level, free, status, usedPercent };
  };

  const results = calculateMargin();

  const handleQuickLot = (val: number) => setLotSize(val);
  const handleQuickLev = (val: number) => setLeverage(val);

  const currencySymbol = (cur: string) => cur === 'USD' ? '$' : cur === 'EUR' ? '€' : cur === 'GBP' ? '£' : cur === 'JPY' ? '¥' : '';

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B]" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-serif text-[#1A1A1A] mb-1">Margin Calculator</h3>
        <p className="text-sm text-gray-500 font-medium">See how much capital is required to open a position</p>
      </div>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="margin-pair" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Currency Pair</label>
            <select 
              id="margin-pair" 
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
            <label htmlFor="margin-currency" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Account Currency</label>
            <select 
              id="margin-currency" 
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
            <span>Leverage (1:X)</span>
            <span className="text-[#002B5B]">1:{levVal}</span>
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {[1, 50, 100, 200, 500].map(btn => (
              <button 
                key={btn} type="button" onClick={() => handleQuickLev(btn)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${levVal === btn ? 'bg-[#002B5B]/10 border-[#002B5B]/30 text-[#002B5B]' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
              >
                1:{btn}
              </button>
            ))}
          </div>
          <input 
            type="number" min="1" step="1" 
            className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
            placeholder="Custom leverage..."
            value={leverage} onChange={(e) => setLeverage(e.target.value === '' ? '' : Number(e.target.value))}
          />
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

        <div>
          <label htmlFor="margin-balance" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2 flex justify-between">
            <span>Account Balance (Optional)</span>
            <span className="text-[#002B5B] text-[10px] transform translate-y-0.5">Calculates Free Margin</span>
          </label>
          <input 
            id="margin-balance" type="number" min="0" step="0.01" 
            className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
            placeholder="e.g., 5000" value={balance} onChange={(e) => setBalance(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
      </form>

      {/* Results Section */}
      <div className="mt-8 pt-8 border-t border-gray-100" aria-live="polite">
        <div className="bg-[#1A1A1A] p-8 rounded-2xl flex flex-col justify-center shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B]/20 to-transparent pointer-events-none" />
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1 relative z-10 text-center">Required Margin</span>
          <span className="text-4xl text-white font-black tracking-tighter relative z-10 text-center mb-6">
            {currencySymbol(accountCurrency)}{results.required.toFixed(2)}
          </span>
          
          {balVal > 0 && (
            <>
              <div className="h-4 flex rounded-full overflow-hidden w-full bg-white/10 mb-2 relative z-10">
                <div 
                  className={`h-full transition-all duration-500 ${results.status === 'red' ? 'bg-red-500' : results.status === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'}`} 
                  style={{ width: `${Math.min(100, results.usedPercent)}%` }}
                />
              </div>
              <div className="flex justify-between text-xs font-bold relative z-10 mb-6">
                <span className="text-white">Used: {results.usedPercent.toFixed(1)}%</span>
                <span className="text-white/60">Free: {Math.max(0, 100 - results.usedPercent).toFixed(1)}%</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 relative z-10 pt-4 border-t border-white/10">
                 <div>
                   <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Free Margin</span>
                   <span className="text-white font-mono">{currencySymbol(accountCurrency)}{results.free.toFixed(2)}</span>
                 </div>
                 <div>
                   <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1 font-bold">Margin Level</span>
                   <span className={`font-mono font-bold ${results.status === 'red' ? 'text-red-400' : results.status === 'yellow' ? 'text-yellow-400' : 'text-green-400'}`}>
                     {isFinite(results.level) ? results.level.toFixed(2) : '0.00'}%
                   </span>
                 </div>
              </div>
              
              {results.status === 'red' && (
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 relative z-10">
                  <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-red-100/90 leading-relaxed font-medium">Margin call risk! Your account could be liquidated. Margin level is below 50%.</p>
                </div>
              )}
              {results.status === 'yellow' && (
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-start gap-3 relative z-10">
                  <AlertCircle size={16} className="text-yellow-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-yellow-100/90 leading-relaxed font-medium">Low margin warning. Consider reducing position size to manage risk.</p>
                </div>
              )}
              {results.status === 'green' && (
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-start gap-3 relative z-10">
                  <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-green-100/90 leading-relaxed font-medium">Healthy margin level. You have sufficient trading parameters.</p>
                </div>
              )}
            </>
          )}
        </div>

        <p className="text-xs text-gray-500 text-center font-medium bg-gray-50 p-4 rounded-xl border border-gray-200">
          Higher leverage = lower margin required to open a position, but significantly increases risk of liquidation.
        </p>
      </div>
    </div>
  );
}
