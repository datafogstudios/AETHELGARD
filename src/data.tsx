import { ModuleData } from "./types";
import { 
  CandleAnatomyVisual, 
  MomentumVsExhaustionVisual, 
  MarketPhasesVisual, 
  BreakAndRetestVisual, 
  SupportResistanceVisual, 
  PositionSizingVisual, 
  MathRuinVisual, 
  RiskRewardVisual, 
  CurrencyPairsVisual, 
  PipsLotsLeverageVisual,
  WhatIsForexVisual,
  MarketDriversSessionsVisual,
  TradingViewInterfaceVisual,
  WatchlistVisual,
  AlertsVisual,
  PineScriptVisual,
  MT4TerminalVisual,
  EAInstallationVisual,
  OneClickTradingVisual,
  StrategyTesterVisual,
  OrderTypesVisual,
  TrailingStopVisual,
  PartialCloseVisual,
  FibonacciVisual,
  BarReplayVisual,
  MultiTimeframeVisual,
  LatencyVisual,
  MobileTradingVisual,
  VPSVisual,
  TwoFAVisual,
  FOMOVisual,
  RevengeTradingVisual,
  EuphoriaVisual,
  ConfirmationBiasVisual,
  GamblersFallacyVisual,
  SunkCostVisual,
  CasinoParadigmVisual,
  ProbabilityDistributionVisual,
  ProcessOverOutcomeVisual,
  PreMarketRoutineVisual,
  TradeJournalVisual,
  PostSessionReviewVisual,
  MarketStructureVisual,
  StructureShiftVisual,
  PremiumDiscountVisual,
  SupplyDemandVisual,
  ZoneRefinementVisual,
  LiquidityTrapVisual,
  ConfirmationEntryVisual,
  OrderBlockVisual,
  FairValueGapVisual,
  LiquiditySweepVisual,
  WyckoffSchematicVisual,
  VolumeProfileVisual,
  RiskToRewardVisual,
  DrawdownCurveVisual,
  TradeManagementVisual
} from "./components/Illustrations";
import { Globe, Coins, Scale, Clock4, LineChart, Layers, ArrowUpRight, CandlestickChart, Activity, PieChart, Layout, Target, Monitor, Zap as ZapIcon, BarChart2, Eye, Settings, Brain, Dices, ClipboardList, BookOpen, TrendingUp, Zap, Shield } from "lucide-react";

export const courseCategories = [
  {
    id: "beginner",
    title: "Beginner's Bootcamp",
    description: "Master the fundamentals of forex trading. No prior experience needed.",
    icon: "graduation-cap",
    level: "beginner",
    modules: 5,
    lessons: 22,
    totalTime: 240,
    color: "#22c55e",
    prerequisites: []
  },
  {
    id: "intermediate",
    title: "Market Mechanics",
    description: "Understand advanced market structure, supply & demand, and liquidity.",
    icon: "trending-up",
    level: "intermediate",
    modules: 7,
    lessons: 22,
    totalTime: 330,
    color: "#3b82f6",
    prerequisites: ["beginner"]
  },
  {
    id: "advanced",
    title: "Institutional Execution",
    description: "Trade like the banks with institutional order flow and macro analysis.",
    icon: "zap",
    level: "advanced",
    modules: 6,
    lessons: 24,
    totalTime: 360,
    color: "#eab308",
    prerequisites: ["intermediate"]
  }
];

