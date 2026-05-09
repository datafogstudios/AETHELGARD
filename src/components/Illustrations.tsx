import React from 'react';
import { ChevronRight, Globe, Building2, ArrowRight, Coins, Scale, TrendingUp, TrendingDown, BookOpen, Clock4, Monitor, List, Bell, Code, Layout, FolderOpen, MousePointerClick, LineChart, ArrowUpCircle, ArrowDownCircle, Scissors, Activity, PlaySquare, Grid, Zap, Smartphone, Server, ShieldCheck, Eye, Dices, ClipboardList, Brain, AlertTriangle, CheckCircle2, XCircle, ListChecks, Search, RefreshCw, Target } from 'lucide-react';

export const MarketPhasesVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — The Three Market Phases —
    </div>
    <div className="flex flex-col md:flex-row p-6 gap-4 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      {/* Uptrend */}
      <div className="flex-1 bg-surface p-4 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
        <TrendingUp size={48} className="text-brand mb-2" />
        <div className="font-bold text-text-primary">Uptrend</div>
        <div className="text-xs text-text-secondary mt-1">Higher Highs, Higher Lows</div>
      </div>
      {/* Ranging */}
      <div className="flex-1 bg-surface p-4 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
        <ArrowRight size={48} className="text-yellow-500 mb-2" />
        <div className="font-bold text-text-primary">Ranging</div>
        <div className="text-xs text-text-secondary mt-1">Sideways Consolidation</div>
      </div>
      {/* Downtrend */}
      <div className="flex-1 bg-surface p-4 rounded-xl shadow-sm border border-border flex flex-col items-center text-center">
        <TrendingDown size={48} className="text-red-500 mb-2" />
        <div className="font-bold text-text-primary">Downtrend</div>
        <div className="text-xs text-text-secondary mt-1">Lower Highs, Lower Lows</div>
      </div>
    </div>
  </div>
);

export const SupportResistanceVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Support & Resistance —
    </div>
    <div className="p-8 relative h-64 flex flex-col justify-between bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="w-full h-10 bg-red-500/10 border-2 border-red-500/40 border-dashed flex items-center justify-center text-red-500 font-bold rounded z-10 shadow-sm">Resistance Zone (Ceiling / Sellers)</div>
      
      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
        <path d="M 0 160 L 50 40 L 100 160 L 150 40 L 200 160 L 250 40 L 300 160 L 350 40 L 400 160" fill="none" stroke="currentColor" className="text-brand" strokeWidth="4" strokeLinejoin="round" />
      </svg>

      <div className="w-full h-10 bg-green-500/10 border-2 border-green-500/40 border-dashed flex items-center justify-center text-green-500 font-bold rounded z-10 shadow-sm">Support Zone (Floor / Buyers)</div>
    </div>
  </div>
);

export const BreakAndRetestVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Break & Retest —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="absolute w-full h-1 border-t-2 border-dashed border-border z-0 top-1/2 -translate-y-1/2"></div>
      <div className="absolute left-4 top-1/2 -translate-y-8 text-sm font-bold text-text-secondary bg-surface-alt px-2">Resistance</div>
      <div className="absolute right-4 top-1/2 translate-y-4 text-sm font-bold text-brand bg-surface-alt px-2">New Support</div>
      
      <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none">
        <path d="M 0 160 L 100 120 L 150 140 L 200 40 L 250 100 L 350 20 L 400 60" fill="none" stroke="currentColor" className="text-brand" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="250" cy="100" r="8" fill="currentColor" className="text-brand animate-pulse" />
      </svg>
      <div className="absolute left-[55%] md:left-[60%] top-[55%] text-xs font-bold text-brand bg-surface px-3 py-1 rounded shadow-md border border-brand/20 z-20">Retest (Entry)</div>
    </div>
  </div>
);

export const CandleAnatomyVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Anatomy of a Candlestick —
    </div>
    <div className="flex p-8 justify-center gap-12 md:gap-32 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      {/* Bullish */}
      <div className="flex flex-col items-center relative w-32">
        <div className="text-brand font-bold mb-4 text-lg">Bullish</div>
        <div className="w-1 bg-text-primary h-48 relative flex justify-center">
          <div className="absolute -top-6 text-sm font-bold text-text-secondary">High</div>
          <div className="absolute -bottom-6 text-sm font-bold text-text-secondary">Low</div>
          <div className="w-16 h-24 bg-brand absolute top-12 border-2 border-brand-muted rounded-sm shadow-sm"></div>
          <div className="absolute top-12 -left-16 text-sm font-bold text-brand">Close</div>
          <div className="absolute bottom-12 -left-16 text-sm font-bold text-brand">Open</div>
        </div>
      </div>
      {/* Bearish */}
      <div className="flex flex-col items-center relative w-32">
        <div className="text-red-500 font-bold mb-4 text-lg">Bearish</div>
        <div className="w-1 bg-text-primary h-48 relative flex justify-center">
          <div className="absolute -top-6 text-sm font-bold text-text-secondary">High</div>
          <div className="absolute -bottom-6 text-sm font-bold text-text-secondary">Low</div>
          <div className="w-16 h-24 bg-red-500 absolute top-12 border-2 border-red-700 rounded-sm shadow-sm"></div>
          <div className="absolute top-12 -right-16 text-sm font-bold text-red-500">Open</div>
          <div className="absolute bottom-12 -right-16 text-sm font-bold text-red-500">Close</div>
        </div>
      </div>
    </div>
  </div>
);

export const MomentumVsExhaustionVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Momentum vs Exhaustion —
    </div>
    <div className="flex p-8 justify-center gap-12 md:gap-32 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      {/* Momentum */}
      <div className="flex flex-col items-center">
        <div className="w-1 bg-text-primary h-40 relative flex justify-center">
          <div className="w-16 h-36 bg-brand absolute top-2 border-2 border-brand-muted rounded-sm shadow-sm"></div>
        </div>
        <div className="mt-6 font-bold text-text-primary text-lg">Momentum</div>
        <div className="text-sm text-text-secondary">Marubozu (Strong)</div>
      </div>
      {/* Exhaustion */}
      <div className="flex flex-col items-center">
        <div className="w-1 bg-text-primary h-40 relative flex justify-center">
          <div className="w-16 h-8 bg-red-500 absolute bottom-6 border-2 border-red-700 rounded-sm shadow-sm"></div>
        </div>
        <div className="mt-6 font-bold text-text-primary text-lg">Exhaustion</div>
        <div className="text-sm text-text-secondary">Pin Bar (Reversal)</div>
      </div>
    </div>
  </div>
);

export const MathRuinVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — The Mathematics of Ruin —
    </div>
    <div className="p-6 md:p-8 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="flex justify-between font-bold text-sm text-text-secondary opacity-60 border-b border-border pb-3 mb-4 px-4 uppercase tracking-wider">
        <span>Drawdown (Loss)</span>
        <span>Gain Needed to Recover</span>
      </div>
      <div className="flex justify-between items-center bg-surface p-4 rounded-xl shadow-sm mb-3 px-6 md:px-12 border border-border">
        <span className="text-red-500 font-bold text-lg">-10%</span>
        <span className="text-brand font-bold text-lg">+11%</span>
      </div>
      <div className="flex justify-between items-center bg-surface p-4 rounded-xl shadow-md mb-3 px-6 md:px-12 border-2 border-brand transform scale-105 z-10">
        <span className="text-red-500 font-black text-2xl">-50%</span>
        <span className="text-brand font-black text-2xl">+100%</span>
      </div>
      <div className="flex justify-between items-center bg-surface p-4 rounded-xl shadow-sm px-6 md:px-12 border border-border">
        <span className="text-red-500 font-black text-xl">-90%</span>
        <span className="text-brand font-black text-xl">+900%</span>
      </div>
    </div>
  </div>
);

export const PositionSizingVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Position Sizing Formula —
    </div>
    <div className="p-8 md:p-12 flex flex-col items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-xl md:text-2xl font-black text-text-primary">
        <div className="bg-brand/10 px-6 py-3 rounded-xl border-2 border-brand/20 shadow-sm text-brand">Lot Size</div>
        <span className="text-3xl opacity-20">=</span>
        <div className="flex flex-col items-center bg-surface p-6 rounded-xl shadow-sm border border-border">
          <div className="border-b-2 border-text-primary pb-3 px-4 text-center w-full">Account Balance × Risk %</div>
          <div className="pt-3 px-4 text-center w-full">Stop Loss (Pips) × Pip Value</div>
        </div>
      </div>
    </div>
  </div>
);

export const RiskRewardVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Risk to Reward (1:2) —
    </div>
    <div className="p-8 flex flex-col items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="w-full max-w-lg flex h-20 rounded-xl overflow-hidden shadow-md border border-border">
        <div className="w-1/3 bg-red-500 flex items-center justify-center text-white font-bold text-lg border-r-2 border-surface/20">
          1% Risk
        </div>
        <div className="w-2/3 bg-brand flex items-center justify-center text-white font-bold text-lg">
          2% Reward
        </div>
      </div>
      <div className="mt-8 text-center text-text-secondary font-medium bg-surface px-8 py-4 rounded-full shadow-sm border border-border text-lg">
        You only need a <span className="font-black text-text-primary text-xl mx-1">34% win rate</span> to be profitable.
      </div>
    </div>
  </div>
);

export const WhatIsForexVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — What is Forex? —
    </div>
    <div className="p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[250px] bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <Globe className="text-brand/10 absolute w-64 h-64" />
      <div className="flex gap-4 z-10 mb-6">
        <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-surface/20">$</div>
        <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-surface/20 mt-8">€</div>
        <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-surface/20">£</div>
        <div className="w-14 h-14 rounded-full bg-brand-muted text-white flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-surface/20 mt-8">¥</div>
      </div>
      <div className="z-10 bg-brand-muted/95 text-surface px-6 py-4 rounded-xl w-full max-w-md shadow-xl border border-surface/10">
        <div className="flex items-center gap-3 mb-2"><ChevronRight size={18} className="text-brand"/> <span className="font-medium">Global Currency Exchange</span></div>
        <div className="flex items-center gap-3"><ChevronRight size={18} className="text-brand"/> <span className="font-medium">Daily Volume: ~$6 Trillion</span></div>
      </div>
    </div>
  </div>
);

