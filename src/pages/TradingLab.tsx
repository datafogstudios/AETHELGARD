import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  BarChart,
  TrendingUp,
  Zap,
  ArrowRight,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { CalculatorPipValue } from "../components/calculators/CalculatorPipValue";
import { CalculatorMargin } from "../components/calculators/CalculatorMargin";
import { CalculatorProfitLoss } from "../components/calculators/CalculatorProfitLoss";
import { CalculatorCompounding } from "../components/calculators/CalculatorCompounding";
import TradingViewWidget from "../components/TradingViewWidget";
import EconomicCalendarWidget from "../components/EconomicCalendarWidget";
import { MarketSessionsWidget } from "../components/MarketSessionsWidget";
import { PaperTradingSimulator } from "../components/PaperTradingSimulator";

const scenarios = [
  {
    id: 1,
    module: "Module 07: Market Structure",
    question: "Identify the Break of Structure (BOS) in this 15m timeframe.",
    image:
      "https://images.unsplash.com/photo-1611974717484-2474243c30d2?auto=format&fit=crop&q=80&w=1200",
    options: [
      "Point A (1.0845)",
      "Point B (1.0820)",
      "Point C (1.0865)",
      "No BOS present",
    ],
    correct: 2,
    explanation:
      "Point C breaks the previous structural high, confirming a bullish Break of Structure (BOS).",
  },
  {
    id: 2,
    module: "Module 08: Liquidity",
    question: "Where is the most likely resting place for sell-side liquidity?",
    image:
      "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?auto=format&fit=crop&q=80&w=1200",
    options: [
      "Above the recent high",
      "Below equal lows",
      "At the 50% Fibonacci level",
      "Inside the Fair Value Gap",
    ],
    correct: 1,
    explanation:
      "Sell-side liquidity typically rests beneath evident support levels like equal lows, where retail traders place stop losses.",
  },
  {
    id: 3,
    module: "Module 09: Entry Models",
    question: "Which pattern validates entry after a sweep of liquidity?",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=1200",
    options: [
      "A Doji candle",
      "Market Structure Shift (MSS) with displacement",
      "A triple top",
      "A hammer candle",
    ],
    correct: 1,
    explanation:
      "A Market Structure Shift (MSS) showing strong displacement confirms intent after a liquidity sweep, offering a high-probability entry.",
  },
];

