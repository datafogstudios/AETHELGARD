import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, TrendingDown, DollarSign, Activity, X } from 'lucide-react';

interface Trade {
  id: string;
  type: 'BUY' | 'SELL';
  asset: string;
  entryPrice: number;
  lotSize: number;
  sl: number;
  tp: number;
  status: 'OPEN' | 'CLOSED';
  exitPrice?: number;
  pnl?: number;
}

export function PaperTradingSimulator() {
  const [balance, setBalance] = useState(10000);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [asset, setAsset] = useState('EUR/USD');
  const [lotSize, setLotSize] = useState(1);
  const [entryPrice, setEntryPrice] = useState(1.085);
  const [sl, setSl] = useState(1.080);
  const [tp, setTp] = useState(1.095);

  const calculatePnl = (trade: Trade, exit: number) => {
    const pipValue = trade.lotSize * 10; // Simple approximation for standard lots
    const diff = trade.type === 'BUY' ? exit - trade.entryPrice : trade.entryPrice - exit;
    // Assuming 4 decimal places for pips
    const pips = diff * 10000;
    return pips * pipValue;
  };

  const handleOpenTrade = (type: 'BUY' | 'SELL') => {
    const newTrade: Trade = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      asset,
      entryPrice,
      lotSize,
      sl,
      tp,
      status: 'OPEN',
    };
    setTrades([newTrade, ...trades]);
  };

  const handleCloseTrade = (tradeId: string, exitPrice: number) => {
    setTrades(current => current.map(trade => {
      if (trade.id === tradeId && trade.status === 'OPEN') {
        const pnl = calculatePnl(trade, exitPrice);
        setBalance(prev => prev + pnl);
        return { ...trade, status: 'CLOSED', exitPrice, pnl };
      }
      return trade;
    }));
  };

  const activePositionCount = trades.filter(t => t.status === 'OPEN').length;
  const winCount = trades.filter(t => t.status === 'CLOSED' && (t.pnl || 0) > 0).length;
  const lossCount = trades.filter(t => t.status === 'CLOSED' && (t.pnl || 0) < 0).length;

  return (
    <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col lg:flex-row">
      {/* Simulation Setup Area */}
      <div className="lg:w-1/3 bg-[#F9F7F2] p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-6">
            <Activity size={12} className="text-[#002B5B]" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#002B5B]">Simulator</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-[#002B5B] mb-2">Paper Trading</h3>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            Practice executing trades, setting stop losses, and calculating PNL without real financial risk.
          </p>

          <div className="grid gap-5">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Asset Pair</label>
                  <select 
                    value={asset}
                    onChange={(e) => setAsset(e.target.value)}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] text-sm font-bold text-[#1A1A1A]"
                  >
                    <option value="EUR/USD">EUR/USD</option>
                    <option value="GBP/USD">GBP/USD</option>
                    <option value="USD/JPY">USD/JPY</option>
                    <option value="XAU/USD">XAU/USD (Gold)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Lot Size</label>
                  <input
                    type="number" step="0.01" min="0.01"
                    value={lotSize}
                    onChange={(e) => setLotSize(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] font-mono text-sm text-[#1A1A1A]"
                  />
                </div>
             </div>
             
             <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Entry Price</label>
                  <input
                    type="number" step="0.0001"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] font-mono text-sm text-[#1A1A1A]"
                  />
             </div>

             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Stop Loss</label>
                  <input
                    type="number" step="0.0001"
                    value={sl}
                    onChange={(e) => setSl(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] font-mono text-sm text-red-600"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Take Profit</label>
                  <input
                    type="number" step="0.0001"
                    value={tp}
                    onChange={(e) => setTp(Number(e.target.value))}
                    className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] font-mono text-sm text-green-600"
                  />
               </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
            <button 
              onClick={() => handleOpenTrade('SELL')}
              className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl font-bold flex flex-col items-center gap-1 transition-all"
            >
              <TrendingDown size={20} />
              <span className="text-sm">Sell (Short)</span>
            </button>
            <button 
              onClick={() => handleOpenTrade('BUY')}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-2xl font-bold flex flex-col items-center gap-1 transition-all"
            >
              <TrendingUp size={20} />
              <span className="text-sm">Buy (Long)</span>
            </button>
        </div>
      </div>

      {/* Account Dashboard & Positions Loop */}
      <div className="lg:w-2/3 p-8 md:p-10 bg-white flex flex-col">
          {/* Top Bar Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Balance</p>
              <p className="font-mono text-xl font-bold text-[#002B5B]">${balance.toFixed(2)}</p>
            </div>
            <div className="p-5 bg-gray-50 border border-gray-100 rounded-2xl">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Active Trades</p>
              <p className="font-mono text-xl font-bold text-blue-600">{activePositionCount}</p>
            </div>
            <div className="p-5 bg-green-50 border border-green-100 rounded-2xl">
              <p className="text-[10px] text-green-600 uppercase tracking-widest font-bold mb-1">Wins</p>
              <p className="font-mono text-xl font-bold text-green-700">{winCount}</p>
            </div>
            <div className="p-5 bg-red-50 border border-red-100 rounded-2xl">
              <p className="text-[10px] text-red-600 uppercase tracking-widest font-bold mb-1">Losses</p>
              <p className="font-mono text-xl font-bold text-red-700">{lossCount}</p>
            </div>
          </div>

          {/* Trade History */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
             <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mb-4">Trade Blotter</h4>
             {trades.length === 0 ? (
                <div className="h-40 flex items-center justify-center border-2 border-dashed border-gray-100 rounded-2xl">
                   <p className="text-gray-400 font-bold text-sm">No trades executed yet.</p>
                </div>
             ) : (
               <div className="space-y-4">
                 <AnimatePresence>
                   {trades.map((trade) => (
                      <motion.div 
                        key={trade.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        layout
                        className={`p-5 rounded-2xl border ${trade.status === 'OPEN' ? 'bg-white shadow-sm border-gray-200 relative overflow-hidden' : 'bg-gray-50 border-gray-100 opacity-70'}`}
                      >
                        {trade.status === 'OPEN' && (
                           <div className={`absolute top-0 left-0 w-1 h-full ${trade.type === 'BUY' ? 'bg-green-500' : 'bg-red-500'}`} />
                        )}
                        <div className="flex justify-between items-start flex-wrap gap-4 ml-2">
                           <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${trade.type === 'BUY' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                  {trade.type}
                                </span>
                                <span className="font-bold text-sm">{trade.asset}</span>
                                <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500 font-mono">{trade.lotSize} Lots</span>
                              </div>
                              <div className="flex gap-4 text-xs font-mono text-gray-500 mt-2">
                                <div>EP: <span className="text-gray-900 font-bold">{trade.entryPrice.toFixed(4)}</span></div>
                                <div>SL: <span className="text-red-500 font-bold">{trade.sl.toFixed(4)}</span></div>
                                <div>TP: <span className="text-green-500 font-bold">{trade.tp.toFixed(4)}</span></div>
                              </div>
                           </div>
                           
                           {trade.status === 'OPEN' ? (
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => handleCloseTrade(trade.id, trade.tp)}
                                  className="px-3 py-1.5 bg-green-50 text-green-700 hover:bg-green-100 transition-colors border border-green-200 rounded-lg text-xs font-bold"
                                >
                                  Hit TP
                                </button>
                                <button 
                                  onClick={() => handleCloseTrade(trade.id, trade.sl)}
                                  className="px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 transition-colors border border-red-200 rounded-lg text-xs font-bold"
                                >
                                  Hit SL
                                </button>
                                <button 
                                  onClick={() => {
                                    const exit = prompt('Enter manual exit price:');
                                    if (exit && !isNaN(Number(exit))) {
                                      handleCloseTrade(trade.id, Number(exit));
                                    }
                                  }}
                                  className="px-3 py-1.5 bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors rounded-lg text-xs font-bold border border-gray-200"
                                >
                                  Close
                                </button>
                              </div>
                           ) : (
                             <div className="text-right">
                               <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Closed PNL</p>
                               <p className={`font-mono font-bold text-lg ${trade.pnl && trade.pnl > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                 {trade.pnl && trade.pnl > 0 ? '+' : ''}{trade.pnl?.toFixed(2)}
                               </p>
                             </div>
                           )}
                        </div>
                      </motion.div>
                   ))}
                 </AnimatePresence>
               </div>
             )}
          </div>
      </div>
    </div>
  );
}