export const beginnerModules: ModuleData[] = [
  {
    title: "Module 1: Forex Fundamentals",
    icon: <Globe className="text-navy" size={24} />,
    lessons: [
      {
        id: "M1-L1",
        title: "The Invisible Giant: What is the Forex Market?",
        duration: "8 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Identify the core participants and mechanics of the global currency exchange",
          "Distinguish between the Forex market and traditional stock exchanges",
          "Describe the decentralized nature of the Over-The-Counter (OTC) market",
          "Recognise the scale of global liquidity and its impact on trade execution"
        ],
        introduction: "You use it every time you buy an imported product, travel abroad, or pay for a digital service from another country. Yet, most people never see the engine behind these transactions. The Forex market is the invisible giant of global finance—a 24-hour marketplace where the world's currencies are traded against one another. Understanding this scale is your first step toward professional trading.",
        sections: [
          {
            title: "The Largest Market on Earth",
            icon: <Globe size={24} />,
            illustration: <WhatIsForexVisual />,
            content: "The Foreign Exchange (Forex) market is the largest and most liquid financial market in the world. While the New York Stock Exchange (NYSE) trades roughly $200 billion daily, the Forex market processes over $6.6 trillion every single day. This massive volume creates a unique environment where price manipulation is nearly impossible and trade execution is instantaneous.\n\nUnlike traditional exchanges, Forex is a decentralized, 'Over-The-Counter' (OTC) market. There is no central building or physical location. Instead, it is a global electronic network of banks, financial institutions, and individual traders connected through their screens.",
            callout: {
              type: "info",
              text: "The Forex market is 25x larger than the global stock market. This massive liquidity means you can enter and exit trades instantly without worrying about finding a buyer or seller."
            }
          },
          {
            title: "How Currencies are Traded",
            icon: <Coins size={24} />,
            content: "In Forex, you are always trading a pair. You cannot simply 'buy' Euro; you must buy Euro while simultaneously selling another currency, such as the US Dollar. This relationship is expressed as a 'Pair' (e.g., EUR/USD).\n\nWhen you buy a pair, you are speculating that the first currency (the Base) will strengthen against the second currency (the Quote). If your prediction is correct, the value of your position increases.",
          }
        ],
        comparativeTable: {
          headers: ["Forex Market", "Stock Market"],
          rows: [
            { label: "Daily Volume", values: ["Over $6.6 Trillion", "Approx. $200 Billion (NYSE)"] },
            { label: "Trading Hours", values: ["24 Hours / 5 Days", "Fixed Exchange Hours"] },
            { label: "Centralization", values: ["Decentralized (OTC)", "Centralized Exchanges"] },
            { label: "Liquidity", values: ["Extreme (Instant execution)", "Variable (Depends on stock)"] }
          ]
        },
        takeaways: [
          "Forex is the exchange of one currency for another, operating as the world's largest financial market.",
          "The market is decentralized (OTC), meaning it exists as a global electronic network rather than a physical exchange.",
          "Liquidity is the defining characteristic of Forex, with over $6.6 trillion traded daily.",
          "Currencies are always traded in pairs, representing the relative value of one economy against another."
        ],
        practiceTask: {
          instruction: "Verify the scale of the market and its accessibility on your own charting platform.",
          steps: [
            "Open your trading platform (TradingView) and search for the 'DXY' (US Dollar Index).",
            "Observe the 24-hour price movement and note how the market never 'closes' during the week.",
            "Compare the spread (the gap between buy and sell) on a major pair like EUR/USD versus a minor pair."
          ]
        },
        riskManagement: "Because the market is open 24/5, it is easy to over-trade. Always define your trading hours and stick to them to avoid mental fatigue and poor decision-making.",
        quiz: [
          { 
            question: "Which of the following best describes the 'decentralized' nature of the Forex market?", 
            options: [
              "It is controlled by a single global central bank", 
              "It operates through a physical building in London", 
              "It is a global electronic network with no central exchange",
              "It only allows trading during New York business hours"
            ], 
            correctAnswer: 2,
            explanation: "Forex is an Over-The-Counter (OTC) market, meaning it has no physical location. It is a decentralized network of banks and traders connected electronically across the globe."
          }
        ],
        relatedLessons: [
          { title: "Who Trades Forex?", path: "/lesson/M1-L2" },
          { title: "Glossary: Liquidity", path: "/glossary?term=Liquidity" },
          { title: "Trading Lab: Market Hours", path: "/lab" }
        ],
        nextPreview: "Who Trades Forex?"
      },
      {
        id: "M1-L2",
        title: "The Hierarchy of Power: Who Trades Forex?",
        duration: "12 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Identify the four primary tiers of market participants in the Forex hierarchy",
          "Distinguish between the profit-driven motives of commercial banks and the policy-driven motives of central banks",
          "Describe the role of liquidity providers in facilitating retail trade execution",
          "Analyse how retail traders can align their strategies with institutional 'Smart Money' flow"
        ],
        introduction: "You’ve likely heard the statistic: 90% of retail traders lose money. But have you ever asked who is on the other side of those losing trades? In the Forex market, you aren't just trading against a screen; you are entering a global arena populated by the world's most powerful financial institutions. To survive, you must stop thinking like a 'retailer' and start understanding the 'whales' that move the price. This lesson pulls back the curtain on the market hierarchy, showing you exactly who moves the money—and why.",
        sections: [
          {
            title: "The Interbank Market: The Top Tier",
            icon: <Layers size={24} />,
            illustration: <MarketDriversSessionsVisual />,
            content: "At the very top of the Forex hierarchy is the Interbank Market. This is where the world's largest commercial banks—such as JP Morgan, Citi, and HSBC—trade currencies with each other. These banks handle the majority of the $6.6 trillion daily volume.\n\nThey don't just trade for themselves; they also facilitate transactions for large corporations and governments. Because of the massive size of their trades, they are the primary 'Liquidity Providers.' When you click 'buy' on your platform, your broker is often matching your order with the liquidity provided by these Tier 1 banks.",
            callout: {
              type: "info",
              text: "DEFINITION: Interbank Market - The top-level network where major banks trade currencies directly with one another, setting the 'core' price for the rest of the world."
            }
          },
          {
            title: "The Policy Makers: Central Banks",
            icon: <Shield size={24} />,
            content: "Central Banks, such as the Federal Reserve (USA) or the European Central Bank (EU), are the most influential participants. Unlike commercial banks, their primary goal is not profit. Instead, they trade to manage inflation, stabilize their national currency, and adjust interest rates.\n\nWhen a Central Bank changes an interest rate, it sends a shockwave through the market. Professional traders spend significant time studying Central Bank 'mandates' because these institutions have the power to create long-term trends that last for months or years.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Central banks are the 'architects' of the market. While technical analysis tells you WHERE to enter, Central Bank policy often tells you WHY the market is moving in a certain direction."
            }
          },
          {
            title: "Retail Traders: The Speculators",
            icon: <Activity size={24} />,
            content: "Retail traders are individuals like you, trading through brokers. While we are the most numerous group, our combined volume is a tiny fraction of the total market. We are 'speculators'—we aim to profit from the price movements created by the institutions.\n\nA common mistake is believing that retail buying or selling can move the price. In reality, price only moves when the 'Smart Money' (banks and hedge funds) enters the market. Our job is not to lead the market, but to identify where the institutions are going and follow their lead.",
            callout: {
              type: "warning",
              text: "✕ COMMON MISTAKE: Attempting to 'fight' a trend. Retail traders often try to pick tops or bottoms, while institutions prefer to trade with the momentum they have created."
            }
          }
        ],
        comparativeTable: {
          headers: ["Institutional (Smart Money)", "Retail (Speculators)"],
          rows: [
            { label: "Primary Goal", values: ["Facilitation & Policy / Large Scale Profit", "Individual Profit / Speculation"] },
            { label: "Trade Size", values: ["Billions of units per trade", "Micro, Mini, or Standard lots"] },
            { label: "Market Impact", values: ["Directly moves the price", "Zero impact on price movement"] },
            { label: "Information Access", values: ["Direct access to order flow data", "Relies on charts and public news"] }
          ]
        },
        takeaways: [
          "The Interbank Market is the core of Forex, dominated by major commercial banks.",
          "Central Banks trade to manage economic policy, not for direct profit.",
          "Commercial banks and hedge funds are the 'Smart Money' that creates market trends.",
          "Retail traders are speculative participants who must learn to follow institutional flow to be successful."
        ],
        practiceTask: {
          instruction: "Identify the 'Whales' currently influencing the market.",
          steps: [
            "Research the names of the top 3 commercial banks by Forex market share.",
            "Find the name of the current Chairperson of the US Federal Reserve.",
            "Look up the 'Mandate' of the European Central Bank (ECB) — what is their primary economic goal?"
          ]
        },
        riskManagement: "Institutions often target 'Retail Liquidity' (stop losses). Always place your stops in areas where the institutional logic would be invalidated, not just where it 'feels safe'.",
        quiz: [
          { 
            question: "What is the primary difference between the trading motives of a Central Bank and a Commercial Bank?", 
            options: [
              "Central Banks trade for maximum profit, while Commercial Banks trade for policy", 
              "Central Banks trade to manage economic stability, while Commercial Banks trade for profit and client facilitation", 
              "Commercial Banks set interest rates, while Central Banks provide liquidity to retail brokers",
              "There is no difference; both only care about daily profit"
            ], 
            correctAnswer: 1,
            explanation: "Central Banks are policy-driven; they use the market to control inflation and stability. Commercial Banks are profit-driven, earning money from spreads and speculative positions."
          }
        ],
        relatedLessons: [
          { title: "The Invisible Giant", path: "/lesson/M1-L1" },
          { title: "Glossary: Smart Money", path: "/glossary?term=Smart Money" },
          { title: "Trading Lab: Economic Calendar", path: "/lab" }
        ],
        nextPreview: "Currency Pairs & Exchange Rates"
      },
      {
        id: "M1-L3",
        title: "The Tug-of-War: Currency Pairs & Exchange Rates",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Distinguish between the Base currency and the Quote currency in any given pair",
          "Interpret an exchange rate to determine the exact cost of one unit of the base currency",
          "Calculate the profit or loss potential based on exchange rate fluctuations",
          "Explain how supply and demand dynamics influence the relative value of a currency pair"
        ],
        introduction: "In the world of Forex, you never trade a single currency in isolation. You are always comparing the strength of one economy against another. This relationship is expressed through a 'Pair'—the fundamental unit of all Forex trading. Whether you are buying the Euro or selling the Yen, you are participating in a tug-of-war between two global powers. This lesson will teach you how to read the 'price tag' of the world's currencies and understand exactly what happens when you click 'Trade'.",
        sections: [
          {
            title: "The Anatomy of a Pair: Base vs. Quote",
            icon: <Coins size={24} />,
            illustration: <CurrencyPairsVisual />,
            content: "Every Forex trade involves the simultaneous purchase of one currency and the sale of another. This is why currencies are always quoted in pairs, such as EUR/USD or GBP/JPY.\n\nThe first currency listed is called the **Base Currency**. It is always equal to 1 unit. The second currency is the **Quote Currency** (or Counter Currency). The exchange rate tells you how much of the quote currency is required to buy one single unit of the base currency.",
            callout: {
              type: "info",
              text: "DEFINITION: Base Currency - The first currency in a pair. It is the 'commodity' you are buying or selling. It always represents 1 unit."
            }
          },
          {
            title: "Reading the Price Tag",
            icon: <Activity size={24} />,
            content: "If you see EUR/USD = 1.0850, it means that 1 Euro is worth 1.0850 US Dollars. If the price moves to 1.0900, the Euro has become more expensive (strengthened), or the Dollar has become cheaper (weakened).\n\nWhen you 'Go Long' (Buy), you are betting that the Base currency will increase in value relative to the Quote. When you 'Go Short' (Sell), you are betting that the Base currency will decrease in value relative to the Quote.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: In a rising market (Uptrend), the Base currency is winning the tug-of-war. In a falling market (Downtrend), the Quote currency is winning."
            }
          }
        ],
        formula: {
          expression: "Base Currency (1 Unit) = Exchange Rate × Quote Currency",
          variables: [
            { name: "Base Currency", desc: "The first currency in the pair (e.g., EUR)" },
            { name: "Exchange Rate", desc: "The current market price of the pair" },
            { name: "Quote Currency", desc: "The second currency in the pair (e.g., USD)" }
          ],
          example: "Pair: GBP/USD\nExchange Rate: 1.2500\n\nThis means:\n1 British Pound (£1) = 1.2500 US Dollars ($1.25)\n\nIf you buy 100,000 GBP (1 Standard Lot), you are effectively 'controlling' $125,000 USD."
        },
        comparativeTable: {
          headers: ["Base Currency", "Quote Currency"],
          rows: [
            { label: "Position", values: ["First currency in the pair", "Second currency in the pair"] },
            { label: "Unit Value", values: ["Always represents 1 unit", "Variable value based on the rate"] },
            { label: "Buying the Pair", values: ["You are BUYING this currency", "You are SELLING this currency"] },
            { label: "Selling the Pair", values: ["You are SELLING this currency", "You are BUYING this currency"] }
          ]
        },
        takeaways: [
          "Currencies are always traded in pairs, representing a relative value relationship.",
          "The Base currency is the first listed and always equals 1 unit.",
          "The Quote currency is the second listed and its value fluctuates against the base.",
          "An increasing exchange rate indicates a strengthening Base or a weakening Quote."
        ],
        practiceTask: {
          instruction: "Read and interpret live market 'price tags'.",
          steps: [
            "Open TradingView and find the current rate for AUD/USD.",
            "Identify which currency is the Base and which is the Quote.",
            "If the rate is 0.6500, calculate how many Australian Dollars you would get for 1,000 US Dollars (Hint: you need to divide)."
          ]
        },
        riskManagement: "Exchange rates are influenced by high-impact news. Never enter a trade right before a major interest rate decision, as the 'tug-of-war' can become extremely violent and unpredictable.",
        quiz: [
          { 
            question: "If a trader 'Sells' the GBP/JPY pair, what is their actual market expectation?", 
            options: [
              "They expect the British Pound to strengthen against the Japanese Yen", 
              "They expect the Japanese Yen to strengthen against the British Pound", 
              "They expect both currencies to lose value equally",
              "They are buying the British Pound using Japanese Yen"
            ], 
            correctAnswer: 1,
            explanation: "Selling a pair means you expect the Base currency (GBP) to weaken or the Quote currency (JPY) to strengthen. Therefore, you are betting on Yen strength."
          }
        ],
        relatedLessons: [
          { title: "Hierarchy of Power", path: "/lesson/M1-L2" },
          { title: "Pips & Points", path: "/lesson/M2-L1" },
          { title: "Glossary: Exchange Rate", path: "/glossary?term=Exchange Rate" }
        ],
        nextPreview: "Majors, Minors, and Exotics"
      },
      {
        id: "M1-L4",
        title: "Choosing Your Battlefield: Majors, Minors, and Exotics",
        duration: "10 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Identify the seven 'Major' currency pairs and explain why they are the most traded",
          "Distinguish between 'Minor' (Cross) pairs and 'Exotic' pairs based on liquidity and spread",
          "Explain the relationship between trading volume and transaction costs (spread)",
          "Evaluate which category of currency pairs is most suitable for a beginner trader’s risk profile"
        ],
        introduction: "Not all currency pairs are created equal. In the Forex market, some pairs move smoothly with massive volume and low costs, while others are wild, unpredictable, and expensive to trade. Choosing the right pair is like choosing the right terrain for a race—you wouldn't take a sports car into a swamp. This lesson will help you categorize the hundreds of available pairs into three distinct groups: Majors, Minors, and Exotics, so you can focus your energy where the odds are in your favor.",
        sections: [
          {
            title: "The Majors: The Global Heavyweights",
            icon: <Activity size={24} />,
            illustration: <CurrencyPairsVisual />,
            content: "The 'Majors' are the most heavily traded currency pairs in the world. They all share one common characteristic: they include the US Dollar (USD) on one side of the pair. Because the USD is the world's primary reserve currency, these pairs have the highest liquidity.\n\nHigh liquidity means there are millions of buyers and sellers active at any given second. This results in the lowest 'Spreads' (transaction costs) and the most reliable price action. The 'Big Seven' majors include: EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD, and NZD/USD.",
            callout: {
              type: "info",
              text: "DEFINITION: Spread - The difference between the 'Buy' price and the 'Sell' price. It is the primary cost of entering a trade."
            }
          },
          {
            title: "Minors and Exotics: The Specialists and Wildcards",
            icon: <TrendingUp size={24} />,
            content: "**Minors (or Crosses)** are pairs that do not include the USD but consist of other major currencies (e.g., EUR/GBP, GBP/JPY). They have good liquidity but slightly higher spreads than the majors.\n\n**Exotics** pair a major currency with one from a developing economy (e.g., USD/ZAR, USD/TRY). These pairs are the 'swamps' of the Forex world. They have very low liquidity, meaning price can jump (gap) unpredictably, and the spreads are often 10x to 50x higher than major pairs.",
            callout: {
              type: "warning",
              text: "⚠ IMPORTANT: As a beginner, avoid Exotic pairs. The high cost of the spread and the lack of predictable price action make them extremely difficult to trade profitably."
            }
          }
        ],
        comparativeTable: {
          headers: ["Majors", "Minors (Crosses)", "Exotics"],
          rows: [
            { label: "USD Inclusion", values: ["Always included", "Never included", "Usually included"] },
            { label: "Liquidity", values: ["Extreme (Highest)", "Moderate to High", "Very Low"] },
            { label: "Spread (Cost)", values: ["Lowest (Cheapest)", "Moderate", "Very High (Expensive)"] },
            { label: "Volatility", values: ["Stable / Trending", "Moderate", "Extreme / Unpredictable"] }
          ]
        },
        takeaways: [
          "Majors are the most liquid and cheapest pairs to trade, always involving the USD.",
          "Minors (Crosses) are major currencies traded against each other without the USD.",
          "Exotics involve developing economies and carry high transaction costs and risks.",
          "Beginners should focus exclusively on Major pairs to minimize costs and maximize reliability."
        ],
        practiceTask: {
          instruction: "Categorize your market watchlist.",
          steps: [
            "Open TradingView and add the following pairs to a list: EUR/USD, GBP/JPY, USD/MXN, AUD/CAD.",
            "Label each one as Major, Minor, or Exotic.",
            "Compare the 'Spread' for EUR/USD versus USD/MXN. Note how much more the price has to move just for you to break even on the Exotic pair."
          ]
        },
        riskManagement: "High spreads on Exotic pairs mean you start every trade with a significant 'debt' to the broker. This makes it much harder to achieve a positive Risk-to-Reward ratio.",
        quiz: [
          { 
            question: "What is the defining characteristic of a 'Major' currency pair?", 
            options: [
              "It must include the British Pound (GBP)", 
              "It must include the US Dollar (USD)", 
              "It must have a high exchange rate (over 100.00)",
              "It is only traded during the London session"
            ], 
            correctAnswer: 1,
            explanation: "To be classified as a Major, the pair must include the US Dollar (USD) and another major global currency (like EUR, JPY, or GBP)."
          }
        ],
        relatedLessons: [
          { title: "The Tug-of-War", path: "/lesson/M1-L3" },
          { title: "Bid, Ask & Spread", path: "/lesson/M2-L4" },
          { title: "Glossary: Spread", path: "/glossary?term=Spread" }
        ],
        nextPreview: "Market Sessions & Liquidity"
      },
      {
        id: "M1-L5",
        title: "The 24-Hour Relay: Market Sessions & Liquidity",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Identify the four major global trading sessions and their specific operating hours",
          "Explain the concept of 'Session Overlap' and why it represents the highest liquidity in the market",
          "Analyse how liquidity affects price volatility and the reliability of technical signals",
          "Determine the optimal trading window based on your local time zone and chosen currency pairs"
        ],
        introduction: "The Forex market never sleeps, but it does take 'naps'. While you can technically trade at 2 AM on a Tuesday, the market environment at that time is vastly different from the environment at 2 PM. Trading is not just about WHAT you trade, but WHEN you trade. In this lesson, we will map out the 24-hour global cycle, identifying the 'Golden Hours' where liquidity is at its peak and the 'Dead Zones' where trading becomes a high-risk, low-reward gamble.",
        sections: [
          {
            title: "The 24-Hour Relay Race",
            icon: <Clock4 size={24} />,
            illustration: <MarketDriversSessionsVisual />,
            content: "Forex trading follows the sun. As one major financial hub closes, another opens, creating a continuous 24-hour cycle from Sunday evening to Friday evening (EST). The four primary sessions are:\n\n1. **Sydney Session**: The start of the trading day. Generally low volatility.\n2. **Tokyo Session**: Represents the Asian market. Often characterized by range-bound movement.\n3. **London Session**: The most important session. This is where the 'Big Money' enters, and major trends are often established.\n4. **New York Session**: The second most liquid session, often seeing high volatility as it overlaps with London.",
            callout: {
              type: "info",
              text: "DEFINITION: Liquidity - The volume of buy and sell orders available in the market. High liquidity allows you to enter and exit trades instantly at the price you want."
            }
          },
          {
            title: "The Golden Hours: Session Overlaps",
            icon: <ZapIcon size={24} />,
            content: "The most profitable opportunities usually occur during a **Session Overlap**—when two major markets are open simultaneously. The most critical overlap is the **London/New York Overlap** (approx. 8:00 AM to 12:00 PM EST).\n\nDuring this window, billions of dollars are moving as both European and American banks are active. Spreads are at their tightest, and price action is most reliable. Conversely, the 'Dead Zone' between the New York close and the Sydney open is the most dangerous time to trade due to low liquidity and widening spreads.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The 'London Open' (3:00 AM EST) often creates a 'Fakeout' move before establishing the true direction for the day. Professional traders often wait for the first hour of London to pass before entering."
            }
          }
        ],
        comparativeTable: {
          headers: ["Session", "Volatility", "Best Pairs to Trade", "Characteristics"],
          rows: [
            { label: "Sydney", values: ["Low", "AUD, NZD", "Quiet, often consolidates"] },
            { label: "Tokyo", values: ["Moderate", "JPY pairs", "Range-bound, technical"] },
            { label: "London", values: ["High", "EUR, GBP, CHF", "Trend-setting, high volume"] },
            { label: "New York", values: ["High", "USD, CAD", "Aggressive, news-driven"] }
          ]
        },
        takeaways: [
          "The Forex market operates in a 24-hour cycle across four major global sessions.",
          "Liquidity is highest when two major sessions overlap, particularly London and New York.",
          "High liquidity leads to lower transaction costs (tighter spreads) and clearer trends.",
          "Avoid trading during 'Dead Zones' or major bank holidays when liquidity drops significantly."
        ],
        practiceTask: {
          instruction: "Map the global market to your local clock.",
          steps: [
            "Identify your local time zone (e.g., GMT, EST, PST).",
            "Convert the London Open (8:00 AM GMT) and the New York Open (1:00 PM GMT) to your local time.",
            "Mark the 'London/NY Overlap' on your calendar. This is your primary window for high-probability trading."
          ]
        },
        riskManagement: "⚠ IMPORTANT: Trading during low-liquidity periods (like the 'Asian Range' or late Friday) increases the risk of 'Slippage'—where your order is filled at a much worse price than you intended.",
        quiz: [
          { 
            question: "Why is the London/New York overlap considered the best time to trade?", 
            options: [
              "Because the banks are closed and the market is quiet", 
              "Because it represents the highest combined volume and liquidity of the day", 
              "Because it is the only time you can trade the US Dollar",
              "Because price moves the slowest during this time"
            ], 
            correctAnswer: 1,
            explanation: "The overlap between the two largest financial hubs (London and NY) creates a surge in volume, resulting in tighter spreads and more reliable price trends."
          }
        ],
        relatedLessons: [
          { title: "The Invisible Giant", path: "/lesson/M1-L1" },
          { title: "What is Liquidity?", path: "/lesson/M15-L1" },
          { title: "Trading Lab: Session Timer", path: "/lab" }
        ],
        nextPreview: "Module 2: Price & Trade Basics"
      }
    ]
  },
  {
    title: "Module 2: Price & Trade Basics",
    icon: <Scale className="text-navy" size={24} />,
    lessons: [
      {
        id: "M2-L1",
        title: "The Heartbeat of Price: Understanding Pips and Points",
        duration: "12 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Define a 'Pip' and a 'Pipette' and identify their positions in a standard exchange rate",
          "Calculate the total pip movement between two different price points",
          "Distinguish between 4-decimal and 5-decimal pricing structures",
          "Explain the unique pip calculation for JPY-based currency pairs"
        ],
        introduction: "In the stock market, you talk about dollars and cents. In the Forex market, we talk about Pips. A Pip is the heartbeat of a currency pair—the smallest standard unit of price movement. Whether you are aiming for a 20-pip profit or a 50-pip stop loss, understanding this measurement is non-negotiable. Without it, you cannot calculate your risk, your position size, or your profit. This lesson will turn you into a pip-counting expert, covering everything from standard pairs to the unique world of the Japanese Yen.",
        sections: [
          {
            title: "What is a Pip?",
            icon: <Activity size={24} />,
            illustration: <PipsLotsLeverageVisual />,
            content: "A **Pip** (Percentage in Point) is the unit of measurement used to express the change in value between two currencies. For most currency pairs, such as EUR/USD, a pip is the **fourth decimal place** (0.0001).\n\nIf EUR/USD moves from 1.0850 to 1.0851, that 0.0001 USD rise is **one pip**. Most modern brokers now provide 'Fractional Pip' pricing, adding a fifth decimal place called a **Pipette**. A pipette is 1/10th of a pip. So, if the price moves from 1.08500 to 1.08501, that is one pipette.",
            callout: {
              type: "info",
              text: "DEFINITION: Pip - The 4th decimal digit in most currency pairs. It represents the standard unit of price change."
            }
          },
          {
            title: "The JPY Exception",
            icon: <ZapIcon size={24} />,
            content: "The Japanese Yen (JPY) is the major exception to the 4-decimal rule. Because the value of the Yen is much lower relative to other major currencies, JPY pairs are quoted to only two or three decimal places.\n\nIn a pair like USD/JPY, a pip is the **second decimal place** (0.01). If USD/JPY moves from 145.50 to 145.51, that is one pip. If it moves to 145.501, that third digit is the pipette.",
            callout: {
              type: "warning",
              text: "⚠ CRITICAL: Always check if you are trading a JPY pair before calculating your risk. Miscounting pips on the Yen is one of the most common ways beginners blow their accounts."
            }
          }
        ],
        formula: {
          expression: "Pip Value = (0.0001 / Exchange Rate) × Lot Size",
          variables: [
            { name: "0.0001", desc: "The decimal value of one pip (use 0.01 for JPY pairs)" },
            { name: "Exchange Rate", desc: "The current price of the pair" },
            { name: "Lot Size", desc: "The amount of currency you are trading" }
          ],
          example: "Price Change Calculation:\nEUR/USD Entry: 1.1050\nEUR/USD Exit: 1.1085\n\nCalculation: 1.1085 - 1.1050 = 0.0035\nResult: 35 Pips"
        },
        comparativeTable: {
          headers: ["Standard Pairs (e.g. EUR/USD)", "JPY Pairs (e.g. USD/JPY)"],
          rows: [
            { label: "Pip Position", values: ["4th Decimal Place (0.0001)", "2nd Decimal Place (0.01)"] },
            { label: "Pipette Position", values: ["5th Decimal Place (0.00001)", "3rd Decimal Place (0.001)"] },
            { label: "Example Rate", values: ["1.08505", "145.502"] },
            { label: "10 Pip Move", values: ["1.08505 → 1.08605", "145.502 → 145.602"] }
          ]
        },
        takeaways: [
          "A Pip is the standard unit of measurement for price movement in Forex.",
          "For most pairs, a pip is the 4th decimal; for JPY pairs, it is the 2nd decimal.",
          "A Pipette is a fractional pip (1/10th of a pip), found at the end of the rate.",
          "Accurate pip counting is the foundation of risk management and profit calculation."
        ],
        practiceTask: {
          instruction: "Calculate pip movements across different pairs.",
          steps: [
            "Calculate the pips if GBP/USD moves from 1.2640 to 1.2695.",
            "Calculate the pips if USD/JPY moves from 150.20 to 150.85.",
            "Open TradingView, use the 'Measure' tool (Ruler icon), and drag it between two price points to see the pip count automatically."
          ]
        },
        riskManagement: "Never enter a trade without knowing exactly how many pips your 'Stop Loss' is. This number determines your position size and your total dollar risk.",
        quiz: [
          { 
            question: "In the currency pair EUR/JPY, which decimal place represents a single Pip?", 
            options: [
              "The fourth decimal place (0.0001)", 
              "The second decimal place (0.01)", 
              "The fifth decimal place (0.00001)",
              "The first decimal place (0.1)"
            ], 
            correctAnswer: 1,
            explanation: "Japanese Yen (JPY) pairs are the exception. A pip is always the second decimal place (0.01) in JPY pairs."
          }
        ],
        relatedLessons: [
          { title: "The Tug-of-War", path: "/lesson/M1-L3" },
          { title: "Lots, Leverage & Margin", path: "/lesson/M2-L2" },
          { title: "Glossary: Pip", path: "/glossary?term=Pip" }
        ],
        nextPreview: "Lot Sizes & Contract Value"
      },
      {
        id: "M2-L2",
        title: "The Weight of the Trade: Lot Sizes & Contract Value",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Identify the three standard lot sizes (Standard, Mini, Micro) and their respective unit values",
          "Calculate the total contract value of a trade based on the chosen lot size",
          "Explain the relationship between lot size and the monetary value of a single pip",
          "Determine the appropriate lot size to use based on a specific account balance and risk percentage"
        ],
        introduction: "If Pips are the distance, 'Lots' are the weight. In Forex, you don't just trade 'some' money; you trade in standardized blocks called Lots. The lot size you choose is the single most important lever you have for controlling your risk. It determines whether a 10-pip move earns you $1 or $100. This lesson will break down the three primary lot sizes used by traders and show you how to calculate the real-world value of your positions before you ever hit the 'Buy' button.",
        sections: [
          {
            title: "Standardized Trading: The Three Lot Sizes",
            icon: <Layers size={24} />,
            illustration: <PipsLotsLeverageVisual />,
            content: "In the Forex market, currencies are traded in standardized amounts called **Lots**. This allows for consistency across global brokers and exchanges. There are three primary lot sizes that every retail trader must know:\n\n1. **Standard Lot (1.00)**: Represents 100,000 units of the base currency.\n2. **Mini Lot (0.10)**: Represents 10,000 units of the base currency.\n3. **Micro Lot (0.01)**: Represents 1,000 units of the base currency.\n\nWhen you enter a trade of '0.10' on your platform, you are effectively controlling 10,000 units of the currency you are buying.",
            callout: {
              type: "info",
              text: "DEFINITION: Lot Size - The standardized quantity of a financial instrument being traded. It dictates the 'weight' of your position."
            }
          },
          {
            title: "The Pip Value Connection",
            icon: <Activity size={24} />,
            content: "The lot size you choose directly determines the monetary value of each pip move. For most major pairs where the USD is the quote currency (like EUR/USD):\n\n- **1.00 Lot**: 1 Pip ≈ $10.00\n- **0.10 Lot**: 1 Pip ≈ $1.00\n- **0.01 Lot**: 1 Pip ≈ $0.10\n\nThis means if you are trading a Standard Lot and the price moves 10 pips in your favor, you earn $100. If you are trading a Micro Lot, that same 10-pip move earns you only $1.00.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Professional traders don't choose their lot size based on how much they want to make. They choose it based on how much they are willing to lose if their 'Stop Loss' is hit."
            }
          }
        ],
        formula: {
          expression: "Contract Value = Lot Size × 100,000 Units",
          variables: [
            { name: "Lot Size", desc: "The volume entered in your trading platform (e.g., 0.05)" },
            { name: "100,000 Units", desc: "The standard unit count for a 1.00 lot" }
          ],
          example: "Trade: 0.25 Lots of EUR/USD\nCalculation: 0.25 × 100,000 = 25,000 Units\n\nIf the exchange rate is 1.1000, the total 'Contract Value' is $27,500 USD."
        },
        comparativeTable: {
          headers: ["Lot Type", "Volume (Lots)", "Units of Currency", "Approx. Pip Value (USD)"],
          rows: [
            { label: "Standard", values: ["1.00", "100,000", "$10.00"] },
            { label: "Mini", values: ["0.10", "10,000", "$1.00"] },
            { label: "Micro", values: ["0.01", "1,000", "$0.10"] },
            { label: "Nano (Rare)", values: ["0.001", "100", "$0.01"] }
          ]
        },
        takeaways: [
          "Forex is traded in standardized blocks called Lots (Standard, Mini, Micro).",
          "The lot size determines the total contract value and the monetary value of each pip.",
          "A Standard Lot is 100,000 units; a Mini is 10,000; a Micro is 1,000.",
          "Position sizing (choosing the right lot) is the most critical part of risk management."
        ],
        practiceTask: {
          instruction: "Calculate the 'weight' of your potential trades.",
          steps: [
            "If you trade 0.05 lots, how many units of currency are you controlling?",
            "If you have a 20-pip stop loss and you trade 0.10 lots, how much money are you risking in dollars?",
            "Open your broker's demo account and practice entering orders with 0.01, 0.10, and 1.00 lots to see how the 'Margin Required' changes."
          ]
        },
        riskManagement: "⚠ WARNING: Increasing your lot size to 'recover losses' is the fastest way to blow a trading account. Stick to a consistent risk percentage (e.g., 1% per trade).",
        quiz: [
          { 
            question: "How many units of the base currency are contained in a single 'Mini Lot' (0.10)?", 
            options: [
              "1,000 units", 
              "10,000 units", 
              "100,000 units",
              "100 units"
            ], 
            correctAnswer: 1,
            explanation: "A Mini Lot (0.10) represents 10,000 units of the base currency. A Micro is 1,000 and a Standard is 100,000."
          }
        ],
        relatedLessons: [
          { title: "Understanding Pips", path: "/lesson/M2-L1" },
          { title: "Leverage & Margin", path: "/lesson/M2-L3" },
          { title: "Glossary: Lot Size", path: "/glossary?term=Lot Size" }
        ],
        nextPreview: "Leverage & Margin Explained"
      },
      {
        id: "M2-L3",
        title: "The Double-Edged Sword: Leverage & Margin Explained",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Define 'Leverage' and 'Margin' and explain their roles in increasing buying power",
          "Calculate the required margin for a trade based on the leverage ratio provided by a broker",
          "Identify the risks associated with high leverage and the potential for a 'Margin Call'",
          "Distinguish between 'Used Margin' and 'Free Margin' in a live trading account"
        ],
        introduction: "Leverage is the 'superpower' of the Forex market. It allows a trader with a $1,000 account to control $100,000 worth of currency. But like any superpower, it is a double-edged sword. While it can amplify your profits to life-changing levels, it can equally amplify your losses, leading to the dreaded 'Margin Call'. This lesson will demystify how leverage works, how brokers calculate your margin requirements, and how to use this tool safely without gambling your entire account.",
        sections: [
          {
            title: "Buying Power: What is Leverage?",
            icon: <ZapIcon size={24} />,
            illustration: <PipsLotsLeverageVisual />,
            content: "Leverage is essentially a 'loan' provided by your broker that allows you to trade much larger positions than your actual account balance would allow. It is expressed as a ratio, such as 1:30, 1:100, or 1:500.\n\nIf you have 1:100 leverage, for every $1 you have in your account, you can control $100 in the market. This means with a $1,000 deposit, you can open a position worth $100,000 (one Standard Lot). This amplification is what makes Forex trading accessible to retail individuals.",
            callout: {
              type: "info",
              text: "DEFINITION: Leverage - The use of borrowed capital to increase the potential return (and risk) of an investment."
            }
          },
          {
            title: "Margin: The Collateral",
            icon: <Shield size={24} />,
            content: "Margin is not a fee; it is a portion of your account balance that the broker 'locks' as collateral to keep a leveraged position open. \n\n- **Used Margin**: The amount currently locked to cover your open trades.\n- **Free Margin**: The amount remaining in your account that you can use to open new trades or absorb losses.\n\nIf your losses become too large and your 'Free Margin' hits zero, the broker will trigger a **Margin Call**, automatically closing your positions to prevent your account from going into a negative balance.",
            callout: {
              type: "warning",
              text: "⚠ CRITICAL: High leverage does not change the probability of a trade winning; it only changes how much you win or lose when the price moves. Most beginners blow their accounts because they use too much leverage."
            }
          }
        ],
        formula: {
          expression: "Required Margin = Total Position Value / Leverage Ratio",
          variables: [
            { name: "Total Position Value", desc: "The full contract value of the trade (e.g., $100,000)" },
            { name: "Leverage Ratio", desc: "The leverage provided by your broker (e.g., 100)" }
          ],
          example: "Position: 1 Standard Lot ($100,000)\nLeverage: 1:500\n\nCalculation: 100,000 / 500 = $200\nResult: You only need $200 in your account to open this $100,000 trade."
        },
        comparativeTable: {
          headers: ["Leverage Ratio", "Margin Required (for $100k)", "Buying Power", "Risk Level"],
          rows: [
            { label: "1:1 (No Leverage)", values: ["$100,000", "1x", "Very Low"] },
            { label: "1:30 (Standard EU)", values: ["$3,333", "30x", "Moderate"] },
            { label: "1:100", values: ["$1,000", "100x", "High"] },
            { label: "1:500", values: ["$200", "500x", "Extremely High"] }
          ]
        },
        takeaways: [
          "Leverage allows you to control large positions with a small amount of capital.",
          "Margin is the collateral required by the broker to maintain a leveraged trade.",
          "High leverage amplifies both profits and losses equally.",
          "A Margin Call occurs when your account no longer has enough free margin to support your open losses."
        ],
        practiceTask: {
          instruction: "Calculate your 'Safety Buffer'.",
          steps: [
            "If you have a $5,000 account and you open a $100,000 position with 1:100 leverage, how much 'Used Margin' is locked? ($1,000).",
            "How much 'Free Margin' do you have left? ($4,000).",
            "If the trade goes against you by 40 pips ($400 loss on a standard lot), what is your new Free Margin? ($3,600)."
          ]
        },
        riskManagement: "◈ PRO TIP: Just because your broker offers 1:500 leverage doesn't mean you should use it. Professional traders often keep their 'Effective Leverage' below 1:10 to ensure they can survive market volatility.",
        quiz: [
          { 
            question: "What happens during a 'Margin Call'?", 
            options: [
              "The broker gives you a bonus to keep trading", 
              "The broker automatically closes your losing positions because you lack sufficient collateral", 
              "Your leverage is increased to help you recover",
              "The market stops moving until you deposit more money"
            ], 
            correctAnswer: 1,
            explanation: "A Margin Call is a protective measure. When your account equity falls below the required margin, the broker closes your trades to prevent your balance from going negative."
          }
        ],
        relatedLessons: [
          { title: "Lot Sizes & Value", path: "/lesson/M2-L2" },
          { title: "Bid, Ask & Spread", path: "/lesson/M2-L4" },
          { title: "Glossary: Leverage", path: "/glossary?term=Leverage" }
        ],
        nextPreview: "Bid, Ask, and The Spread"
      },
      {
        id: "M2-L4",
        title: "The Cost of Entry: Bid, Ask, and The Spread",
        duration: "10 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Define the 'Bid' and 'Ask' prices and identify which one applies to buying vs. selling",
          "Calculate the 'Spread' in pips for any given currency pair",
          "Explain how the spread acts as a transaction cost for every trade",
          "Identify the factors that cause spreads to widen or tighten in the live market"
        ],
        introduction: "In every trade, you start slightly in the red. This isn't because you made a mistake—it's because of the 'Spread'. The spread is the difference between the price you can sell at (Bid) and the price you must buy at (Ask). It is the primary way brokers make their money and serves as your 'entry fee' for the market. Understanding the spread is vital for short-term traders, as a high spread can turn a winning strategy into a losing one before you even begin. This lesson will teach you how to calculate these costs and when to avoid trading to keep your expenses low.",
        sections: [
          {
            title: "The Two-Way Quote",
            icon: <Scale size={24} />,
            illustration: <OrderTypesVisual />,
            content: "When you look at a Forex quote, you will always see two prices. This is called a 'Two-Way Quote'.\n\n- **The Bid**: The price at which the market (or broker) is willing to buy the base currency from you. This is the price you use when you want to **Sell (Short)**.\n- **The Ask**: The price at which the market is willing to sell the base currency to you. This is the price you use when you want to **Buy (Long)**.\n\nThe Ask price is always higher than the Bid price. Think of it like a currency exchange at an airport: they buy your dollars for less than they sell them back to you. That difference is their profit.",
            callout: {
              type: "info",
              text: "DEFINITION: Bid - The 'Sell' price. Ask - The 'Buy' price. The difference is the Spread."
            }
          },
          {
            title: "The Spread: Your Transaction Cost",
            icon: <Activity size={24} />,
            content: "The **Spread** is the difference between the Bid and the Ask, measured in pips. If the EUR/USD Bid is 1.0850 and the Ask is 1.0852, the spread is **2 pips**.\n\nBecause you buy at the higher price and sell at the lower price, you are effectively paying those 2 pips to the broker the moment you open the trade. To reach 'Break Even' (zero profit/loss), the market must move in your favor by the amount of the spread.",
            callout: {
              type: "warning",
              text: "⚠ WARNING: Spreads are not fixed. During major news events or at the 'New York Close' (5 PM EST), liquidity drops and spreads can 'blow out' to 10x their normal size. Avoid trading during these times."
            }
          }
        ],
        formula: {
          expression: "Spread = Ask Price - Bid Price",
          variables: [
            { name: "Ask Price", desc: "The higher price (Buy price)" },
            { name: "Bid Price", desc: "The lower price (Sell price)" }
          ],
          example: "Pair: GBP/USD\nBid: 1.2650\nAsk: 1.26515\n\nCalculation: 1.26515 - 1.2650 = 0.00015\nResult: 1.5 Pips"
        },
        comparativeTable: {
          headers: ["Pair Category", "Typical Spread", "Liquidity", "Best Time to Trade"],
          rows: [
            { label: "Majors (e.g. EUR/USD)", values: ["0.0 - 1.5 Pips", "Extremely High", "London / New York"] },
            { label: "Minors (e.g. GBP/JPY)", values: ["2.0 - 5.0 Pips", "Moderate", "Active Sessions"] },
            { label: "Exotics (e.g. USD/ZAR)", values: ["50 - 200+ Pips", "Very Low", "Avoid unless necessary"] }
          ]
        },
        takeaways: [
          "The Bid is the price you sell at; the Ask is the price you buy at.",
          "The Ask is always higher than the Bid.",
          "The Spread is the difference between the two and represents your entry cost.",
          "Spreads widen during low liquidity (market close) and high volatility (news)."
        ],
        practiceTask: {
          instruction: "Analyze live trading costs.",
          steps: [
            "Open your trading platform and find the 'Market Watch' window.",
            "Compare the spread of EUR/USD (Major) vs. EUR/TRY (Exotic).",
            "Calculate how many pips the market must move for you to break even on a GBP/USD trade right now."
          ]
        },
        riskManagement: "◈ PRO TIP: Scalpers (traders who aim for small profits) must use brokers with 'Raw Spreads' (near zero). If your target is only 5 pips, a 2-pip spread eats 40% of your potential profit.",
        quiz: [
          { 
            question: "If you want to enter a 'Buy' (Long) position, which price will you pay?", 
            options: [
              "The Bid Price", 
              "The Ask Price", 
              "The Mid-Market Price",
              "The Average of Bid and Ask"
            ], 
            correctAnswer: 1,
            explanation: "You always buy at the 'Ask' (higher) price and sell at the 'Bid' (lower) price. The broker keeps the difference."
          }
        ],
        relatedLessons: [
          { title: "Majors & Minors", path: "/lesson/M1-L4" },
          { title: "Types of Orders", path: "/lesson/M2-L5" },
          { title: "Glossary: Spread", path: "/glossary?term=Spread" }
        ],
        nextPreview: "Types of Orders"
      },
      {
        id: "M2-L5",
        title: "Mastering Execution: Types of Orders (Market, Limit, Stop)",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 5,
        objectives: [
          "Distinguish between 'Market Orders' and 'Pending Orders'",
          "Explain the difference between 'Limit' and 'Stop' orders for both buying and selling",
          "Execute a 'Stop Loss' and 'Take Profit' order to manage risk and lock in gains",
          "Identify the best order type to use based on specific market conditions and entry strategies"
        ],
        introduction: "You don't always have to be at your computer to enter a trade. In fact, professional traders rarely sit and wait for a price to hit their level—they use 'Pending Orders'. Whether you want to buy immediately at the current price or wait for the market to reach a specific 'discount' zone, understanding order types is your key to automation and emotional control. This lesson will break down the mechanics of Market, Limit, and Stop orders, ensuring you can execute your strategy with surgical precision, even while you sleep.",
        sections: [
          {
            title: "Immediate Action: The Market Order",
            icon: <ZapIcon size={24} />,
            illustration: <OrderTypesVisual />,
            content: "A **Market Order** is an instruction to buy or sell a currency pair immediately at the best available current price. \n\n- **Pros**: Guaranteed execution. You are in the trade instantly.\n- **Cons**: You have no control over the price. During high volatility, you may experience 'Slippage', where your actual entry price is different from what you saw on the screen.\n\nMarket orders are best used when you need to enter a fast-moving trend right now.",
            callout: {
              type: "info",
              text: "DEFINITION: Market Order - An order to execute a trade immediately at the current market price."
            }
          },
          {
            title: "Planning Ahead: Pending Orders",
            icon: <Clock4 size={24} />,
            content: "Pending orders allow you to specify the exact price at which you want to enter the market. There are two main types:\n\n1. **Limit Orders**: Used when you want to buy at a price *lower* than the current market (a discount) or sell at a price *higher* than the current market (a premium).\n2. **Stop Orders**: Used when you want to buy at a price *higher* than the current market or sell at a price *lower* than the current market. These are typically used for 'Breakout' strategies.\n\nBy using pending orders, you remove the emotion of 'chasing' the price and ensure you only enter when the market meets your specific criteria.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Limit orders are for 'Value' (buying low). Stop orders are for 'Momentum' (buying as the price breaks through a ceiling)."
            }
          }
        ],
        formula: {
          expression: "Order Selection Logic",
          variables: [
            { name: "Buy Limit", desc: "Price < Current Price (Buying a dip)" },
            { name: "Buy Stop", desc: "Price > Current Price (Buying a breakout)" },
            { name: "Sell Limit", desc: "Price > Current Price (Selling a rally)" },
            { name: "Sell Stop", desc: "Price < Current Price (Selling a breakdown)" }
          ],
          example: "Current Price: 1.1000\nYou want to buy if the price drops to 1.0950.\nOrder Type: **Buy Limit**"
        },
        comparativeTable: {
          headers: ["Order Type", "Execution", "Price Control", "Best Use Case"],
          rows: [
            { label: "Market", values: ["Instant", "None (Slippage risk)", "Entering a fast trend"] },
            { label: "Limit", values: ["Delayed", "Exact or Better", "Buying at support/discount"] },
            { label: "Stop", values: ["Delayed", "Exact (Slippage risk)", "Trading breakouts"] }
          ]
        },
        takeaways: [
          "Market orders execute immediately but offer no price control.",
          "Limit orders are for buying cheaper or selling dearer than the current price.",
          "Stop orders are for buying or selling after the price breaks a certain level.",
          "Stop Loss and Take Profit are essential exit orders for every trade."
        ],
        practiceTask: {
          instruction: "Practice order execution on your demo account.",
          steps: [
            "Place a 'Buy Limit' 20 pips below the current price of EUR/USD.",
            "Place a 'Sell Stop' 10 pips below a recent low on GBP/USD.",
            "Modify an existing order to add a 'Stop Loss' and 'Take Profit' level."
          ]
        },
        riskManagement: "⚠ CRITICAL: Never place a trade without a 'Stop Loss' order already attached. This is your 'Seatbelt' that prevents a single bad trade from destroying your account.",
        quiz: [
          { 
            question: "If the current price of Gold is $2,000 and you want to buy only if it breaks above $2,010, which order type should you use?", 
            options: [
              "Buy Limit", 
              "Buy Stop", 
              "Market Buy",
              "Sell Limit"
            ], 
            correctAnswer: 1,
            explanation: "To buy at a price *higher* than the current market, you use a 'Stop' order. This is a classic breakout entry."
          }
        ],
        relatedLessons: [
          { title: "Bid, Ask & Spread", path: "/lesson/M2-L4" },
          { title: "Market Structure", path: "/lesson/M3-L1" },
          { title: "Glossary: Limit Order", path: "/glossary?term=Limit Order" }
        ],
        nextPreview: "Module 3: Trading Platform Basics"
      }
    ]
  },
  {
    title: "Module 3: Trading Platform Basics",
    icon: <Layout className="text-navy" size={24} />,
    lessons: [
      {
        id: "M3-L1",
        title: "The Professional Workspace: Introduction to TradingView",
        duration: "20 min",
        difficulty: "Beginner",
        moduleLessonsCount: 2,
        objectives: [
          "Navigate the TradingView interface and customize the charting workspace",
          "Utilize essential drawing tools like trendlines, rectangles, and Fibonacci retracements",
          "Set up a professional watchlist to monitor multiple currency pairs simultaneously",
          "Use the 'Long/Short Position' tool to calculate risk-to-reward ratios visually"
        ],
        introduction: "TradingView is the 'Gold Standard' for technical analysis. It is where you will spend 90% of your time as a trader—analyzing price action, mapping out levels, and planning your entries. Unlike execution platforms like MetaTrader, TradingView is designed for clarity and precision. This lesson will get you comfortable with your new workspace, showing you how to turn a messy chart into a professional analysis tool that guides your decision-making with confidence.",
        sections: [
          {
            title: "The Modern Charting Standard",
            icon: <Monitor size={24} />,
            illustration: <TradingViewInterfaceVisual />,
            content: "TradingView is a powerful, web-based charting platform used by millions of traders worldwide. It allows you to track almost any financial instrument in real-time, from Forex and Crypto to Stocks and Commodities.\n\nKey tools you must master:\n- **Trendline Tool**: For identifying the direction of the market.\n- **Rectangle Tool**: For marking supply and demand zones (Support/Resistance).\n- **Fibonacci Retracement**: For finding potential 'pullback' entries.\n- **Long/Short Position Tool**: For calculating your risk-to-reward ratio and position size visually.",
            callout: {
              type: "info",
              text: "PRO TIP: You can sync your TradingView charts across all your devices, allowing you to monitor setups on your phone while you're away from your desk."
            }
          },
          {
            title: "Planning the Trade: The Long/Short Tool",
            icon: <Target size={24} />,
            content: "The most important tool in TradingView isn't an indicator—it's the **Long/Short Position tool**. This tool allows you to place a 'hypothetical' trade on your chart. \n\nIt automatically calculates:\n1. **Risk-to-Reward Ratio (R:R)**: How much you stand to gain vs. how much you are risking.\n2. **Stop Loss Distance**: The exact number of pips from your entry to your exit.\n3. **Target Distance**: How far the market must move to hit your profit goal.\n\nProfessional traders never enter a trade without first mapping it out with this tool to ensure the math makes sense.",
            callout: {
              type: "pro",
              text: "◈ KEY INSIGHT: A clean chart is a professional chart. Avoid 'Indicator Soup'—keep your analysis focused on price action and key structural levels."
            }
          }
        ],
        formula: {
          expression: "Risk-to-Reward (R:R) = Potential Profit / Potential Loss",
          variables: [
            { name: "Potential Profit", desc: "Distance from Entry to Take Profit (in pips)" },
            { name: "Potential Loss", desc: "Distance from Entry to Stop Loss (in pips)" }
          ],
          example: "Take Profit: 60 Pips\nStop Loss: 20 Pips\n\nCalculation: 60 / 20 = 3.0\nResult: 1:3 Risk-to-Reward Ratio"
        },
        comparativeTable: {
          headers: ["Feature", "TradingView", "MetaTrader (MT4/MT5)"],
          rows: [
            { label: "Primary Use", values: ["Technical Analysis & Charting", "Trade Execution"] },
            { label: "User Interface", values: ["Modern, Web-based, Intuitive", "Traditional, Software-based"] },
            { label: "Drawing Tools", values: ["Advanced & Customizable", "Basic"] },
            { label: "Alerts", values: ["Cloud-based (SMS/Email/App)", "Local (must be open)"] }
          ]
        },
        takeaways: [
          "TradingView is the industry standard for charting and technical analysis.",
          "Drawing tools (Trendlines, Zones) are essential for mapping market structure.",
          "The Long/Short tool is vital for calculating risk-to-reward ratios before entering.",
          "Keep your charts clean to avoid 'Analysis Paralysis' and conflicting signals."
        ],
        practiceTask: {
          instruction: "Set up your professional analysis environment.",
          steps: [
            "Create a free TradingView account and add 5 Major pairs to a new watchlist.",
            "Draw a horizontal support line on the Daily timeframe for EUR/USD.",
            "Use the 'Long Position' tool to map out a hypothetical trade with a 1:3 R:R ratio."
          ]
        },
        riskManagement: "◈ RISK RULE: Never trade a setup with a Risk-to-Reward ratio lower than 1:2. This ensures that even if you only win 40% of your trades, you remain profitable over time.",
        quiz: [
          { 
            question: "What is the primary purpose of the 'Long/Short Position' tool in TradingView?", 
            options: [
              "To place live trades with your broker", 
              "To calculate R:R and position size visually on the chart", 
              "To change the color of the candlesticks",
              "To see what other traders are doing"
            ], 
            correctAnswer: 1,
            explanation: "The Long/Short tool is a planning tool. It helps you visualize your risk and reward before you ever commit real capital to a trade."
          }
        ],
        relatedLessons: [
          { title: "MT4/MT5 Setup", path: "/lesson/M3-L2" },
          { title: "Candlestick Anatomy", path: "/lesson/M4-L1" },
          { title: "Glossary: Technical Analysis", path: "/glossary?term=Technical Analysis" }
        ],
        nextPreview: "MT4/MT5 Setup"
      },
      {
        id: "M3-L2",
        title: "The Execution Engine: Setting Up MetaTrader 4/5",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 2,
        objectives: [
          "Connect a live or demo broker account to the MetaTrader 4 or 5 platform",
          "Navigate the 'Market Watch', 'Navigator', and 'Toolbox' windows with ease",
          "Execute, modify, and close trades using both the 'New Order' window and 'One-Click Trading'",
          "Monitor account metrics like Balance, Equity, Margin, and Free Margin in real-time"
        ],
        introduction: "While TradingView is for analysis, MetaTrader is for execution. It is the 'cockpit' where you actually pull the trigger and manage your financial risk. MT4 and MT5 have been the industry standard for decades because of their stability and speed. This lesson will walk you through the essential setup steps—from connecting your broker account to executing your first demo trade—ensuring you are technically ready to enter the global arena with confidence.",
        sections: [
          {
            title: "The Industry Standard",
            icon: <Settings size={24} />,
            illustration: <MT4TerminalVisual />,
            content: "MetaTrader 4 (MT4) and MetaTrader 5 (MT5) are the most popular trading platforms in the world for retail Forex traders. While MT4 is older and simpler, MT5 offers more timeframes and advanced order types. Most brokers provide both.\n\nKey areas of the interface:\n- **Market Watch**: Displays live Bid/Ask prices for your chosen pairs.\n- **Navigator**: Where you manage your trading accounts, indicators, and Expert Advisors (EAs).\n- **Toolbox / Terminal**: The most important window at the bottom, showing your Balance, Equity, and open trades.",
            callout: {
              type: "warning",
              text: "⚠ CRITICAL: Always double-check your lot size in the 'New Order' window. MetaTrader often remembers your last used lot size, which could be 10x larger than what you need for your next trade."
            }
          },
          {
            title: "Executing and Managing Trades",
            icon: <ZapIcon size={24} />,
            content: "To open a trade, you click 'New Order'. Here, you must specify your **Volume (Lot Size)**, **Stop Loss**, and **Take Profit**. \n\nOnce a trade is live, it appears in your 'Toolbox'. You can right-click any open trade to 'Modify' your exit levels or 'Close' the position manually. Understanding how to navigate these menus quickly is vital for managing your risk during high-volatility market moves.",
            callout: {
              type: "pro",
              text: "◈ PRO TIP: Enable 'One-Click Trading' only after you are 100% comfortable with the platform. It allows for instant execution but removes the 'confirmation' step, making accidental trades easier to place."
            }
          }
        ],
        formula: {
          expression: "Account Equity = Balance + Floating Profit/Loss",
          variables: [
            { name: "Balance", desc: "The amount of cash in your account (not including open trades)" },
            { name: "Floating P/L", desc: "The current unrealized profit or loss from your open positions" }
          ],
          example: "Balance: $1,000\nOpen Trade: +$50 Profit\n\nCalculation: $1,000 + $50 = $1,050\nResult: Your 'Equity' is $1,050."
        },
        comparativeTable: {
          headers: ["Feature", "MetaTrader 4 (MT4)", "MetaTrader 5 (MT5)"],
          rows: [
            { label: "Release Year", values: ["2005", "2010"] },
            { label: "Timeframes", values: ["9 Standard", "21 Standard"] },
            { label: "Order Types", values: ["4 Pending Types", "6 Pending Types"] },
            { label: "Programming", values: ["MQL4", "MQL5 (Faster)"] }
          ]
        },
        takeaways: [
          "MetaTrader is the primary tool used for executing trades with your broker.",
          "The 'Toolbox' or 'Terminal' is where you monitor your live financial performance.",
          "Always verify your lot size before hitting 'Buy' or 'Sell'.",
          "Use a Demo account first to master the interface before trading real money."
        ],
        practiceTask: {
          instruction: "Connect and explore your trading cockpit.",
          steps: [
            "Log in to your demo account on MT4 or MT5 using the credentials provided by your broker.",
            "Open the 'Toolbox' and identify your current Balance, Equity, and Free Margin.",
            "Execute a 0.01 lot 'Market Buy' on EUR/USD and then practice closing it manually."
          ]
        },
        riskManagement: "◈ EXECUTION RISK: Never trade on a live account until you can navigate MetaTrader in your sleep. Mistakes in execution (like entering 1.00 lot instead of 0.10) are the most painful and avoidable ways to lose money.",
        quiz: [
          { 
            question: "Where do you see your open trades and current account balance in MetaTrader?", 
            options: [
              "Market Watch", 
              "Navigator", 
              "Toolbox / Terminal",
              "The Main Chart Window"
            ], 
            correctAnswer: 2,
            explanation: "The Toolbox (MT5) or Terminal (MT4) at the bottom of the screen displays all active and pending orders, as well as your balance and equity."
          }
        ],
        relatedLessons: [
          { title: "Introduction to TradingView", path: "/lesson/M3-L1" },
          { title: "Types of Orders", path: "/lesson/M2-L5" },
          { title: "Glossary: MetaTrader", path: "/glossary?term=MetaTrader" }
        ],
        nextPreview: "Module 4: Candlestick Foundations"
      }
    ]
  },
  {
    title: "Module 4: Candlestick Foundations",
    icon: <CandlestickChart className="text-navy" size={24} />,
    lessons: [
      {
        id: "M4-L1",
        title: "The DNA of Price: Anatomy of a Candlestick",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 3,
        objectives: [
          "Explain the four data points of a candlestick: Open, High, Low, and Close (OHLC)",
          "Distinguish between the 'Body' and the 'Wicks' (Shadows) of a candle",
          "Identify 'Bullish' vs. 'Bearish' momentum based on candle color and closing price",
          "Interpret market sentiment by analyzing the size of the body relative to the wicks"
        ],
        introduction: "Candlesticks are the DNA of price action. They tell a story of the battle between buyers and sellers over a specific period—be it one minute or one month. Learning to read them is like learning to read the market's mind. Every candle provides a snapshot of who is in control and how much conviction they have. This lesson will break down the anatomy of a single candlestick, giving you the foundation to read the 'language' of the charts with clarity.",
        sections: [
          {
            title: "Visualizing the Battle: OHLC",
            icon: <CandlestickChart size={24} />,
            illustration: <CandleAnatomyVisual />,
            content: "A single candlestick represents price action over a specific timeframe. It contains four vital pieces of information:\n\n- **Open**: The price at the start of the period.\n- **High**: The highest price reached during the period.\n- **Low**: The lowest price reached during the period.\n- **Close**: The price at the end of the period.\n\nIf the Close is higher than the Open, the candle is **Bullish** (usually Green). If the Close is lower than the Open, the candle is **Bearish** (usually Red).",
            callout: {
              type: "info",
              text: "DEFINITION: OHLC - Stands for Open, High, Low, and Close. These are the four pillars of every price bar on your chart."
            }
          },
          {
            title: "Body vs. Wicks: Conviction vs. Rejection",
            icon: <Activity size={24} />,
            content: "The **Body** is the colored part of the candle. It represents the distance between the Open and the Close. A large body indicates strong momentum and conviction from either buyers or sellers.\n\nThe **Wicks** (or Shadows) are the thin lines above and below the body. They represent the 'extremes' of price that were reached but ultimately rejected. A long upper wick means buyers tried to push the price up, but sellers pushed it back down before the period ended.",
            callout: {
              type: "warning",
              text: "⚠ CRITICAL: Always wait for the candle to CLOSE before making a decision. A candle can look like a strong bullish breakout for 59 minutes and turn into a massive bearish rejection in the last 60 seconds."
            }
          }
        ],
        formula: {
          expression: "Candle Range = High - Low",
          variables: [
            { name: "High", desc: "The highest price reached" },
            { name: "Low", desc: "The lowest price reached" }
          ],
          example: "High: 1.0950\nLow: 1.0910\n\nCalculation: 1.0950 - 1.0910 = 0.0040\nResult: 40 Pip Range"
        },
        comparativeTable: {
          headers: ["Feature", "Market Meaning", "Trader Interpretation"],
          rows: [
            { label: "Large Body", values: ["Strong Conviction", "Trend is likely to continue"] },
            { label: "Small Body", values: ["Indecision / Low Volume", "Market is waiting for a catalyst"] },
            { label: "Long Wicks", values: ["Price Rejection", "Potential reversal or 'fakeout'"] },
            { label: "No Wicks (Marubozu)", values: ["Pure Momentum", "Extreme dominance by one side"] }
          ]
        },
        takeaways: [
          "Candlesticks show the high, low, open, and close for a specific period.",
          "The body shows the strength of the move; the wicks show the rejection of levels.",
          "Bullish candles close higher than they open; Bearish candles close lower.",
          "The 'Close' is the most important data point as it confirms the final sentiment."
        ],
        practiceTask: {
          instruction: "Examine candles on your live chart.",
          steps: [
            "Find a candle with a tiny body and long wicks on both sides (Indecision).",
            "Find a 'Marubozu' (a candle with almost no wicks) on a 1-hour chart.",
            "Identify three consecutive bullish candles and observe the momentum."
          ]
        },
        riskManagement: "◈ PRO INSIGHT: Never 'anticipate' a candle close. Many traders lose money entering a trade based on a candle that hasn't finished forming yet. Patience is the difference between a pro and an amateur.",
        quiz: [
          { 
            question: "What does a long upper wick on a candlestick typically represent?", 
            options: [
              "Strong buying momentum", 
              "Price rejection by sellers", 
              "A guaranteed trend continuation",
              "The opening price was very high"
            ], 
            correctAnswer: 1,
            explanation: "A long upper wick shows that buyers pushed the price up, but sellers were strong enough to push it back down before the candle closed, indicating rejection."
          }
        ],
        relatedLessons: [
          { title: "Engulfing Patterns", path: "/lesson/M4-L2" },
          { title: "Market Structure", path: "/lesson/M7-L1" },
          { title: "Glossary: Candlestick", path: "/glossary?term=Candlestick" }
        ],
        nextPreview: "Bullish vs Bearish Momentum"
      },
      {
        id: "M4-L2",
        title: "The Momentum Takeover: Engulfing Patterns",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 3,
        objectives: [
          "Identify 'Bullish Engulfing' and 'Bearish Engulfing' patterns on a live chart",
          "Explain the psychology behind the 'Takeover'—where one side completely overwhelms the other",
          "Use engulfing patterns as high-probability signals for potential trend reversals or continuations",
          "Combine engulfing patterns with key support and resistance levels for maximum accuracy"
        ],
        introduction: "When one side of the market completely overwhelms the other, we see an 'Engulfing' pattern. This is one of the most reliable and powerful signals in technical analysis because it represents a total shift in momentum. It is the visual representation of a 'Takeover'—where the previous trend's strength is completely consumed by a new, opposing force. This lesson will teach you how to spot these patterns and, more importantly, how to trade them when they appear at the right time and place.",
        sections: [
          {
            title: "The Psychology of the Takeover",
            icon: <ZapIcon size={24} />,
            illustration: <MomentumVsExhaustionVisual />,
            content: "An **Engulfing Pattern** consists of two candles. The first is a small candle showing the current trend's exhaustion. The second is a much larger candle that completely 'swallows' or engulfs the body of the first.\n\n- **Bullish Engulfing**: Occurs at the end of a downtrend. A small red candle is followed by a large green candle. It tells us that sellers are out of steam and buyers have entered with massive force.\n- **Bearish Engulfing**: Occurs at the end of an uptrend. A small green candle is followed by a large red candle. It tells us that buyers are exhausted and sellers have taken control.",
            callout: {
              type: "info",
              text: "DEFINITION: Engulfing Pattern - A two-candle reversal signal where the second candle's body completely covers the first candle's body."
            }
          },
          {
            title: "Context is King: Where to Trade Them",
            icon: <Target size={24} />,
            content: "Not all engulfing candles are created equal. If you see an engulfing candle in the middle of a sideways range, it is likely just 'noise'. \n\nTo find high-probability setups, you must look for engulfing patterns at **Key Levels**:\n1. **Support**: A Bullish Engulfing at a major support level is a strong 'Buy' signal.\n2. **Resistance**: A Bearish Engulfing at a major resistance level is a strong 'Sell' signal.\n\nWhen the pattern aligns with the structure, the probability of a successful trade increases significantly.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The larger the engulfing candle is relative to the previous one, the more significant the shift in power. A 'Monster' engulfing candle often leads to an immediate and sharp move."
            }
          }
        ],
        formula: {
          expression: "Engulfing Validity = (Current Body Size > Previous Body Size)",
          variables: [
            { name: "Current Body Size", desc: "Distance between Open and Close of the second candle" },
            { name: "Previous Body Size", desc: "Distance between Open and Close of the first candle" }
          ],
          example: "Candle 1 Body: 10 Pips\nCandle 2 Body: 25 Pips\n\nResult: Valid Engulfing (2.5x larger)"
        },
        comparativeTable: {
          headers: ["Pattern", "Prior Trend", "Candle 1", "Candle 2", "Market Signal"],
          rows: [
            { label: "Bullish Engulfing", values: ["Downtrend", "Small Bearish", "Large Bullish", "Strong Buy"] },
            { label: "Bearish Engulfing", values: ["Uptrend", "Small Bullish", "Large Bearish", "Strong Sell"] }
          ]
        },
        takeaways: [
          "Engulfing patterns represent a total shift in market momentum.",
          "The second candle must completely swallow the body of the first.",
          "Bullish engulfing signals buyers taking over; Bearish signals sellers taking over.",
          "Always look for these patterns at key support and resistance levels for accuracy."
        ],
        practiceTask: {
          instruction: "Identify momentum shifts on your charts.",
          steps: [
            "Find a Bullish Engulfing pattern that occurred at a recent low on the 4-hour chart.",
            "Find a Bearish Engulfing pattern that failed (where price continued in the original direction).",
            "Analyze why the failed pattern might have lacked 'context' (e.g., was it at a key level?)."
          ]
        },
        riskManagement: "⚠ WARNING: Avoid trading 'Giant' engulfing candles that are 5x larger than average. By the time the candle closes, the move might already be over, leaving you with a poor risk-to-reward ratio.",
        quiz: [
          { 
            question: "What must happen for a pattern to be considered 'Engulfing'?", 
            options: [
              "The second candle must have longer wicks than the first", 
              "The second candle's body must completely cover the first candle's body", 
              "Both candles must be the same color",
              "The first candle must be a Doji"
            ], 
            correctAnswer: 1,
            explanation: "The core of the pattern is the 'Takeover', which is visually represented by the second body completely swallowing the first."
          }
        ],
        relatedLessons: [
          { title: "Anatomy of a Candlestick", path: "/lesson/M4-L1" },
          { title: "Pin Bars & Rejections", path: "/lesson/M4-L3" },
          { title: "Glossary: Engulfing Pattern", path: "/glossary?term=Engulfing Pattern" }
        ],
        nextPreview: "Pin Bars & Rejections"
      },
      {
        id: "M4-L3",
        title: "The Market's 'No': Pin Bars & Rejections",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 3,
        objectives: [
          "Identify 'Pin Bars' (Hammers and Shooting Stars) and explain their structural anatomy",
          "Interpret the psychology of 'Price Rejection'—why the market failed to hold a specific level",
          "Distinguish between a valid Pin Bar and a weak candle with a long wick",
          "Execute trades based on Pin Bar signals when they appear at key confluence zones"
        ],
        introduction: "A Pin Bar is the market's way of saying 'No'. It is a single candlestick that shows a sharp rejection of a specific price level, leaving behind a long wick (the 'nose') and a small body. This pattern is one of the most powerful reversal signals because it visually captures the moment when one side of the market tried to push price through a level but was violently repelled by the other. This lesson will teach you how to identify these 'lying' candles and use them to spot high-probability turning points in the market.",
        sections: [
          {
            title: "The Anatomy of Rejection",
            icon: <Target size={24} />,
            illustration: <MomentumVsExhaustionVisual />,
            content: "A **Pin Bar** is characterized by a very long wick on one side and a small body on the other. \n\n- **The Hammer (Bullish)**: Has a long lower wick, showing that sellers tried to push price down, but buyers rejected that level and pushed price back up to close near the open.\n- **The Shooting Star (Bearish)**: Has a long upper wick, showing that buyers tried to push price up, but sellers rejected that level and pushed price back down to close near the open.\n\nThe long wick is the 'Nose' of the candle, and it points to where the market is 'lying' about its strength.",
            callout: {
              type: "info",
              text: "DEFINITION: Pin Bar - A single-candle reversal pattern where the wick is at least 2/3 the total length of the candle."
            }
          },
          {
            title: "Trading the 'Fakeout'",
            icon: <ZapIcon size={24} />,
            content: "The most powerful Pin Bars are those that 'poke' through a major Support or Resistance level and then close back inside the structure. This is called a **Fakeout**.\n\nIt tells us that the market 'tested' the liquidity beyond the level, found no follow-through, and is now likely to reverse in the opposite direction. When you see a Pin Bar at a major level, it's a sign that the 'Big Players' are stepping in to defend that zone.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The longer the wick relative to the body, the more significant the rejection. A Pin Bar with a tiny body and a massive wick is a 'Screaming' signal that the market is about to turn."
            }
          }
        ],
        formula: {
          expression: "Pin Bar Validity = (Wick Length / Total Candle Length) > 0.66",
          variables: [
            { name: "Wick Length", desc: "Distance from the tip of the wick to the body" },
            { name: "Total Length", desc: "Distance from High to Low" }
          ],
          example: "Total Length: 30 Pips\nWick Length: 22 Pips\n\nCalculation: 22 / 30 = 0.73\nResult: Valid Pin Bar"
        },
        comparativeTable: {
          headers: ["Pattern", "Wick Direction", "Location", "Market Meaning"],
          rows: [
            { label: "Hammer", values: ["Lower Wick", "Bottom of Trend / Support", "Bullish Reversal"] },
            { label: "Shooting Star", values: ["Upper Wick", "Top of Trend / Resistance", "Bearish Reversal"] }
          ]
        },
        takeaways: [
          "Pin Bars show a sharp rejection of a specific price level.",
          "The wick (nose) should be at least 2/3 of the total candle length.",
          "Hammers reject lower prices; Shooting Stars reject higher prices.",
          "They are most effective when they 'poke' through key support or resistance levels."
        ],
        practiceTask: {
          instruction: "Identify rejections on your charts.",
          steps: [
            "Find a Shooting Star on the Daily timeframe for any Major pair.",
            "Identify a Hammer that occurred at a major support level and observe the following move.",
            "Measure the wick-to-body ratio of three different candles to see if they qualify as Pin Bars."
          ]
        },
        riskManagement: "⚠ WARNING: Don't trade Pin Bars against a strong, parabolic trend. A Pin Bar against a 'Freight Train' move is often just a temporary pause before the trend continues. Always look for 'Confluence'.",
        quiz: [
          { 
            question: "What is the most important feature of a valid Pin Bar?", 
            options: [
              "A large body and small wicks", 
              "A long wick that is at least 2/3 of the total candle length", 
              "The candle must be green",
              "The candle must be red"
            ], 
            correctAnswer: 1,
            explanation: "The long wick is the visual proof of rejection. Without a significant wick relative to the body, it is not a Pin Bar."
          }
        ],
        relatedLessons: [
          { title: "Anatomy of a Candlestick", path: "/lesson/M4-L1" },
          { title: "Engulfing Patterns", path: "/lesson/M4-L2" },
          { title: "Glossary: Pin Bar", path: "/glossary?term=Pin Bar" }
        ],
        nextPreview: "Module 5: Market Sessions"
      },
    ]
  },
  {
    title: "Module 5: Market Sessions",
    icon: <Clock4 className="text-navy" size={24} />,
    lessons: [
      {
        id: "M5-L1",
        title: "The Global Relay Race: The 24-Hour Market Cycle",
        duration: "12 min",
        difficulty: "Beginner",
        moduleLessonsCount: 1,
        objectives: [
          "Understand the flow of global money as it moves through the four major trading sessions",
          "Identify the exact opening and closing times for the Sydney, Tokyo, London, and New York sessions",
          "Recognize the 'London/New York Overlap' as the period of peak liquidity and volatility",
          "Explain the risks associated with 'The Gap'—the period when the market closes over the weekend"
        ],
        introduction: "Forex is a global relay race. As one financial center closes, another opens, creating a seamless 24-hour market that never sleeps. However, not all hours are created equal. The market has distinct 'personalities' depending on which session is active. Understanding this cycle helps you predict when the 'Big Moves' will happen and when it's better to stay on the sidelines. This lesson will walk you through the global clock, ensuring you know exactly when to be at your desk and when to walk away.",
        sections: [
          {
            title: "The Sun Never Sets",
            icon: <Clock4 size={24} />,
            illustration: <MarketDriversSessionsVisual />,
            content: "The Forex market is divided into four major trading sessions: Sydney, Tokyo, London, and New York. \n\n- **Asian Session (Tokyo/Sydney)**: Typically characterized by lower volatility and range-bound price action. Great for 'Carry Trades' but often slow for day traders.\n- **London Session**: The most important session. Over 30% of all Forex transactions happen here. This is where the 'Real' trend for the day often begins.\n- **New York Session**: High volatility, especially during the first few hours as it overlaps with the London session. Most major economic news is released during this time.",
            callout: {
              type: "info",
              text: "PRO TIP: The 'London Open' is famous for the 'Judas Swing'—a fake move in one direction designed to trap retail traders before the real trend for the day begins."
            }
          },
          {
            title: "The Power of the Overlap",
            icon: <ZapIcon size={24} />,
            content: "The most profitable time to trade is during a **Session Overlap**. This occurs when two major markets are open at the same time. \n\nThe **London/New York Overlap** (approx. 8:00 AM to 12:00 PM EST) is the peak of global trading activity. During these four hours, liquidity is at its highest, spreads are at their tightest, and the largest price moves occur. If you only have a few hours a day to trade, these are the hours you want to be at your screen.",
            callout: {
              type: "warning",
              text: "⚠ WARNING: Market 'Gaps' occur over the weekend. Avoid holding trades over the weekend as a beginner, as price can 'jump' past your stop loss when the market reopens on Sunday night, leading to larger-than-expected losses."
            }
          }
        ],
        formula: {
          expression: "Overlap Duration = Earlier Close Time - Later Open Time",
          variables: [
            { name: "NY Open", desc: "8:00 AM EST" },
            { name: "London Close", desc: "12:00 PM EST" }
          ],
          example: "NY Open: 8:00 AM\nLondon Close: 12:00 PM\n\nResult: 4-Hour Peak Volatility Window"
        },
        comparativeTable: {
          headers: ["Session", "Volatility", "Key Pairs", "Market Personality"],
          rows: [
            { label: "Asian", values: ["Low", "AUD, NZD, JPY", "Consolidation / Ranges"] },
            { label: "London", values: ["High", "EUR, GBP, CHF", "Trend Initiation"] },
            { label: "New York", values: ["Very High", "USD, CAD", "Trend Continuation / Reversals"] }
          ]
        },
        takeaways: [
          "Money flows around the globe in a predictable 24-hour relay race.",
          "Different sessions have different 'personalities' and volatility levels.",
          "The London/New York overlap is the peak of global trading activity.",
          "Avoid trading during the 'Dead Zone' (late NY session) when liquidity is low."
        ],
        practiceTask: {
          instruction: "Track the global money flow.",
          steps: [
            "Identify which trading session is active right now in your local timezone.",
            "Find the exact time the London session opens in your local time.",
            "Look at a 15-minute chart of EUR/USD and mark the start of the London and NY sessions to see the volatility spike."
          ]
        },
        riskManagement: "◈ SESSION RISK: Spreads often widen significantly during the 'Roll-Over' (5:00 PM EST) when the New York session ends and the Asian session begins. Avoid entering new trades during this 30-minute window to avoid high transaction costs.",
        quiz: [
          { 
            question: "When does the Forex market typically open for the week?", 
            options: [
              "Monday morning at 9:00 AM", 
              "Sunday evening (around 5:00 PM EST)", 
              "Saturday night at midnight",
              "Monday at midnight GMT"
            ], 
            correctAnswer: 1,
            explanation: "The market opens when the Sydney banks open on Monday morning, which is Sunday afternoon/evening in the Western Hemisphere."
          }
        ],
        relatedLessons: [
          { title: "What is Forex?", path: "/lesson/M1-L1" },
          { title: "The Players", path: "/lesson/M2-L1" },
          { title: "Glossary: Market Session", path: "/glossary?term=Market Session" }
        ],
        nextPreview: "Module 6: Risk Management (CORE)"
      }
    ]
  },
  {
    title: "Module 6: Risk Management (CORE)",
    icon: <Shield className="text-navy" size={24} />,
    lessons: [
      {
        id: "M6-L1",
        title: "The Foundation: Why Risk Management is Everything",
        duration: "20 min",
        difficulty: "Beginner",
        moduleLessonsCount: 2,
        objectives: [
          "Understand the 'Gambler's Ruin' and how a string of losses can wipe out an account",
          "Prioritize capital preservation over profit-seeking as the foundation of professional trading",
          "Accept losses as necessary business costs rather than personal failures",
          "Explain the difference between 'Trading' and 'Gambling' through the lens of risk control"
        ],
        introduction: "Most traders don't fail because they have a bad strategy; they fail because they have bad risk management. This is the most important module in the entire academy. You can have a 90% win rate and still lose everything if you don't manage your risk. On the flip side, you can have a 30% win rate and be incredibly profitable if your risk is controlled. This lesson will shift your mindset from 'How much can I make?' to 'How much can I afford to lose?'—the hallmark of a professional trader.",
        sections: [
          {
            title: "Survival First: Capital is Your Inventory",
            icon: <Shield size={24} />,
            illustration: <MathRuinVisual />,
            content: "In any business, you need inventory to make sales. In trading, your capital **is** your inventory. Without it, you are out of business. \n\nProfessional trading is not about predicting the future; it is about managing probabilities. Even a strategy with a 70% win rate can have 5 or 10 losses in a row. If you risk 10% of your account per trade, 10 losses will wipe you out completely. If you risk 1%, you still have 90% of your capital left to recover. Your primary job is to stay in the game.",
            callout: {
              type: "warning",
              text: "KEY INSIGHT: The goal of a professional trader is not to be 'right'; it is to stay in the game long enough for their mathematical edge to play out."
            }
          },
          {
            title: "The Asymmetry of Loss",
            icon: <ZapIcon size={24} />,
            content: "Losing money is easy; making it back is hard. This is due to the **Asymmetry of Loss**. \n\nIf you lose 10% of your account, you need an 11% gain to get back to break-even. If you lose 50%, you don't need a 50% gain—you need a **100% gain** just to get back to where you started. The deeper the hole you dig, the harder it is to climb out. This is why keeping your losses small is the only way to achieve long-term success.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: If you can't sleep at night because of an open trade, your position size is too large. Your risk should be small enough that any single loss is emotionally insignificant."
            }
          }
        ],
        formula: {
          expression: "Recovery % = (Loss % / (1 - Loss %)) * 100",
          variables: [
            { name: "Loss %", desc: "The percentage of capital lost (decimal format, e.g., 0.5 for 50%)" }
          ],
          example: "Loss: 50% (0.5)\nCalculation: (0.5 / (1 - 0.5)) * 100 = 100%\n\nResult: You must double your remaining money to break even."
        },
        comparativeTable: {
          headers: ["Feature", "Amateur Mindset", "Professional Mindset"],
          rows: [
            { label: "Focus", values: ["How much can I make?", "How much can I lose?"] },
            { label: "Losses", values: ["Personal failure / Painful", "Business expense / Neutral"] },
            { label: "Risk Per Trade", values: ["Random / High", "Consistent / Low (1-2%)"] },
            { label: "Goal", values: ["To be right", "To follow the process"] }
          ]
        },
        takeaways: [
          "Preserving your capital is more important than making a profit.",
          "Losses are inevitable business costs, not personal failures.",
          "The 'Math of Ruin' shows that large losses are exponentially harder to recover from.",
          "Risk management is the only thing that separates a trader from a gambler."
        ],
        practiceTask: {
          instruction: "Understand the math of ruin.",
          steps: [
            "Calculate the recovery percentage needed if you lose 25% of your account.",
            "Calculate how much is left of a $1,000 account after 5 consecutive losses of 2% each.",
            "Write down your maximum 'Risk Per Trade' percentage and promise to never exceed it."
          ]
        },
        riskManagement: "⚠ WARNING: The 'Risk of Ruin' increases exponentially as you increase your risk per trade. Never risk more than you are emotionally prepared to lose in a single trade. For most beginners, this is 1% or less.",
        quiz: [
          { 
            question: "If you lose 50% of your trading account, what percentage gain do you need to return to your original balance?", 
            options: ["50%", "75%", "100%", "200%"], 
            correctAnswer: 2,
            explanation: "If you have $100 and lose 50%, you have $50. To get back to $100, you must gain $50, which is 100% of your remaining $50."
          }
        ],
        relatedLessons: [
          { title: "The Players", path: "/lesson/M2-L1" },
          { title: "Calculating Position Size", path: "/lesson/M6-L3" },
          { title: "Glossary: Risk Management", path: "/glossary?term=Risk Management" }
        ],
        nextPreview: "Stop Loss & Take Profit"
      },
      {
        id: "M6-L2",
        title: "The Safety Net: Stop Loss & Take Profit",
        duration: "15 min",
        difficulty: "Beginner",
        moduleLessonsCount: 3,
        objectives: [
          "Define 'Stop Loss' and 'Take Profit' and explain their roles in automated risk management",
          "Explain why trading without a stop loss is the fastest way to blow an account",
          "Determine logical placement for stop losses based on market structure (Support/Resistance)",
          "Calculate 'Risk-to-Reward' ratios to ensure every trade is mathematically sound"
        ],
        introduction: "In the heat of a trade, emotions like fear and greed can cloud your judgment. A **Stop Loss (SL)** and **Take Profit (TP)** are your pre-set instructions to the broker to close your trade automatically at a specific price. They are your 'Insurance' and your 'Payday'. This lesson will teach you how to set these levels logically based on the market's structure, rather than random numbers, ensuring you protect your capital and lock in your gains without having to watch the screen 24/7.",
        sections: [
          {
            title: "Your Insurance Policy: The Stop Loss",
            icon: <Shield size={24} />,
            content: "A **Stop Loss** is an order placed with your broker to close a position when it reaches a certain price. It is designed to limit a trader's loss on a position. \n\nMany beginners avoid using stop losses because they 'don't want to be proven wrong'. This is a fatal mistake. In Forex, the market can move hundreds of pips in seconds due to news. Without a stop loss, a single event can wipe out your entire account. A professional trader views a stop loss as a necessary tool that allows them to live to fight another day.",
            callout: {
              type: "info",
              text: "DEFINITION: Stop Loss - A pre-defined exit point for a losing trade. It should be placed where your trade idea is mathematically 'invalidated'."
            }
          },
          {
            title: "The Exit Strategy: Take Profit",
            icon: <Target size={24} />,
            content: "A **Take Profit** is an order that closes a trade once it reaches a certain level of profit. While it might seem counterintuitive to limit your gains, the market rarely moves in a straight line. \n\nBy setting a Take Profit at a logical level (like a major resistance zone), you ensure that you walk away with money in your pocket before the market reverses. Successful trading is about consistently taking 'meat off the bone', not trying to catch every single pip of a move.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Aim for a minimum Risk-to-Reward ratio of 1:2. This means for every $1 you risk, you aim to make $2. With this ratio, you only need to be right 34% of the time to be profitable."
            }
          }
        ],
        formula: {
          expression: "Risk-to-Reward (R:R) = (Target Pips / Risk Pips)",
          variables: [
            { name: "Target Pips", desc: "Distance from Entry to Take Profit" },
            { name: "Risk Pips", desc: "Distance from Entry to Stop Loss" }
          ],
          example: "Entry: 1.1000\nStop Loss: 1.0980 (20 Pips Risk)\nTake Profit: 1.1040 (40 Pips Target)\n\nCalculation: 40 / 20 = 2.0\nResult: 1:2 Risk-to-Reward Ratio"
        },
        comparativeTable: {
          headers: ["Feature", "Stop Loss (SL)", "Take Profit (TP)"],
          rows: [
            { label: "Purpose", values: ["Capital Protection", "Profit Realization"] },
            { label: "Placement", values: ["Below Support (Buy) / Above Resistance (Sell)", "At Resistance (Buy) / At Support (Sell)"] },
            { label: "Emotion", values: ["Fear (Avoiding it leads to ruin)", "Greed (Ignoring it leads to giving back gains)"] }
          ]
        },
        takeaways: [
          "A Stop Loss is your insurance; never trade without one.",
          "Place your SL where your trade idea is proven wrong, not at a random number.",
          "Take Profit ensures you lock in gains before the market reverses.",
          "A positive Risk-to-Reward ratio (1:2+) is the key to long-term profitability."
        ],
        practiceTask: {
          instruction: "Plan your exits.",
          steps: [
            "Find a recent 'Buy' setup on your chart and identify a logical support level for a Stop Loss.",
            "Calculate a Take Profit level that would give you a 1:2 Risk-to-Reward ratio.",
            "Practice entering these levels into your trading platform's 'New Order' window (using a demo account)."
          ]
        },
        riskManagement: "⚠ WARNING: Never move your Stop Loss further away once a trade is active. This is called 'Hope Trading' and is the #1 cause of blown accounts. If your stop is hit, accept the loss and move on to the next setup.",
        quiz: [
          { 
            question: "Where is the most logical place to set a Stop Loss for a 'Buy' trade?", 
            options: [
              "10 pips away from entry", 
              "Just below a major support level", 
              "At the same price as your Take Profit",
              "Wherever you feel like it"
            ], 
            correctAnswer: 1,
            explanation: "Support is where buyers have historically stepped in. If price breaks below support, your 'Buy' idea is likely wrong, making it the perfect place for a stop loss."
          }
        ],
        relatedLessons: [
          { title: "Support & Resistance", path: "/lesson/M8-L1" },
          { title: "Calculating Position Size", path: "/lesson/M6-L3" },
          { title: "Glossary: Stop Loss", path: "/glossary?term=Stop Loss" }
        ],
        nextPreview: "Calculating Position Size"
      },
      {
        id: "M6-L3",
        title: "Calculating Position Size",
        duration: "20 mins",
        difficulty: "Beginner",
        moduleLessonsCount: 2,
        objectives: ["Use the position size formula", "Adjust lots based on SL", "Master the math"],
        introduction: "You should never enter a trade without knowing exactly how much money you will lose if your stop loss is hit. This lesson teaches you the exact formula for professional position sizing.",
        sections: [
          {
            title: "Precision Sizing",
            icon: <PieChart size={24} />,
            illustration: <PositionSizingVisual />,
            content: "The formula for position sizing is:\n\n**Lot Size = (Account Balance * Risk %) / (Stop Loss in Pips * Pip Value)**\n\nThis ensures that whether your stop loss is 10 pips or 100 pips, you only ever lose your intended 1% or 2% of your account. This is how professionals maintain a smooth equity curve.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: If your stop loss is wider, your lot size must be smaller. If your stop loss is tighter, your lot size can be larger. The dollar risk remains the same."
            }
          },
          {
            title: "The Position Size Calculator",
            icon: <Activity size={24} />,
            content: "Manually calculating position size for every trade can be slow and prone to errors. Most professional traders use a 'Position Size Calculator'.\n\nYou input your account currency, balance, risk percentage, and stop loss distance, and it tells you exactly which lot size to use. This removes the 'Guesswork' and ensures you are always trading within your risk parameters. In our 'Trading Lab', you have access to a built-in calculator for this exact purpose.",
            callout: {
              type: "info",
              text: "DEFINITION: Position Sizing - The process of determining the number of lots to trade based on the distance of your stop loss and your desired risk amount."
            }
          }
        ],
        takeaways: [
          "Position sizing is the most powerful tool in your risk management arsenal.",
          "It allows you to keep your risk constant regardless of trade setup.",
          "Always calculate your lot size BEFORE opening the trade."
        ],
        practiceTask: {
          instruction: "Master the position sizing math.",
          steps: [
            "Calculate the lot size for: $5,000 balance, 1% risk, 30 pip stop loss (approx 0.16 lots).",
            "Use the Trading Lab calculator to verify your manual calculation."
          ]
        },
        riskManagement: "Never 'guess' your lot size based on a feeling. One wrong guess can wipe out weeks of progress.",
        quiz: [
          { 
            question: "If your stop loss distance is wider, how should your lot size change to keep the same dollar risk?", 
            options: ["It should be larger", "It should be smaller", "It should stay the same"], 
            correctAnswer: 1,
            explanation: "To keep the total risk (e.g., $100) the same, a larger distance (more pips) requires a smaller value per pip (smaller lot size)."
          }
        ],
        relatedLessons: [
          { title: "Lot Sizes", path: "/lesson/M2-L2" },
          { title: "Why Risk Management?", path: "/lesson/M6-L1" }
        ],
        nextPreview: "Module 7: Market Structure"
      }
    ]
  }
];

