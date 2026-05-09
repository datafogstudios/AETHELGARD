---
title: "The Weight of the Trade: Lot Sizes"
module: "Price & Trade Basics"
order: 6
description: "Understanding trade volume and contract sizes in Forex."
illustration: "PipsLotsLeverageVisual"
time: 15
difficulty: "Beginner"
tools: ["calculator"]
objectives:
  - "Identify standard, mini, and micro lot sizes."
  - "Understand how lot size affects pip value."
  - "Calculate the exact risk in dollars for a trade."
quiz:
  - question: "How many units of base currency are in a Standard Lot?"
    options: ["1,000", "10,000", "100,000", "1,000,000"]
    correct: 2
    explanation: "A Standard Lot is exactly 100,000 units of the base currency."
  - question: "If you trade 1 Mini Lot (0.10) on EUR/USD, roughly how much is 1 pip worth?"
    options: ["$0.10", "$1.00", "$10.00", "$100.00"]
    correct: 1
    explanation: "A Mini lot is 10,000 units, which equates to roughly $1.00 per pip on major USD pairs."
  - question: "Which lot size is the most appropriate for a beginner with a $500 account?"
    options: ["Standard Lot (1.00)", "Mini Lot (0.10)", "Micro Lot (0.01)", "None, only trade $10k+"]
    correct: 2
    explanation: "A Micro lot (0.01) allows for precise risk control on smaller accounts, keeping risk per trade within 1-2%."
  - question: "Why do traders use lot sizes instead of just dollar amounts?"
    options: ["Brokers force them to", "It's standardized globally", "It looks more professional", "It avoids taxes"]
    correct: 1
    explanation: "Lot sizes provide a standardized method for volume across global brokers and platforms."
  - question: "If you have a 30-pip stop loss and want to risk $30 on a EUR/USD trade, what lot size should you use?"
    options: ["0.01 (Micro)", "0.10 (Mini)", "1.00 (Standard)", "0.30"]
    correct: 1
    explanation: "With a Mini Lot (0.10), 1 pip = $1. 30 pips x $1 = $30."
---

## What are Lot Sizes?

In the previous lesson, we learned that Pips measure **distance**. Now, we need to talk about **weight**.

When you buy apples at the store, you don't buy a fraction of an apple; you buy them in predefined weights or units. In the Forex market, currencies are traded in standardized quantities called **Lots**. 

Because currencies fluctuate in such tiny fractions (pips), trading just $1 or $10 wouldn't yield any meaningful profit or loss. To make the price movements matter, institutions trade huge blocks of currency.

### The Standard Lots

There are three main lot sizes that you will encounter on your trading platform:

#### 1. Standard Lot (1.00)
- **Units:** 100,000 units of the base currency
- **Pip Value (Approx):** $10.00 per pip
- **Context:** Typically used by institutional traders or retail traders with large account balances ($10,000+). 

#### 2. Mini Lot (0.10)
- **Units:** 10,000 units of the base currency
- **Pip Value (Approx):** $1.00 per pip
- **Context:** The sweet spot for intermediate traders. A 50-pip move makes or loses $50.

#### 3. Micro Lot (0.01)
- **Units:** 1,000 units of the base currency
- **Pip Value (Approx):** $0.10 per pip
- **Context:** The absolute best place for beginners to start. It allows you to practice proper risk management without blowing your account. A 50-pip move makes or loses just $5.

## Calculating Risk

The lot size you choose dictates the monetary value of every pip the market moves. 

If you decide to click "Buy" on EUR/USD:
- With a **1.00 Lot**: If price goes up 20 pips, you make $200. If it drops 20 pips, you lose $200.
- With a **0.10 Lot**: If price goes up 20 pips, you make $20. If it drops 20 pips, you lose $20.
- With a **0.01 Lot**: If price goes up 20 pips, you make $2. If it drops 20 pips, you lose $2.

### The Golden Rule of Position Sizing

You should **never** pick a lot size based on how much money you *want* to make. 

Instead, you must pick your lot size based on how far away your Stop Loss is, and how much money you are willing to risk.

> **Risk ÷ Stop Loss (in pips) = Pip Value Needed**

Once you know the Pip Value needed, you translate that into a Lot Size.

**Test it out using the calculator below:**
::calculator{type="position-size"}

A mechanical trader always uses a calculator before entering the market. If you don't know the exact dollar amount you are risking, you are gambling, not trading.
