import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function CalculatorCompounding() {
  const [startBalance, setStartBalance] = useState<number | ''>(5000);
  const [monthlyReturn, setMonthlyReturn] = useState<number | ''>(3);
  const [contribution, setContribution] = useState<number | ''>(100);
  const [timePeriod, setTimePeriod] = useState<number | ''>(5);
  const [timeUnit, setTimeUnit] = useState<'years' | 'months'>('years');
  const [showTable, setShowTable] = useState(false);

  const activeStart = Number(startBalance) || 0;
  const activeRet = Number(monthlyReturn) || 0;
  const activeContrib = Number(contribution) || 0;
  const activeTime = Number(timePeriod) || 0;

  const data = useMemo(() => {
    if (activeStart <= 0 || activeTime <= 0) return [];
    
    const months = timeUnit === 'years' ? activeTime * 12 : activeTime;
    const decimalReturn = activeRet / 100;
    
    let currentBalance = activeStart;
    let totalContribs = activeStart;
    
    const results = [];
    results.push({
      month: 0,
      year: 0,
      balance: currentBalance,
      contributions: totalContribs,
      interest: 0,
      label: 'Start'
    });

    for (let m = 1; m <= months; m++) {
      const interestEarned = currentBalance * decimalReturn;
      currentBalance = currentBalance + interestEarned + activeContrib;
      totalContribs += activeContrib;
      
      // Save yearly milestones or final month
      if (m % 12 === 0 || m === months || timeUnit === 'months') {
        results.push({
          month: m,
          year: Number((m / 12).toFixed(1)),
          balance: currentBalance,
          contributions: totalContribs,
          interest: currentBalance - totalContribs,
          label: timeUnit === 'years' ? `Year ${m/12}` : `Month ${m}`
        });
      }
    }
    
    return results;
  }, [activeStart, activeRet, activeContrib, activeTime, timeUnit]);

  const finalState = data.length > 0 ? data[data.length - 1] : { balance: 0, contributions: 0, interest: 0 };
  const totalGrowthPercent = finalState.contributions > 0 ? ((finalState.balance - finalState.contributions) / finalState.contributions) * 100 : 0;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/10 shadow-2xl">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">{payload[0].payload.label}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-6">
              <span className="text-[#007BFF] font-bold text-sm">Total Balance</span>
              <span className="text-white font-mono font-bold">${payload[0].value.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="flex justify-between items-center gap-6">
              <span className="text-white/50 font-bold text-xs">Total Contributions</span>
              <span className="text-white/80 font-mono text-xs">${payload[1].value.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
            <div className="flex justify-between items-center gap-6">
              <span className="text-[#F59E0B] font-bold text-xs">Interest Earned</span>
              <span className="text-white/80 font-mono text-xs">${payload[0].payload.interest.toLocaleString(undefined, {maximumFractionDigits: 0})}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm relative overflow-hidden group col-span-1 lg:col-span-2 mt-12">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#1A1A1A]" />
      
      <div className="mb-8">
        <h3 className="text-3xl font-bold font-display text-[#1A1A1A] mb-2 tracking-tight">Compounding Calculator</h3>
        <p className="text-sm text-gray-500 font-medium max-w-2xl">See how consistent returns grow your account over time. Compound interest accelerates growth by earning return on previous returns.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Inputs */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Starting Balance ($)</label>
            <input 
              type="number" min="0" step="100" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#007BFF] transition-colors font-mono text-[#1A1A1A]" 
              value={startBalance} onChange={(e) => setStartBalance(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
          
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-4 flex justify-between">
              <span>Monthly Return (%)</span>
              <span className="text-[#007BFF]">{activeRet}%</span>
            </label>
            <input 
              type="range" min="0" max="20" step="0.5"
              className="w-full accent-[#007BFF] h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-3"
              value={activeRet} onChange={(e) => setMonthlyReturn(Number(e.target.value))}
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-bold px-1 mb-3">
              <span>0%</span><span>5%</span><span>10%</span><span>15%</span><span>20%</span>
            </div>
            {activeRet > 5 && (
              <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg flex items-start gap-2">
                <AlertCircle size={14} className="text-orange-500 shrink-0 mt-0.5" />
                <p className="text-xs text-orange-800 font-medium">Monthly returns &gt; 5% are extremely difficult to sustain and typically require aggressive risk profiles.</p>
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Monthly Contribution ($)</label>
            <input 
              type="number" min="0" step="50" 
              className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#007BFF] transition-colors font-mono text-[#1A1A1A]" 
              value={contribution} onChange={(e) => setContribution(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">Duration</label>
              <input 
                type="number" min="1" max={timeUnit === 'years' ? 50 : 600} 
                className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#007BFF] transition-colors font-mono text-[#1A1A1A]" 
                value={timePeriod} onChange={(e) => setTimePeriod(e.target.value === '' ? '' : Number(e.target.value))}
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs tracking-widest uppercase font-bold text-gray-500 mb-2 opacity-0">Unit</label>
              <div className="flex p-1 bg-gray-100 rounded-xl border border-gray-200 shadow-inner">
                <button 
                  onClick={() => setTimeUnit('years')}
                  className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all ${timeUnit === 'years' ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >Years</button>
                <button 
                  onClick={() => setTimeUnit('months')}
                  className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all ${timeUnit === 'months' ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                >Months</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output - Chart & Stats */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#1A1A1A] p-6 rounded-2xl relative overflow-hidden text-center col-span-1 md:col-span-2 flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/20 to-transparent pointer-events-none" />
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 relative z-10">Final Balance</span>
              <span className="text-4xl text-white font-black tracking-tighter relative z-10">${finalState.balance.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex flex-col justify-center items-center text-center">
              <span className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Total Growth</span>
              <span className="text-2xl text-[#007BFF] font-black tracking-tighter">+{totalGrowthPercent.toLocaleString(undefined, {maximumFractionDigits: 1})}%</span>
            </div>
          </div>

          <div className="flex-1 min-h-[300px] w-full bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007BFF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#007BFF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="label" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 700}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fontSize: 10, fill: '#94a3b8', fontWeight: 700}}
                  tickFormatter={(val) => `$${val.toLocaleString()}`}
                  width={80}
                />
                <RechartsTooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="contributions" 
                  stroke="#94a3b8" 
                  strokeDasharray="4 4"
                  fill="none" 
                  strokeWidth={2}
                />
                <Area 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#007BFF" 
                  fillOpacity={1} 
                  fill="url(#colorBalance)" 
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Yearly Table Breakdown Toggle */}
      <div className="mt-8">
        <button 
          onClick={() => setShowTable(!showTable)}
          className="w-full py-4 border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors rounded-xl flex justify-center items-center gap-2 text-sm font-bold text-[#1A1A1A]"
        >
          {showTable ? <><ChevronUp size={16}/> Hide Data Table</> : <><ChevronDown size={16}/> View Detailed Phase Breakdown</>}
        </button>
        
        {showTable && data.length > 0 && (
          <div className="mt-4 overflow-x-auto border border-gray-200 rounded-xl">
             <table className="w-full text-left text-sm whitespace-nowrap">
               <thead className="bg-[#1A1A1A] text-white">
                 <tr>
                   <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest">Phase</th>
                   <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest text-right">Contributions</th>
                   <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest text-right">Interest Earned</th>
                   <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest text-right">Total Balance</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100 bg-white">
                 {data.map((row, i) => (
                   <tr key={i} className="hover:bg-gray-50 transition-colors">
                     <td className="px-6 py-4 font-bold text-gray-600">{row.label}</td>
                     <td className="px-6 py-4 text-right font-mono text-gray-500">${row.contributions.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                     <td className="px-6 py-4 text-right font-mono text-[#F59E0B]">${row.interest.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                     <td className="px-6 py-4 text-right font-mono font-bold text-[#007BFF]">${row.balance.toLocaleString(undefined, {maximumFractionDigits: 2})}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>
        )}
      </div>

    </div>
  );
}