export const intermediateModules: ModuleData[] = [
  {
    title: "Module 7: Market Structure",
    icon: <TrendingUp className="text-navy" size={24} />,
    lessons: [
      {
        id: "M7-L1",
        title: "What is Market Structure?",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Identify HH, HL, LH, LL", "Define Bullish vs Bearish structure", "Understand the 'Swing'"],
        introduction: "Market structure is the skeleton of the market. Everything else—indicators, news, patterns—is just flesh on these bones. If you don't understand structure, you are trading blind.",
        sections: [
          {
            title: "The Skeleton of the Market",
            icon: <TrendingUp size={24} />,
            illustration: <MarketStructureVisual />,
            content: "Market structure is the most important concept in technical analysis. \n\n- Uptrend: A series of Higher Highs (HH) and Higher Lows (HL).\n- Downtrend: A series of Lower Highs (LH) and Lower Lows (LL).\n\nTrading with the structure is trading with the path of least resistance. It tells you who is in control: the buyers or the sellers.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The 'Swing High' is the highest point before a pullback, and the 'Swing Low' is the lowest point before a continuation."
            }
          },
          {
            title: "The Three Market Phases",
            icon: <Activity size={24} />,
            content: "The market is always in one of three phases:\n\n1. **Trending**: Price is making clear HH/HL or LH/LL.\n2. **Consolidating**: Price is trapped between a high and a low, moving sideways.\n3. **Reversing**: Structure is shifting from bullish to bearish or vice versa.\n\nIdentifying which phase the market is in determines which strategy you should use. Trend-following strategies fail in consolidation, and range-trading strategies fail in trends.",
            callout: {
              type: "info",
              text: "DEFINITION: Consolidation - A market state where price moves within a horizontal range, showing no clear trend direction."
            }
          }
        ],
        takeaways: [
          "Market structure defines the trend through highs and lows.",
          "An uptrend requires both higher highs and higher lows.",
          "Structure is the foundation of every high-probability strategy."
        ],
        practiceTask: {
          instruction: "Map the structure on your chart.",
          steps: [
            "Label 3 HHs and 3 HLs on a bullish H4 chart.",
            "Identify the most recent LH on a bearish H4 chart."
          ]
        },
        riskManagement: "Never trade against the Daily market structure as an intermediate trader. The 'Higher Timeframe' (HTF) structure is the dominant force.",
        quiz: [
          { 
            question: "What defines a valid uptrend in market structure?", 
            options: ["Higher Highs and Higher Lows", "Lower Highs and Lower Lows", "Sideways movement"], 
            correctAnswer: 0,
            explanation: "An uptrend is characterized by price consistently making new peaks (HH) and higher troughs (HL)."
          }
        ],
        relatedLessons: [
          { title: "Break of Structure", path: "/lesson/M7-L2" },
          { title: "Advanced Structure", path: "/lesson/M14-L1" }
        ],
        nextPreview: "Break of Structure (BOS)"
      },
      {
        id: "M7-L2",
        title: "Break of Structure (BOS)",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Identify a valid BOS", "Differentiate BOS vs Wick", "Understand trend continuation"],
        introduction: "A trend is just a series of structure breaks. When price breaks a previous high or low, it's telling you that the momentum is still alive. This lesson teaches you how to confirm a trend's health.",
        sections: [
          {
            title: "Trend Confirmation",
            icon: <ZapIcon size={24} />,
            illustration: <StructureShiftVisual />,
            content: "A Break of Structure (BOS) occurs when price closes beyond a previous swing high (in an uptrend) or swing low (in a downtrend). \n\nThis confirms that the trend is continuing. Crucially, we look for a **body close** on the candle. A simple wick above a high is often just a 'Liquidity Sweep' and not a true BOS.",
            callout: {
              type: "warning",
              text: "✕ WARNING: If price wicks above a high but closes below it, be careful—this could be a sign of exhaustion rather than continuation."
            }
          },
          {
            title: "BOS vs. CHoCH",
            icon: <TrendingUp size={24} />,
            content: "While a BOS confirms a trend, a **Change of Character (CHoCH)** signals a potential reversal. \n\nA CHoCH happens when price breaks the *opposite* structure. For example, in an uptrend, if price breaks below the previous Higher Low (HL), it is a CHoCH. This is your first warning that the trend might be over and a new trend in the opposite direction is starting.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: A CHoCH on a lower timeframe (like M15) often precedes a reversal on a higher timeframe (like H4). This is how you catch reversals early."
            }
          }
        ],
        takeaways: [
          "BOS confirms the continuation of the current trend.",
          "A valid BOS requires a candle body close beyond the previous structure point.",
          "Wicks are for liquidity; bodies are for structure."
        ],
        practiceTask: {
          instruction: "Find valid structure breaks.",
          steps: [
            "Find 3 examples of a bullish BOS on the H4 timeframe where the body clearly closed above the high."
          ]
        },
        riskManagement: "Wait for the candle close to confirm a BOS. Entering on a 'break' before the close is a common way to get caught in a fakeout.",
        quiz: [
          { 
            question: "What is required for a valid Break of Structure (BOS)?", 
            options: ["A wick touch of the level", "A candle body close beyond the level", "A gap in price"], 
            correctAnswer: 1,
            explanation: "A body close proves that the market has accepted the new price level and the trend has shifted or continued."
          }
        ],
        relatedLessons: [
          { title: "Market Structure", path: "/lesson/M7-L1" },
          { title: "Liquidity Sweeps", path: "/lesson/M15-L3" }
        ],
        nextPreview: "Module 8: Support & Resistance"
      }
    ]
  },
  {
    title: "Module 8: Support & Resistance",
    icon: <ArrowUpRight className="text-navy" size={24} />,
    lessons: [
      {
        id: "M8-L1",
        title: "What is Support & Resistance",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 1,
        objectives: ["Identify historical turning points", "Understand psychological levels", "Draw zones vs lines"],
        introduction: "Support and Resistance are the 'floors' and 'ceilings' of the market. They are areas where the balance of power between buyers and sellers shifted in the past, and likely will again.",
        sections: [
          {
            title: "Price Floors and Ceilings",
            icon: <ArrowUpRight size={24} />,
            illustration: <SupportResistanceVisual />,
            content: "Support is a level where buying pressure exceeds selling, causing price to bounce up. Resistance is where selling exceeds buying, causing price to drop.\n\nThese are not exact lines but **Zones**. The more a level is tested and holds, the more 'significant' it becomes. However, every test also consumes the orders at that level, eventually leading to a break.",
            callout: {
              type: "info",
              text: "◈ INFO: Psychological levels (round numbers like 1.1000 or 150.00) often act as natural support or resistance because many traders place orders there."
            }
          },
          {
            title: "The Role Reversal",
            icon: <ZapIcon size={24} />,
            content: "One of the most powerful concepts in S&R is **Role Reversal**. When a support level is broken, it often flips and becomes a new resistance level. Conversely, when resistance is broken, it often becomes new support.\n\nThis happens because traders who were 'wrong' on the initial break look to exit their losing positions at break-even when price returns to the level, creating pressure in the opposite direction.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Role reversal levels are high-probability entry points because they show that the market has 'accepted' the new price range."
            }
          }
        ],
        takeaways: [
          "Support is a floor; Resistance is a ceiling.",
          "Treat these as zones of interest, not precise lines.",
          "Broken resistance often becomes new support (Role Reversal)."
        ],
        practiceTask: {
          instruction: "Map the key levels.",
          steps: [
            "Draw 3 major support zones on the Daily chart for your favorite pair.",
            "Identify a 'Psychological' level (round number) and see how price reacted to it in the past."
          ]
        },
        riskManagement: "Don't place your Stop Loss exactly on the level; place it slightly beyond the zone to avoid being 'wicked out' by minor volatility.",
        quiz: [
          { 
            question: "What typically happens when a major resistance level is broken?", 
            options: ["It disappears forever", "It often flips and becomes a support level", "Price always immediately reverses"], 
            correctAnswer: 1,
            explanation: "This is known as 'Role Reversal'—the ceiling becomes the new floor as buyers now defend that level."
          }
        ],
        relatedLessons: [
          { title: "Breakouts", path: "/lesson/M10-L1" },
          { title: "Supply & Demand", path: "/lesson/M16-L1" }
        ],
        nextPreview: "Module 9: Trend Trading"
      }
    ]
  },
  {
    title: "Module 9: Trend Trading",
    icon: <LineChart className="text-navy" size={24} />,
    lessons: [
      {
        id: "M9-L1",
        title: "The Trend is Your Friend",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 1,
        objectives: ["Identify trend direction", "Use trendlines correctly", "Understand trend strength"],
        introduction: "Trading with the trend is like swimming with the current—it's easier, faster, and more likely to get you to your destination. This lesson teaches you how to ride the market's momentum.",
        sections: [
          {
            title: "Following Momentum",
            icon: <LineChart size={24} />,
            illustration: <MarketPhasesVisual />,
            content: "Trend trading involves identifying the dominant market direction and looking for entries in that direction. \n\nTrendlines are used to connect swing lows in an uptrend or swing highs in a downtrend. A valid trendline needs at least **3 touches**. The steeper the trendline, the less sustainable the trend usually is.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Always look for the 'Trend within the Trend'. A pullback on the Daily chart is a downtrend on the M15 chart."
            }
          },
          {
            title: "Trend Strength and Exhaustion",
            icon: <Activity size={24} />,
            content: "Not all trends are equal. A strong trend has shallow pullbacks and aggressive expansions. A weak trend has deep pullbacks and overlapping candles.\n\nWatch for 'Trend Exhaustion' signs like decreasing volume, smaller expansion legs, and price failing to make a new Higher High. When a trend starts to 'flatten out', it is often a sign that a reversal or a period of consolidation is coming.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Don't chase a trend that has already moved significantly without a pullback. This is called 'FOMO' (Fear Of Missing Out) and often leads to entering at the very top or bottom."
            }
          }
        ],
        takeaways: [
          "Trading with the trend increases your probability of success.",
          "Trendlines help visualize the path of momentum.",
          "A trend is valid until a major structure break occurs."
        ],
        practiceTask: {
          instruction: "Identify and draw trends.",
          steps: [
            "Draw a valid bullish trendline with at least 3 touches on the H4 chart.",
            "Identify a trendline break and see if it led to a change in structure."
          ]
        },
        riskManagement: "The trend is your friend until the 'bend' at the end. Always watch for structure shifts (CHoCH) as early warning signs of a trend reversal.",
        quiz: [
          { 
            question: "How many touches are generally required for a trendline to be considered valid?", 
            options: ["1", "2", "3"], 
            correctAnswer: 2,
            explanation: "Two points define a line, but the third point confirms that the market is actually respecting that line as a trend."
          }
        ],
        relatedLessons: [
          { title: "Market Structure", path: "/lesson/M7-L1" },
          { title: "Moving Averages", path: "/lesson/M11-L2" }
        ],
        nextPreview: "Module 10: Breakouts"
      }
    ]
  },
  {
    title: "Module 10: Breakouts",
    icon: <ZapIcon className="text-navy" size={24} />,
    lessons: [
      {
        id: "M10-L1",
        title: "The Anatomy of a Breakout",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 1,
        objectives: ["Identify consolidation", "Recognize breakout momentum", "Avoid fakeouts"],
        introduction: "A breakout is like a dam bursting. After price has been contained in a range or behind a level, it finally explodes through. If you catch it early, the profits can be massive.",
        sections: [
          {
            title: "Explosive Movement",
            icon: <ZapIcon size={24} />,
            illustration: <BreakAndRetestVisual />,
            content: "Breakouts occur when price moves out of a consolidation zone or past a major level. High volume and strong candle closes are signs of a valid breakout. \n\nKey characteristics of a high-probability breakout:\n- Increased volume/momentum.\n- A period of 'Consolidation' (tight range) before the break.\n- A clean candle close beyond the level.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Most breakouts fail. These are called 'Fakeouts'. To increase your odds, wait for a **Retest** of the broken level before entering."
            }
          },
          {
            title: "The Break and Retest",
            icon: <Activity size={24} />,
            content: "The safest way to trade a breakout is to wait for the **Retest**. After price breaks a level, it often returns to 'test' that level from the other side.\n\nFor example, if price breaks above resistance, that resistance often becomes new support. By waiting for price to return to the level and show a rejection signal (like a Pin Bar), you enter with much higher probability and a better risk-to-reward ratio.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: A 'Clean' breakout usually has a strong, large candle that closes well beyond the level. If the candle is small and wicky, the breakout is more likely to fail."
            }
          }
        ],
        takeaways: [
          "Breakouts signal the start of a new trend or the continuation of an old one.",
          "Consolidation before a breakout is a sign of building pressure.",
          "The 'Break and Retest' is the safest way to trade a breakout."
        ],
        practiceTask: {
          instruction: "Find and analyze breakouts.",
          steps: [
            "Find a consolidation box on the M15 chart.",
            "Identify the breakout candle and see if it retested the level."
          ]
        },
        riskManagement: "Fakeouts are common. Use a 'Buffer' or wait for a retest to confirm the move. If price returns deep into the previous range, the breakout has failed.",
        quiz: [
          { 
            question: "What is a 'Fakeout' in breakout trading?", 
            options: ["A very fast breakout", "When price breaks a level but quickly reverses back", "A breakout during news"], 
            correctAnswer: 1,
            explanation: "A fakeout (or false breakout) occurs when price wicks or briefly closes beyond a level but lacks the momentum to sustain the move."
          }
        ],
        relatedLessons: [
          { title: "Support & Resistance", path: "/lesson/M8-L1" },
          { title: "Liquidity Sweeps", path: "/lesson/M15-L3" }
        ],
        nextPreview: "Module 11: Indicator Library"
      }
    ]
  },
  {
    title: "Module 11: Indicator Library",
    icon: <BarChart2 className="text-navy" size={24} />,
    lessons: [
      {
        id: "M11-L1",
        title: "Introduction to Indicators",
        duration: "12 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Understand lagging vs leading", "Avoid indicator overload", "Use indicators as confluence"],
        introduction: "Indicators are mathematical calculations based on price and volume. They don't predict the future, but they can help you filter out noise and confirm what price action is already telling you.",
        sections: [
          {
            title: "Mathematical Confirmation",
            icon: <Activity size={24} />,
            illustration: <TradingViewInterfaceVisual />,
            content: "Indicators fall into two main categories:\n\n1. Lagging Indicators (e.g., Moving Averages): They follow the price and confirm trends.\n2. Leading Indicators (e.g., RSI, Stochastic): They try to predict future price turns by measuring momentum.\n\nNever trade based on an indicator alone. They should only be used as 'Confluence' to support your price action analysis.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The best traders use 1 or 2 indicators at most. A chart cluttered with 5+ indicators is usually a sign of a confused trader."
            }
          },
          {
            title: "Lagging vs. Leading Indicators",
            icon: <TrendingUp size={24} />,
            content: "Lagging indicators are great for confirming that a trend has already started. They are 'slow' but reliable. Leading indicators are 'fast' but can give many false signals.\n\nUnderstanding the trade-off between speed and accuracy is key. Use lagging indicators to define the trend and leading indicators to find potential entry or exit points within that trend.",
            callout: {
              type: "info",
              text: "DEFINITION: Confluence - The combination of multiple technical tools or signals that all point to the same trade direction."
            }
          }
        ],
        takeaways: [
          "Indicators are tools for confirmation, not primary signals.",
          "Lagging indicators confirm trends; leading indicators measure momentum.",
          "Price action is always the primary source of truth."
        ],
        practiceTask: {
          instruction: "Explore indicator types.",
          steps: [
            "Add a 50-period Moving Average to your chart.",
            "Add the RSI (Relative Strength Index) and identify an 'Overbought' area (>70)."
          ]
        },
        riskManagement: "Don't fall into the trap of 'Indicator Overload'. If your indicators are telling you to buy but price action is bearish, trust the price action.",
        quiz: [
          { 
            question: "What is a 'Lagging Indicator'?", 
            options: ["An indicator that predicts the future", "An indicator that uses past price data to confirm a trend", "An indicator that is always wrong"], 
            correctAnswer: 1,
            explanation: "Lagging indicators, like Moving Averages, react to price changes that have already occurred, making them great for trend confirmation."
          }
        ],
        relatedLessons: [
          { title: "Moving Averages", path: "/lesson/M11-L2" },
          { title: "RSI & Divergence", path: "/lesson/M17-L1" }
        ],
        nextPreview: "Moving Averages (SMA & EMA)"
      },
      {
        id: "M11-L2",
        title: "Moving Averages (SMA & EMA)",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Differentiate SMA vs EMA", "Identify trend with 50/200 EMA", "Use MAs as dynamic S&R"],
        introduction: "Moving Averages (MAs) smooth out price data to create a single flowing line. This makes it much easier to see the true direction of the trend without being distracted by minor price wiggles.",
        sections: [
          {
            title: "Smoothing Price",
            icon: <BarChart2 size={24} />,
            illustration: <MarketPhasesVisual />,
            content: "Moving Averages calculate the average price over X periods. \n\n- Simple Moving Average (SMA): Calculates the average price over X periods.\n- Exponential Moving Average (EMA): Gives more weight to recent prices, making it more responsive.\n\nThe 200 EMA is a major institutional level for determining long-term trend. When price is above the 200 EMA, the long-term trend is bullish.",
            callout: {
              type: "info",
              text: "◈ INFO: MAs can also act as 'Dynamic' support and resistance. Price often bounces off the 50 or 200 EMA during a strong trend."
            }
          },
          {
            title: "The Golden and Death Cross",
            icon: <ZapIcon size={24} />,
            content: "Two of the most famous signals in trading are the **Golden Cross** and the **Death Cross**.\n\n- Golden Cross: When the 50 EMA crosses ABOVE the 200 EMA. This signals a major shift to bullish momentum.\n- Death Cross: When the 50 EMA crosses BELOW the 200 EMA. This signals a major shift to bearish momentum.\n\nThese are lagging signals, but they are watched by thousands of institutional traders, making them self-fulfilling prophecies to some extent.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Use the 50 EMA as a 'Trend Filter'. If price is above the 50 EMA, only look for buy setups. If it's below, only look for sell setups."
            }
          }
        ],
        takeaways: [
          "MAs help identify the dominant trend direction.",
          "EMAs are more responsive to recent price changes than SMAs.",
          "The 200 EMA is a major institutional level for long-term trend bias."
        ],
        practiceTask: {
          instruction: "Use MAs for trend bias.",
          steps: [
            "Add the 50 and 200 EMA to your chart.",
            "Identify a 'Golden Cross' (50 crosses above 200) and see what happened next."
          ]
        },
        riskManagement: "Indicators are 'Lagging'. Use them for confluence, not as your only entry signal. They work great in trending markets but can give many 'False Signals' in sideways markets.",
        quiz: [
          { 
            question: "Which MA reacts faster to price changes?", 
            options: ["SMA", "EMA", "They are the same"], 
            correctAnswer: 1,
            explanation: "The Exponential Moving Average (EMA) places more importance on the most recent data points, allowing it to turn faster than the SMA."
          }
        ],
        relatedLessons: [
          { title: "Intro to Indicators", path: "/lesson/M11-L1" },
          { title: "Trend Trading", path: "/lesson/M9-L1" }
        ],
        nextPreview: "Module 12: Entry & Exit Techniques"
      }
    ]
  },
  {
    title: "Module 12: Entry & Exit Techniques",
    icon: <Target className="text-navy" size={24} />,
    lessons: [
      {
        id: "M12-L1",
        title: "Anticipation vs Confirmation Entries",
        duration: "15 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 1,
        objectives: ["Understand the trade-off", "Identify confirmation signals", "Master entry timing"],
        introduction: "You don't always have to be first. In fact, being second often pays better. This lesson explains the difference between guessing a reversal and waiting for proof.",
        sections: [
          {
            title: "Pulling the Trigger",
            icon: <Target size={24} />,
            illustration: <ConfirmationEntryVisual />,
            content: "There are two main ways to enter a trade:\n\n- Anticipation: Entering at a level before a signal (higher risk, better R:R). You are 'guessing' the level will hold.\n- Confirmation: Waiting for a candle pattern or LTF shift (lower risk, worse R:R). You are 'confirming' the level is holding.\n\nAs an intermediate trader, focus on confirmation entries to build your win rate.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Confirmation entries have a higher win rate but require more patience. Anticipation entries offer better rewards but result in more stopped-out trades."
            }
          },
          {
            title: "The Confirmation Checklist",
            icon: <Activity size={24} />,
            content: "Before entering a confirmation trade, you should check for:\n\n1. Price reaching a higher-timeframe zone.\n2. A rejection candle (Pin Bar or Engulfing).\n3. A lower-timeframe structure shift (CHoCH).\n\nBy waiting for these three things to align, you significantly reduce the chance of being caught in a 'Fakeout'. This is the difference between a professional and an amateur.",
            callout: {
              type: "info",
              text: "DEFINITION: LTF (Lower Timeframe) - A timeframe lower than your primary analysis timeframe, used for refining entries (e.g., using M15 for entries when analysis is on H4)."
            }
          }
        ],
        takeaways: [
          "Anticipation entries are aggressive; confirmation entries are conservative.",
          "Confirmation usually comes from a candlestick pattern or a lower timeframe structure shift.",
          "Mastering entry timing is about balancing risk and reward."
        ],
        practiceTask: {
          instruction: "Compare entry styles.",
          steps: [
            "Find a level and identify where an anticipation entry would be.",
            "Identify where a confirmation entry (e.g., after an engulfing candle) would be."
          ]
        },
        riskManagement: "Confirmation entries have a higher win rate but require more patience. Never enter a trade just because you are 'bored' or 'afraid to miss out' (FOMO).",
        quiz: [
          { 
            question: "Which entry type has a better Risk-to-Reward ratio?", 
            options: ["Anticipation", "Confirmation", "Both are equal"], 
            correctAnswer: 0,
            explanation: "Anticipation entries allow for a tighter stop loss because you enter closer to the level, but they are less likely to succeed than confirmed entries."
          }
        ],
        relatedLessons: [
          { title: "Candle Anatomy", path: "/lesson/M4-L1" },
          { title: "Market Structure", path: "/lesson/M7-L1" }
        ],
        nextPreview: "Module 13: Trading Strategies"
      }
    ]
  },
  {
    title: "Module 13: Trading Strategies",
    icon: <Zap className="text-navy" size={24} />,
    lessons: [
      {
        id: "M13-L1",
        title: "Strategy: Break and Retest",
        duration: "20 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 1,
        objectives: ["Master the B&R setup", "Identify valid retests", "Set targets"],
        introduction: "The 'Break and Retest' is the bread and butter of professional trading. It's a simple, repeatable setup that capitalizes on the market's tendency to revisit broken levels.",
        sections: [
          {
            title: "The Bread and Butter Strategy",
            icon: <Zap size={24} />,
            illustration: <BreakAndRetestVisual />,
            content: "The steps for a successful Break and Retest:\n\n1. Identify a strong S/R level.\n2. Wait for a clear break with a body close.\n3. Wait for price to return (retest) the level.\n4. Look for a rejection candle (Pin bar/Engulfing) to enter.\n\nThis strategy ensures you are trading with the momentum while still getting a good entry price.",
            callout: {
              type: "info",
              text: "◈ INFO: The retest doesn't always happen. If price explodes away, don't chase it. Wait for the next setup."
            }
          },
          {
            title: "Valid vs. Invalid Retests",
            icon: <Activity size={24} />,
            content: "A valid retest should be a slow, corrective move back to the level. If price returns to the level with massive, aggressive candles, it is likely that the level will not hold and price will break back inside.\n\nWe want to see 'Exhaustion' as price approaches the retest zone. This shows that the counter-trend traders are losing steam and the original trend is ready to resume.",
            callout: {
              type: "warning",
              text: "✕ WARNING: If price closes back inside the level during the retest, the setup is invalidated. This is a sign that the 'break' was a fakeout."
            }
          }
        ],
        takeaways: [
          "Wait for a clear break of a significant level.",
          "The 'Retest' is your opportunity to enter with lower risk.",
          "A rejection candle at the retest confirms the setup."
        ],
        practiceTask: {
          instruction: "Analyze historical setups.",
          steps: [
            "Find 3 successful B&R setups on historical data.",
            "Find 1 failed B&R setup and analyze why (e.g., price closed back inside the level)."
          ]
        },
        riskManagement: "If price closes back inside the level during the retest, the setup is invalidated. Exit immediately or don't enter. This is a sign that the 'break' was a fakeout.",
        quiz: [
          { 
            question: "What is the entry signal in a B&R strategy?", 
            options: ["The initial break", "The retest rejection candle", "The trendline touch"], 
            correctAnswer: 1,
            explanation: "The rejection candle (like a Pin Bar or Engulfing) on the retest proves that the level has flipped and is now acting as support/resistance."
          }
        ],
        relatedLessons: [
          { title: "Breakouts", path: "/lesson/M10-L1" },
          { title: "Support & Resistance", path: "/lesson/M8-L1" }
        ],
        nextPreview: "Module 14: Advanced Market Structure"
      }
    ]
  }
];