export const CurrencyPairsVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Currency Pairs —
    </div>
    <div className="p-8 flex flex-col items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="text-5xl md:text-6xl font-black text-text-primary mb-8 tracking-wider">
        EUR <span className="opacity-20 font-light mx-2">/</span> USD
      </div>
      <div className="flex w-full max-w-md justify-between text-center border-t-2 border-b-2 border-border py-6 mb-8 bg-surface/50">
        <div className="flex-1 border-r-2 border-border">
          <div className="text-text-secondary font-bold text-sm uppercase tracking-wider mb-1">Base Currency</div>
          <div className="text-3xl font-black text-text-primary">EUR</div>
        </div>
        <div className="flex-1">
          <div className="text-text-secondary font-bold text-sm uppercase tracking-wider mb-1">Quote Currency</div>
          <div className="text-3xl font-black text-text-primary">USD</div>
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm md:text-base text-text-secondary font-bold bg-surface px-6 py-3 rounded-full shadow-sm border border-border">
        <Building2 size={20} className="text-brand" /> Banks • Institutions • Retail Traders
      </div>
    </div>
  </div>
);

export const PipsLotsLeverageVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Pips, Lots & Leverage —
    </div>
    <div className="flex flex-col md:flex-row p-6 gap-6 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      {/* Pips */}
      <div className="flex-1 bg-surface rounded-xl p-6 shadow-sm border border-border flex flex-col items-center justify-center text-center">
        <div className="text-text-primary font-bold text-lg mb-6 border-b border-border pb-3 w-full uppercase tracking-wider">Understanding Pips</div>
        <div className="text-4xl font-black text-text-primary mb-4">1 Pip</div>
        <div className="text-2xl font-mono text-text-secondary flex items-center gap-3 bg-surface-alt px-4 py-2 rounded-lg border border-border">
          1.100<span className="text-brand font-bold">0</span> <ArrowRight size={24} className="opacity-20" /> 1.100<span className="text-brand font-bold">1</span>
        </div>
        <div className="text-base font-bold text-brand mt-4 bg-brand/10 px-4 py-1 rounded-full">+1 Pip</div>
      </div>
      
      {/* Lots & Leverage */}
      <div className="flex-1 bg-surface rounded-xl p-6 shadow-sm border border-border flex flex-col items-center justify-center text-center">
        <div className="text-text-primary font-bold text-lg mb-6 border-b border-border pb-3 w-full uppercase tracking-wider">Lot Sizes & Leverage</div>
        <div className="flex justify-between w-full gap-2 items-center">
          <div className="flex-1 flex flex-col items-center">
            <div className="text-2xl font-black text-text-primary">1.00</div>
            <div className="text-xs font-bold text-text-secondary uppercase mt-1">Standard Lot</div>
            <div className="text-[10px] text-text-secondary opacity-60 font-mono mt-1">100,000 Units</div>
            <div className="mt-3 text-brand bg-brand/10 p-2 rounded-full"><Coins size={24}/></div>
          </div>
          <div className="w-px h-24 bg-border"></div>
          <div className="flex-1 flex flex-col items-center">
            <div className="text-xs font-bold text-text-secondary uppercase mb-1">Leverage</div>
            <div className="text-2xl font-black text-red-500">1:100</div>
            <div className="mt-3 text-text-secondary bg-surface-alt p-2 rounded-full"><Scale size={24}/></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MarketDriversSessionsVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Market Drivers & Sessions —
    </div>
    <div className="flex flex-col md:flex-row p-6 gap-6 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      {/* Drivers */}
      <div className="flex-1 flex flex-col justify-center gap-4 border-b md:border-b-0 md:border-r border-border pb-6 md:pb-0 md:pr-6">
        <div className="text-text-primary font-bold text-center mb-2 uppercase tracking-wider text-sm">What Moves the Market?</div>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl shadow-sm border border-border transition-transform hover:scale-105">
          <div className="bg-brand/10 p-2 rounded-lg"><TrendingUp className="text-brand" size={24} /></div>
          <span className="font-bold text-text-primary">Supply & Demand</span>
        </div>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl shadow-sm border border-border transition-transform hover:scale-105">
          <div className="bg-brand/10 p-2 rounded-lg"><BookOpen className="text-brand" size={24} /></div>
          <span className="font-bold text-text-primary">Economic News</span>
        </div>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl shadow-sm border border-border transition-transform hover:scale-105">
          <div className="bg-indigo-500/10 p-2 rounded-lg"><Globe className="text-indigo-500" size={24} /></div>
          <span className="font-bold text-text-primary">Geopolitics</span>
        </div>
      </div>
      
      {/* Sessions */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-text-primary font-bold text-center mb-6 uppercase tracking-wider text-sm">Market Sessions</div>
        <div className="flex justify-between items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="bg-surface p-3 rounded-full shadow-sm border border-border mb-3">
              <Clock4 size={32} className="text-text-primary" />
            </div>
            <span className="text-sm font-bold text-text-primary">Asian</span>
            <span className="text-xs text-red-600 font-bold mt-1">Tokyo</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-surface p-3 rounded-full shadow-sm border border-border mb-3">
              <Clock4 size={32} className="text-text-primary" />
            </div>
            <span className="text-sm font-bold text-text-primary">London</span>
            <span className="text-xs text-brand font-bold mt-1">London</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-surface p-3 rounded-full shadow-sm border border-border mb-3">
              <Clock4 size={32} className="text-text-primary" />
            </div>
            <span className="text-sm font-bold text-text-primary">New York</span>
            <span className="text-xs text-red-600 font-bold mt-1">New York</span>
          </div>
        </div>
        <div className="mt-8 bg-surface border-2 border-border text-center py-3 rounded-full text-sm font-black tracking-widest uppercase text-text-primary shadow-sm">
          24 Hour Market
        </div>
      </div>
    </div>
  </div>
);

// --- PLATFORM MASTERY VISUALS ---

export const TradingViewInterfaceVisual = () => (
  <div className="w-full flex flex-col font-sans my-4 shadow-xl">
    <div className="bg-brand-muted text-surface text-center py-2 font-bold text-sm tracking-wide border-b border-border flex items-center justify-between px-4 rounded-t-2xl">
      <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-brand"></div></div>
      <span>TradingView Workspace</span>
      <Monitor size={16} />
    </div>
    <div className="flex h-48 bg-[#131722] border-x border-b border-border rounded-b-2xl overflow-hidden">
      <div className="w-12 border-r border-gray-800 flex flex-col items-center py-4 gap-4 text-gray-500">
        <div className="w-6 h-6 rounded bg-blue-600/20 text-blue-500 flex items-center justify-center">+</div>
        <div className="w-6 h-px bg-gray-700"></div>
        <div className="w-6 h-px bg-gray-700 transform rotate-45"></div>
      </div>
      <div className="flex-1 p-4 relative">
        <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
          <path d="M 0 100 L 50 80 L 100 120 L 150 60 L 200 90 L 250 40 L 300 70 L 350 20 L 400 50" fill="none" stroke="#2962ff" strokeWidth="2" />
          <rect x="140" y="50" width="20" height="40" fill="#089981" />
          <rect x="190" y="80" width="20" height="30" fill="#f23645" />
          <rect x="240" y="30" width="20" height="50" fill="#089981" />
        </svg>
      </div>
      <div className="w-32 border-l border-gray-800 p-2 flex flex-col gap-2">
        <div className="text-xs text-gray-500 font-bold mb-1">Object Tree</div>
        <div className="bg-[#1e222d] p-1 rounded text-[10px] text-gray-300 flex justify-between"><span>Trendline</span><span className="text-blue-500">👁</span></div>
        <div className="bg-[#1e222d] p-1 rounded text-[10px] text-gray-300 flex justify-between"><span>Fib Retracement</span><span className="text-blue-500">👁</span></div>
        <div className="bg-[#1e222d] p-1 rounded text-[10px] text-gray-300 flex justify-between"><span>RSI (14)</span><span className="text-gray-600">👁</span></div>
      </div>
    </div>
  </div>
);

export const WatchlistVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Advanced Watchlist —
    </div>
    <div className="p-6 flex justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="w-full max-w-sm bg-surface rounded-xl shadow-md border border-border overflow-hidden">
        <div className="bg-surface-alt px-4 py-2 border-b border-border flex justify-between items-center text-xs font-bold text-text-secondary opacity-60 uppercase">
          <span>Symbol</span>
          <span>Last</span>
        </div>
        <div className="px-4 py-1 bg-brand/10 text-brand text-xs font-bold">MAJORS</div>
        <div className="px-4 py-3 border-b border-border/50 flex justify-between items-center">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="font-bold text-text-primary">EURUSD</span></div>
          <span className="text-brand font-mono">1.1050</span>
        </div>
        <div className="px-4 py-3 border-b border-border/50 flex justify-between items-center">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-transparent"></div><span className="font-bold text-text-primary">GBPUSD</span></div>
          <span className="text-red-500 font-mono">1.2540</span>
        </div>
        <div className="px-4 py-1 bg-indigo-500/10 text-indigo-500 text-xs font-bold">INDICES</div>
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div><span className="font-bold text-text-primary">US30</span></div>
          <span className="text-brand font-mono">38,500</span>
        </div>
      </div>
    </div>
  </div>
);

