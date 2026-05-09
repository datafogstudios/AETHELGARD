import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'src/content/courses/beginner');

const lessons = [
  {
    module: "Forex Fundamentals",
    files: [
      { slug: "01-what-is-forex", title: "What is Forex?", desc: "Introduction to the foreign exchange market." },
      { slug: "02-hierarchy-of-power", title: "Hierarchy of Power", desc: "Understanding the participants in the forex market." },
      { slug: "03-currency-pairs", title: "Currency Pairs", desc: "How foreign exchange quotes are read and understood." },
      { slug: "04-market-sessions", title: "Market Sessions", desc: "Understanding the 24-hour cycle of the Forex market." }
    ]
  },
  {
    module: "Price & Trade Basics",
    files: [
      { slug: "01-pips-and-points", title: "Pips and Points", desc: "The heartbeat of price movement in forex." },
      { slug: "02-lot-sizes", title: "Lot Sizes", desc: "Understanding trade volume and contract sizes." },
      { slug: "03-leverage-and-margin", title: "Leverage & Margin", desc: "The double-edged sword of buying power." },
      { slug: "04-bid-ask-spread", title: "Bid, Ask & Spread", desc: "The cost of entry in the forex market." }
    ]
  },
  {
    module: "Market Mechanics",
    files: [
      { slug: "01-bulls-and-bears", title: "Bulls vs Bears", desc: "Visualizing market control and sentiment." },
      { slug: "02-candlesticks", title: "Candlestick Anatomy", desc: "Reading the story behind price action." },
      { slug: "03-market-structure", title: "Market Structure", desc: "Identifying trends and structure breaks." },
      { slug: "04-support-and-resistance", title: "Support & Resistance", desc: "Mapping historical price zones." }
    ]
  },
  {
    module: "Risk Management",
    files: [
      { slug: "01-position-sizing", title: "Position Sizing", desc: "Calculating risk before entering a trade." },
      { slug: "02-stop-loss-take-profit", title: "Stop Loss & Take Profit", desc: "Protecting capital and securing gains." },
      { slug: "03-risk-to-reward", title: "Risk to Reward Ratio", desc: "The mathematical edge in trading." },
      { slug: "04-trading-psychology", title: "Trading Psychology", desc: "Controlling emotions and managing FOMO." }
    ]
  }
];

// Helper to pad numbers
const pad = (num) => num.toString().padStart(2, '0');

let globalOrder = 1;

lessons.forEach((mod, mIdx) => {
  const modSlug = `${pad(mIdx + 1)}-${mod.module.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9-]/g, '-')}`;
  const dirPath = path.join(outDir, modSlug);
  
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  mod.files.forEach((file, fIdx) => {
    const mdContent = `---
title: "${file.title}"
module: "${mod.module}"
order: ${globalOrder}
description: "${file.desc}"
time: ${10 + (fIdx * 2)}
difficulty: "Beginner"
tools: ["calc", "sim"]
objectives:
  - "Understand the core concepts of ${file.title.toLowerCase()}"
  - "Identify practical applications in live markets"
  - "Calculate necessary metrics for trading readiness"
quiz:
  - question: "What is the primary concept behind ${file.title}?"
    options: ["Understanding volume", "Risk containment", "Price action", "Core mechanics"]
    correct: 3
    explanation: "This lesson covers the core mechanics of ${file.title}."
  - question: "How does ${file.title} impact your trades?"
    options: ["Increases margin", "Affects entry and exit", "Reduces spread", "Forces a margin call"]
    correct: 1
    explanation: "It primarily affects when and how you enter and exit trades."
  - question: "Why is mastering ${file.title} important?"
    options: ["To trade exotics", "To maximize leverage", "For consistent profitability", "To avoid weekend fees"]
    correct: 2
    explanation: "Mastery leads to consistent profitability over the long run."
  - question: "Which tool helps with ${file.title}?"
    options: ["Stop Loss", "Calculator", "News Calendar", "Chart Indicator"]
    correct: 1
    explanation: "Calculators are essential for managing ${file.title} effectively."
  - question: "What is a common mistake regarding ${file.title}?"
    options: ["Overleveraging", "Ignoring it entirely", "Trading only on Mondays", "Using a demo account"]
    correct: 1
    explanation: "Ignoring ${file.title} is a fatal mistake for beginners."
---

## Introduction to ${file.title}

${file.desc} This represents a foundational pillar of Forex trading that every beginner must master before moving forward.

### The Mechanics

Understanding the mechanics involves recognizing pattern behavior on a chart, managing risk, and knowing when to execute. A common element is using [[glossary terms|Interactive Glossary Tools]] to quickly decode terminology.

Here is a tool you can use:
::calculator{type="position-size"}

### Application

When you apply this to the live market, always ensure you are monitoring key sessions. For example, the London overlap creates significant volume spikes.

> "A trader who masters the basics controls their destiny in the markets."

## Summary
- Core concept established
- Practical usage calculated
- Psychological impact recognized
`;

    fs.writeFileSync(path.join(dirPath, `${file.slug}.md`), mdContent);
    console.log(`Created ${file.slug}.md`);
    globalOrder++;
  });
});
