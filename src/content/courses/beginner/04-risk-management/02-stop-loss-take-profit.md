---
title: "The Shields: Stop Loss & Take Profit"
module: "Risk Management"
order: 14
description: "How to automate your exits to protect capital and secure gains without emotion."
illustration: "RiskRewardVisual"
time: 15
difficulty: "Beginner"
tools: ["chart"]
objectives:
  - "Understand what a Stop Loss is and strictly enforce it."
  - "Understand what a Take Profit is and how it secures gains."
  - "Learn why mental stops are dangerous."
quiz:
  - question: "What happens when price hits your Stop Loss (SL) order?"
    options: ["Your trade pauses", "Your trade is automatically closed at a loss", "Your broker calls you", "Your position size doubles"]
    correct: 1
    explanation: "A Stop Loss is a pending order that automatically closes your trade when price hits a specific level, preventing further losses."
  - question: "When is the best time to figure out where your Stop Loss should go?"
    options: ["Before you enter the trade", "Immediately after you click Buy or Sell", "When the trade starts losing money", "At the end of the day"]
    correct: 0
    explanation: "You must know exactly where your Stop Loss goes *before* you enter the trade. Otherwise, you cannot calculate your position size."
  - question: "What is a 'Mental Stop Loss'?"
    options: ["A stop loss set by an AI", "Promising yourself you will manually close the trade if it hits a certain price", "A stop loss that moves dynamically", "A stop loss for psychological relief"]
    correct: 1
    explanation: "A mental stop is when you don't actually put the order in the system, but plan to close it manually. It is heavily discouraged for beginners because emotions usually prevent them from actually clicking 'close'."
  - question: "What happens when price hits your Take Profit (TP) order?"
    options: ["The trade is automatically closed and the profit is added to your account", "The trade remains open but cannot lose money", "The broker takes their fee", "Your leverage increases"]
    correct: 0
    explanation: "A Take Profit automatically locks in your gains, closing the trade out in profit."
---

## Eliminating Emotion

Human beings are terrible at trading manually. When we are losing, we experience "hope"—we leave the losing trade open *hoping* it turns back around. When we are winning, we experience "fear"—we close the winning trade early *fearing* it will reverse and we'll lose our small profit.

To survive, you must eliminate human emotion. You do this by setting hard, automated orders the exact second you enter a trade: the **Stop Loss** and the **Take Profit**.

## 1. The Stop Loss (SL)

A **Stop Loss** is a mandatory safety net. It is a specific price level that you set in your trading platform. If the market moves against you and hits that exact price, your broker will automatically close the trade. 

You take the loss, but you live to trade another day.

### Where does the Stop Loss go?

Your Stop Loss should never be based on a random number of pips (e.g., "I always use a 20 pip stop"). It must be placed based on **Market Structure**.

Your Stop Loss should be placed at the **Invalidation Level**. This is the price on the chart where, if hit, your entire thesis for the trade is proven wrong. 

- **If Buying (Going Long):** The Stop Loss goes slightly *below* the recent Support floor or recent swing low. If price breaks that floor, the uptrend is broken, and you shouldn't be in a buy anymore anyway.
- **If Selling (Going Short):** The Stop Loss goes slightly *above* the recent Resistance ceiling or recent swing high.

### The Danger of Mental Stops

Many beginners use "Mental Stops". They tell themselves, *"If it drops below 1.1000, I'll log in and manually click close."*

**Never do this.** When it hits 1.1000, panic sets in. You will convince yourself, *"Let me just give it 10 more pips, it might bounce."* Then it drops 50 more pips, and your account is ruined. 

Always input a hard Stop Loss order into the system.

## 2. The Take Profit (TP)

A **Take Profit** is the opposite of a Stop Loss. It is a specific price level where, if the market moves in your favor and hits it, your broker automatically closes the trade and locks the profit into your account balance.

### Where does the Take Profit go?

Just like the stop loss, the Take Profit should be based on structure, not greed.

- **If Buying (Going Long):** The Take Profit should be placed near the next major active Resistance ceiling.
- **If Selling (Going Short):** The Take Profit should be placed near the next major active Support floor.

## Set and Forget

The ultimate hallmark of a professional trader is the "Set and Forget" mentality. 

1. Calculate position size.
2. Enter the trade.
3. Set the hard Stop Loss.
4. Set the hard Take Profit.
5. **Walk away from the computer.**

Let the market do what it wants to do. It will either hit your SL (which you mathematically planned for, so it doesn't hurt) or it will hit your TP. 

::chart{symbol="OANDA:EURUSD" timeframe="60"}

Look at the chart above. Imagine buying at a support floor. Can you visualize where you would place your Stop Loss (below the floor) and your Take Profit (at the next ceiling)?