export const AlertsVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Conditional Alerts —
    </div>
    <div className="p-8 flex flex-col items-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="relative mb-6">
        <Bell size={64} className="text-brand animate-pulse" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">1</div>
      </div>
      <div className="bg-surface p-6 rounded-xl shadow-md border border-border w-full max-w-md">
        <div className="text-sm font-bold text-text-secondary opacity-60 uppercase mb-4 border-b border-border pb-2">Alert Condition</div>
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-brand/10 text-brand px-2 py-1 rounded font-mono text-sm font-bold">EURUSD</span>
          <span className="text-text-secondary">Crossing Up</span>
          <span className="bg-surface-alt text-text-primary px-2 py-1 rounded font-mono text-sm font-bold">1.1000</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-text-secondary opacity-40 font-bold">AND</span>
          <span className="bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded font-mono text-sm font-bold">RSI (14)</span>
          <span className="text-text-secondary">Greater Than</span>
          <span className="bg-surface-alt text-text-primary px-2 py-1 rounded font-mono text-sm font-bold">70</span>
        </div>
        <button className="w-full bg-brand-muted text-surface font-bold py-2 rounded-lg shadow-sm">Create Alert</button>
      </div>
    </div>
  </div>
);

export const PineScriptVisual = () => (
  <div className="w-full bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-800 flex flex-col font-mono my-8 shadow-xl">
    <div className="bg-[#2d2d2d] text-gray-400 text-left py-2 px-4 font-bold text-xs flex items-center gap-2">
      <Code size={14} /> <span>strategy.pine</span>
    </div>
    <div className="p-6 text-sm overflow-x-auto">
      <div className="text-blue-400">//@version=5</div>
      <div className="text-purple-400">indicator<span className="text-gray-300">("Simple EMA Cross", </span><span className="text-orange-300">overlay</span><span className="text-gray-300">=</span><span className="text-blue-400">true</span><span className="text-gray-300">)</span></div>
      <br/>
      <div className="text-gray-300">fastEMA = <span className="text-blue-300">ta.ema</span>(close, <span className="text-green-400">9</span>)</div>
      <div className="text-gray-300">slowEMA = <span className="text-blue-300">ta.ema</span>(close, <span className="text-green-400">21</span>)</div>
      <br/>
      <div className="text-gray-300">plot(fastEMA, <span className="text-orange-300">color</span>=<span className="text-blue-300">color.blue</span>)</div>
      <div className="text-gray-300">plot(slowEMA, <span className="text-orange-300">color</span>=<span className="text-blue-300">color.red</span>)</div>
    </div>
  </div>
);

export const MT4TerminalVisual = () => (
  <div className="w-full flex flex-col font-sans my-4 shadow-md">
    <div className="bg-brand-muted text-surface text-left py-1 px-3 font-bold text-xs border-b border-border flex items-center justify-between rounded-t-2xl">
      <span>MetaTrader 4</span>
      <div className="flex gap-1"><div className="w-2 h-2 bg-surface/20"></div><div className="w-2 h-2 bg-surface/20"></div><div className="w-2 h-2 bg-red-400"></div></div>
    </div>
    <div className="flex h-48 bg-surface-alt border-x border-b border-border rounded-b-2xl overflow-hidden">
      <div className="w-1/3 border-r border-border bg-surface flex flex-col">
        <div className="bg-surface-alt text-xs font-bold p-1 border-b border-navy/10">Navigator</div>
        <div className="p-2 text-xs text-navy/70">
          <div className="flex items-center gap-1 mb-1"><FolderOpen size={12} className="text-gold"/> Accounts</div>
          <div className="flex items-center gap-1 mb-1 ml-2"><FolderOpen size={12} className="text-gold"/> Indicators</div>
          <div className="flex items-center gap-1 ml-2"><FolderOpen size={12} className="text-gold"/> Expert Advisors</div>
        </div>
      </div>
      <div className="w-2/3 bg-black relative p-2">
        <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M 0 80 L 40 60 L 80 90 L 120 40 L 160 50 L 200 20" fill="none" stroke="#00ff00" strokeWidth="1" />
        </svg>
      </div>
    </div>
    <div className="h-16 bg-surface border-t border-navy/10 flex flex-col">
      <div className="bg-surface-alt text-xs font-bold p-1 border-b border-navy/10">Terminal</div>
      <div className="p-1 text-[10px] flex justify-between text-navy/40 font-mono">
        <span>Order</span><span>Time</span><span>Type</span><span>Size</span><span>Symbol</span><span>Price</span><span>S/L</span><span>T/P</span><span>Profit</span>
      </div>
      <div className="p-1 text-[10px] flex justify-between text-navy font-mono bg-gold/5">
        <span>12345</span><span>10:00</span><span className="text-gold">buy</span><span>1.00</span><span>EURUSD</span><span>1.1000</span><span>1.0950</span><span>1.1100</span><span className="text-green-500">50.00</span>
      </div>
    </div>
  </div>
);

export const EAInstallationVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — EA Installation Path —
    </div>
    <div className="p-8 flex flex-col items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="flex items-center gap-4">
        <div className="bg-surface p-4 rounded-xl shadow-sm border border-border flex flex-col items-center">
          <div className="bg-brand/10 p-3 rounded-lg mb-2"><Code size={24} className="text-brand" /></div>
          <span className="text-xs font-bold text-text-secondary">MyBot.ex4</span>
        </div>
        <ArrowRight size={24} className="opacity-20" />
        <div className="bg-surface p-4 rounded-xl shadow-sm border border-border flex flex-col items-start">
          <div className="flex items-center gap-2 text-sm font-bold text-text-primary mb-2"><FolderOpen size={16} className="text-brand"/> MQL4</div>
          <div className="flex items-center gap-2 text-sm font-bold text-text-primary ml-4"><FolderOpen size={16} className="text-brand"/> Experts</div>
          <div className="flex items-center gap-2 text-xs text-text-secondary opacity-60 ml-8 mt-1"><Code size={12} className="text-brand/60"/> MyBot.ex4</div>
        </div>
      </div>
      <div className="mt-6 bg-brand/10 border border-brand/20 text-brand text-xs px-4 py-2 rounded-lg flex items-center gap-2">
        <ShieldCheck size={16} /> Don't forget to enable "Allow automated trading"
      </div>
    </div>
  </div>
);

export const OneClickTradingVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — One-Click Trading —
    </div>
    <div className="p-8 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="bg-surface rounded-lg shadow-lg border border-border overflow-hidden w-64">
        <div className="bg-surface-alt text-center py-1 text-xs font-bold text-text-secondary border-b border-border flex justify-between px-2">
          <span>▼</span><span>EURUSD</span><span>▼</span>
        </div>
        <div className="flex justify-center py-2 bg-surface border-b border-border">
          <div className="flex items-center gap-2 bg-surface-alt px-3 py-1 rounded">
            <span className="text-xs text-text-secondary">Vol:</span>
            <span className="font-mono font-bold text-text-primary">1.00</span>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1 bg-red-500/10 hover:bg-red-500/20 cursor-pointer p-3 flex flex-col items-center justify-center border-r border-surface transition-colors">
            <span className="text-xs font-bold text-red-600 mb-1">SELL</span>
            <span className="text-xl font-black text-red-700 font-mono">1.10<span className="text-3xl">00</span><sup className="text-sm">5</sup></span>
          </div>
          <div className="flex-1 bg-brand/10 hover:bg-brand/20 cursor-pointer p-3 flex flex-col items-center justify-center transition-colors">
            <span className="text-xs font-bold text-brand mb-1">BUY</span>
            <span className="text-xl font-black text-brand font-mono">1.10<span className="text-3xl">01</span><sup className="text-sm">2</sup></span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const StrategyTesterVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Strategy Tester Report —
    </div>
    <div className="p-6 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="bg-surface rounded-xl shadow-sm border border-border p-4 mb-4">
        <div className="flex justify-between text-sm mb-2 border-b border-border pb-2">
          <span className="text-text-secondary">Symbol: <span className="font-bold text-text-primary">EURUSD (H1)</span></span>
          <span className="text-text-secondary">Model: <span className="font-bold text-brand">Every tick (99.9%)</span></span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-secondary">Total Net Profit: <span className="font-bold text-brand">$4,520.00</span></span>
          <span className="text-text-secondary">Max Drawdown: <span className="font-bold text-red-500">12.4%</span></span>
        </div>
      </div>
      <div className="h-32 bg-surface rounded-xl shadow-sm border border-border p-4 relative">
        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M 0 90 L 50 80 L 100 85 L 150 60 L 200 70 L 250 40 L 300 50 L 350 20 L 400 10" fill="none" stroke="currentColor" className="text-brand" strokeWidth="3" strokeLinejoin="round" />
          <path d="M 0 90 L 50 80 L 100 85 L 150 60 L 200 70 L 250 40 L 300 50 L 350 20 L 400 10 L 400 100 L 0 100 Z" fill="currentColor" className="text-brand" fillOpacity="0.1" />
        </svg>
      </div>
    </div>
  </div>
);

export const OrderTypesVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Pending Orders Explained —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="absolute w-full h-px bg-border top-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-brand-muted text-surface text-xs px-2 py-1 rounded z-10">Current Price</div>
      
      {/* Sell Limit */}
      <div className="absolute top-8 left-1/4 flex flex-col items-center">
        <div className="bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-bold px-2 py-1 rounded mb-1">Sell Limit</div>
        <ArrowDownCircle size={20} className="text-red-500" />
        <div className="h-12 w-px bg-red-500/30 border-l border-dashed"></div>
      </div>
      
      {/* Buy Stop */}
      <div className="absolute top-8 right-1/3 flex flex-col items-center">
        <div className="bg-brand/10 border border-brand/30 text-brand text-xs font-bold px-2 py-1 rounded mb-1">Buy Stop</div>
        <ArrowUpCircle size={20} className="text-brand" />
        <div className="h-12 w-px bg-brand/30 border-l border-dashed"></div>
      </div>
 
      {/* Buy Limit */}
      <div className="absolute bottom-8 left-1/3 flex flex-col items-center">
        <div className="h-12 w-px bg-brand/30 border-l border-dashed"></div>
        <ArrowUpCircle size={20} className="text-brand" />
        <div className="bg-brand/10 border border-brand/30 text-brand text-xs font-bold px-2 py-1 rounded mt-1">Buy Limit</div>
      </div>
 
      {/* Sell Stop */}
      <div className="absolute bottom-8 right-1/4 flex flex-col items-center">
        <div className="h-12 w-px bg-red-500/30 border-l border-dashed"></div>
        <ArrowDownCircle size={20} className="text-red-500" />
        <div className="bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-bold px-2 py-1 rounded mt-1">Sell Stop</div>
      </div>
    </div>
  </div>
);

