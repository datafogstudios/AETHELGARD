import React, { useState, useEffect } from 'react';
import { Clock, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sessions = [
  { id: 'sydney', name: 'Sydney', start: 22, end: 7, color: 'bg-orange-500', bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
  { id: 'tokyo', name: 'Tokyo', start: 0, end: 9, color: 'bg-red-500', bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  { id: 'london', name: 'London', start: 8, end: 17, color: 'bg-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
  { id: 'newyork', name: 'New York', start: 13, end: 22, color: 'bg-green-500', bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' }
];

export function MarketSessionsWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getUTCMinutes = () => {
    return currentTime.getUTCHours() * 60 + currentTime.getUTCMinutes();
  };

  const isSessionActive = (start: number, end: number) => {
    const currentHour = currentTime.getUTCHours() + currentTime.getUTCMinutes() / 60;
    if (start < end) {
      return currentHour >= start && currentHour < end;
    } else {
      // Crosses midnight
      return currentHour >= start || currentHour < end;
    }
  };

  const currentHourUTC = currentTime.getUTCHours();
  const currentMinUTC = currentTime.getUTCMinutes();

  return (
    <div className="bg-white p-8 md:p-12 border border-gray-200 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B]" />
      
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
        <div>
          <h3 className="text-3xl font-bold font-serif text-[#1A1A1A] mb-2 flex items-center gap-3">
            <Globe className="text-[#002B5B]" size={28} />
            Global Market Sessions
          </h3>
          <p className="text-sm text-gray-500 font-medium max-w-md leading-relaxed">
            Forex is a 24-hour market. The most explosive moves happen when multiple major financial hubs overlap.
          </p>
        </div>
        <div className="bg-[#002B5B]/5 border border-[#002B5B]/10 p-4 rounded-2xl flex items-center gap-4 min-w-[200px]">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Clock size={20} className="text-[#002B5B]" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Current Time (UTC)</div>
            <div className="font-mono font-bold text-[#002B5B] text-xl">
              {currentHourUTC.toString().padStart(2, '0')}:{currentMinUTC.toString().padStart(2, '0')}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {sessions.map((session) => {
          const active = isSessionActive(session.start, session.end);
          return (
            <div 
              key={session.id} 
              className={`p-6 rounded-2xl border transition-all duration-500 ${active ? `${session.bg} ${session.border} shadow-sm` : 'bg-gray-50 border-gray-100 opacity-60'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className={`font-bold font-serif text-xl ${active ? session.text : 'text-gray-400'}`}>
                  {session.name}
                </span>
                {active && (
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest border border-current shadow-sm" style={{ color: session.text.replace('text-', '') }}>
                    <span className={`w-1.5 h-1.5 rounded-full ${session.color} animate-pulse`} />
                    Open
                  </span>
                )}
                {!active && (
                   <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                     Closed
                   </span>
                )}
              </div>
              <div className={`font-mono text-sm font-bold ${active ? session.text : 'text-gray-400'}`}>
                {session.start.toString().padStart(2, '0')}:00 - {session.end.toString().padStart(2, '0')}:00
              </div>
            </div>
          );
        })}
      </div>

      {/* 24h Timeline Visualization */}
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
        <div className="relative h-32 w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* Hour grid lines */}
          {[...Array(24)].map((_, i) => (
            <div key={i} className="absolute top-0 bottom-0 border-l border-gray-100" style={{ left: `${(i / 24) * 100}%` }} />
          ))}
          
          {/* Current time indicator */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-[#002B5B] z-20 transition-all duration-1000 ease-linear shadow-[0_0_10px_rgba(0,43,91,0.5)]" 
            style={{ left: `${((currentHourUTC + currentMinUTC / 60) / 24) * 100}%` }} 
          />
          <div 
            className="absolute top-0 w-3 h-3 bg-[#002B5B] rounded-full -ml-1.5 shadow-[0_0_10px_rgba(0,43,91,1)] z-20 transition-all duration-1000 ease-linear" 
            style={{ left: `${((currentHourUTC + currentMinUTC / 60) / 24) * 100}%` }} 
          />

          {/* Session blocks */}
          <div className="absolute top-0 w-full h-8 px-1 flex items-center">
             <div className="absolute h-4 rounded-full bg-orange-500 opacity-80" style={{ left: `${(22/24)*100}%`, right: '0%' }} title="Sydney" />
             <div className="absolute h-4 rounded-full bg-orange-500 opacity-80" style={{ left: '0%', right: `${((24-7)/24)*100}%` }} title="Sydney" />
          </div>
          <div className="absolute top-8 w-full h-8 px-1 flex items-center">
             <div className="absolute h-4 rounded-full bg-red-500 opacity-80" style={{ left: '0%', right: `${((24-9)/24)*100}%` }} title="Tokyo" />
          </div>
          <div className="absolute top-16 w-full h-8 px-1 flex items-center">
             <div className="absolute h-4 rounded-full bg-blue-500 opacity-80" style={{ left: `${(8/24)*100}%`, right: `${((24-17)/24)*100}%` }} title="London" />
          </div>
          <div className="absolute top-24 w-full h-8 px-1 flex items-center">
             <div className="absolute h-4 rounded-full bg-green-500 opacity-80" style={{ left: `${(13/24)*100}%`, right: `${((24-22)/24)*100}%` }} title="New York" />
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-6 max-w-2xl mx-auto">
          Notice the overlapping regions. The <strong className="text-blue-700">London</strong> and <strong className="text-green-700">New York</strong> overlap (13:00 - 17:00 UTC) typically features the highest liquidity and volatility, making it the prime time for day traders.
        </p>
      </div>

    </div>
  );
}
