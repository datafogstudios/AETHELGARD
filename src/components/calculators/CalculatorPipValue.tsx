import React, { useState } from 'react';

export function CalculatorPipValue() {
  const [pair, setPair] = useState('EUR/USD');
  const [lotSize, setLotSize] = useState<number | ''>(1.0);
  const [accountCurrency, setAccountCurrency] = useState('USD');

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

  const calculatePipValue = (overrideLot?: number) => {
    const activeLot = overrideLot !== undefined ? overrideLot : lotVal;
    if (activeLot <= 0) return 0;

    const base = pair.substring(0, 3);
    const quote = pair.substring(4, 7);

    // Determine pip multiplier based on quote currency
    const isJpy = quote === 'JPY';
    const isGold = base === 'XAU';
    const pipSize = isJpy ? 0.01 : isGold ? 0.1 : 0.0001;

    // Unit calculation
    const units = activeLot * 100000;
    const pipValueInQuote = pipSize * units;

    let finalPipValue = pipValueInQuote;
    if (accountCurrency !== quote) {
      const rate = getSimulatedExchangeRate(quote, accountCurrency);
      finalPipValue = pipValueInQuote * rate;
    }

    return finalPipValue;
  };

  const currentPipValue = calculatePipValue();

  const handleQuickSelect = (val: number) => {
    setLotSize(val);
  };

  const currencySymbol = (cur: string) => {
    return cur === 'USD' ? '$' : cur === 'EUR' ? '€' : cur === 'GBP' ? '£' : cur === 'JPY' ? '¥' : '';
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B]" />
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold font-serif text-[#1A1A1A] mb-1">Pip Value Calculator</h3>
        <p className="text-sm text-gray-500 font-medium">Know exactly what each pip movement is worth</p>
      </div>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="pv-pair" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Currency Pair</label>
            <select 
              id="pv-pair" 
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
              <optgroup label="Minors">
                <option value="EUR/GBP">EUR/GBP</option>
                <option value="EUR/JPY">EUR/JPY</option>
                <option value="GBP/JPY">GBP/JPY</option>
              </optgroup>
              <optgroup label="Commodities">
                <option value="XAU/USD">XAU/USD (Gold)</option>
              </optgroup>
            </select>
          </div>
          
          <div>
            <label htmlFor="pv-currency" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Account Currency</label>
            <select 
              id="pv-currency" 
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
          <label htmlFor="pv-size" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2 flex justify-between">
            <span>Trade Size (Lots)</span>
            <span className="text-[#002B5B]">{lotVal.toFixed(2)} Lots</span>
          </label>
          <div className="flex gap-2 mb-3">
            {[
              { label: 'Micro', val: 0.01 },
              { label: 'Mini', val: 0.1 },
              { label: 'Standard', val: 1.0 }
            ].map(btn => (
              <button 
                key={btn.label}
                type="button"
                onClick={() => handleQuickSelect(btn.val)}
                className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B] ${lotVal === btn.val ? 'bg-[#002B5B]/10 border-[#002B5B]/30 text-[#002B5B]' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
              >
                {btn.label} ({btn.val})
              </button>
            ))}
          </div>
          <input 
            id="pv-size" 
            type="number" 
            min="0.01"
            step="0.01" 
            className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-[#1A1A1A]" 
            placeholder="Custom lot size..."
            value={lotSize}
            onChange={(e) => setLotSize(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
      </form>

      {/* Results Section */}
      <div className="mt-8 pt-8 border-t border-gray-100" aria-live="polite">
        <div className="bg-[#1A1A1A] p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B]/20 to-transparent pointer-events-none" />
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Value Per Pip</span>
          <span className="text-4xl text-white font-black tracking-tighter relative z-10">
            {currencySymbol(accountCurrency)}{currentPipValue.toFixed(2)}
          </span>
          <span className="text-white/40 text-sm mt-2 relative z-10">For {pair} with {lotVal} lots in {accountCurrency}</span>
        </div>

        <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          <h4 className="text-xs font-bold text-center py-3 bg-gray-100 border-b border-gray-200 uppercase tracking-widest text-[#1A1A1A]">Breakdown Table</h4>
          <div className="divide-y divide-gray-200">
             {[
               { label: 'Standard Lot (1.0)', val: 1.0 },
               { label: 'Mini Lot (0.1)', val: 0.1 },
               { label: 'Micro Lot (0.01)', val: 0.01 }
             ].map(row => (
                <div key={row.label} className="flex justify-between items-center px-6 py-3 text-sm">
                  <span className="font-medium text-gray-600">{row.label}</span>
                  <span className="font-mono font-bold text-[#002B5B]">
                    {currencySymbol(accountCurrency)}{calculatePipValue(row.val).toFixed(2)}
                  </span>
                </div>
             ))}
          </div>
        </div>

        <details className="mt-6 text-sm text-gray-500 group bg-gray-50 p-4 rounded-xl border border-gray-200 cursor-pointer focus-within:ring-2 focus-within:ring-[#002B5B]">
          <summary className="font-bold outline-none group-open:text-[#002B5B]">How is this calculated?</summary>
          <div className="mt-3 pt-3 border-t border-gray-200 leading-relaxed font-mono text-xs text-gray-600 bg-white p-3 rounded border">
            Pip Value = (Pip Size × (Lot Size × 100,000))<br/>
            Then convert from Quote Currency back to Account Currency.<br/><br/>
            Current Exchange Rate Assumed: 1 {pair.substring(4, 7)} = {getSimulatedExchangeRate(pair.substring(4, 7), accountCurrency).toFixed(4)} {accountCurrency}
          </div>
        </details>
      </div>
    </div>
  );
}