export const TrailingStopVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Trailing Stop Logic —
    </div>
    <div className="p-8 relative h-64 bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        {/* Price */}
        <path d="M 20 160 L 100 120 L 150 140 L 250 60 L 300 80 L 380 20" fill="none" stroke="currentColor" className="text-brand" strokeWidth="3" strokeLinejoin="round" />
        {/* Trailing Stop */}
        <path d="M 20 190 L 100 150 L 150 150 L 250 90 L 300 90 L 380 50" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" strokeLinejoin="round" />
        
        <circle cx="20" cy="160" r="4" fill="currentColor" className="text-brand" />
        <text x="10" y="150" className="text-[10px] fill-brand font-bold">Buy</text>
        
        <circle cx="20" cy="190" r="4" fill="#ef4444" />
        <text x="10" y="205" className="text-[10px] fill-red-500 font-bold">Initial SL</text>
        
        <circle cx="380" cy="50" r="4" fill="#ef4444" />
        <text x="340" y="45" className="text-[10px] fill-red-500 font-bold">Current SL</text>
      </svg>
      <div className="absolute bottom-4 right-4 bg-surface px-3 py-2 rounded-lg shadow-sm border border-border text-xs text-text-secondary">
        SL moves up as price moves up, locking in profit.
      </div>
    </div>
  </div>
);

export const PartialCloseVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Scaling Out (Partial Close) —
    </div>
    <div className="p-8 flex flex-col items-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="bg-surface p-4 rounded-xl shadow-sm border border-brand/20 w-full max-w-sm mb-6 flex justify-between items-center">
        <div>
          <div className="text-xs text-text-secondary font-bold uppercase">Initial Position</div>
          <div className="text-xl font-black text-text-primary">1.00 Lot BUY</div>
        </div>
        <div className="text-brand font-bold">+$500</div>
      </div>
      
      <Scissors size={24} className="text-text-secondary opacity-20 mb-6 transform -rotate-90" />
      
      <div className="flex gap-4 w-full max-w-md">
        <div className="flex-1 bg-surface p-4 rounded-xl shadow-inner border border-border flex flex-col items-center">
          <div className="text-xs text-text-secondary font-bold uppercase mb-1">Closed (Banked)</div>
          <div className="text-lg font-black text-text-primary opacity-70">0.50 Lot</div>
          <div className="text-brand font-bold mt-2">+$250 Secured</div>
        </div>
        <div className="flex-1 bg-brand/5 p-4 rounded-xl shadow-sm border border-brand/20 flex flex-col items-center">
          <div className="text-xs text-brand font-bold uppercase mb-1">Running</div>
          <div className="text-lg font-black text-brand">0.50 Lot</div>
          <div className="text-brand font-bold mt-2">SL moved to BE</div>
        </div>
      </div>
    </div>
  </div>
);

export const FibonacciVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Fibonacci Retracement —
    </div>
    <div className="p-8 relative h-64">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        {/* Fib Levels */}
        <line x1="50" y1="20" x2="350" y2="20" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
        <text x="360" y="24" className="text-[10px] fill-red-500 font-mono">0.000</text>
        
        <line x1="50" y1="60" x2="350" y2="60" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4,4" />
        <text x="360" y="64" className="text-[10px] fill-current text-navy/40 font-mono">0.236</text>
        
        <line x1="50" y1="85" x2="350" y2="85" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,4" />
        <text x="360" y="89" className="text-[10px] fill-blue-500 font-mono">0.382</text>
        
        <line x1="50" y1="100" x2="350" y2="100" stroke="#10b981" strokeWidth="2" />
        <text x="360" y="104" className="text-[10px] fill-green-500 font-bold font-mono">0.500</text>
        
        <line x1="50" y1="120" x2="350" y2="120" stroke="#eab308" strokeWidth="2" />
        <text x="360" y="124" className="text-[10px] fill-yellow-500 font-bold font-mono">0.618</text>
        
        <line x1="50" y1="180" x2="350" y2="180" stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
        <text x="360" y="184" className="text-[10px] fill-red-500 font-mono">1.000</text>

        {/* Price Action */}
        <path d="M 50 180 L 150 20 L 250 120 L 300 40" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Golden Zone Highlight */}
        <rect x="50" y="100" width="300" height="20" fill="#eab308" fillOpacity="0.1" />
      </svg>
    </div>
  </div>
);

export const BarReplayVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Bar Replay (Backtesting) —
    </div>
    <div className="p-8 flex flex-col items-center">
      <div className="w-full h-32 bg-surface rounded-t-xl border border-navy/10 relative overflow-hidden">
        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M 0 80 L 50 60 L 100 70 L 150 30 L 200 50" fill="none" stroke="#22c55e" strokeWidth="3" />
        </svg>
        <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-surface-alt/80 backdrop-blur-sm border-l-2 border-gold border-dashed flex items-center justify-center">
          <span className="text-navy/30 font-bold text-sm">Future Data Hidden</span>
        </div>
      </div>
      <div className="w-full bg-navy rounded-b-xl p-3 flex justify-center gap-4 text-cream">
        <button className="p-2 hover:bg-cream/10 rounded"><ArrowRight size={20} className="transform rotate-180" /></button>
        <button className="p-2 bg-gold text-navy hover:opacity-80 rounded"><PlaySquare size={20} /></button>
        <button className="p-2 hover:bg-cream/10 rounded"><ArrowRight size={20} /></button>
        <div className="w-px h-6 bg-cream/20 mx-2 self-center"></div>
        <div className="flex items-center text-xs font-mono">Speed: 1x</div>
      </div>
    </div>
  </div>
);

export const MultiTimeframeVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Multi-Timeframe Analysis —
    </div>
    <div className="p-4 grid grid-cols-2 gap-2 h-64">
      <div className="bg-surface border border-navy/10 rounded-lg p-2 relative">
        <div className="absolute top-2 left-2 text-[10px] font-bold bg-surface-alt px-1 rounded text-navy/60">Daily (Trend)</div>
        <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M 10 80 L 50 20 L 90 40" fill="none" stroke="#22c55e" strokeWidth="2" /></svg>
      </div>
      <div className="bg-surface border border-navy/10 rounded-lg p-2 relative">
        <div className="absolute top-2 left-2 text-[10px] font-bold bg-surface-alt px-1 rounded text-navy/60">H4 (Structure)</div>
        <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M 10 60 L 30 20 L 50 40 L 70 10 L 90 30" fill="none" stroke="#22c55e" strokeWidth="2" /></svg>
      </div>
      <div className="bg-surface border border-navy/10 rounded-lg p-2 relative">
        <div className="absolute top-2 left-2 text-[10px] font-bold bg-surface-alt px-1 rounded text-navy/60">H1 (Setup)</div>
        <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M 10 40 L 20 20 L 30 30 L 40 10 L 50 20 L 60 5 L 70 15 L 80 10 L 90 20" fill="none" stroke="#22c55e" strokeWidth="2" /></svg>
      </div>
      <div className="bg-surface border-2 border-gold rounded-lg p-2 relative shadow-inner">
        <div className="absolute top-2 left-2 text-[10px] font-bold bg-gold/10 text-gold px-1 rounded">M15 (Entry)</div>
        <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M 10 30 L 15 20 L 20 25 L 25 10 L 30 15 L 35 5 L 40 10 L 45 5 L 50 15 L 55 10 L 60 20 L 65 15 L 70 25 L 75 20 L 80 30" fill="none" stroke="#8b5cf6" strokeWidth="2" /></svg>
      </div>
    </div>
  </div>
);

export const LatencyVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Execution Latency —
    </div>
    <div className="p-8 flex flex-col items-center">
      <div className="flex w-full max-w-md items-center justify-between mb-8">
        <Monitor size={32} className="text-navy/40" />
        <div className="flex-1 px-4 relative">
          <div className="h-1 w-full bg-navy/10 rounded"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded-full border border-green-500/20">5ms Ping</div>
        </div>
        <Server size={32} className="text-gold" />
      </div>
      <div className="bg-surface p-4 rounded-xl shadow-sm border border-navy/10 w-full max-w-md">
        <div className="text-sm font-bold text-navy/80 mb-2">Why it matters during news:</div>
        <div className="flex justify-between text-xs mb-1 text-navy/60"><span>You click Buy at:</span><span className="font-mono">1.10000</span></div>
        <div className="flex justify-between text-xs text-red-500 mb-1"><span>High Latency (200ms) fills at:</span><span className="font-mono">1.10020 (Slippage)</span></div>
        <div className="flex justify-between text-xs text-green-500 font-bold"><span>Low Latency (5ms) fills at:</span><span className="font-mono">1.10001 (Perfect)</span></div>
      </div>
    </div>
  </div>
);

