---
title: "The Language of Charts: Candlestick Anatomy"
module: "Market Mechanics"
order: 10
description: "How to read the OHLC (Open, High, Low, Close) story of every price candle."
illustration: "CandleAnatomyVisual"
time: 15
difficulty: "Beginner"
tools: ["chart"]
objectives:
  - "Identify the 4 components of a Japanese Candlestick (OHLC)."
  - "Understand the psychological difference between the body and the wick."
  - "Read basic candlestick strength based on size."
quiz:
  - question: "What do the letters OHLC stand for?"
    options: ["Overly High, Lowly Closed", "Open, High, Low, Close", "Opening Hourly, Lowering Constantly", "Open, Hold, Limit, Cancel"]
    correct: 1
    explanation: "OHLC stands for Open, High, Low, and Close—the four data points every candle represents."
  - question: "On a Bullish (Green) candle, where is the Close located?"
    options: ["At the bottom of the body", "At the top of the body", "At the very tip of the upper wick", "In the exact middle"]
    correct: 1
    explanation: "A Bullish candle means price went up, so the Close is located at the top of the colored body."
  - question: "What does a long wick/shadow representing?"
    options: ["Price stability", "A period of zero trading volume", "Price rejection by the market", "A broker error"]
    correct: 2
    explanation: "A long wick shows that price traveled to that level, but was firmly rejected back in the opposite direction before the candle closed."
  - question: "If you see a Bearish (Red) candle with a massive lower wick and a tiny body, what does that indicate?"
    options: ["Bears destroyed the Bulls", "Bulls showed immense strength to push the price back up from the lows", "The market is about to crash", "Volatility is dying"]
    correct: 1
    explanation: "The long lower wick means the Bears pushed the price down, but the Bulls aggressively stepped in and pushed it all the way back up."
---

## What is a Japanese Candlestick?

Invented by Japanese rice merchants hundreds of years ago to track market momentum, the **Japanese Candlestick** is the industry standard for visualizing price action. 

Unlike a simple line chart that only shows you exactly where the price is *right now*, a candlestick tells you a story of what happened during a specific time period (e.g., 1 Hour, 1 Day).

## The Four Data Points (OHLC)

Every single candlestick is built using four precise data points. 

1. **O (Open):** The exact price when the time period began.
2. **H (High):** The absolute highest price reached during the time period.
3. **L (Low):** The absolute lowest price reached during the time period.
4. **C (Close):** The exact price when the time period ended.

### 1. The Body

The thick, colored part of the candlestick is called the **Body**. It represents the distance between the **Open** and the **Close**.

- **Bullish Candle (Usually Green/White):** 
  - Price went UP. 
  - The **Open** is at the bottom of the body. 
  - The **Close** is at the top of the body.
- **Bearish Candle (Usually Red/Black):** 
  - Price went DOWN. 
  - The **Open** is at the top of the body. 
  - The **Close** is at the bottom of the body.

The larger the body, the stronger the conviction of the buyers or sellers. A massive green body means the Bulls dominated the entire session.

### 2. The Wicks (Shadows)

The thin lines poking out of the top and bottom of the body are called **Wicks** (or Shadows). They represent the extreme **Highs** and **Lows** of that time period.

- **Upper Wick:** The highest price reached before sellers pushed it back down.
- **Lower Wick:** The lowest price reached before buyers pushed it back up.

## The Psychology of the Wick

Wicks are arguably more important than the body itself because wicks tell you a story of **Rejection**.

Imagine a 1-Hour candle opens. For 45 minutes, the Bears aggressively sell, pushing the price way down (creating a Low). But in the final 15 minutes, the Bulls enter the market with massive volume. They buy it all up, pushing the price back to where it started before the hour closes.

On the chart, this leaves a very tiny body, but a **massive long lower wick**. 

That long lower wick is visual proof that a lower price was tested, and outright rejected by buyers. It is a sign of Bullish strength, even if the candle ultimately closed slightly red.

## View the Anatomy Live

Look at the live chart below. Hover over any candle and try to identify its Open, High, Low, and Close. Notice how long wicks often precede a reversal in direction.

::chart{symbol="OANDA:EURUSD" timeframe="60"}