export const advancedModules: ModuleData[] = [
  {
    title: "Module 14: Advanced Market Structure",
    icon: <Layers className="text-navy" size={24} />,
    lessons: [
      {
        id: "M14-L1",
        title: "Internal vs External Structure",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Identify Major vs Minor structure", "Understand Pro-trend vs Counter-trend", "Master the 'Range'"],
        introduction: "The market is fractal. What looks like a straight line on the Daily chart is a complex series of trends on the 15-minute chart. This lesson teaches you how to map these layers without getting confused.",
        sections: [
          {
            title: "The Market within the Market",
            icon: <Layers size={24} />,
            illustration: <MarketStructureVisual />,
            content: "External structure is the 'Big Picture' (e.g., Daily/H4). Internal structure is the movement within those legs (e.g., M15). \n\nOften, an internal downtrend is just a pullback in an external uptrend. Learning to differentiate these prevents you from trading against the higher timeframe bias. You must always know which 'Leg' of the external structure you are currently in.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Always align your internal entries with external structure for high-probability setups. Trading 'Pro-Trend' is much safer than 'Counter-Trend'."
            }
          },
          {
            title: "Mapping the Range",
            icon: <Activity size={24} />,
            content: "Every timeframe has its own 'Trading Range'. This is defined by the last Higher High and Higher Low (in an uptrend). \n\nAnything that happens inside this range is considered 'Internal Structure'. A true reversal only happens when the external range is broken. By mapping your ranges on multiple timeframes, you create a clear roadmap of where price is likely to go next.",
            callout: {
              type: "info",
              text: "DEFINITION: Trading Range - The distance between the most recent significant high and low on a specific timeframe."
            }
          }
        ],
        takeaways: [
          "External structure defines the major trend; internal structure defines the minor trend.",
          "Internal structure often provides the early warning signs of an external reversal.",
          "Always trade in the direction of the external structure when possible."
        ],
        practiceTask: {
          instruction: "Map the structural layers.",
          steps: [
            "Identify the H4 external range (the last HH and HL).",
            "Identify the M15 internal structure within that H4 range."
          ]
        },
        riskManagement: "Counter-trend trades (trading against the external structure) should have smaller targets and tighter stop losses, as the overall momentum is against you.",
        quiz: [
          { 
            question: "What is internal structure?", 
            options: ["The main trend", "Price movement within a major swing leg", "A sideways market"], 
            correctAnswer: 1,
            explanation: "Internal structure refers to the sub-trends that occur within a single leg of a higher timeframe trend."
          }
        ],
        relatedLessons: [
          { title: "Market Structure", path: "/lesson/M7-L1" },
          { title: "Top-Down Approach", path: "/lesson/M13-L1" }
        ],
        nextPreview: "Module 15: Liquidity Concepts"
      }
    ]
  },
  {
    title: "Module 15: Liquidity Concepts",
    icon: <Activity className="text-navy" size={24} />,
    lessons: [
      {
        id: "M15-L1",
        title: "What is Liquidity?",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Identify Buy-side vs Sell-side liquidity", "Understand 'Stop Clusters'", "Recognize 'Engineered' liquidity"],
        introduction: "Liquidity is the fuel that moves the market. Institutions need large amounts of it to fill their orders. This lesson teaches you how to see where the 'Big Money' is looking to enter.",
        sections: [
          {
            title: "Fuel for the Market",
            icon: <Activity size={24} />,
            illustration: <LiquidityTrapVisual />,
            content: "Liquidity is where orders (Stop Losses and Pending Orders) are resting. \n\n- Buy-side Liquidity: Resting above old highs.\n- Sell-side Liquidity: Resting below old lows.\n\nInstitutions often 'sweep' these areas to find the liquidity they need to fill their large positions. If you can't see the liquidity on the chart, YOU are likely the liquidity.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Double Tops and Double Bottoms are massive magnets for liquidity. Most retail traders place their stops just above/below these levels."
            }
          },
          {
            title: "Trendline Liquidity",
            icon: <TrendingUp size={24} />,
            content: "Retail traders are taught to buy when price touches a trendline. This creates a massive pool of liquidity (stop losses) right below that line.\n\nSmart Money often pushes price through these trendlines to trigger those stops, providing them with the volume they need to enter in the opposite direction. This is why you often see a 'Fake Breakout' of a trendline before the real move happens.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Look for 'Equal Highs' or 'Equal Lows'. These are the most obvious liquidity pools on the chart."
            }
          }
        ],
        takeaways: [
          "Liquidity is where the majority of stop orders are placed.",
          "Old highs and lows are the primary sources of liquidity.",
          "The market moves from one liquidity pool to the next."
        ],
        practiceTask: {
          instruction: "Map the liquidity pools.",
          steps: [
            "Identify 'Equal Highs' (Double Top) and mark the liquidity above them.",
            "Find a 'Trendline Liquidity' example where price has touched a line multiple times."
          ]
        },
        riskManagement: "Avoid placing your stop loss in 'Obvious' places. If a level looks too perfect, it's probably a liquidity target for institutions.",
        quiz: [
          { 
            question: "Where does Buy-side liquidity reside?", 
            options: ["Below old lows", "Above old highs", "In the middle of a range"], 
            correctAnswer: 1,
            explanation: "Buy-side liquidity consists of buy-stop orders placed by short-sellers to exit their positions, usually located above significant highs."
          }
        ],
        relatedLessons: [
          { title: "Stop Hunts", path: "/lesson/M15-L2" },
          { title: "Supply & Demand", path: "/lesson/M16-L1" }
        ],
        nextPreview: "Stop Hunts and Liquidity Grabs"
      },
      {
        id: "M15-L2",
        title: "Stop Hunts and Liquidity Grabs",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Identify the 'Sweep'", "Understand the 'Judas Swing'", "Trade the reversal after the grab"],
        introduction: "A stop hunt is not a conspiracy; it's a necessity for large players. This lesson teaches you how to stop being the victim and start being the hunter.",
        sections: [
          {
            title: "The Institutional Trap",
            icon: <ZapIcon size={24} />,
            illustration: <LiquiditySweepVisual />,
            content: "A liquidity grab (or sweep) is a fast move into a liquidity pool followed by an immediate rejection. \n\nThis is the 'Smart Money' entering the market. We look for a 'Sweep of Liquidity' followed by a 'Market Structure Shift' (MSS) on a lower timeframe to confirm that the big players have finished their business and are ready to move price.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The 'Judas Swing' is a classic liquidity grab that happens at the London Open. It fakes out retail traders before the real move of the day begins."
            }
          },
          {
            title: "The Judas Swing",
            icon: <Activity size={24} />,
            content: "The Judas Swing is a deceptive move that happens during the London Open. Price will often fake a move in one direction (usually against the higher timeframe bias) to sweep the Asian Session liquidity.\n\nOnce the stops are triggered, the market reverses sharply and continues in the true direction of the day. Learning to identify this pattern allows you to avoid being trapped and instead enter with the institutions.",
            callout: {
              type: "info",
              text: "DEFINITION: Judas Swing - A false price move at the start of a trading session designed to trap traders on the wrong side of the market."
            }
          }
        ],
        takeaways: [
          "A sweep is a fast move past a level followed by a quick rejection.",
          "It is used by institutions to fill large orders.",
          "Wait for a Market Structure Shift (MSS) to confirm the reversal after a sweep."
        ],
        practiceTask: {
          instruction: "Identify and analyze sweeps.",
          steps: [
            "Find a 'Fakeout' that was actually a liquidity sweep followed by a sharp reversal.",
            "Identify the MSS (Market Structure Shift) on the M15 chart after a H1 sweep."
          ]
        },
        riskManagement: "Wait for the MSS (Market Structure Shift) after a sweep. Don't just catch a falling knife. A sweep can turn into a real breakout if momentum is strong enough.",
        quiz: [
          { 
            question: "What usually follows a successful liquidity grab?", 
            options: ["A continuation of the move", "A sharp reversal", "Sideways movement"], 
            correctAnswer: 1,
            explanation: "After institutions have filled their orders by sweeping stops, they typically push the price aggressively in the opposite direction."
          }
        ],
        relatedLessons: [
          { title: "What is Liquidity?", path: "/lesson/M15-L1" },
          { title: "Break of Structure", path: "/lesson/M7-L2" }
        ],
        nextPreview: "Module 16: Supply & Demand"
      }
    ]
  },
  {
    title: "Module 16: Supply & Demand",
    icon: <Target className="text-navy" size={24} />,
    lessons: [
      {
        id: "M16-L1",
        title: "Supply & Demand vs S&R",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Identify 'Fresh' zones", "Understand Rally-Base-Rally (RBR)", "Differentiate zones from levels"],
        introduction: "Supply and Demand are the true drivers of price. While Support and Resistance are historical levels, S&D zones are the actual footprints of institutional orders.",
        sections: [
          {
            title: "Institutional Footprints",
            icon: <Target size={24} />,
            illustration: <SupplyDemandVisual />,
            content: "Supply and Demand zones are areas where price moved aggressively away, leaving unfilled orders. \n\n- Supply Zone: An area of heavy selling (Drop-Base-Drop or Rally-Base-Drop).\n- Demand Zone: An area of heavy buying (Rally-Base-Rally or Drop-Base-Rally).\n\nWe look for 'Imbalance' or 'Fair Value Gaps' (FVG) as confirmation of a strong zone. A 'Fresh' zone (untested) has the highest probability of a reaction.",
            callout: {
              type: "info",
              text: "◈ INFO: The more times a zone is tested, the WEAKER it becomes. This is because the unfilled orders at that level are being 'consumed' each time price returns."
            }
          },
          {
            title: "Fair Value Gaps (FVG)",
            icon: <ZapIcon size={24} />,
            content: "A Fair Value Gap (FVG) is a three-candle pattern that shows an imbalance in price delivery. It occurs when price moves so fast that it leaves a 'gap' where only one side of the market (buy or sell) was filled.\n\nThe market has a natural tendency to return to these gaps to 'rebalance' the price. When an FVG aligns with a Supply or Demand zone, it creates a high-probability 'Magnet' for price.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Look for the 'Displacement'. A strong zone is always followed by an aggressive move that leaves behind an FVG."
            }
          }
        ],
        takeaways: [
          "S&D zones are areas of institutional order footprints.",
          "Aggressive moves away from a level create strong zones.",
          "Fresh, untested zones offer the highest probability of success."
        ],
        practiceTask: {
          instruction: "Draw and analyze zones.",
          steps: [
            "Identify a Drop-Base-Drop (DBD) supply zone on the H4 chart.",
            "Identify a Rally-Base-Rally (RBR) demand zone on the H4 chart."
          ]
        },
        riskManagement: "Always look for a 'Fair Value Gap' (FVG) or 'Imbalance' right after the zone. If price moved away slowly, the zone is likely weak.",
        quiz: [
          { 
            question: "What is a 'Fresh' zone?", 
            options: ["A zone that was just created", "A zone that has never been retested", "A zone with high volume"], 
            correctAnswer: 1,
            explanation: "A fresh zone still contains the original unfilled institutional orders, making it a high-probability area for a price reaction."
          }
        ],
        relatedLessons: [
          { title: "Support & Resistance", path: "/lesson/M8-L1" },
          { title: "Liquidity Concepts", path: "/lesson/M15-L1" }
        ],
        nextPreview: "Module 17: Multi-Timeframe Analysis"
      }
    ]
  },
  {
    title: "Module 17: Multi-Timeframe Analysis",
    icon: <Monitor className="text-navy" size={24} />,
    lessons: [
      {
        id: "M17-L1",
        title: "The Top-Down Approach",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Master the HTF to LTF flow", "Establish Daily bias", "Refine entries on M1/M5"],
        introduction: "Looking at only one timeframe is like looking at a map through a straw. Multi-timeframe analysis allows you to see the 'Big Picture' while still getting a precise entry.",
        sections: [
          {
            title: "The Full Perspective",
            icon: <Monitor size={24} />,
            illustration: <MultiTimeframeVisual />,
            content: "Start with the Monthly/Weekly for long-term direction. Use the Daily/H4 for the current 'Range' and 'Bias'. Use the M15/M5 for 'Execution'. \n\nA setup is highest probability when all timeframes align. If the Daily is bullish, the H4 is bullish, and you get a bullish entry on the M15, you have 'Triple Confluence'.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The higher the timeframe, the more reliable the signal. A support level on the Daily chart is much stronger than one on the 5-minute chart."
            }
          },
          {
            title: "Aligning the Fractal",
            icon: <Activity size={24} />,
            content: "The market is fractal, meaning the same patterns repeat on all timeframes. However, the higher timeframe always dictates the direction of the lower timeframe.\n\nThink of the Daily chart as the 'Ocean' and the 5-minute chart as the 'Waves'. You can surf the waves, but you must always know which way the tide is moving. Never enter a trade on a lower timeframe that contradicts the higher timeframe bias.",
            callout: {
              type: "info",
              text: "DEFINITION: Fractal - A mathematical structure that is self-similar across different scales. In trading, this means patterns look similar on all timeframes."
            }
          }
        ],
        takeaways: [
          "Always start your analysis on a higher timeframe (HTF).",
          "The HTF provides the bias; the LTF provides the entry.",
          "Aligning multiple timeframes creates 'High Confluence' trades."
        ],
        practiceTask: {
          instruction: "Perform a top-down analysis.",
          steps: [
            "Define the Weekly trend direction.",
            "Identify a H4 S/D zone that aligns with that trend.",
            "Wait for an M15 CHoCH (Change of Character) within that zone."
          ]
        },
        riskManagement: "Don't get lost in the 'Noise' of lower timeframes. If the M1 chart is telling you to sell but the Daily is strongly bullish, the M1 signal is likely a trap.",
        quiz: [
          { 
            question: "Which timeframe should you start your analysis on?", 
            options: ["M1", "H1", "Monthly/Weekly"], 
            correctAnswer: 2,
            explanation: "Starting with the highest timeframes ensures you understand the dominant market force before looking for specific entries."
          }
        ],
        relatedLessons: [
          { title: "Market Structure", path: "/lesson/M7-L1" },
          { title: "Advanced Structure", path: "/lesson/M14-L1" }
        ],
        nextPreview: "Module 18: Advanced Price Action"
      }
    ]
  },
  {
    title: "Module 18: Advanced Price Action",
    icon: <CandlestickChart className="text-navy" size={24} />,
    lessons: [
      {
        id: "M18-L1",
        title: "Price Delivery: Compression vs Expansion",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Identify 'Order Flow' compression", "Recognize expansion phases", "Trade the transition"],
        introduction: "The market moves in two phases: building orders and executing them. This lesson teaches you how to recognize when a big move is being 'loaded' and when it's about to explode.",
        sections: [
          {
            title: "The Breath of the Market",
            icon: <CandlestickChart size={24} />,
            illustration: <WyckoffSchematicVisual />,
            content: "Compression (CP) is when price moves slowly, clearing liquidity as it goes. It looks like a tight, messy range. Expansion is a fast, aggressive move with large candles.\n\nCP often leads into a major S/D zone, followed by an explosive expansion. CP is essentially 'Engineered Liquidity' for the expansion. The market is clearing out the small players before the big move.",
            callout: {
              type: "info",
              text: "◈ INFO: When you see price slowly 'crawling' towards a major level, it is often compressing. This usually leads to a massive rejection or breakout."
            }
          },
          {
            title: "Order Flow and Imbalance",
            icon: <ZapIcon size={24} />,
            content: "Order flow is the actual buying and selling activity that drives price. When there is more buying than selling, we get an 'Imbalance' and price moves up.\n\nExpansion candles are the visual proof of an imbalance. They show that one side of the market has completely overwhelmed the other. We look for these imbalances as signs of institutional interest. If price returns to the origin of an expansion, it often finds 'Unfilled Orders' waiting to be triggered.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The faster and more aggressive the expansion, the stronger the imbalance and the more significant the zone."
            }
          }
        ],
        takeaways: [
          "Compression is a sign of order accumulation/liquidity clearing.",
          "Expansion is the realization of that accumulated volume.",
          "Avoid trading inside compression; wait for the expansion to begin."
        ],
        practiceTask: {
          instruction: "Analyze price delivery.",
          steps: [
            "Find an example of price 'Compressing' into a supply zone on the H1 chart.",
            "Identify the aggressive expansion that followed."
          ]
        },
        riskManagement: "Trading inside compression is difficult because price is messy and wicky. Wait for the 'Expansion' to confirm the direction before entering.",
        quiz: [
          { 
            question: "What does compression often signal?", 
            options: ["A trend reversal", "A buildup of liquidity for a big move", "Market closing"], 
            correctAnswer: 1,
            explanation: "Compression clears out minor orders and builds up a pool of liquidity that 'fuels' the subsequent explosive expansion move."
          }
        ],
        relatedLessons: [
          { title: "What is Liquidity?", path: "/lesson/M15-L1" },
          { title: "Supply & Demand", path: "/lesson/M16-L1" }
        ],
        nextPreview: "Module 19: Fundamentals & Macro"
      }
    ]
  },
  {
    title: "Module 19: Fundamentals & Macro",
    icon: <Globe className="text-navy" size={24} />,
    lessons: [
      {
        id: "M19-L1",
        title: "Central Banks and Interest Rates",
        duration: "25 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Understand the role of the Fed/ECB", "Recognize 'Hawkish' vs 'Dovish' tones", "Trade interest rate decisions"],
        introduction: "While technicals tell you 'When' and 'Where', fundamentals tell you 'Why'. Central banks are the ultimate market movers. This lesson teaches you how to follow their lead.",
        sections: [
          {
            title: "The Puppeteers",
            icon: <Globe size={24} />,
            illustration: <MarketDriversSessionsVisual />,
            content: "Central banks (like the Federal Reserve or ECB) control the money supply of their nations. \n\n- Higher Interest Rates: Attract foreign capital, strengthening the currency.\n- Lower Interest Rates: Weaken the currency.\n- Hawkish: The bank wants to raise rates to fight inflation.\n- Dovish: The bank wants to lower rates to stimulate the economy.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Interest rate decisions are the highest-impact news events in Forex. They can move price hundreds of pips in seconds."
            }
          },
          {
            title: "Economic Indicators",
            icon: <Activity size={24} />,
            content: "Beyond interest rates, traders watch several key economic reports:\n\n1. **GDP (Gross Domestic Product)**: Measures the overall health of the economy.\n2. **NFP (Non-Farm Payrolls)**: Measures employment in the US. A very high-impact event.\n3. **CPI (Consumer Price Index)**: Measures inflation. High inflation often leads to higher interest rates.\n\nLearning to read an 'Economic Calendar' is essential for avoiding high-risk periods and understanding the long-term fundamental bias of a currency.",
            callout: {
              type: "info",
              text: "DEFINITION: Economic Calendar - A schedule of upcoming economic news releases and events that can impact financial markets."
            }
          }
        ],
        takeaways: [
          "Central banks are the primary drivers of long-term currency trends.",
          "Interest rate differentials determine the flow of global capital.",
          "Hawkish sentiment is bullish; Dovish sentiment is bearish."
        ],
        practiceTask: {
          instruction: "Research current macro trends.",
          steps: [
            "Find the date of the next FOMC (Federal Open Market Committee) meeting.",
            "Determine if the current sentiment for the US Dollar is Hawkish or Dovish based on recent news."
          ]
        },
        riskManagement: "News events can cause massive 'Slippage' (entering at a worse price than intended). Professional traders often sit out during high-impact news releases to avoid this risk.",
        quiz: [
          { 
            question: "What does 'Hawkish' sentiment imply?", 
            options: ["Lowering interest rates", "Raising interest rates", "No change"], 
            correctAnswer: 1,
            explanation: "A hawkish central bank is concerned about inflation and is likely to raise interest rates to cool the economy, which is typically bullish for the currency."
          }
        ],
        relatedLessons: [
          { title: "Market Participants", path: "/lesson/M1-L3" },
          { title: "What is Forex?", path: "/lesson/M1-L1" }
        ],
        nextPreview: "Module 20: Trading Psychology"
      }
    ]
  },
  {
    title: "Module 20: Trading Psychology",
    icon: <Brain className="text-navy" size={24} />,
    lessons: [
      {
        id: "M20-L1",
        title: "The Psychology of Winning and Losing",
        duration: "25 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 1,
        objectives: ["Master emotional detachment", "Understand the 'Probability Mindset'", "Build a professional routine"],
        introduction: "You can have the best strategy in the world, but if you can't control your emotions, you will lose. Trading is 20% strategy and 80% psychology. This lesson is about mastering yourself.",
        sections: [
          {
            title: "The Inner Game",
            icon: <Brain size={24} />,
            illustration: <ProbabilityDistributionVisual />,
            content: "Your biggest enemy is your own mind. Fear, Greed, and Hope are the killers of accounts. \n\nA professional trader thinks in a 'Series of Trades', not individual outcomes. They accept that any single trade can be a loser, and they don't let it affect their next decision. This is called a 'Probability Mindset'.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: If you are afraid to lose, you will never be able to win. You must accept the risk before you pull the trigger."
            }
          },
          {
            title: "The Cycle of Doom",
            icon: <Activity size={24} />,
            content: "Most traders fall into the 'Cycle of Doom':\n\n1. A loss leads to Anger.\n2. Anger leads to Revenge Trading (doubling down).\n3. Revenge Trading leads to a bigger loss.\n4. Bigger loss leads to Despair and blowing the account.\n\nBreaking this cycle requires extreme discipline. You must have a 'Daily Loss Limit'. Once you hit it, you MUST walk away from the screen. The market will be there tomorrow; your capital might not be if you keep trading emotionally.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Revenge trading is the fastest way to blow an account. If you feel the urge to 'get it back', you are no longer trading; you are gambling."
            }
          }
        ],
        takeaways: [
          "Emotional control is the difference between a gambler and a trader.",
          "Think in probabilities, not certainties.",
          "A professional routine helps eliminate emotional decision-making."
        ],
        practiceTask: {
          instruction: "Audit your mindset.",
          steps: [
            "Write down your 'Trading Rules' and stick them to your monitor.",
            "Journal your emotions during your next 5 trades. Were you afraid? Greedy? Calm?"
          ]
        },
        riskManagement: "If you are feeling emotional (angry, excited, or desperate), CLOSE the platform. The market will be there tomorrow. Revenge trading is the fastest way to blow an account.",
        quiz: [
          { 
            question: "How should a professional trader view a loss?", 
            options: ["As a failure", "As a cost of doing business", "As a sign to change strategy"], 
            correctAnswer: 1,
            explanation: "Losses are inevitable in trading. A professional views them as a necessary expense, like a shop owner paying rent, as long as the loss was within their risk rules."
          }
        ],
        relatedLessons: [
          { title: "Why Risk Management?", path: "/lesson/M6-L1" },
          { title: "Journaling Trades", path: "/lesson/M3-L3" }
        ],
        nextPreview: "Academy Completed!"
      }
    ]
  }
];