export const MobileTradingVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Mobile Trading —
    </div>
    <div className="p-8 flex justify-center">
      <div className="w-48 h-80 bg-navy rounded-[2rem] border-4 border-navy/20 p-2 relative shadow-2xl">
        <div className="w-16 h-4 bg-navy absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl"></div>
        <div className="w-full h-full bg-surface rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-gold text-navy text-[10px] p-2 flex justify-between font-bold"><span>EURUSD</span><span>1.1050</span></div>
          <div className="flex-1 p-2">
            <svg viewBox="0 0 100 100" className="w-full h-full"><path d="M 0 80 L 20 60 L 40 70 L 60 30 L 80 50 L 100 20" fill="none" stroke="#22c55e" strokeWidth="2" /></svg>
          </div>
          <div className="flex gap-1 p-2">
            <div className="flex-1 bg-red-500 text-white text-[10px] text-center py-2 rounded font-bold">SELL</div>
            <div className="flex-1 bg-green-500 text-white text-[10px] text-center py-2 rounded font-bold">BUY</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const VPSVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — VPS Architecture —
    </div>
    <div className="p-8 flex items-center justify-center gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <Monitor size={40} className="text-navy/40 mb-2" />
        <span className="text-xs font-bold text-navy/70">Your PC</span>
        <span className="text-[10px] text-red-500">(Can be turned off)</span>
      </div>
      <div className="flex-1 h-px bg-navy/10 border-t border-dashed relative">
        <ArrowRight size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-navy/20" />
      </div>
      <div className="flex flex-col items-center bg-gold/10 p-4 rounded-xl border-2 border-gold/30 shadow-md z-10">
        <Server size={48} className="text-gold mb-2" />
        <span className="text-sm font-bold text-gold">VPS</span>
        <span className="text-[10px] text-gold font-bold bg-surface px-2 py-1 rounded mt-1">24/7 Uptime</span>
      </div>
      <div className="flex-1 h-px bg-gold/30 border-t-2 relative">
        <Zap size={16} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gold fill-gold" />
      </div>
      <div className="flex flex-col items-center">
        <Building2 size={40} className="text-navy/60 mb-2" />
        <span className="text-xs font-bold text-navy/70">Broker Server</span>
        <span className="text-[10px] text-green-500">&lt; 1ms Latency</span>
      </div>
    </div>
  </div>
);

export const TwoFAVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-[#3b82f6]">
      — Account Security (2FA) —
    </div>
    <div className="p-8 flex items-center justify-center gap-8">
      <div className="bg-white p-6 rounded-full shadow-lg border-4 border-green-100">
        <ShieldCheck size={64} className="text-green-500" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 font-bold">1</div>
          <span className="text-sm font-bold text-gray-700">Password</span>
        </div>
        <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 flex items-center gap-3">
          <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 font-bold">2</div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-gray-700">Authenticator App</span>
            <span className="text-xl font-mono font-black tracking-widest text-[#1e3a5f]">842 915</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const FOMOVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-red-500">
      — F.O.M.O. (Fear Of Missing Out) —
    </div>
    <div className="p-8 flex flex-col items-center justify-center relative">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto drop-shadow-sm">
        <path d="M 50 150 L 150 130 L 250 100 L 300 40 L 320 20" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="320" cy="20" r="8" fill="#ef4444" />
        <text x="300" y="50" fontSize="14" fill="#ef4444" fontWeight="bold">BUY HERE</text>
        <path d="M 320 20 L 360 120" fill="none" stroke="#ef4444" strokeWidth="6" strokeDasharray="8 8" strokeLinecap="round" strokeLinejoin="round" />
        
        <path d="M 160 60 Q 200 20 240 60 Q 260 100 200 100 Q 160 100 160 60" fill="white" stroke="#1e3a5f" strokeWidth="2" />
        <text x="175" y="65" fontSize="12" fill="#1e3a5f" fontWeight="bold">"I'm missing out!"</text>
      </svg>
    </div>
  </div>
);

export const RevengeTradingVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-orange-500">
      — The Revenge Trading Cycle —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <circle cx="200" cy="100" r="70" fill="none" stroke="#1e3a5f" strokeWidth="4" strokeDasharray="8 8" />
        
        <rect x="160" y="10" width="80" height="40" rx="8" fill="#ef4444" opacity="0.2" />
        <text x="200" y="35" fontSize="16" fill="#ef4444" fontWeight="bold" textAnchor="middle">LOSS</text>
        
        <rect x="290" y="80" width="90" height="40" rx="8" fill="#f59e0b" opacity="0.2" />
        <text x="335" y="105" fontSize="16" fill="#f59e0b" fontWeight="bold" textAnchor="middle">ANGER</text>
        
        <rect x="150" y="150" width="100" height="40" rx="8" fill="#3b82f6" opacity="0.2" />
        <text x="200" y="175" fontSize="14" fill="#3b82f6" fontWeight="bold" textAnchor="middle">OVERLEVERAGE</text>
        
        <rect x="10" y="80" width="100" height="40" rx="8" fill="#ef4444" opacity="0.4" />
        <text x="60" y="105" fontSize="14" fill="#ef4444" fontWeight="bold" textAnchor="middle">BIGGER LOSS</text>
        
        <path d="M 240 30 Q 290 30 310 80" fill="none" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#arrow-revenge)" />
        <path d="M 310 120 Q 290 170 250 170" fill="none" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#arrow-revenge)" />
        <path d="M 150 170 Q 60 170 60 120" fill="none" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#arrow-revenge)" />
        <path d="M 60 80 Q 60 30 160 30" fill="none" stroke="#1e3a5f" strokeWidth="3" markerEnd="url(#arrow-revenge)" />
        
        <defs>
          <marker id="arrow-revenge" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e3a5f" />
          </marker>
        </defs>
      </svg>
    </div>
  </div>
);

export const EuphoriaVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-green-500">
      — Euphoria & Overconfidence —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <path d="M 20 160 L 80 140 L 140 120 L 200 100" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 200 100 L 240 20" fill="none" stroke="#22c55e" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="260" y="40" fontSize="16" fill="#22c55e" fontWeight="bold">"I'm a genius!"</text>
        <path d="M 240 20 L 300 180" fill="none" stroke="#ef4444" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <text x="310" y="170" fontSize="16" fill="#ef4444" fontWeight="bold">Account Blown</text>
        <line x1="20" y1="180" x2="380" y2="180" stroke="currentColor" className="text-navy" strokeWidth="2" opacity="0.2" />
      </svg>
    </div>
  </div>
);

export const ConfirmationBiasVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Confirmation Bias —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <path d="M 20 40 L 100 80 L 180 60 L 260 140 L 340 120 L 380 180" fill="none" stroke="#ef4444" strokeWidth="4" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        
        <circle cx="300" cy="130" r="50" fill="currentColor" className="text-gold/10" stroke="currentColor" strokeWidth="4" />
        <line x1="266" y1="164" x2="230" y2="200" stroke="currentColor" className="text-gold" strokeWidth="8" strokeLinecap="round" />
        
        <path d="M 260 140 L 340 120" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        
        <text x="40" y="40" fontSize="16" fill="currentColor" className="text-navy/60" fontWeight="bold">Macro Trend: Bearish</text>
        <text x="220" y="80" fontSize="16" fill="currentColor" className="text-gold" fontWeight="bold">Trader sees: "BULL MARKET!"</text>
      </svg>
    </div>
  </div>
);

export const GamblersFallacyVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-red-500">
      — The Gambler's Fallacy —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <rect x="40" y="80" width="30" height="40" rx="4" fill="#ef4444" />
        <rect x="90" y="80" width="30" height="40" rx="4" fill="#ef4444" />
        <rect x="140" y="80" width="30" height="40" rx="4" fill="#ef4444" />
        <rect x="190" y="80" width="30" height="40" rx="4" fill="#ef4444" />
        
        <text x="130" y="60" fontSize="16" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">4 Losses in a row</text>
        
        <path d="M 240 100 L 280 100" fill="none" stroke="#1e3a5f" strokeWidth="4" markerEnd="url(#arrow-revenge)" />
        
        <rect x="300" y="40" width="60" height="120" rx="4" fill="none" stroke="#22c55e" strokeWidth="4" strokeDasharray="8 8" />
        <text x="330" y="106" fontSize="20" fill="#22c55e" fontWeight="bold" textAnchor="middle">WIN?</text>
        
        <text x="330" y="180" fontSize="12" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">"It has to go up now!"</text>
        <text x="330" y="196" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="middle">(False: Probability is still 50/50)</text>
      </svg>
    </div>
  </div>
);

export const SunkCostVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-red-500">
      — Sunk Cost Fallacy —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <line x1="20" y1="60" x2="380" y2="60" stroke="#1e3a5f" strokeWidth="2" strokeDasharray="4 4" />
        <text x="20" y="50" fontSize="16" fill="#1e3a5f" fontWeight="bold">Entry Price</text>
        
        <path d="M 40 60 L 120 100 L 200 140 L 280 180" fill="none" stroke="#ef4444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        
        <line x1="80" y1="80" x2="160" y2="80" stroke="#f59e0b" strokeWidth="4" opacity="0.3" />
        <text x="170" y="86" fontSize="12" fill="#f59e0b" opacity="0.5" fontWeight="bold">Original SL</text>
        
        <line x1="160" y1="120" x2="240" y2="120" stroke="#f59e0b" strokeWidth="4" opacity="0.6" />
        <text x="250" y="126" fontSize="12" fill="#f59e0b" opacity="0.7" fontWeight="bold">Moved SL</text>
        
        <line x1="240" y1="170" x2="320" y2="170" stroke="#ef4444" strokeWidth="4" />
        <text x="330" y="176" fontSize="12" fill="#ef4444" fontWeight="bold">Moved SL Again</text>
        
        <text x="200" y="30" fontSize="16" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">"I can't close it now, I'm down too much!"</text>
      </svg>
    </div>
  </div>
);

export const CasinoParadigmVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-blue-500">
      — The Casino Paradigm —
    </div>
    <div className="p-8 flex items-center justify-center gap-12">
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        <circle cx="100" cy="100" r="80" fill="#ef4444" />
        <path d="M 100 100 L 100 20 A 80 80 0 1 1 24.5 126.1 Z" fill="#22c55e" />
        <text x="100" y="90" fontSize="24" fill="white" fontWeight="bold" textAnchor="middle">55%</text>
        <text x="100" y="115" fontSize="16" fill="white" textAnchor="middle">Edge</text>
      </svg>
      <svg viewBox="0 0 200 200" className="w-48 h-48">
        <path d="M 20 160 L 40 150 L 60 170 L 80 130 L 100 140 L 120 100 L 140 120 L 160 60 L 180 80 L 190 40" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="100" y="190" fontSize="14" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">1000 Trades (Law of Large Numbers)</text>
      </svg>
    </div>
  </div>
);