export function TradingLab() {
  const [calcBalance, setCalcBalance] = useState(10000);
  const [calcRisk, setCalcRisk] = useState(1);
  const [calcSL, setCalcSL] = useState(20);
  const [calcPipVal, setCalcPipVal] = useState(10);

  const riskAmt = calcBalance * (calcRisk / 100);
  const lots = riskAmt / (calcSL * calcPipVal);

  const [rrrSL, setRrrSL] = useState(20);
  const [rrrTP, setRrrTP] = useState(60);
  const rrr = rrrTP / rrrSL;

  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedScenarioOption, setSelectedScenarioOption] = useState<
    number | null
  >(null);
  const [scenarioState, setScenarioState] = useState<
    "playing" | "answered" | "completed"
  >("playing");
  const [score, setScore] = useState(0);

  const handleScenarioSelect = (idx: number) => {
    if (scenarioState !== "playing") return;
    setSelectedScenarioOption(idx);
    setScenarioState("answered");
    if (idx === scenarios[currentScenario].correct) {
      setScore(s => s + 1);
    }
  };

  const handleScenarioNext = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario((prev) => prev + 1);
      setSelectedScenarioOption(null);
      setScenarioState("playing");
    } else {
      setScenarioState("completed");
    }
  };

  const handleScenarioReset = () => {
    setCurrentScenario(0);
    setSelectedScenarioOption(null);
    setScenarioState("playing");
    setScore(0);
  };

  const scenario = scenarios[currentScenario];
  return (
    <motion.div
      key="trading-lab"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-24 md:py-32 bg-[#F9F7F2] min-h-screen relative overflow-hidden"
    >
      {/* Technical Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#002B5B]/5 border border-[#002B5B]/10 rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-[#002B5B] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#002B5B]">
              Live Laboratory
            </span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-[#002B5B]">
            The Trading Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Interactive tools and exercises to bridge the gap between theory and
            execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          {/* Main Exercise Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="p-10 border-b border-gray-200 flex justify-between items-center bg-[#F9F7F2]/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-xl">
                    <Zap size={24} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#002B5B]">
                      Scenario Exercise
                    </h3>
                    {scenarioState !== "completed" && (
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">
                        {scenario?.module}
                      </p>
                    )}
                  </div>
                </div>
                {scenarioState !== "completed" && (
                  <div className="flex gap-2">
                    {scenarios.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === currentScenario ? "bg-[#002B5B]" : i < currentScenario ? "bg-[#002B5B]/50" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="p-10 md:p-16">
                {scenarioState === "completed" ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 text-[#002B5B] rounded-full mb-6">
                      <BarChart size={40} />
                    </div>
                    <h4 className="font-serif text-4xl font-bold text-[#1A1A1A] mb-4">
                      Simulation Complete
                    </h4>
                    <p className="text-gray-600 text-lg mb-4 max-w-md mx-auto">
                      You scored {score} out of {scenarios.length}.
                    </p>
                    <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
                      Keep practicing in the lab to sharpen your institutional setup recognition and risk management skills.
                    </p>
                    <button
                      onClick={handleScenarioReset}
                      className="px-8 py-4 bg-[#002B5B] text-white rounded-xl font-bold transition-all hover:bg-[#153e77] hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2"
                    >
                      Replay Simulation
                    </button>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentScenario}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-video bg-[#F9F7F2] rounded-3xl mb-10 border border-gray-200 overflow-hidden relative group">
                        <img
                          src={scenario.image}
                          alt="Trading Chart Scenario"
                          className="w-full h-full object-cover transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#002B5B]/80 to-transparent opacity-80" />
                        <div className="absolute bottom-8 left-8 right-8">
                          <p className="text-white font-serif text-xl font-bold">
                            {scenario.question}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                        {scenario.options.map((opt, idx) => {
                          let btnClass =
                            "border-gray-200 hover:border-[#002B5B] hover:bg-[#002B5B]/5 bg-white text-[#002B5B]";
                          let icon = (
                            <ArrowRight
                              size={16}
                              className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all"
                            />
                          );

                          if (scenarioState === "answered") {
                            if (idx === scenario.correct) {
                              btnClass =
                                "border-green-500 bg-green-50 text-green-700";
                              icon = (
                                <CheckCircle
                                  size={16}
                                  className="text-green-600"
                                />
                              );
                            } else if (idx === selectedScenarioOption) {
                              btnClass =
                                "border-red-500 bg-red-50 text-red-700";
                              icon = (
                                <XCircle size={16} className="text-red-600" />
                              );
                            } else {
                              btnClass =
                                "border-gray-200 bg-gray-50 opacity-50 text-gray-500 cursor-not-allowed";
                              icon = <div />;
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleScenarioSelect(idx)}
                              disabled={scenarioState !== "playing"}
                              className={`p-6 text-left border rounded-2xl transition-all group flex justify-between items-center ${btnClass} ${scenarioState === "playing" ? "hover:-translate-y-1 hover:shadow-md" : ""}`}
                            >
                              <span className="font-bold transition-colors">
                                {opt}
                              </span>
                              {icon}
                            </button>
                          );
                        })}
                      </div>

                      <AnimatePresence>
                        {scenarioState === "answered" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="bg-[#F9F7F2] border border-gray-200 rounded-2xl p-6"
                          >
                            <div className="flex justify-between items-start flex-col sm:flex-row gap-6">
                              <div>
                                <h4
                                  className={`font-bold uppercase tracking-widest text-xs mb-2 ${selectedScenarioOption === scenario.correct ? "text-green-600" : "text-red-600"}`}
                                >
                                  {selectedScenarioOption === scenario.correct
                                    ? "Correct"
                                    : "Incorrect"}
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {scenario.explanation}
                                </p>
                              </div>
                              <button
                                onClick={handleScenarioNext}
                                className="px-6 py-3 bg-[#002B5B] text-white rounded-xl font-bold transition-all hover:bg-[#153e77] text-sm shrink-0 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2"
                              >
                                {currentScenario < scenarios.length - 1
                                  ? "Next Scenario"
                                  : "Finish"}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar Tools */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white p-10 border border-gray-200 rounded-[2.5rem] shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-8 flex items-center gap-3 text-[#002B5B]">
                <Shield size={20} className="text-[#002B5B]" />
                Quick Calculators
              </h3>
              <div className="space-y-6">
                <a
                  href="#calculators"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("calculators")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block p-6 bg-[#F9F7F2] border border-gray-200 rounded-2xl group hover:border-[#002B5B]/30 transition-all cursor-pointer"
                >
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Position Sizing
                  </p>
                  <p className="text-sm font-medium text-[#002B5B] mb-4">
                    Calculate exact lot size based on account risk.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#002B5B] uppercase tracking-widest">
                    Open Tool <ArrowRight size={12} />
                  </div>
                </a>
                <a
                  href="#calculators"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("calculators")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block p-6 bg-[#F9F7F2] border border-gray-200 rounded-2xl group hover:border-[#002B5B]/30 transition-all cursor-pointer"
                >
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mb-2">
                    Risk/Reward Ratio
                  </p>
                  <p className="text-sm font-medium text-[#002B5B] mb-4">
                    Visualize your potential return vs risk.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-[#002B5B] uppercase tracking-widest">
                    Open Tool <ArrowRight size={12} />
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#002B5B] p-10 rounded-[2.5rem] text-white shadow-xl shadow-[#002B5B]/20 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="font-serif text-xl font-bold mb-4 relative z-10">
                Downloadable Assets
              </h3>
              <p className="text-white/80 text-sm mb-8 relative z-10 leading-relaxed">
                Get our professional trading journal and pre-trade checklist
                templates.
              </p>
              <a
                href="#downloads"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("downloads")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block w-full py-4 bg-white text-[#002B5B] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all relative z-10 flex items-center justify-center gap-2"
              >
                <Download size={16} /> Access Downloads
              </a>
            </div>
          </div>
        </div>

        {/* EMA CROSSOVER STRATEGY */}
        <div id="ema-strategy" className="mt-32 space-y-12 scroll-mt-32">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">
              Strategy Spotlight
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              EMA Crossover Strategy
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              A classic trend-following strategy using Exponential Moving
              Averages (EMA) to identify momentum shifts and potential entry
              points.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Specialized Chart for EMA */}
              <div className="h-[500px] w-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm p-4 relative">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden border border-gray-200">
                  <TradingViewWidget
                    chartId="tradingview_ema_crossover"
                    symbol="FX:GBPUSD"
                    interval="60"
                    studies={[
                      "Moving Average Exponential@tv-basicstudies",
                      "Moving Average Exponential@tv-basicstudies",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 border border-gray-200 rounded-[2rem] shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-4 text-[#002B5B]">
                  How to Trade It
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  The EMA Crossover strategy relies on two different EMAs: a
                  fast one (like the 12-period) and a slow one (like the
                  26-period). Because EMAs place more weight on recent price
                  data, they react quickly to price changes.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                    <h4 className="font-bold text-green-800 text-sm mb-1">
                      Bullish Crossover (Buy)
                    </h4>
                    <p className="text-xs text-green-700">
                      When the fast EMA (12) crosses <strong>above</strong> the
                      slow EMA (26). This indicates upward momentum is building.
                    </p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-800 text-sm mb-1">
                      Bearish Crossover (Sell)
                    </h4>
                    <p className="text-xs text-red-700">
                      When the fast EMA (12) crosses <strong>below</strong> the
                      slow EMA (26). This indicates downward momentum is
                      building.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">
                    Pro Tip:
                  </h4>
                  <p className="text-xs text-gray-600">
                    To set this up on the chart, click the "Indicators" button
                    at the top of the chart, add two "Moving Average
                    Exponential" indicators, and change their lengths to 12 and
                    26 in their settings. Moving averages work best in trending
                    markets—avoid using this in choppy, sideways markets!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MACD STRATEGY */}
        <div id="macd-strategy" className="mt-32 space-y-12 scroll-mt-32">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">
              Strategy Spotlight
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              MACD Indicator
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The Moving Average Convergence Divergence (MACD) is a
              trend-following momentum indicator that shows the relationship
              between two moving averages of a security's price.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="h-[500px] w-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm p-4 relative">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden border border-gray-200">
                  <TradingViewWidget
                    chartId="tradingview_macd"
                    symbol="FX:XAUUSD"
                    interval="60"
                    studies={["MACD@tv-basicstudies"]}
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-8 border border-gray-200 rounded-[2rem] shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-4 text-[#002B5B]">
                  How to Read It
                </h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  The MACD consists of the MACD Line (fast), the Signal Line
                  (slow), and the Histogram (difference between the two).
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <h4 className="font-bold text-blue-800 text-sm mb-1">
                      Crossovers
                    </h4>
                    <p className="text-xs text-blue-700">
                      A bullish signal occurs when the MACD crosses{" "}
                      <strong>above</strong> its signal line. A bearish signal
                      occurs when it crosses <strong>below</strong>.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                    <h4 className="font-bold text-purple-800 text-sm mb-1">
                      Divergence
                    </h4>
                    <p className="text-xs text-purple-700">
                      When the price makes a new high/low but the MACD does not,
                      it signals a potential reversal. For example, if price
                      makes a higher high, but MACD forms a lower high, it
                      indicates weakening upward momentum.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 text-sm mb-2">
                    Pro Tip:
                  </h4>
                  <p className="text-xs text-gray-600">
                    The histogram turning positive (above the zero line) or
                    negative (below the zero line) often precedes the actual
                    line crossovers. It acts as an early warning system!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LIVE CHARTING */}
        <div className="mt-32 space-y-12">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] mb-4 block">
              Real-time Data
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              Live Charting Environment
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Practice your technical analysis, draw zones, and test your
              confluences in a live market widget without any risk.
            </p>
          </div>

          <div className="h-[600px] w-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm p-4">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden border border-gray-200">
              <TradingViewWidget />
            </div>
          </div>
        </div>

        {/* PAPER TRADING SIMULATOR */}
        <div className="mt-32 space-y-12">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">
              Execution Practice
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              Execution Dashboard
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Simulate trade entries and monitor mock positions to gain confidence in rapid order execution and trade management.
            </p>
          </div>

          <PaperTradingSimulator />
        </div>

        {/* ECONOMIC CALENDAR AND MARKET SESSIONS */}
        <div className="mt-32 space-y-12">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">
              Macro & Timing
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              Fundamentals & Sessions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Keep track of global market overlaps and high-impact news events that drive institutional volume.
            </p>
          </div>

          <MarketSessionsWidget />

          <div className="h-[600px] w-full bg-white rounded-[2.5rem] border border-gray-200 overflow-hidden shadow-sm p-8">
            <h3 className="font-serif text-2xl font-bold text-[#002B5B] mb-6">Economic Calendar</h3>
            <div className="w-full h-[500px] rounded-[1.5rem] overflow-hidden border border-gray-200">
              <EconomicCalendarWidget />
            </div>
          </div>
        </div>

        {/* CALCULATORS */}
        <div id="calculators" className="mt-32 space-y-16 scroll-mt-32">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-4 block">
              Interactive Tools
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              Built-in Calculators
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Position Size Calculator */}
            <div className="bg-white p-12 border border-gray-200 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B]" />
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-[#002B5B]/5 rounded-2xl">
                  <BarChart size={32} className="text-[#002B5B]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#002B5B]">
                  Position Size
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Account Balance ($)
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={calcBalance}
                    onChange={(e) => setCalcBalance(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Risk % per Trade
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={calcRisk}
                    onChange={(e) => setCalcRisk(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Stop Loss (pips)
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={calcSL}
                    onChange={(e) => setCalcSL(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Pip Value ($)
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#002B5B] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={calcPipVal}
                    onChange={(e) => setCalcPipVal(Number(e.target.value))}
                  />
                </div>
              </div>
              <div className="bg-[#002B5B] text-white p-10 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#002B5B]/20 to-transparent pointer-events-none" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 relative z-10">
                  Recommended Lot Size
                </span>
                <span className="text-5xl font-mono font-black tracking-tighter relative z-10">
                  {isFinite(lots) ? lots.toFixed(2) : "0.00"} lots
                </span>
              </div>
            </div>

            {/* RRR Calculator */}
            <div className="bg-white p-12 border border-gray-200 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]" />
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-[#D4AF37]/5 rounded-2xl">
                  <TrendingUp size={32} className="text-[#D4AF37]" />
                </div>
                <h3 className="font-serif text-3xl font-bold tracking-tight text-[#002B5B]">
                  Risk-to-Reward
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Stop Loss (pips)
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={rrrSL}
                    onChange={(e) => setRrrSL(Number(e.target.value))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                    Take Profit (pips)
                  </label>
                  <input
                    type="number"
                    className="w-full p-4 bg-[#F9F7F2] border border-gray-200 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-colors font-mono text-sm text-[#1A1A1A]"
                    value={rrrTP}
                    onChange={(e) => setRrrTP(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="mb-10 px-4" aria-live="polite">
                <div className="sr-only">
                  The calculated risk reward ratio is{" "}
                  {isFinite(rrr) ? `1 to ${rrr.toFixed(1)}` : "N/A"}.
                </div>
                <div className="h-4 flex rounded-full overflow-hidden w-full bg-gray-100 relative">
                  {/* Risk */}
                  <div
                    className="h-full bg-red-400 group-hover:bg-red-500 transition-colors"
                    style={{
                      width: `${Number.isNaN(rrrSL / (rrrSL + rrrTP)) ? 0 : (rrrSL / (rrrSL + rrrTP)) * 100}%`,
                    }}
                    title={`Risk: ${rrrSL} pips`}
                  />
                  {/* Reward */}
                  <div
                    className="h-full bg-green-400 group-hover:bg-green-500 transition-colors"
                    style={{
                      width: `${Number.isNaN(rrrTP / (rrrSL + rrrTP)) ? 0 : (rrrTP / (rrrSL + rrrTP)) * 100}%`,
                    }}
                    title={`Reward: ${rrrTP} pips`}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] uppercase tracking-widest font-bold">
                  <span className="text-red-500">Risk ({rrrSL}p)</span>
                  <span className="text-green-500">Reward ({rrrTP}p)</span>
                </div>
              </div>

              <div className="bg-[#D4AF37] text-white p-10 rounded-[2rem] flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2 relative z-10">
                  Risk-to-Reward Ratio
                </span>
                <span className="text-5xl font-mono font-black tracking-tighter relative z-10">
                  1 : {isFinite(rrr) ? rrr.toFixed(1) : "0.0"}
                </span>
              </div>
            </div>

            <CalculatorPipValue />
            <CalculatorMargin />
            <div className="lg:col-span-2">
              <CalculatorProfitLoss />
            </div>
            <CalculatorCompounding />
          </div>
        </div>

        {/* Downloadable Templates */}
        <div id="downloads" className="mt-32 scroll-mt-32">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] mb-4 block">
              Manual Tracking
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#002B5B]">
              Printable Assets
            </h2>
            <div className="inline-block mt-4 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-widest">
              Coming Soon
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are working on high-quality printable cheat sheets, journals, and checklists to support your trading journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-50 pointer-events-none">
            {[
              { title: "Trade Journal — Simple", format: "PDF" },
              { title: "Trade Journal — Detailed", format: "CSV" },
              { title: "Weekly Review Template", format: "PDF" },
              { title: "Psychology Reflection", format: "PDF" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 border border-gray-200 rounded-[2rem] hover:border-[#002B5B]/30 transition-all group shadow-sm"
              >
                <h3 className="font-serif font-bold text-lg mb-6 text-[#002B5B] transition-colors">
                  {item.title}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#002B5B] bg-[#002B5B]/5 px-4 py-2 rounded-full">
                  {item.format}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
