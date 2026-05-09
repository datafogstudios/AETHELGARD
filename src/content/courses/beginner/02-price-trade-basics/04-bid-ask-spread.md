---
title: "The Cost of Entry: Bid, Ask & Spread"
module: "Price & Trade Basics"
order: 8
description: "Understanding the true cost of trading and how brokers make money."
illustration: "PipsLotsLeverageVisual"
time: 12
difficulty: "Beginner"
tools: ["chart"]
objectives:
  - "Differentiate between the Bid price and the Ask price."
  - "Measure the Spread in pips."
  - "Understand why trades always start out in the negative."
quiz:
  - question: "If you want to BUY EUR/USD, which price do you get?"
    options: ["The Bid Price", "The Ask Price", "The Mid-Price", "The closing price"]
    correct: 1
    explanation: "When you buy, you pay the higher 'Ask' price."
  - question: "If the Bid is 1.2000 and the Ask is 1.2003, what is the Spread?"
    options: ["3 Pips", "30 Pips", "0.3 Pips", "300 Pips"]
    correct: 0
    explanation: "The difference between 1.2000 and 1.2003 is 0.0003, which represents 3 standard Pips."
  - question: "Why do trades immediately start in the negative when you open them?"
    options: ["Broker error", "Slippage", "Because you immediately pay the Spread", "High leverage"]
    correct: 2
    explanation: "You must cross the spread to become profitable. You buy at the higher Ask price, but your trade value is currently evaluated at the lower Bid price."
  - question: "During which market session is the spread typically the tightest (lowest) on EUR/USD?"
    options: ["Sydney Overlap", "London & New York Overlap", "Tokyo Session", "Friday closing hour"]
    correct: 1
    explanation: "The London and New York overlap has the highest trading volume in the world, leading to the lowest spreads."
  - question: "What happens to the spread during major news events like NFP?"
    options: ["It goes to zero", "It stays exactly fixed", "It widens drastically", "It slowly decreases"]
    correct: 2
    explanation: "During major news, liquidity providers pull their orders to protect themselves, causing the spread to widen drastically."
---

## The Two-Way Quote

Look closely at any currency pair on your trading platform, and you will notice that there are always **two prices** listed side-by-side, not just one.

Why? Because the market requires two parties: a buyer and a seller.

### 1. The Bid (Sell Price)
The **Bid** is the price at which the market (your broker) is willing to *buy* the currency from you. 
If you want to **Sell** a currency pair, you will do so at the Bid price.

### 2. The Ask (Buy Price)
The **Ask** is the price at which the market is willing to *sell* the currency to you. 
If you want to **Buy** a currency pair, you will do so at the Ask price.

**Crucial Rule:** The Ask price is *always* slightly higher than the Bid price.

## Understanding the Spread

The difference between the Ask price and the Bid price is called the **Spread**.

> **Spread = Ask Price - Bid Price**

If you go to a currency exchange kiosk at the airport, they will sell you Euros for $1.15, but if you immediately try to sell those Euros back, they will only pay you $1.05. That 10-cent difference is their profit.

In Forex, brokers act the same way. The Spread is the primary way brokers make money. It is the built-in transaction cost of your trade.

### Why You Start in the Negative

Have you ever clicked "Buy" on a trade and immediately noticed your Profit/Loss is red (negative)? 

This is not a glitch. When you bought, you paid the higher **Ask** price. However, if you were to close that trade instantly, you would have to sell it back at the lower **Bid** price. 

To break even, the underlying market price must move in your favor by a distance equal to the spread.

## Visualizing the Spread

Take a look at an interactive chart. If you zoom in closely to a 1-minute time frame, you can often configure the chart settings to show both the Bid and Ask lines.

::chart{symbol="OANDA:EURUSD" timeframe="1"}

### Fixed vs. Variable Spreads

- **Fixed Spread:** The distance between the Bid and Ask never changes, regardless of market conditions. (Rarely offered today unless by a highly regulated dealing desk broker).
- **Variable Spread:** The distance between Bid and Ask fluctuates based on market liquidity. This is the standard for most ECN/STP brokers.

### The Danger of Widening Spreads

Because most spreads are variable, they expand and contract depending on market activity.
- **Tight (Low) Spreads:** Occur during high-volume periods, like the London/New York session overlap. Major pairs like EUR/USD might have a spread of just 0.5 to 1.0 pips.
- **Wide (High) Spreads:** Occur during "Dead Zones" (like the Asian session for non-JPY pairs) or right before **Major News Events**. 

During high-impact news releases, the spread can explode from 1 pip to 20 or 30 pips in a millisecond. If your strict Stop Loss is located within that widening spread gap, you will be "stopped out" of your trade automatically, even if the actual price candles didn't hit your level.