export const ProbabilityDistributionVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-blue-500">
      — Probability Distribution —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <g transform="translate(20, 40)">
          <rect x="0" y="0" width="30" height="30" fill="#22c55e" rx="4" /> <text x="15" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">W</text>
          <rect x="36" y="0" width="30" height="30" fill="#ef4444" rx="4" /> <text x="51" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          <rect x="72" y="0" width="30" height="30" fill="#ef4444" rx="4" /> <text x="87" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          <rect x="108" y="0" width="30" height="30" fill="#22c55e" rx="4" /> <text x="123" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">W</text>
          <rect x="144" y="0" width="30" height="30" fill="#22c55e" rx="4" /> <text x="159" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">W</text>
          <rect x="180" y="0" width="30" height="30" fill="#ef4444" rx="4" /> <text x="195" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          <rect x="216" y="0" width="30" height="30" fill="#ef4444" rx="4" /> <text x="231" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          <rect x="252" y="0" width="30" height="30" fill="#ef4444" rx="4" /> <text x="267" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">L</text>
          <rect x="288" y="0" width="30" height="30" fill="#22c55e" rx="4" /> <text x="303" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">W</text>
          <rect x="324" y="0" width="30" height="30" fill="#22c55e" rx="4" /> <text x="339" y="22" fontSize="16" fill="white" fontWeight="bold" textAnchor="middle">W</text>
        </g>
        
        <text x="200" y="110" fontSize="16" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">Random distribution of wins and losses</text>
        
        <path d="M 40 180 L 360 130" fill="none" stroke="#1e3a5f" strokeWidth="4" strokeDasharray="8 8" markerEnd="url(#arrow-revenge)" />
        <text x="200" y="170" fontSize="16" fill="#22c55e" fontWeight="bold" textAnchor="middle">Overall Edge = Profitable</text>
      </svg>
    </div>
  </div>
);

export const ProcessOverOutcomeVisual = () => (
  <div className="w-full bg-[#f8f9fa] rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-[#1e3a5f] text-white text-center py-3 font-bold text-xl tracking-wide border-b-4 border-blue-500">
      — Process Over Outcome —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <line x1="200" y1="40" x2="200" y2="160" stroke="#1e3a5f" strokeWidth="8" />
        <line x1="160" y1="160" x2="240" y2="160" stroke="#1e3a5f" strokeWidth="8" />
        
        <line x1="80" y1="100" x2="320" y2="60" stroke="#1e3a5f" strokeWidth="6" />
        <circle cx="200" cy="80" r="8" fill="#1e3a5f" />
        
        <line x1="80" y1="100" x2="50" y2="140" stroke="#1e3a5f" strokeWidth="2" />
        <line x1="80" y1="100" x2="110" y2="140" stroke="#1e3a5f" strokeWidth="2" />
        <path d="M 40 140 Q 80 160 120 140 Z" fill="#1e3a5f" />
        <rect x="60" y="110" width="40" height="30" fill="#22c55e" />
        <text x="80" y="130" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">PROCESS</text>
        
        <line x1="320" y1="60" x2="290" y2="100" stroke="#1e3a5f" strokeWidth="2" />
        <line x1="320" y1="60" x2="350" y2="100" stroke="#1e3a5f" strokeWidth="2" />
        <path d="M 280 100 Q 320 120 360 100 Z" fill="#1e3a5f" />
        <circle cx="320" cy="90" r="10" fill="#f59e0b" />
        <text x="320" y="94" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">$</text>
        
        <text x="200" y="20" fontSize="16" fill="#1e3a5f" fontWeight="bold" textAnchor="middle">Value execution over single-trade PnL</text>
      </svg>
    </div>
  </div>
);

export const PreMarketRoutineVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-indigo-500">
      — Pre-Market Routine —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <rect x="100" y="20" width="200" height="160" rx="8" fill="currentColor" className="text-surface" stroke="currentColor" strokeWidth="4" />
        <line x1="100" y1="50" x2="300" y2="50" stroke="currentColor" className="text-navy/10" strokeWidth="2" />
        <text x="200" y="40" fontSize="16" fill="currentColor" className="text-navy" fontWeight="bold" textAnchor="middle">PRE-MARKET CHECKLIST</text>
        
        <rect x="120" y="70" width="16" height="16" rx="2" fill="#22c55e" />
        <path d="M 124 78 L 128 82 L 134 72" fill="none" stroke="white" strokeWidth="3" />
        <text x="150" y="84" fontSize="14" fill="currentColor" className="text-navy/80" fontWeight="bold">Check Economic Calendar</text>
        
        <rect x="120" y="100" width="16" height="16" rx="2" fill="#22c55e" />
        <path d="M 124 108 L 128 112 L 134 102" fill="none" stroke="white" strokeWidth="3" />
        <text x="150" y="114" fontSize="14" fill="currentColor" className="text-navy/80" fontWeight="bold">Mark Key S/R Levels</text>
        
        <rect x="120" y="130" width="16" height="16" rx="2" fill="#22c55e" />
        <path d="M 124 138 L 128 142 L 134 132" fill="none" stroke="white" strokeWidth="3" />
        <text x="150" y="144" fontSize="14" fill="currentColor" className="text-navy/80" fontWeight="bold">Review Trading Plan</text>
        
        <rect x="120" y="160" width="16" height="16" rx="2" fill="#22c55e" />
        <path d="M 124 168 L 128 172 L 134 162" fill="none" stroke="white" strokeWidth="3" />
        <text x="150" y="174" fontSize="14" fill="currentColor" className="text-navy/80" fontWeight="bold">Mental State: Calm</text>
      </svg>
    </div>
  </div>
);

export const TradeJournalVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-indigo-500">
      — Advanced Trade Journaling —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <rect x="20" y="20" width="360" height="160" rx="8" fill="currentColor" className="text-surface" stroke="currentColor" strokeWidth="4" />
        
        <rect x="20" y="20" width="360" height="30" fill="currentColor" className="text-navy" />
        <text x="40" y="40" fontSize="12" fill="currentColor" className="text-cream" fontWeight="bold">PAIR</text>
        <text x="120" y="40" fontSize="12" fill="currentColor" className="text-cream" fontWeight="bold">SETUP</text>
        <text x="220" y="40" fontSize="12" fill="currentColor" className="text-cream" fontWeight="bold">EMOTION (1-10)</text>
        <text x="320" y="40" fontSize="12" fill="currentColor" className="text-cream" fontWeight="bold">RESULT</text>
        
        <line x1="20" y1="80" x2="380" y2="80" stroke="currentColor" className="text-navy/10" strokeWidth="1" />
        <text x="40" y="66" fontSize="12" fill="currentColor" className="text-navy" fontWeight="bold">EURUSD</text>
        <text x="120" y="66" fontSize="12" fill="currentColor" className="text-navy/70">Break & Retest</text>
        <text x="220" y="66" fontSize="12" fill="#22c55e" fontWeight="bold">3 (Calm)</text>
        <text x="320" y="66" fontSize="12" fill="#22c55e" fontWeight="bold">+2.5R</text>
        
        <line x1="20" y1="110" x2="380" y2="110" stroke="currentColor" className="text-navy/10" strokeWidth="1" />
        <text x="40" y="96" fontSize="12" fill="currentColor" className="text-navy" fontWeight="bold">GBPUSD</text>
        <text x="120" y="96" fontSize="12" fill="#ef4444">FOMO Entry</text>
        <text x="220" y="96" fontSize="12" fill="#ef4444" fontWeight="bold">9 (Anxious)</text>
        <text x="320" y="96" fontSize="12" fill="#ef4444" fontWeight="bold">-1.0R</text>
        
        <text x="40" y="126" fontSize="12" fill="currentColor" className="text-navy" fontWeight="bold">USDJPY</text>
        <text x="120" y="126" fontSize="12" fill="currentColor" className="text-navy/70">Order Block</text>
        <text x="220" y="126" fontSize="12" fill="#22c55e" fontWeight="bold">2 (Focused)</text>
        <text x="320" y="126" fontSize="12" fill="#22c55e" fontWeight="bold">+3.1R</text>
        
        <text x="200" y="164" fontSize="12" fill="currentColor" className="text-navy/40" fontStyle="italic" textAnchor="middle">"Tracking emotions reveals the real edge."</text>
      </svg>
    </div>
  </div>
);

export const PostSessionReviewVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-indigo-500">
      — Post-Session Review —
    </div>
    <div className="p-8 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full max-w-lg h-auto">
        <path d="M 40 140 L 100 100 L 160 160 L 240 80 L 300 120 L 360 40" fill="none" stroke="currentColor" className="text-navy" strokeWidth="4" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        
        <circle cx="240" cy="80" r="50" className="fill-surface stroke-gold" strokeWidth="6" />
        <line x1="204" y1="116" x2="170" y2="150" stroke="currentColor" className="text-gold" strokeWidth="8" strokeLinecap="round" />
        
        <path d="M 200 90 L 240 50 L 270 80" fill="none" stroke="currentColor" className="text-navy" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="240" cy="50" r="6" fill="#ef4444" />
        <text x="240" y="36" fontSize="10" fill="#ef4444" fontWeight="bold" textAnchor="middle">Early Exit</text>
        
        <rect x="280" y="140" width="100" height="50" rx="4" className="fill-surface stroke-navy/20" strokeWidth="2" />
        <text x="290" y="160" fontSize="10" fill="currentColor" className="text-navy" fontWeight="bold">Notes:</text>
        <text x="290" y="176" fontSize="8" fill="currentColor" className="text-navy/70">- Exited before TP</text>
        <text x="290" y="188" fontSize="8" fill="currentColor" className="text-navy/70">- Need to trust plan</text>
      </svg>
    </div>
  </div>
);

