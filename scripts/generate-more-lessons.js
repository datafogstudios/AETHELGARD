import fs from 'fs';
import path from 'path';

const baseOutDir = path.join(process.cwd(), 'src/content/courses');

const courses = [
  {
    level: "intermediate",
    modules: [
      {
        module: "Market Structure Pro",
        files: [
          { slug: "01-advanced-market-structure", title: "Advanced Market Structure", desc: "Understanding the true nature of higher highs and lower lows." },
          { slug: "02-structure-shifts", title: "Structure Shifts vs Pullbacks", desc: "How to identify a genuine trend reversal." },
          { slug: "03-premium-and-discount", title: "Premium & Discount Pricing", desc: "Learning where institutions actually buy and sell." },
          { slug: "04-multi-timeframe", title: "Multi-Timeframe Analysis", desc: "Aligning the macro trend with micro execution." }
        ]
      },
      {
        module: "Supply & Demand",
        files: [
          { slug: "01-supply-demand-zones", title: "Supply & Demand Zones", desc: "Identifying the origin of major market moves." },
          { slug: "02-zone-refinement", title: "Zone Refinement", desc: "Nesting zones to improve your risk-to-reward ratio." },
          { slug: "03-liquidity-voids", title: "Liquidity Voids", desc: "Understanding rapid price delivery and imbalances." },
          { slug: "04-order-blocks", title: "Introduction to Order Blocks", desc: "The institutional footprint left on the chart." }
        ]
      },
      {
        module: "Liquidity Concepts",
        files: [
          { slug: "01-what-is-liquidity", title: "What is Liquidity?", desc: "Why the market hunts stop losses." },
          { slug: "02-buy-side-sell-side", title: "Buy-side & Sell-side", desc: "Identifying the pools of money resting above and below price." },
          { slug: "03-inducement", title: "Inducement & Traps", desc: "How retail traders are engineered into bad positions." },
          { slug: "04-liquidity-sweeps", title: "Trading Liquidity Sweeps", desc: "Executing trades after the trap is sprung." }
        ]
      }
    ]
  },
  {
    level: "advanced",
    modules: [
      {
        module: "Institutional Order Flow",
        files: [
          { slug: "01-algorithmic-price-delivery", title: "Algorithmic Price Delivery", desc: "How automated systems deliver price to specific targets." },
          { slug: "02-fair-value-gaps", title: "Fair Value Gaps (FVG)", desc: "Trading inefficiencies in price delivery." },
          { slug: "03-breaker-blocks", title: "Breaker Blocks", desc: "When failed order blocks become high-probability setups." },
          { slug: "04-mitigation-blocks", title: "Mitigation Blocks", desc: "Understanding institutional position management." }
        ]
      },
      {
        module: "Time & Price",
        files: [
          { slug: "01-killzones", title: "Market Killzones", desc: "The specific hours where volatility and setups align." },
          { slug: "02-daily-profiles", title: "Daily Profiles", desc: "Anticipating the high or low of the day." },
          { slug: "03-weekly-templates", title: "Weekly Templates", desc: "The rhythm of the weekly trading cycle." },
          { slug: "04-macro-events", title: "Trading Macro Events", desc: "How to navigate NFP, CPI, and FOMC." }
        ]
      },
      {
        module: "The Trading Plan",
        files: [
          { slug: "01-creating-your-edge", title: "Creating Your Edge", desc: "Defining a mechanical, repeatable trading strategy." },
          { slug: "02-journaling", title: "Professional Journaling", desc: "Tracking data to force improvement." },
          { slug: "03-prop-firms", title: "Passing Prop Firm Challenges", desc: "Adapting risk management for evaluation accounts." },
          { slug: "04-mastery", title: "The Path to Mastery", desc: "Scaling capital and maintaining longevity in the markets." }
        ]
      }
    ]
  }
];

// Helper to pad numbers
const pad = (num) => num.toString().padStart(2, '0');

courses.forEach(course => {
  let globalOrder = 1;
  const levelDir = path.join(baseOutDir, course.level);
  
  if (!fs.existsSync(levelDir)) {
    fs.mkdirSync(levelDir, { recursive: true });
  }

  course.modules.forEach((mod, mIdx) => {
    const modSlug = `${pad(mIdx + 1)}-${mod.module.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9-]/g, '-')}`;
    const dirPath = path.join(levelDir, modSlug);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    mod.files.forEach((file, fIdx) => {
      const mdContent = `---
title: "${file.title}"
module: "${mod.module}"
order: ${globalOrder}
description: "${file.desc}"
time: ${12 + (fIdx * 3)}
difficulty: "${course.level.charAt(0).toUpperCase() + course.level.slice(1)}"
tools: ["chart"]
objectives:
  - "Master the advanced mechanics of ${file.title.toLowerCase()}"
  - "Identify deep liquidity signatures in the live market"
  - "Formulate trade execution plans based strictly on probability"
quiz:
  - question: "What is the core institutional purpose of ${file.title}?"
    options: ["To slow down the market", "To generate retail signals", "To facilitate smart money execution", "To close the Asian session"]
    correct: 2
    explanation: "Institutions use these structures to facilitate their massive order execution."
  - question: "When analyzing ${file.title}, what confirms its validity?"
    options: ["Time of day and volume", "RSI divergence", "Moving average crossover", "A trendline break"]
    correct: 0
    explanation: "Time of day (Killzones) and volume are the truest confirmations for institutional footprint setups."
  - question: "A common retail trap regarding ${file.title} is:"
    options: ["Waiting too long for confirmation", "Taking the first signal without looking at higher timeframes", "Risking less than 1%", "Using a stop loss"]
    correct: 1
    explanation: "Retail traders often fail to align ${file.title} with the higher timeframe narrative."
  - question: "How does ${file.title} relate to liquidity?"
    options: ["It ignores liquidity completely", "It is usually formed to engineer or sweep liquidity", "It happens only when liquidity is zero", "It permanently removes liquidity"]
    correct: 1
    explanation: "${file.title} processes are almost always tied directly to engineering or consuming liquidity pools."
  - question: "The best tool for confirming ${file.title} is:"
    options: ["A raw, un-indicator-loaded price chart", "A stochastic oscillator", "A laggy MACD", "An automated EA"]
    correct: 0
    explanation: "A clean price chart focused on pure price action is the most reliable tool for advanced concepts."
---

## Introduction to ${file.title}

${file.desc} This advanced concept separates the professionals from the retail speculators. By studying the true footprint of algorithmic delivery, you begin to trade alongside the institutions rather than against them.

### Institutional Order Flow

We look beyond standard support and resistance. Here, we analyze how orders are routed, where liquidity is resting, and how algorithms sweep these areas efficiently. 

Take a look at how this appears on a chart:
::chart{type="advanced" pair="EUR/USD" timeframe="15m"}

### Building Systems

Trading ${file.title} requires absolute discipline. You must wait for the exact parameters of your system to align within the correct time window (Killzone). A [[Liquidity Sweep|hunt for stop losses]] is often the pre-cursor to the real move.

> "The market is an absolute probability matrix. You don't need to know what happens next to make money."

## Actionable Takeaways
- Institutional footprint identified
- Execution framework built
- Risk controls aligned with higher probability variations
`;

      fs.writeFileSync(path.join(dirPath, `${file.slug}.md`), mdContent);
      console.log(`Created ${course.level}/${file.slug}.md`);
      globalOrder++;
    });
  });
});