export const glossaryData = [
  {word:'Ask Price',cat:'Basics',def:'The price at which the broker is willing to sell a currency pair. Always higher than the bid.',example:'EUR/USD Ask: 1.1003',related:['Bid Price','Spread']},
  {word:'ATR',cat:'Indicators',def:'Average True Range. A volatility indicator measuring the average range of price movement over a set period.',example:'ATR(14) = 45 pips → typical daily range is ~45 pips',related:['Volatility','Stop Loss']},
  {word:'Bid Price',cat:'Basics',def:'The price at which the broker will buy a currency pair from you. Always lower than the ask.',example:'EUR/USD Bid: 1.1000',related:['Ask Price','Spread']},
  {word:'Break of Structure',cat:'Technical',def:'When price closes beyond a previous swing high (in an uptrend) or swing low (in a downtrend), confirming the trend continues.',example:'Price breaks above a previous HH → bullish BOS confirmed',related:['Market Structure','CHoCH']},
  {word:'Candlestick',cat:'Technical',def:'A price chart element showing the open, high, low, and close of a period in a single visual bar.',example:'A bullish candle with close above open and small wicks',related:['OHLC','Pin Bar','Engulfing']},
  {word:'Change of Character',cat:'Technical',def:'(CHoCH) Occurs when a break of structure happens in the opposite direction of the prevailing trend — signalling a potential reversal.',example:'In an uptrend: price breaks below a prior HL → CHoCH',related:['Break of Structure','Market Structure']},
  {word:'Drawdown',cat:'Risk',def:'The peak-to-trough decline in account equity over a period. Measures how much capital is lost before a new high is reached.',example:'Account goes from $10,000 to $8,500 → 15% drawdown',related:['Risk Management','Position Sizing']},
  {word:'Engulfing Pattern',cat:'Technical',def:'A two-candle pattern where the second candle fully engulfs the body of the first, signalling a potential reversal.',example:'Bearish engulfing at resistance: large red candle covers prior green',related:['Candlestick','Pin Bar']},
  {word:'Fibonacci',cat:'Technical',def:'A ratio-based tool used to identify potential retracement and extension levels. Key levels: 23.6%, 38.2%, 61.8%, 78.6%.',example:'Price retraces to 61.8% of the last swing before resuming',related:['Retracement','Support & Resistance']},
  {word:'Higher High',cat:'Technical',def:'(HH) A swing high that is higher than the previous swing high. A sequence of HH and HL defines an uptrend.',example:'Previous high: 1.1050 → New high: 1.1080 = Higher High',related:['Higher Low','Market Structure']},
  {word:'Higher Low',cat:'Technical',def:'(HL) A swing low that is higher than the previous swing low. Occurs during pullbacks in an uptrend.',example:'Previous low: 1.0980 → New low: 1.1010 = Higher Low',related:['Higher High','Market Structure']},
  {word:'Leverage',cat:'Basics',def:'The ability to control a larger position than your actual capital. Amplifies both gains and losses.',example:'1:100 leverage → $1,000 controls $100,000 in currency',related:['Margin','Position Sizing','Risk Management']},
  {word:'Liquidity',cat:'Advanced',def:'The ease with which an asset can be bought or sold without causing significant price movement. High liquidity = tighter spreads.',example:'Major pairs like EUR/USD have very high liquidity during London session',related:['Spread','Liquidity Grab','Sessions']},
  {word:'Liquidity Grab',cat:'Advanced',def:'When price moves into an area where stop orders cluster (above highs or below lows), triggering those orders before reversing.',example:'Price sweeps above a key high, takes out stops, then reverses sharply',related:['Liquidity','Buy-side Liquidity','Stop Loss']},
  {word:'Lot Size',cat:'Basics',def:'The unit of trade volume in Forex. Standard = 100,000 units. Mini = 10,000. Micro = 1,000.',example:'0.10 lots on EUR/USD = 10,000 units = ~$1 per pip',related:['Pip','Position Sizing','Leverage']},
  {word:'MACD',cat:'Indicators',def:'Moving Average Convergence Divergence. A momentum indicator comparing two EMAs. Shows trend direction and momentum shifts.',example:'MACD line crosses above signal line → bullish momentum signal',related:['EMA','RSI','Divergence']},
  {word:'Margin',cat:'Basics',def:'The deposit required to open and maintain a leveraged position. Acts as collateral, not a cost.',example:'1% margin on a $100,000 position = $1,000 required',related:['Leverage','Position Sizing']},
  {word:'Moving Average',cat:'Indicators',def:'A line calculated from the average closing price over a set period. Smooths price data to identify trend direction.',example:'50 EMA above 200 EMA → price trading in a bullish environment',related:['EMA','SMA','Trend']},
  {word:'Pip',cat:'Basics',def:'The smallest standard price movement in a currency pair. For most pairs, one pip = 0.0001. For JPY pairs, 0.01.',example:'EUR/USD moves from 1.1000 to 1.1020 → 20 pip move',related:['Lot Size','Spread','Profit & Loss']},
  {word:'Position Sizing',cat:'Risk',def:'The process of calculating how many lots to trade based on account size, risk percentage, and stop loss distance.',example:'$10,000 account, 1% risk, 20-pip SL → 0.50 lots',related:['Risk Management','Lot Size','Stop Loss']},
  {word:'Resistance',cat:'Technical',def:'A price level where selling pressure has historically exceeded buying, causing price to reverse downward.',example:'EUR/USD consistently rejects at 1.1200 over three months',related:['Support','Role Reversal','Supply & Demand']},
  {word:'Risk-to-Reward',cat:'Risk',def:'(RRR) The ratio of potential loss to potential gain on a trade. A 1:3 RRR means risking $1 to make $3.',example:'SL = 20 pips, TP = 60 pips → 1:3 RRR',related:['Stop Loss','Take Profit','Position Sizing']},
  {word:'Role Reversal',cat:'Technical',def:'When a broken support level subsequently acts as resistance, or a broken resistance level acts as support.',example:'1.1000 held as support for weeks → breaks → retests → now acts as resistance',related:['Support','Resistance','Break of Structure']},
  {word:'RSI',cat:'Indicators',def:'Relative Strength Index. A momentum oscillator measuring the speed and magnitude of price movements on a 0–100 scale.',example:'RSI above 70 = overbought zone. RSI below 30 = oversold zone',related:['MACD','Divergence','Momentum']},
  {word:'Spread',cat:'Basics',def:'The difference between the bid and ask price. Represents the broker\'s cost of execution.',example:'EUR/USD Bid: 1.1000, Ask: 1.1003 → 3 pip spread',related:['Bid Price','Ask Price','Liquidity']},
  {word:'Stop Loss',cat:'Risk',def:'A predefined price level at which a losing trade is automatically closed to limit further loss.',example:'Buy at 1.1050, SL at 1.1030 → maximum loss = 20 pips',related:['Take Profit','Risk Management','Position Sizing']},
  {word:'Support',cat:'Technical',def:'A price level where buying pressure has historically exceeded selling, causing price to reverse upward.',example:'GBP/USD consistently bounces at 1.2500 over two months',related:['Resistance','Role Reversal','Supply & Demand']},
  {word:'Supply Zone',cat:'Advanced',def:'An area on the chart where institutional selling occurred, causing a strong bearish move. Price often returns to these zones for a reaction.',example:'Price rallies from 1.1000 to 1.1300 → the 1.1000 level is a demand zone',related:['Demand Zone','Support & Resistance']},
  {word:'Take Profit',cat:'Risk',def:'A predefined price level at which a winning trade is automatically closed to lock in gains.',example:'Buy at 1.1050, TP at 1.1110 → target = 60 pips',related:['Stop Loss','Risk-to-Reward']},
  {word:'Volatility',cat:'Technical',def:'The degree of price variation over time. High volatility = larger moves. Low volatility = smaller, slower moves.',example:'News events like NFP significantly increase volatility on USD pairs',related:['ATR','Sessions','Spread']},
];