export const MarketStructureVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Market Structure (Uptrend) —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M 20 160 L 100 80 L 160 120 L 260 40 L 320 80 L 380 20" fill="none" stroke="currentColor" className="text-brand" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="20" cy="160" r="6" fill="currentColor" className="text-text-primary" />
        <text x="20" y="180" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HL</text>
        
        <circle cx="100" cy="80" r="6" fill="currentColor" className="text-text-primary" />
        <text x="100" y="65" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HH</text>
        
        <circle cx="160" cy="120" r="6" fill="currentColor" className="text-text-primary" />
        <text x="160" y="140" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HL</text>
        
        <circle cx="260" cy="40" r="6" fill="currentColor" className="text-text-primary" />
        <text x="260" y="25" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HH</text>
 
        <circle cx="320" cy="80" r="6" fill="currentColor" className="text-text-primary" />
        <text x="320" y="100" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HL</text>
 
        <circle cx="380" cy="20" r="6" fill="currentColor" className="text-text-primary" />
        <text x="380" y="40" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">HH</text>
        
        <line x1="100" y1="80" x2="380" y2="80" stroke="currentColor" className="text-brand" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      </svg>
    </div>
  </div>
);

export const StructureShiftVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Change of Character (ChoCh) —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M 20 160 L 100 60 L 160 100 L 220 40 L 260 140 L 320 80 L 380 180" fill="none" stroke="currentColor" className="text-brand" strokeWidth="4" strokeLinejoin="round" />
        
        <circle cx="160" cy="100" r="6" fill="currentColor" className="text-text-primary" />
        <text x="160" y="120" fontSize="12" fill="currentColor" className="text-text-primary" textAnchor="middle" fontWeight="bold">Last HL</text>
        
        <line x1="140" y1="100" x2="280" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <text x="280" y="95" fontSize="12" fill="#ef4444" fontWeight="bold">ChoCh Line</text>
        
        <circle cx="260" cy="140" r="6" fill="#ef4444" />
        <text x="260" y="160" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">LL (Shift)</text>
        
        <circle cx="320" cy="80" r="6" fill="#ef4444" />
        <text x="320" y="65" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">LH</text>
      </svg>
    </div>
  </div>
);

export const PremiumDiscountVisual = () => (
  <div className="w-full flex flex-col font-sans my-4">
    <div className="bg-brand-muted text-surface text-center py-3 font-bold text-xl tracking-wide border-b-4 border-brand rounded-t-2xl">
      — Premium vs Discount —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center bg-surface-alt border-x border-b border-border rounded-b-2xl">
      <div className="absolute inset-y-8 left-1/4 right-1/4 flex flex-col">
        <div className="flex-1 bg-red-500/10 border-t border-x border-red-500/30 flex items-center justify-center relative">
          <span className="text-red-500 font-bold opacity-50">PREMIUM (SELL)</span>
          <div className="absolute top-0 left-0 -translate-x-full pr-2 text-xs text-text-secondary opacity-50">100%</div>
        </div>
        <div className="h-px bg-border w-full relative">
          <div className="absolute top-1/2 left-0 -translate-x-full -translate-y-1/2 pr-2 text-xs font-bold text-text-secondary">50% (Equilibrium)</div>
        </div>
        <div className="flex-1 bg-brand/10 border-b border-x border-brand/30 flex items-center justify-center relative">
          <span className="text-brand font-bold opacity-50">DISCOUNT (BUY)</span>
          <div className="absolute bottom-0 left-0 -translate-x-full pr-2 text-xs text-text-secondary opacity-50">0%</div>
        </div>
      </div>
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        <path d="M 100 180 L 150 20 L 250 140 L 300 60" fill="none" stroke="currentColor" className="text-brand" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="250" cy="140" r="8" fill="currentColor" className="text-brand" />
        <text x="250" y="165" fontSize="12" fill="currentColor" className="text-brand" textAnchor="middle" fontWeight="bold">Optimal Entry</text>
      </svg>
    </div>
  </div>
);

export const SupplyDemandVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Supply & Demand Zones —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <div className="absolute top-12 left-10 right-10 h-16 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center">
        <span className="text-red-500 font-bold">Supply Zone (Origin of strong sell-off)</span>
      </div>
      <div className="absolute bottom-12 left-10 right-10 h-16 bg-green-500/10 border border-green-500/30 rounded flex items-center justify-center">
        <span className="text-green-500 font-bold">Demand Zone (Origin of strong rally)</span>
      </div>
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        <path d="M 40 140 L 80 140 L 120 40 L 160 100 L 200 60 L 240 160 L 280 160 L 320 60 L 360 120" fill="none" stroke="currentColor" className="text-gold" strokeWidth="3" strokeLinejoin="round" />
        <path d="M 120 40 L 160 100" stroke="#ef4444" strokeWidth="4" />
        <path d="M 240 160 L 280 160 L 320 60" stroke="#22c55e" strokeWidth="4" />
      </svg>
    </div>
  </div>
);

export const ZoneRefinementVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Zone Refinement (Multi-Timeframe) —
    </div>
    <div className="flex flex-col md:flex-row p-6 gap-6 h-64">
      <div className="flex-1 relative border-2 border-navy/10 rounded-xl bg-surface p-4">
        <div className="absolute top-2 left-2 text-xs font-bold text-navy/50">4H Chart</div>
        <div className="w-full h-1/2 bg-red-500/10 border border-red-500/30 mt-8 flex items-center justify-center">
          <span className="text-red-500 font-bold text-sm">4H Supply</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ArrowRight className="text-navy/30" size={32} />
      </div>
      <div className="flex-1 relative border-2 border-navy/10 rounded-xl bg-surface p-4">
        <div className="absolute top-2 left-2 text-xs font-bold text-navy/50">15M Chart</div>
        <div className="w-full h-1/2 border border-red-500/30 border-dashed mt-8 relative">
          <div className="absolute top-2 left-2 right-2 h-1/3 bg-red-500/20 border border-red-500/40 flex items-center justify-center">
            <span className="text-red-500 font-bold text-xs">15M Refined Supply</span>
          </div>
          <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0" preserveAspectRatio="none">
            <path d="M 10 90 L 30 40 L 50 60 L 70 10 L 90 80" fill="none" stroke="currentColor" className="text-gold" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export const LiquidityTrapVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Liquidity Traps (Fakeouts) —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <div className="absolute top-16 left-10 right-10 border-t-2 border-navy/20 border-dashed"></div>
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">Buy Stops / Liquidity Pool</div>
      
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        <path d="M 40 120 L 100 60 L 160 120 L 220 60 L 280 120 L 320 30 L 360 160" fill="none" stroke="currentColor" className="text-gold" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="100" cy="60" r="4" fill="currentColor" className="text-navy/40" />
        <circle cx="220" cy="60" r="4" fill="currentColor" className="text-navy/40" />
        
        <path d="M 280 120 L 320 30 L 360 160" stroke="#ef4444" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="320" cy="30" r="6" fill="#ef4444" />
        <text x="320" y="15" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">Fakeout / Sweep</text>
      </svg>
    </div>
  </div>
);

export const ConfirmationEntryVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — The Confirmation Entry —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <div className="absolute bottom-10 left-10 right-10 h-20 bg-green-500/10 border border-green-500/30 rounded opacity-50"></div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-bold text-green-500">HTF Demand Zone</div>
      
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* HTF Move down */}
        <path d="M 40 40 L 120 160" fill="none" stroke="currentColor" className="text-navy/30" strokeWidth="4" strokeDasharray="8 4" />
        
        {/* LTF Structure inside zone */}
        <path d="M 120 160 L 160 120 L 200 150 L 260 80 L 300 130 L 360 40" fill="none" stroke="currentColor" className="text-gold" strokeWidth="3" strokeLinejoin="round" />
        
        {/* ChoCh Line */}
        <line x1="140" y1="120" x2="280" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <text x="210" y="115" fontSize="10" fill="#ef4444" fontWeight="bold">LTF ChoCh</text>
        
        {/* Entry */}
        <circle cx="300" cy="130" r="6" fill="#22c55e" />
        <text x="300" y="150" fontSize="12" fill="#22c55e" textAnchor="middle" fontWeight="bold">Entry</text>
      </svg>
    </div>
  </div>
);

export const OrderBlockVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Bullish Order Block (OB) —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <div className="absolute left-16 right-16 bottom-16 h-12 bg-green-500/10 border border-green-500/30 rounded flex items-center justify-center">
        <span className="text-green-500 font-bold text-xs">Institutional Buy Orders (OB)</span>
      </div>
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Last down candle */}
        <rect x="80" y="120" width="20" height="40" fill="#ef4444" />
        <line x1="90" y1="110" x2="90" y2="170" stroke="#ef4444" strokeWidth="2" />
        
        {/* Aggressive up move */}
        <rect x="110" y="80" width="20" height="60" fill="#22c55e" />
        <line x1="120" y1="70" x2="120" y2="150" stroke="#22c55e" strokeWidth="2" />
        
        <rect x="140" y="40" width="20" height="50" fill="#22c55e" />
        <line x1="150" y1="30" x2="150" y2="100" stroke="#22c55e" strokeWidth="2" />
        
        {/* Price returning to OB */}
        <path d="M 170 50 L 220 100 L 250 140" fill="none" stroke="currentColor" className="text-navy/30" strokeWidth="3" strokeDasharray="4 4" />
        
        {/* Entry and reaction */}
        <circle cx="250" cy="140" r="6" fill="#22c55e" />
        <path d="M 250 140 L 300 60 L 350 20" fill="none" stroke="currentColor" className="text-gold" strokeWidth="4" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export const FairValueGapVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Fair Value Gap (FVG) / Imbalance —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Candle 1 */}
        <rect x="100" y="120" width="24" height="40" fill="#ef4444" />
        <line x1="112" y1="110" x2="112" y2="170" stroke="#ef4444" strokeWidth="2" />
        <text x="112" y="185" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle">Candle 1</text>
        <line x1="112" y1="110" x2="280" y2="110" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Candle 2 (The Imbalance) */}
        <rect x="150" y="50" width="24" height="60" fill="#ef4444" />
        <line x1="162" y1="40" x2="162" y2="120" stroke="#ef4444" strokeWidth="2" />
        <text x="162" y="185" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle">Candle 2</text>
        
        {/* Candle 3 */}
        <rect x="200" y="20" width="24" height="20" fill="#ef4444" />
        <line x1="212" y1="10" x2="212" y2="50" stroke="#ef4444" strokeWidth="2" />
        <text x="212" y="185" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle">Candle 3</text>
        <line x1="212" y1="50" x2="280" y2="50" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* FVG Highlight */}
        <rect x="230" y="50" width="80" height="60" className="fill-gold/20 stroke-gold" strokeWidth="2" />
        <text x="270" y="85" fontSize="12" fill="currentColor" className="text-gold" textAnchor="middle" fontWeight="bold">FVG</text>
        
        {/* Price returning to fill FVG */}
        <path d="M 230 20 L 270 80" fill="none" stroke="currentColor" className="text-navy/30" strokeWidth="3" strokeDasharray="4 4" />
      </svg>
    </div>
  </div>
);

