import React, { useState } from 'react';

export function CalculatorRiskReward() {
  const [risk, setRisk] = useState<number | ''>(50);
  const [reward, setReward] = useState<number | ''>(150);

  const riskVal = Number(risk) || 0;
  const rewardVal = Number(reward) || 0;
  const total = riskVal + rewardVal;
  
  const riskPercent = total > 0 ? (riskVal / total) * 100 : 0;
  const rewardPercent = total > 0 ? (rewardVal / total) * 100 : 0;

  const ratioStr = riskVal > 0 ? `1 : ${(rewardVal / riskVal).toFixed(2).replace(/\.00$/, '')}` : 'N/A';

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-4">Risk/Reward Ratio Calculator</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="rr-risk" className="block text-sm font-bold text-gray-700 mb-1">Risk Amount ($)</label>
          <input 
            id="rr-risk" 
            type="number" 
            min="0"
            step="0.01"
            className="w-full p-3 border border-gray-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]" 
            placeholder="50"
            value={risk}
            onChange={(e) => setRisk(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="rr-reward" className="block text-sm font-bold text-gray-700 mb-1">Potential Reward ($)</label>
          <input 
            id="rr-reward" 
            type="number" 
            min="0"
            step="0.01"
            className="w-full p-3 border border-gray-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002B5B]" 
            placeholder="150"
            value={reward}
            onChange={(e) => setReward(e.target.value === '' ? '' : Number(e.target.value))}
          />
        </div>
        
        {(riskVal > 0 || rewardVal > 0) && (
          <div className="mt-6 pt-2" aria-live="polite">
            <div className="p-5 bg-[#F9F7F2] rounded-xl border border-gray-200">
              <div className="flex justify-between items-end mb-3">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Ratio</span>
                <span className="text-2xl font-black text-[#1A1A1A]">{ratioStr}</span>
              </div>
              
              {/* Visual Representation */}
              <div className="sr-only">
                The calculated risk reward ratio is {ratioStr}. Risk represents {riskPercent.toFixed(1)} percent, and reward represents {rewardPercent.toFixed(1)} percent of the total trade metrics.
              </div>
              <div className="h-4 flex rounded-full overflow-hidden w-full bg-gray-200 relative" aria-hidden="true">
                <div 
                  className="h-full bg-red-400 hover:bg-red-500 transition-colors duration-500" 
                  style={{ width: `${riskPercent}%` }}
                  title={`Risk: $${riskVal}`}
                />
                <div 
                  className="h-full bg-green-400 hover:bg-green-500 transition-colors duration-500" 
                  style={{ width: `${rewardPercent}%` }}
                  title={`Reward: $${rewardVal}`}
                />
              </div>
              
              <div className="flex justify-between mt-3 text-xs font-bold px-1" aria-hidden="true">
                <span className="text-red-600">Risk (${riskVal})</span>
                <span className="text-green-600">Reward (${rewardVal})</span>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
