---
title: "Daily Profiles"
module: "Time & Price"
order: 2
description: "Anticipating the high or low of the day using algorithmic templates."
time: 25
difficulty: "Advanced"
tools: ["chart"]
objectives:
  - "Understand the concept of the Open, High, Low, Close (OHLC) algorithm"
  - "Identify the Classic Buy and Classic Sell Daily Profiles"
  - "Learn to anticipate which Killzone will form the extreme of the day"
quiz:
  - question: "On a highly probable Bullish Day, which timeframe typically forms the Low of the Day?"
    options: ["The Asian Session", "The London Killzone", "The New York Open", "The London Close"]
    correct: 1
    explanation: "In a classic Buy Profile, the London Killzone drops below the Daily Open to engineer liquidity, creating the Low of the Day before rallying."
  - question: "What is the 'Power of 3' (PO3) in algorithmic trading?"
    options: ["The combination of moving average, RSI, and MACD", "Accumulation, Manipulation, and Distribution", "Buying 3 lots at a time", "Asian session, London session, New York session"]
    correct: 1
    explanation: "PO3 refers to the Accumulation of orders (Asia), the Manipulation to trigger stops (London), and the Distribution to a target (NY)."
  - question: "If the Daily Open is 1.1000 and your HTF bias is strongly Bullish, where should you look to buy?"
    options: ["Exactly at 1.1000", "Above 1.1000 once it breaks out", "Below 1.1000 during the London or New York Killzone", "During the Asian session"]
    correct: 2
    explanation: "Institutions buy at a discount. You want to see price manipulate *below* the Midnight NY Open before executing a long position."
---

## The Algorithmic Script for the Day

Just like a movie script operates in a three-act structure (Setup, Conflict, Resolution), the algorithm operates the daily candle using a specific set of profiles. 

If you step back and look at a Daily candlestick, it has four parts: Open, High, Low, and Close (OHLC). What retail traders see as a single green candle is actually a complex, engineered sequence of events on the 15-minute timeframe.

## The Power of 3 (PO3)

Every major trending day consists of three distinct phases. This is known as the **Power of 3 (PO3)**:

1. **Accumulation:** The market builds liquidity in a tight range.
2. **Manipulation:** The algorithm fakes a breakout in the *wrong* direction to trigger retail stops and trap breakout traders.
3. **Distribution:** The algorithm rapidly delivers price to the true objective of the day.

## Profile 1: The Classic Buy Profile (London Low)

If your Higher Timeframe analysis (Daily/4H) indicates the market is Bullish, you anticipate the Classic Buy Profile.

**The Sequence:**
1. **Midnight NY Open:** The day begins. The opening price is critical. Mark it on your chart with a horizontal line.
2. **Asia (Accumulation):** Price consolidates near the Midnight Open.
3. **London (Manipulation):** At 2:00 AM NY time, the price actively drops *below* the Midnight Open. This is the Judas Swing. It sweeps the Asian Low stop losses. This manipulation forms the **Low of the Day**.
4. **New York (Distribution):** At 7:00 AM NY time, price has already begun trending up from London. NY offers a small retracement (a discount) before aggressively expanding higher to hit a major liquidity pool.
5. **London Close:** Price hits the objective, drops slightly as traders take profits, and the day closes near its high.

**The Rule:** On a Bullish day, you **must** buy *below* the Midnight Open. Buying above the Midnight Open means you are buying at an institutional premium. 

## Profile 2: The Classic Sell Profile (London High)

If your Higher Timeframe analysis indicates the market is Bearish, you anticipate the Classic Sell Profile.

**The Sequence:**
1. **Midnight NY Open:** Mark the opening price.
2. **Asia (Accumulation):** Price consolidates.
3. **London (Manipulation):** Price rallies actively *above* the Midnight Open. It sweeps the Asian High. This manipulation forms the **High of the Day**.
4. **New York (Distribution):** Price drops aggressively. NY offers a small retracement up to a premium (FVG/Breaker) before continuing the massive sell-off.
5. **London Close:** Price hits the downside objective, retraces slightly upwards, and the day closes near its low.

**The Rule:** On a Bearish day, you **must** sell *above* the Midnight Open. Selling below the Midnight Open means you are selling at an institutional discount, which is a low-probability entry.

## Profile 3: The New York Reversal Profile

Sometimes, the London Killzone does not form the extreme of the day. If the Higher Timeframe objective is exceptionally close at the start of the day, London might simply run straight to it.

**The Sequence (Bearish Reversal):**
1. Price rallies aggressively during Asia and London.
2. At exactly 8:30 AM or 10:00 AM NY time, price hits a massive HTF objective (like a Weekly Fair Value Gap or a major Daily Swing High).
3. The New York session initiates a massive, violent reversal, completely erasing the London move. 
4. In this profile, the **High of the Day** is formed during the New York session, not London.

## How to Trade With Profiles

You do not guess the profile. You let the Higher Timeframe dictate it.

**Example Application:**
1. You look at the Daily chart. The trend is strongly UP. The next major liquidity pool is 100 pips above current price.
2. Your bias is BULLISH. You anticipate the Classic Buy Profile.
3. You draw a line at the Midnight NY Open price.
4. You wait. During London or early New York, you watch price drop *below* the Midnight Open line.
5. While price is below the line, you look for a Bullish Breaker Block or Bullish FVG on the 5m or 15m chart.
6. You enter Long. You are now buying at an institutional discount, targeting the liquidity pool above. 

By marrying Time (Killzones) with algorithmic sequences (Profiles), you eliminate 90% of bad trades.
