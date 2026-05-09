---
title: "Fair Value Gaps (FVG)"
module: "Institutional Order Flow"
order: 2
description: "Trading inefficiencies in price delivery and institutional momentum."
illustration: "FairValueGapVisual"
time: 20
difficulty: "Advanced"
tools: ["chart"]
objectives:
  - "Identify a true Fair Value Gap (FVG) and an Imbalance (IMB)"
  - "Understand the mechanics of price inefficiency and algorithmic seeking"
  - "Utilize FVGs as high-probability entry models"
  - "Distinguish between Breakaway Gaps, Measuring Gaps, and Exhaustion Gaps"
quiz:
  - question: "How many candles form the sequence to validate a Fair Value Gap?"
    options: ["2", "3", "4", "5"]
    correct: 1
    explanation: "A Fair Value Gap is identified by a 3-candle sequence where the wicks of candle 1 and candle 3 do not overlap."
  - question: "A Bullish FVG (BISI) represents a market state where:"
    options: ["Buy-side is offered, Sell-side is inefficient", "Sell-side is offered, Buy-side is inefficient", "Both sides are equally offered", "Price is completely balanced"]
    correct: 0
    explanation: "BISI stands for Buy-Side Imbalance, Sell-Side Inefficiency. Only buy orders were offered during that price run."
  - question: "What is the Consequent Encroachment (CE) of a Fair Value Gap?"
    options: ["The top of the gap", "The exact 50% midpoint of the gap", "The bottom of the gap", "The closing price of the third candle"]
    correct: 1
    explanation: "Consequent Encroachment is the 50% level of the FVG. Institutional entries are often found exactly at this midpoint."
  - question: "If price completely fills a FVG and closes beyond it, what does this indicate?"
    options: ["The FVG is stronger than ever", "The inefficiency is resolved and the gap may now become an Inversion FVG", "The market will consolidate immediately", "The broker is manipulating the feed"]
    correct: 1
    explanation: "Once an FVG is completely closed and traded through, its original purpose is fulfilled. If price returns, it may respect it from the opposite side as an Inversion FVG."
---

## Understanding Price Delivery Inefficiency

When the market is in a state of lower volatility, price moves up and down efficiently. Buyers and sellers are matched, and every price level is offered to both sides of the market. This creates dense, overlapping price action.

However, when large institutional orders enter the market, they cause severe and rapid displacement. The algorithm re-prices the asset so quickly that one side of the market is completely ignored. This creates an **inefficiency** or **imbalance** in price delivery. 

A **Fair Value Gap (FVG)** is the visual footprint of this inefficiency on your chart. Because the market is designed to operate efficiently, price will often magnetically return to this gap at a later time to "fill" the void and balance the books before continuing its primary trend.

## The Anatomy of an FVG

A Fair Value Gap is determined by analyzing a **3-candle sequence**. 

### Bullish FVG (BISI)
BISI stands for **Buy-Side Imbalance, Sell-Side Inefficiency**. It occurs during a rapid upward expansion.
- **Candle 1:** The high wick of the first candle.
- **Candle 2:** A massive bullish expansion candle.
- **Candle 3:** The low wick of the third candle.

If the high wick of Candle 1 and the low wick of Candle 3 **do not overlap**, the empty space between them is the Fair Value Gap. During the printing of Candle 2, only buy orders were executed. Sellers had no opportunity. The algorithms will often draw price back down into this gap to offer sell-side liquidity before rocketing higher.

### Bearish FVG (SIBI)
SIBI stands for **Sell-Side Imbalance, Buy-Side Inefficiency**. It occurs during a rapid downward expansion.
- **Candle 1:** The low wick of the first candle.
- **Candle 2:** A massive bearish expansion candle.
- **Candle 3:** The high wick of the third candle.

The empty space between the low of Candle 1 and the high of Candle 3 is the Bearish FVG. Price will often retrace back up into this gap to offer buy-side liquidity before dropping lower.

::chart{type="advanced" pair="GBP/USD" timeframe="1H"}

## How to Trade the Fair Value Gap

FVGs are not just magnets; they are high-probability entry targets. However, you should not trade every single FVG you see. You must align them with the higher timeframe narrative.

### The Entry Model
1. **The Context:** Identify a liquidity sweep or a higher-timeframe point of interest.
2. **The Displacement:** Wait for a sharp, energetic move away from the liquidity sweep that creates a Market Structure Shift.
3. **The FVG:** This energetic move *must* leave a Fair Value Gap behind. If it doesn't leave an FVG, it lacks institutional momentum.
4. **The Entry:** Place a Limit Order at the start of the Fair Value Gap. 
5. **The Midpoint (CE):** The 50% measurement of the FVG is called **Consequent Encroachment (CE)**. If the trend is incredibly strong, price may only touch the beginning of the gap. If it is standard, it will often tap exactly 50% of the gap before reversing.
6. **The Stop Loss:** Place the stop loss below the wick of Candle 1 in the 3-candle sequence.

## Types of Gaps

Knowing the context of an FVG dictates whether you should expect it to hold price.

- **Breakaway Gap:** This gap is left directly after a major liquidity sweep or consolidation break. It is rarely filled immediately. It acts as a launchpad.
- **Measuring Gap:** Located in the middle of a sustained price run. It acts as a continuation entry point.
- **Exhaustion Gap:** Forming at the very end of a trend right as it hits higher timeframe resistance/support. These gaps are traps. They are quickly filled and closed through as the algorithmic market shifts direction.

### Inversion Fair Value Gaps

What happens when an FVG fails? When price decisively closes *through* an FVG (instead of bouncing off it), the gap undergoes an **Inversion**. 

A failed Bullish FVG instantly becomes a Bearish resistance level. A failed Bearish FVG instantly becomes a Bullish support level. This provides you with an immediate re-entry opportunity if you were caught on the wrong side of the initial move. 