export const pairs = [
  ['EUR/USD','Major','Euro','US Dollar','London / New York'],
  ['GBP/USD','Major','British Pound','US Dollar','London'],
  ['USD/JPY','Major','US Dollar','Japanese Yen','Asian / New York'],
  ['USD/CHF','Major','US Dollar','Swiss Franc','London / New York'],
  ['AUD/USD','Major','Australian Dollar','US Dollar','Asian / London'],
  ['USD/CAD','Major','US Dollar','Canadian Dollar','New York'],
  ['EUR/GBP','Minor','Euro','British Pound','London'],
  ['EUR/JPY','Minor','Euro','Japanese Yen','Asian / London'],
  ['GBP/JPY','Minor','British Pound','Japanese Yen','London'],
];

export const analysisReports = [
  { 
    id: '1', 
    pair: 'EUR/USD', 
    bias: 'Bullish', 
    timeframe: 'H4', 
    content: 'Price is approaching a key demand zone at 1.0850. Looking for confirmation entry.',
    summary: 'Bullish continuation expected from 1.0850 demand zone.',
    setups: ['Wait for H1 BOS', 'Target 1.1000']
  },
  { 
    id: '2', 
    pair: 'GBP/JPY', 
    bias: 'Bearish', 
    timeframe: 'D1', 
    content: 'Resistance rejection at 190.00. Expecting a pullback to 188.50.',
    summary: 'Bearish rejection at 190.00 psychological level.',
    setups: ['Sell on M15 CHoCH', 'Target 188.50']
  }
];