export const LiquiditySweepVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Buy Side Liquidity (BSL) Sweep —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Retail Resistance Line */}
        <line x1="40" y1="80" x2="360" y2="80" stroke="#ef4444" strokeWidth="2" strokeDasharray="6 6" />
        <text x="200" y="70" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">Retail Resistance / Buy Stops (BSL)</text>
        
        {/* Price Action */}
        <path d="M 40 160 L 100 80 L 140 120 L 200 80 L 240 140" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        
        {/* The Sweep */}
        <path d="M 240 140 L 280 40 L 320 180" fill="none" stroke="currentColor" className="text-gold" strokeWidth="4" strokeLinejoin="round" />
        
        <circle cx="280" cy="40" r="6" fill="currentColor" className="text-gold" />
        <text x="280" y="25" fontSize="12" fill="currentColor" className="text-gold" textAnchor="middle" fontWeight="bold">Judas Swing (Sweep)</text>
        
        {/* Sell off */}
        <path d="M 320 180 L 360 140" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export const WyckoffSchematicVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Wyckoff Accumulation Schematic —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Phase Lines */}
        <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="220" y1="20" x2="220" y2="180" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="300" y1="20" x2="300" y2="180" stroke="currentColor" className="text-navy/20" strokeWidth="1" strokeDasharray="4 4" />
        
        <text x="60" y="190" fontSize="10" fill="currentColor" className="text-navy/50" textAnchor="middle">Phase A</text>
        <text x="160" y="190" fontSize="10" fill="currentColor" className="text-navy/50" textAnchor="middle">Phase B</text>
        <text x="260" y="190" fontSize="10" fill="currentColor" className="text-navy/50" textAnchor="middle">Phase C</text>
        <text x="350" y="190" fontSize="10" fill="currentColor" className="text-navy/50" textAnchor="middle">Phase D/E</text>

        {/* Price Action */}
        <path d="M 20 40 L 60 140 L 80 80 L 120 150 L 160 70 L 190 140 L 240 170 L 280 90 L 320 120 L 380 30" fill="none" stroke="currentColor" className="text-gold" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Labels */}
        <text x="60" y="155" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle" fontWeight="bold">SC</text>
        <text x="80" y="70" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle" fontWeight="bold">AR</text>
        <text x="120" y="165" fontSize="10" fill="currentColor" className="text-navy" textAnchor="middle" fontWeight="bold">ST</text>
        <text x="240" y="185" fontSize="10" fill="#ef4444" textAnchor="middle" fontWeight="bold">Spring</text>
        <circle cx="240" cy="170" r="4" fill="#ef4444" />
        <text x="280" y="80" fontSize="10" fill="#22c55e" textAnchor="middle" fontWeight="bold">SOS</text>
        <text x="320" y="135" fontSize="10" fill="#22c55e" textAnchor="middle" fontWeight="bold">LPS</text>
      </svg>
    </div>
  </div>
);

export const VolumeProfileVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-gold">
      — Volume Profile & POC —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Volume Profile Histogram (Left side) */}
        <rect x="20" y="20" width="30" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="40" width="50" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="60" width="80" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="80" width="140" height="15" fill="currentColor" className="text-gold/40" /> {/* POC */}
        <rect x="20" y="100" width="110" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="120" width="70" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="140" width="40" height="15" fill="currentColor" className="text-gold/20" />
        <rect x="20" y="160" width="20" height="15" fill="currentColor" className="text-gold/20" />
        
        {/* POC Line */}
        <line x1="20" y1="87.5" x2="380" y2="87.5" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <text x="360" y="80" fontSize="12" fill="#ef4444" textAnchor="middle" fontWeight="bold">POC</text>
        
        {/* Value Area Highlight */}
        <rect x="20" y="60" width="360" height="55" fill="currentColor" className="text-gold/5" />
        <text x="340" y="110" fontSize="10" fill="currentColor" className="text-gold/40" textAnchor="middle">Value Area</text>

        {/* Price Action */}
        <path d="M 160 160 L 200 120 L 220 140 L 260 60 L 280 87.5 L 320 40 L 360 87.5" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="360" cy="87.5" r="5" fill="#22c55e" />
      </svg>
    </div>
  </div>
);

export const RiskToRewardVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-green-500">
      — Risk to Reward (1:3) —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Entry Line */}
        <line x1="50" y1="140" x2="350" y2="140" stroke="currentColor" className="text-navy" strokeWidth="2" strokeDasharray="4 4" />
        <text x="70" y="135" fontSize="12" fill="currentColor" className="text-navy" fontWeight="bold">Entry Price</text>

        {/* Stop Loss Zone (1R Risk) */}
        <rect x="150" y="140" width="100" height="40" fill="#ef4444" opacity="0.2" />
        <line x1="50" y1="180" x2="350" y2="180" stroke="#ef4444" strokeWidth="2" />
        <text x="70" y="175" fontSize="12" fill="#ef4444" fontWeight="bold">Stop Loss (-1R)</text>

        {/* Take Profit Zone (3R Reward) */}
        <rect x="150" y="20" width="100" height="120" fill="#22c55e" opacity="0.2" />
        <line x1="50" y1="20" x2="350" y2="20" stroke="#22c55e" strokeWidth="2" />
        <text x="70" y="35" fontSize="12" fill="#22c55e" fontWeight="bold">Take Profit (+3R)</text>

        {/* Price Action */}
        <path d="M 100 160 L 130 140 L 160 150 L 200 80 L 230 100 L 280 20" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="280" cy="20" r="5" fill="#22c55e" />
        <circle cx="130" cy="140" r="5" fill="currentColor" className="text-gold" />
      </svg>
    </div>
  </div>
);

export const DrawdownCurveVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-[#ef4444]">
      — Equity Curve & Drawdown —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Grid */}
        <line x1="40" y1="160" x2="360" y2="160" stroke="currentColor" className="text-navy/10" strokeWidth="1" />
        <line x1="40" y1="120" x2="360" y2="120" stroke="currentColor" className="text-navy/10" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="40" y1="80" x2="360" y2="80" stroke="currentColor" className="text-navy/10" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="40" y1="40" x2="360" y2="40" stroke="currentColor" className="text-navy/10" strokeWidth="1" strokeDasharray="2 2" />

        {/* Equity Curve */}
        <path d="M 40 140 L 80 100 L 120 110 L 160 60 L 200 120 L 240 130 L 280 80 L 320 40 L 360 50" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Peak to Trough Drawdown */}
        <line x1="160" y1="60" x2="240" y2="60" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="240" y1="60" x2="240" y2="130" stroke="#ef4444" strokeWidth="2" />
        <polygon points="235,125 245,125 240,130" fill="#ef4444" />
        <text x="250" y="100" fontSize="12" fill="#ef4444" fontWeight="bold">Drawdown</text>

        {/* High Water Mark */}
        <circle cx="160" cy="60" r="4" fill="currentColor" className="text-gold" />
        <text x="160" y="50" fontSize="10" fill="currentColor" className="text-gold" textAnchor="middle">High Water Mark</text>
      </svg>
    </div>
  </div>
);

export const TradeManagementVisual = () => (
  <div className="w-full bg-surface-alt rounded-2xl overflow-hidden border border-navy/20 flex flex-col font-sans my-8">
    <div className="bg-navy text-cream text-center py-3 font-bold text-xl tracking-wide border-b-4 border-indigo-500">
      — Active Trade Management —
    </div>
    <div className="p-8 relative h-64 flex items-center justify-center">
      <svg viewBox="0 0 400 200" className="w-full h-full relative z-10" preserveAspectRatio="none">
        {/* Entry & TP */}
        <line x1="40" y1="140" x2="360" y2="140" stroke="currentColor" className="text-navy" strokeWidth="2" strokeDasharray="4 4" />
        <text x="50" y="135" fontSize="10" fill="currentColor" className="text-navy">Entry</text>
        <line x1="40" y1="40" x2="360" y2="40" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" />
        <text x="50" y="35" fontSize="10" fill="#22c55e">TP</text>

        {/* Initial Stop */}
        <line x1="40" y1="180" x2="120" y2="180" stroke="#ef4444" strokeWidth="2" />
        <text x="50" y="175" fontSize="10" fill="#ef4444">Initial SL</text>

        {/* Break Even Stop */}
        <line x1="120" y1="140" x2="240" y2="140" stroke="#f59e0b" strokeWidth="2" />
        <text x="130" y="135" fontSize="10" fill="#f59e0b">SL to BE</text>

        {/* Trailing Stop */}
        <line x1="240" y1="90" x2="360" y2="90" stroke="currentColor" className="text-gold" strokeWidth="2" />
        <text x="250" y="85" fontSize="10" fill="currentColor" className="text-gold">Trailing SL</text>

        {/* Price Action */}
        <path d="M 40 140 L 80 160 L 120 100 L 160 120 L 240 60 L 280 80 L 320 40" fill="none" stroke="currentColor" className="text-navy" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Action Points */}
        <circle cx="120" cy="100" r="4" fill="#f59e0b" />
        <circle cx="240" cy="60" r="4" fill="currentColor" className="text-gold" />
      </svg>
    </div>
  </div>
);
