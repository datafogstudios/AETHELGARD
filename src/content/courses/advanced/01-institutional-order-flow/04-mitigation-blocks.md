---
title: "Mitigation Blocks"
module: "Institutional Order Flow"
order: 4
description: "Understanding institutional position management without a liquidity sweep."
illustration: "OrderBlockVisual"
time: 21
difficulty: "Advanced"
tools: ["chart"]
objectives:
  - "Differentiate between a Breaker Block and a Mitigation Block"
  - "Understand the logic of trapped institutional volume during a failure to swing"
  - "Identify valid Mitigation Blocks in the live market"
  - "Execute entries safely using Mitigation Blocks"
quiz:
  - question: "What is the primary difference between a Breaker Block and a Mitigation Block?"
    options: ["Breaker Blocks sweep liquidity before breaking; Mitigation Blocks fail to sweep liquidity before breaking.", "Mitigation Blocks only happen in downtrends.", "Breaker Blocks are smaller than Mitigation Blocks.", "There is no difference, they are different names for the same thing."]
    correct: 0
    explanation: "A Breaker Block is formed after a true liquidity sweep (e.g., a Higher High). A Mitigation Block is formed when price fails to make a Higher High, forming a Lower High instead (Failure Swing), and then breaks downwards."
  - question: "What causes a Mitigation Block to form?"
    options: ["Retail traders buying heavily.", "Institutions closing their positions forcefully at a loss.", "Institutions trying to push price to a new high, failing, and needing to mitigate the trapped buy orders when price drops.", "Moving average crossovers crossing back and forth."]
    correct: 2
    explanation: "The algorithm attempts to sweep liquidity but lacks the momentum to reach the old high. It forms a lower high. The buy orders used in that failed attempt become trapped when price drops below the old low. Price returns to the block to mitigate those buys."
  - question: "A Bullish Mitigation Block setup begins with:"
    options: ["A Lower Low followed by a Higher Low.", "A Higher Low followed by a Lower Low.", "A sideways consolidation that breaks upward.", "A massive gap down on a Monday open."]
    correct: 0
    explanation: "A Bullish setup starts when price drops to a Low, rallies, and then drops again but fails to break the original Low (forming a Higher Low), before aggressively rallying and breaking the intermediate high."
  - question: "Why are Mitigation Blocks considered slightly lower probability than Breaker Blocks?"
    options: ["Because they don't involve a true liquidity sweep (stop hunt) before the reversal.", "Because they are easily seen by retail traders.", "Because they only happen on the 1-minute chart.", "Because they require paid indicators to find."]
    correct: 0
    explanation: "Because a Mitigation block did not successfully raid buy-side or sell-side stops before reversing, the algorithm hasn't collected as much fuel. However, they are still highly effective when aligned with higher timeframe trends."
---

## The Cousin to the Breaker: The Mitigation Block

In the previous lesson, we analyzed Breaker Blocks. A Breaker Block is incredibly powerful because it involves a **Liquidity Sweep** (a stop hunt) before the reversal. 

However, the market does not always give us a clean sweep. Sometimes, price tries to sweep an old high, fails to reach it, and immediately reverses. This creates what retail traders call a "Failure Swing" or a "Double Top / Double Bottom."

When a Failure Swing occurs and price breaks structure in the opposite direction, the failed order block left behind is known as a **Mitigation Block**.

## The Mechanics of Mitigation

Just like the Breaker Block, the concept relies entirely on **trapped institutional volume**. 

### Bearish Mitigation Block Example
1. The market makes a **High**.
2. It retraces, creating a **Low**.
3. It rallies again, attempting to break the previous High. 
4. However, it lacks the momentum. It stops short, forming a **Lower High** (Failure Swing).
5. Price then aggressively drops, breaking straight through the previous Low, creating a **Lower Low**.

Why is there a mitigation block? During Step 3, institutions injected massive **Buy orders** trying to push the price past the old High. When they failed and the price collapsed, those Buy orders were trapped deeply in the red. 

The institutions will allow the price to retrace back up to the exact candle where they initiated those doomed Buy orders (the peak of the Lower High). Once price touches that zone, they close the buys at breakeven, and their massive selling pressure resumes the down trend.

The **Bearish Mitigation Block** is the last up-close candle (or group of candles) that formed the Lower High, right before the downward break.

### Bullish Mitigation Block Example
1. The market makes a **Low**.
2. It rallies, creating a **High**.
3. It drops again, attempting to sweep the previous Low.
4. It fails to reach it, forming a **Higher Low** (Failure Swing).
5. Price aggressively rallies, breaking straight through the previous High, creating a **Higher High**.

The **Bullish Mitigation Block** is the last down-close candle (or group of candles) that formed the Higher Low, right before the upward break. Price will retrace down into this block to mitigate trapped sell orders before exploding higher.

::chart{type="advanced" pair="USD/JPY" timeframe="1H"}

## Breaker vs. Mitigation: Visual Summary

It is critical that you can tell these two apart:
- **Breaker Block (Bearish):** High -> Low -> **Higher High** -> Lower Low -> Retrace (Short Entry).
- **Mitigation Block (Bearish):** High -> Low -> **Lower High** -> Lower Low -> Retrace (Short Entry).

Because the Mitigation Block did *not* sweep the initial external liquidity, you must be slightly more cautious. It relies entirely on internal liquidity shifts. 

## Trading the Mitigation Block

1. **The Failure:** Identify a clear Failure Swing (a Lower High in a bearish scenario).
2. **The Break:** Wait for price to aggressively break the intermediate Low, shifting market structure bearish.
3. **The Block:** Mark the last opposite-colored candle of the Failure Swing. Extend it right.
4. **The Entry:** Look for a return to this block. Ideally, this block should align with a Fair Value Gap inside the displacement leg.
5. **The Stop:** Place your stop loss safely above the peak of the Failure Swing. 

