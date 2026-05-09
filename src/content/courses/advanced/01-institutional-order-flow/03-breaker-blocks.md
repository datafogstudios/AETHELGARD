---
title: "Breaker Blocks"
module: "Institutional Order Flow"
order: 3
description: "When failed order blocks become high-probability setups."
illustration: "BreakAndRetestVisual"
time: 18
difficulty: "Advanced"
tools: ["chart"]
objectives:
  - "Understand the mechanics of a failed order block"
  - "Define the sequence of a Bullish and Bearish Breaker Block"
  - "Learn how institutions mitigate trapped orders"
  - "Execute entries using Breaker Blocks coupled with Market Structure Shifts"
quiz:
  - question: "What is the defining characteristic of a Breaker Block?"
    options: ["It is the first candle of a new trend", "It is an Order Block that was broken and is now being used as support/resistance", "It is a gap in price", "It only happens on the daily timeframe"]
    correct: 1
    explanation: "A Breaker Block is an Order Block that price traded through. When price returns to it, it acts as a mitigation level for trapped institutional orders."
  - question: "Which sequence correctly identifies a Bullish Breaker Block?"
    options: ["High -> Lower Low -> Higher High -> Return to the breached High", "Low -> Higher High -> Lower Low -> Return to the breached Low", "Highest High -> Consolidation -> Drop", "Sideways market -> Gap Up"]
    correct: 0
    explanation: "A Bullish Breaker is an old High (Order Block) that was swept to form a Lower Low, then broken upwards to form a Higher High."
  - question: "Why do institutions use Breaker Blocks?"
    options: ["To slow down the market", "To generate retail signals", "To mitigate (break even on) losing positions established during a liquidity sweep", "To close the Asian session"]
    correct: 2
    explanation: "When Smart Money drives price down to engineer liquidity (forming a lower low), they accumulate temporary 'buy' positions that are in drawdown. A Breaker Block allows them to exit those positions at breakeven before reversing the market."
  - question: "What adds the most validity to a Breaker Block setup?"
    options: ["The presence of a Fair Value Gap (FVG) forming directly after the Breaker is broken", "RSI being oversold", "A moving average crossover exactly on the block", "Trading it during the Asian session"]
    correct: 0
    explanation: "An energetic Market Structure Shift that creates a Fair Value Gap directly above/below the Breaker confirms strong institutional intent."
---

## The Origin of a Breaker Block

To understand a Breaker Block, we must first understand a standard Order Block. An Order Block is the last opposite-colored candle before a strong move. It represents institutional accumulation.

However, sometimes price does not respect an Order Block. Sometimes, price aggressively trades *straight through it*. When an Order Block fails, retail traders often panic. But for an institutional trader, a failed Order Block is an incredibly high-probability setup known as a **Breaker Block**.

## The Institutional Mechanics

Why does a Breaker Block work? It comes down to order mitigation.

Let's look at a **Bearish Breaker Block**:
1. The market is in an uptrend. It makes a High, then a Higher Low, then forms a **Higher High**. 
2. Creating that Higher High was a *stop hunt*. The algorithm drove price up to trigger retail breakout buyers, only to aggressively reverse the price downwards.
3. To engineer that final push up, institutions had to input temporary **Buy orders**. 
4. As price collapses, breaking the previous structure (creating a Lower Low), those institutional Buy orders are now deeply in the red (drawdown). 
5. Institutions do not like taking losses. Therefore, they will temporarily pause the sell-off and let price retrace back up to the exact block where they instantiated those Buy orders.
6. The moment price touches the block, they close their Buy orders at breakeven (mitigation). This massive selling pressure causes the real downward trend to begin.

The **Bearish Breaker Block** is the last down-close candle prior to the Higher High that was broken.

## The Sequence: Step-By-Step

### Bullish Breaker
1. Market makes a **High**.
2. Market drops to a **Lower Low** (sweeping sell-side liquidity).
3. Market aggressively rallies to a **Higher High**, breaking through the original High.
4. The **up-close candle** (or series of candles) responsible for the original High is the Bullish Breaker.
5. Wait for price to retrace down into the Bullish Breaker. Enter Long.

### Bearish Breaker
1. Market makes a **Low**.
2. Market rallies to a **Higher High** (sweeping buy-side liquidity).
3. Market aggressively drops to a **Lower Low**, breaking through the original Low.
4. The **down-close candle** (or series of candles) responsible for the original Low is the Bearish Breaker.
5. Wait for price to retrace up into the Bearish Breaker. Enter Short.

::chart{type="advanced" pair="S&P500" timeframe="15m"}

## High-Probability Confluences

Do not trade every broken candle. A Breaker Block is only valid if it meets the following criteria:

- **Liquidity Sweep:** The move prior to the breaker *must* have swept a significant swing high or low. If no liquidity was taken, it is not a high-probability Breaker.
- **Displacement (FVG):** When the Breaker is broken, it must be broken with energy. Look for a Fair Value Gap to be created directly after the break.
- **Alignment:** The Breaker block should align perfectly with the 50% discount/premium level of the newly formed range.

## Trading the Setup

1. Wait for the Liquidity Sweep and subsequent Market Structure Shift.
2. Identify the Breaker Block (the failed order block).
3. Draw a box extending the high and low of the Breaker candle forward in time.
4. Place a limit order at the start of the Breaker Block box.
5. Place your stop loss safely above/below the Breaker Block, or for extreme safety, above/below the swing that caused the sweep.