export const allCourses = [
  { 
    id: '1', 
    title: 'Forex Foundations', 
    level: 'Beginner', 
    duration: '10h', 
    lessons: 12,
    icon: <Globe size={24} />,
    description: 'The absolute basics of the forex market.',
    topics: ['Market Mechanics', 'Pips & Lots', 'Risk Management']
  },
  { 
    id: '2', 
    title: 'Price Action Mastery', 
    level: 'Intermediate', 
    duration: '15h', 
    lessons: 18,
    icon: <TrendingUp size={24} />,
    description: 'Master the art of reading raw price movement.',
    topics: ['Market Structure', 'Supply & Demand', 'Entry Types']
  }
];

export const platformMasteryModules: ModuleData[] = [
  {
    title: "TradingView Mastery",
    icon: <Monitor className="text-navy" size={24} />,
    lessons: [
      {
        id: "PM-L1",
        title: "Advanced Charting Tools",
        duration: "20 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Use Fibonacci tools", "Create custom layouts", "Set advanced alerts"],
        introduction: "TradingView is more than just a chart; it's a professional workstation. This lesson teaches you how to unlock its full potential to streamline your analysis.",
        sections: [
          {
            title: "Beyond the Basics",
            icon: <Monitor size={24} />,
            illustration: <TradingViewInterfaceVisual />,
            content: "Master the full suite of TradingView tools. Learn how to use the Fixed Range Volume Profile, Anchored VWAP, and how to script basic alerts to notify you when price hits your zones. \n\nCustomizing your workspace is key to maintaining focus. We'll cover how to create multi-chart layouts and save template sets for different trading sessions.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Use the 'Object Tree' to organize your drawings. Keeping your chart clean is essential for clear thinking."
            }
          },
          {
            title: "Mastering the Fibonacci Suite",
            icon: <Activity size={24} />,
            content: "Fibonacci tools are essential for identifying 'Optimal Trade Entry' (OTE) zones. Learn how to customize your Fibonacci Retracement levels to focus on the 0.618, 0.705, and 0.786 levels.\n\nWe also explore Fibonacci Extensions for profit-taking targets. By aligning these mathematical levels with market structure, you increase the probability of your setups significantly.",
            callout: {
              type: "info",
              text: "DEFINITION: OTE (Optimal Trade Entry) - A specific zone between the 61.8% and 78.6% Fibonacci retracement levels where high-probability reversals often occur."
            }
          },
          {
            title: "Alerts and Automation",
            icon: <Zap size={24} />,
            content: "Professional traders don't stare at charts all day; they let the charts tell them when to look. Learn how to set complex alerts based on price crossing trendlines, moving averages, or custom indicator signals.\n\nUsing the 'Any Alert Function Call' in Pine Script, you can even connect your TradingView alerts to external execution bots, allowing for semi-automated trading strategies.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Over-reliance on alerts can lead to 'Alert Fatigue'. Only set alerts for high-quality zones that align with your higher-timeframe bias."
            }
          }
        ],
        takeaways: [
          "Advanced tools like Volume Profile provide deeper insight into market interest.",
          "Alerts allow you to step away from the screen without missing setups.",
          "A clean, organized workspace reduces cognitive load."
        ],
        practiceTask: {
          instruction: "Optimize your workspace.",
          steps: [
            "Set an alert for a major daily support level.",
            "Create a 2-chart layout showing the H4 and M15 timeframes side-by-side."
          ]
        },
        riskManagement: "Alerts are tools for notification, not automatic entry commands. Always verify the setup manually before pulling the trigger.",
        quiz: [
          { 
            question: "What does VWAP stand for?", 
            options: ["Volume Weighted Average Price", "Variable Weekly Average Price", "Value Weighted Asset Price"], 
            correctAnswer: 0,
            explanation: "Volume Weighted Average Price (VWAP) is a technical analysis tool used to measure the average price weighted by volume, often used as a benchmark for institutional traders."
          }
        ],
        relatedLessons: [
          { title: "TradingView Intro", path: "/lesson/M3-L1" },
          { title: "Indicators", path: "/lesson/M11-L1" }
        ],
        nextPreview: "MetaTrader 4/5 Guide"
      }
    ]
  },
  {
    title: "MetaTrader 4/5 Guide",
    icon: <Settings className="text-navy" size={24} />,
    lessons: [
      {
        id: "PM-L2",
        title: "Advanced Execution on MT5",
        duration: "20 mins",
        difficulty: "Intermediate",
        moduleLessonsCount: 2,
        objectives: ["Use EAs for risk management", "Analyze trade history", "Optimize platform performance"],
        introduction: "MetaTrader is the industry standard for execution. While it may look dated, its power lies in its stability and the ability to use custom tools for precision trading.",
        sections: [
          {
            title: "Professional Execution",
            icon: <Settings size={24} />,
            illustration: <MT4TerminalVisual />,
            content: "Learn how to use Expert Advisors (EAs) to automate your position sizing and stop loss placement. This removes the 'Math Stress' during fast-moving markets. \n\nWe will also cover how to export your trade history for deep analysis in Excel or journaling software like Edgewonk or Tradervue. Analyzing your past mistakes is the fastest way to improve.",
            callout: {
              type: "info",
              text: "DEFINITION: Expert Advisor (EA) - A program that runs on the MetaTrader platform, used to automate trading strategies or assist with trade management."
            }
          },
          {
            title: "Order Types and Execution Logic",
            icon: <Zap size={24} />,
            content: "MT5 offers advanced order types like 'Buy Stop Limit' and 'Sell Stop Limit'. Understanding these is crucial for entering trades at the exact price you want without being 'slipped' during high volatility.\n\nWe also cover the difference between 'Instant Execution' and 'Market Execution'. Knowing how your broker handles your orders can be the difference between a profitable trade and a frustrating loss due to requotes.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Always test new order types or EAs on a Demo account first. A small mistake in settings can lead to significant real-money losses."
            }
          },
          {
            title: "The Power of Custom Indicators",
            icon: <TrendingUp size={24} />,
            content: "While MT5 comes with standard indicators, its true power lies in the MQL5 community. Learn how to install and configure custom indicators that can track multi-timeframe structure, show session times, or calculate your risk automatically on the chart.\n\nCustomizing your interface with these tools makes you a more efficient trader, allowing you to process information faster and make better decisions.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: Don't clutter your MT5 with too many indicators. Use only what is necessary for your strategy. Simplicity is the ultimate sophistication."
            }
          }
        ],
        takeaways: [
          "EAs can automate repetitive tasks and risk calculations.",
          "Journaling and analyzing trade history is mandatory for growth.",
          "MT5 offers better performance and more features than the older MT4."
        ],
        practiceTask: {
          instruction: "Analyze your history.",
          steps: [
            "Export your demo trade history to a CSV file from the 'Account History' tab.",
            "Identify your biggest losing trade and write down one thing you could have done differently."
          ]
        },
        riskManagement: "Automated tools and EAs can fail due to internet issues or broker glitches. Always monitor your open positions and have a backup (like the mobile app) ready.",
        quiz: [
          { 
            question: "What is an EA in MetaTrader?", 
            options: ["Electronic Account", "Expert Advisor", "Execution Agent"], 
            correctAnswer: 1,
            explanation: "An Expert Advisor (EA) is a program that runs on the MetaTrader platform, used to automate trading strategies or assist with trade management."
          }
        ],
        relatedLessons: [
          { title: "MT4/MT5 Setup", path: "/lesson/M3-L2" },
          { title: "Position Sizing", path: "/lesson/M6-L3" }
        ],
        nextPreview: "Market Psychology"
      }
    ]
  }
];

