---
title: "The Double-Edged Sword: Leverage & Margin"
module: "Price & Trade Basics"
order: 7
description: "How to use broker buying power without blowing your account."
illustration: "PipsLotsLeverageVisual"
time: 15
difficulty: "Beginner"
tools: ["calculator"]
objectives:
  - "Define leverage and how it amplifies buying power."
  - "Understand what margin is and how it acts as collateral."
  - "Learn how to avoid a Margin Call."
quiz:
  - question: "What is Leverage in Forex?"
    options: ["A fee charged by the broker", "Borrowed capital from the broker to control larger positions", "A type of order execution", "The difference between bid and ask"]
    correct: 1
    explanation: "Leverage allows you to control a large position with a small amount of your own capital."
  - question: "If you have 1:100 leverage, how much margin (collateral) do you need to open a $100,000 position?"
    options: ["$100", "$1,000", "$10,000", "$100,000"]
    correct: 1
    explanation: "With 1:100 leverage, you need 1% of the total position size as margin. 1% of $100,000 is $1,000."
  - question: "What is a Margin Call?"
    options: ["When the broker calls to offer you a bonus", "When your profitable trades are automatically closed", "When your account doesn't have enough margin left to keep losing trades open", "When the market closes for the weekend"]
    correct: 2
    explanation: "A margin call occurs when your floating losses reduce your free margin to zero, forcing the broker to close your trades."
  - question: "Does high leverage increase the probability of a trade winning?"
    options: ["Yes, higher leverage = higher win rate", "No, it only amplifies the profit or loss", "Only if you trade exotic pairs", "Only during the London overlap"]
    correct: 1
    explanation: "Leverage has zero effect on whether a currency goes up or down. It just multiplies the financial result of that movement."
  - question: "If a broker offers 1:500 leverage, should you use all of it on every trade?"
    options: ["Yes, to maximize profits", "No, it's a trap to blow your account faster", "Yes, but only on Fridays", "No, you must slowly work up to it over years"]
    correct: 1
    explanation: "Maxing out your leverage drastically increases your risk of ruin. Professional traders usually use very low effective leverage."
---

## What is Leverage?

In traditional investing, if you want to buy $10,000 worth of stock, you need $10,000 in your account. 

In Forex, brokers offer **Leverage**. Leverage is essentially a temporary loan provided by the broker that allows you to control a massive amount of currency with a very small deposit.

It is usually expressed as a ratio: **1:30, 1:100, or 1:500**.

If your broker gives you **1:100 leverage**, it means for every $1 you have in your account, you can control $100 in the market.
- If you want to open a $100,000 position (1 Standard Lot)...
- You don't need $100,000.
- You only need **$1,000**.

### The Double-Edged Sword

Leverage is the reason retail traders can make significant money with small accounts. However, **it is also the #1 reason beginners lose all their money.**

Leverage amplifies your profits, but it **equally amplifies your losses**. 

If you use 1:500 leverage to open a huge position on a small account, a tiny 10-pip move in the wrong direction could instantly wipe out your entire balance.

## What is Margin?

Margin is closely tied to leverage. **Margin is the collateral** your broker locks up to keep your leveraged position open. It is not a fee; it is simply frozen capital.

When you open a trade, you will see two numbers on your platform:
1. **Used Margin:** The money the broker has locked to hold your trades open.
2. **Free Margin:** The money you have left over to absorb losses or open new trades.

### The Margin Call

If your trades start losing money, those floating losses eat into your **Free Margin**. 

If your Free Margin drops to zero, the broker must protect themselves. They will not allow your account to go into negative numbers (meaning you owe them money). 

When you run out of Free Margin, the broker triggers a **Margin Call** (often followed instantly by a "Stop Out"). The broker will automatically close your losing trades at a massive loss to free up the locked margin.

> "A Margin Call is the market's way of telling you that your position size was too big for your account."

## How to Trade Safely

The secret to surviving the Forex market is **never max out your leverage**. Just because your broker gives you the ability to trade 10 Standard Lots on a $500 account doesn't mean you should.

Always use a position size calculator to determine your lot size based on a strict 1% risk rule. 

::calculator{type="position-size"}

If you strictly control your risk in dollars based on your Stop Loss distance, the leverage your broker provides becomes largely irrelevant—it just allows you to place the trade, but your risk remains mathematically contained.