export const marketPsychologyModules: ModuleData[] = [
  {
    title: "The Trader's Mindset",
    icon: <Brain className="text-navy" size={24} />,
    lessons: [
      {
        id: "PSY-L1",
        title: "Developing a Probability Mindset",
        duration: "25 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Accept uncertainty", "Think in series", "Eliminate the need to be right"],
        introduction: "The biggest hurdle to success isn't the market; it's your own brain. This lesson teaches you how to shift from looking for 'Certainty' to thinking in 'Probabilities'.",
        sections: [
          {
            title: "Thinking Like a Casino",
            icon: <Brain size={24} />,
            illustration: <ProbabilityDistributionVisual />,
            content: "A casino doesn't care if they lose a single hand of blackjack; they know that over 1,000 hands, the math is in their favor. \n\nYou must view your trading strategy the same way. One loss is irrelevant; the next 20 trades are what matter. When you stop caring about the outcome of a single trade, you become a professional.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The need to be 'Right' is the #1 cause of blown accounts. A professional is happy to be 'Wrong' as long as they followed their plan."
            }
          },
          {
            title: "The Law of Large Numbers",
            icon: <Activity size={24} />,
            content: "Your 'Edge' is a statistical advantage that only manifests over a large sample size. If you have a 60% win rate, it is perfectly normal to have 4 or 5 losers in a row. \n\nRetail traders often abandon a perfectly good strategy after 3 losses because they lack a probability mindset. They are looking for 'The Holy Grail' that never loses, instead of accepting the math of the game.",
            callout: {
              type: "info",
              text: "DEFINITION: Edge - A measurable statistical advantage based on historical data that suggests one outcome is more likely than another over time."
            }
          },
          {
            title: "Detachment from Outcomes",
            icon: <Shield size={24} />,
            content: "To trade effectively, you must be emotionally detached from the money. If the dollar amount of a loss makes you feel physical pain or anxiety, you are trading too large.\n\nProfessional traders focus on the *Process*, not the *Profit*. If you executed your plan perfectly but still lost money, you had a successful trade. If you broke your rules but made money, you had a failed trade that will eventually lead to ruin.",
            callout: {
              type: "warning",
              text: "✕ COMMON MISTAKE: Judging your skill based on the result of a single trade. Results are random in the short term; only your process is within your control."
            }
          }
        ],
        takeaways: [
          "Individual trade outcomes are random; series outcomes are predictable.",
          "Accepting risk means being truly okay with the loss before it happens.",
          "Your edge only plays out over a large sample size of trades."
        ],
        practiceTask: {
          instruction: "Shift your perspective.",
          steps: [
            "Calculate your strategy's 'Expected Value' (Win Rate * Avg Win - Loss Rate * Avg Loss).",
            "Commit to taking the next 20 setups without changing your rules, regardless of the outcome."
          ]
        },
        riskManagement: "If you can't accept a loss, you can't trade. Risking more than you are emotionally comfortable with will lead to hesitation and poor decision-making.",
        quiz: [
          { 
            question: "What is the 'Casino Mindset'?", 
            options: ["Gambling everything", "Thinking in probabilities", "Always winning"], 
            correctAnswer: 1,
            explanation: "Thinking in probabilities means accepting that any single trade could be a loser, but trusting that your 'Edge' will produce profit over time."
          }
        ],
        relatedLessons: [
          { title: "Winning and Losing", path: "/lesson/M20-L1" },
          { title: "Why Risk Management?", path: "/lesson/M6-L1" }
        ],
        nextPreview: "Managing Emotions"
      }
    ]
  },
  {
    title: "Managing Emotions",
    icon: <Activity className="text-navy" size={24} />,
    lessons: [
      {
        id: "PSY-L2",
        title: "Fear and Greed in Trading",
        duration: "20 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Identify emotional triggers", "Use a trading journal", "Build a pre-trade routine"],
        introduction: "Fear and Greed are the two primary drivers of retail failure. This lesson helps you identify these emotions in real-time and provides tools to neutralize them.",
        sections: [
          {
            title: "The Emotional Rollercoaster",
            icon: <Activity size={24} />,
            illustration: <ProbabilityDistributionVisual />,
            content: "Fear leads to hesitation and missing good setups. Greed leads to over-leveraging and 'Revenge Trading'. \n\nLearn to recognize the physical signs of stress—increased heart rate, sweaty palms, or a 'gut feeling'—and how to step away when your emotions are clouding your judgment. A professional trader is a calm trader.",
            callout: {
              type: "warning",
              text: "✕ WARNING: If you find yourself shouting at the screen or feeling a 'rush' when you win, you are gambling, not trading."
            }
          },
          {
            title: "The Anatomy of a Revenge Trade",
            icon: <Zap size={24} />,
            content: "Revenge trading occurs when you take a loss and immediately try to 'win it back' by taking a low-quality setup with higher risk. This is the fastest way to blow an account.\n\nIt stems from an inability to accept being wrong. By understanding that a loss is just a 'business expense', you can neutralize the urge to fight the market. The market doesn't know you exist; it isn't 'out to get you'.",
            callout: {
              type: "info",
              text: "DEFINITION: Revenge Trading - The act of entering a trade out of anger or frustration following a loss, usually with increased risk and no valid setup."
            }
          },
          {
            title: "Building Your Psychological Fortress",
            icon: <Shield size={24} />,
            content: "To combat these emotions, you need a system. This includes a strict pre-trade routine, a maximum daily loss limit, and a trading journal where you record your feelings as well as your entries.\n\nWhen you have a set of rules that you trust, the need for 'emotional' decisions disappears. You become an executor of a plan, rather than a victim of your impulses.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The best traders aren't the ones with the best charts; they are the ones with the best discipline. Master your mind, and the money will follow."
            }
          }
        ],
        takeaways: [
          "Fear and Greed are natural but must be managed through rules.",
          "Physical awareness of your emotions is the first step to control.",
          "A strict pre-trade routine helps ground you in logic before you risk capital."
        ],
        practiceTask: {
          instruction: "Audit your emotions.",
          steps: [
            "List 3 specific things that make you feel stressed while trading (e.g., a fast move against you).",
            "Create a 5-minute 'Pre-Trade Checklist' to review before every entry."
          ]
        },
        riskManagement: "Emotional trading is the fastest way to blow an account. If you feel 'Revenge' after a loss, immediately shut down your platform for at least 2 hours.",
        quiz: [
          { 
            question: "What is the best way to manage emotions?", 
            options: ["Ignore them", "Follow a strict plan and journal", "Trade more"], 
            correctAnswer: 1,
            explanation: "A strict plan removes the need for 'Feeling-based' decisions, and journaling helps you identify and fix emotional patterns over time."
          }
        ],
        relatedLessons: [
          { title: "Winning and Losing", path: "/lesson/M20-L1" },
          { title: "Journaling Trades", path: "/lesson/M3-L3" }
        ],
        nextPreview: "Specialized Modules"
      }
    ]
  }
];

export const specializedModules: ModuleData[] = [
  {
    title: "News Trading",
    icon: <Zap className="text-navy" size={24} />,
    lessons: [
      {
        id: "SPEC-L1",
        title: "Trading High-Impact News",
        duration: "25 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Read the economic calendar", "Understand slippage and spreads", "Trade the NFP and FOMC"],
        introduction: "News events are the catalysts for massive volatility. While dangerous, they offer the fastest moves in the market if you know how to navigate them safely.",
        sections: [
          {
            title: "Volatility Events",
            icon: <Zap size={24} />,
            illustration: <MarketDriversSessionsVisual />,
            content: "News trading is high-risk, high-reward. Learn how to identify the 'Forecast' vs 'Actual' numbers and how to wait for the initial 'Wick' to clear before entering on the secondary move. \n\nWe focus on 'High Impact' events like Non-Farm Payrolls (NFP), CPI (Inflation), and Central Bank interest rate decisions. These are the events that change the long-term fundamental bias.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Spreads can widen to 50+ pips during major news releases. Your stop loss might not be hit at the exact price you set (Slippage)."
            }
          },
          {
            title: "The Economic Calendar",
            icon: <Activity size={24} />,
            content: "The economic calendar is your roadmap. You must know exactly when high-impact news is coming out for the currencies you trade. \n\n'Red Folder' events are the most critical. If you are in a trade and a red folder event is approaching, you must either close the trade, move your stop to break-even, or accept the risk of extreme volatility.",
            callout: {
              type: "info",
              text: "DEFINITION: Economic Calendar - A schedule of upcoming economic reports, speeches, and events that are likely to impact currency prices."
            }
          },
          {
            title: "The News Fade Strategy",
            icon: <TrendingUp size={24} />,
            content: "Many professional traders use the 'News Fade' strategy. This involves waiting for the initial spike (the 'Trap') to hit a major liquidity level or supply/demand zone, and then trading in the opposite direction once the momentum slows down.\n\nThis requires extreme patience and the ability to read price action in real-time. It is not recommended for beginners.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The market often 'prices in' the news before it happens. This is why you sometimes see a 'Buy the rumor, sell the news' reaction where price moves opposite to a positive report."
            }
          }
        ],
        takeaways: [
          "News provides the volatility needed for large price moves.",
          "Wait for the 'Initial Reaction' to finish before looking for a setup.",
          "Always check the economic calendar before starting your trading day."
        ],
        practiceTask: {
          instruction: "Research news impact.",
          steps: [
            "Find the date of the next NFP (Non-Farm Payrolls) release.",
            "Identify 3 'High Impact' (Red Folder) news events for the USD this week."
          ]
        },
        riskManagement: "Professional traders often sit out during the actual release and wait for the 'New York Open' or the 'Aftermath' to trade the established direction. This avoids the risk of massive slippage.",
        quiz: [
          { 
            question: "What does NFP stand for?", 
            options: ["National Forex Policy", "Non-Farm Payrolls", "New Financial Protocol"], 
            correctAnswer: 1,
            explanation: "Non-Farm Payrolls (NFP) is a key economic indicator for the US, representing the number of jobs added or lost in the previous month (excluding the farming industry)."
          }
        ],
        relatedLessons: [
          { title: "Central Banks", path: "/lesson/M19-L1" },
          { title: "Market Drivers", path: "/lesson/M5-L1" }
        ],
        nextPreview: "Prop Firm Mastery"
      }
    ]
  },
  {
    title: "Prop Firm Mastery",
    icon: <Shield className="text-navy" size={24} />,
    lessons: [
      {
        id: "SPEC-L2",
        title: "Passing a Prop Firm Challenge",
        duration: "30 mins",
        difficulty: "Advanced",
        moduleLessonsCount: 2,
        objectives: ["Understand drawdown limits", "Manage daily loss limits", "Build a consistent track record"],
        introduction: "Prop firms allow you to trade with massive capital without risking your own life savings. However, they have strict rules that require professional discipline to follow.",
        sections: [
          {
            title: "Trading Other People's Money",
            icon: <Shield size={24} />,
            illustration: <MathRuinVisual />,
            content: "Prop firms provide large capital (e.g., $100,000) in exchange for a share of profits. \n\nTo get funded, you must pass an evaluation. The most important rules are the 'Drawdown' limits. Learn how to manage your daily drawdown (usually 5%) and total drawdown (usually 10%) to ensure you don't lose your account. This is a game of survival, not just profit.",
            callout: {
              type: "pro",
              text: "◈ PRO INSIGHT: The best way to pass a challenge is to risk small (0.25% - 0.5% per trade). This gives you many 'lives' to hit the profit target."
            }
          },
          {
            title: "The Drawdown Trap",
            icon: <Activity size={24} />,
            content: "Drawdown is the difference between your peak balance and your current equity. Prop firms use this to measure your risk management. \n\nMost traders fail because they don't understand 'Relative Drawdown'. If your account is at $105,000 and the daily limit is 5% of the starting balance ($5,000), you can still only lose $5,000 in a day, even if you are in profit.",
            callout: {
              type: "warning",
              text: "✕ WARNING: Never risk more than 1% of your account on a single trade during a challenge. A string of 5 losses at 2% risk will hit your daily drawdown limit."
            }
          },
          {
            title: "Consistency is Key",
            icon: <Zap size={24} />,
            content: "Prop firms aren't looking for 'One-Hit Wonders'. They want traders who can produce steady, consistent results over time. \n\nMany firms have 'Consistency Rules' that prevent you from making all your profit on a single lucky trade. Focus on high-probability setups and disciplined execution. Treat the challenge like a job interview, because that's exactly what it is.",
            callout: {
              type: "info",
              text: "DEFINITION: Prop Firm (Proprietary Trading Firm) - A company that provides traders with capital to trade in exchange for a percentage of the profits generated."
            }
          }
        ],
        takeaways: [
          "Prop firms offer a path to professional capital.",
          "Drawdown rules are the most critical part of the challenge.",
          "Discipline and risk management are more important than win rate."
        ],
        practiceTask: {
          instruction: "Analyze prop firm rules.",
          steps: [
            "Read the rules of a major prop firm (e.g., FTMO or MyForexFunds).",
            "Calculate your maximum daily loss in dollars for a $100,000 account with a 5% limit ($5,000)."
          ]
        },
        riskManagement: "Prop firm trading is a game of discipline. One rule break (even by $1) and you are out. Use automated tools to ensure you never exceed your daily loss limit.",
        quiz: [
          { 
            question: "What is the most common reason for failing a prop challenge?", 
            options: ["Not making enough profit", "Hitting the daily drawdown limit", "Trading too slowly"], 
            correctAnswer: 1,
            explanation: "Most traders fail because they over-leverage to hit the profit target quickly and end up hitting the daily loss limit during a normal losing streak."
          }
        ],
        relatedLessons: [
          { title: "Position Sizing", path: "/lesson/M6-L3" },
          { title: "Winning and Losing", path: "/lesson/M20-L1" }
        ],
        nextPreview: "Academy Completed!"
      }
    ]
  }
];

export const strategies = [
  { 
    id: '1', 
    name: 'Break and Retest', 
    winRate: '65%', 
    riskReward: '1:2',
    icon: <Zap size={24} />,
    title: 'Break and Retest',
    description: 'A classic trend-following strategy.',
    points: ['Identify Trend', 'Wait for Break', 'Enter on Retest']
  },
  { 
    id: '2', 
    name: 'Order Block Entry', 
    winRate: '70%', 
    riskReward: '1:3',
    icon: <Target size={24} />,
    title: 'Order Block Entry',
    description: 'Institutional supply and demand concepts.',
    points: ['Identify OB', 'Wait for Mitigation', 'Enter on LTF BOS']
  }
];

export const selfCheckQs = [
  {q:'Can you explain what a pip is?',opts:['Yes, easily','Roughly','Not really','Never heard of it'],scores:[0,1,2,3]},
  {q:'What does "going long" mean?',opts:['Yes, I know exactly','I think so','Not sure','No idea'],scores:[0,1,2,3]},
  {q:'Can you identify a bullish market structure?',opts:['Yes, confidently','With some effort','Barely','No'],scores:[0,1,2,3]},
  {q:'Do you understand what supply & demand zones are?',opts:['Yes, deeply','Somewhat','Vaguely','No'],scores:[0,1,2,3]},
  {q:'Can you explain liquidity grabs?',opts:['Yes, clearly','I\'ve heard of it','Not really','No'],scores:[0,1,2,3]},
];
