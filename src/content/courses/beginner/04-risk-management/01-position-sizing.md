---
title: "The 1% Rule: Position Sizing"
module: "Risk Management"
order: 13
description: "The mathematical secret to surviving long enough to become profitable."
illustration: "PositionSizingVisual"
time: 15
difficulty: "Beginner"
tools: ["calculator"]
objectives:
  - "Understand the mathematical concept of Risk of Ruin."
  - "Learn the 1% Risk Rule."
  - "Master the Position Size Formula."
quiz:
  - question: "What is the recommended maximum risk percentage per trade for beginners?"
    options: ["10%", "5%", "1%", "20%"]
    correct: 2
    explanation: "Beginners should never risk more than 1% to 2% of their total account balance on a single trade to avoid the risk of ruin."
  - question: "If you have a $5,000 account and risk 1%, what is your maximum acceptable loss in dollars?"
    options: ["$5", "$50", "$500", "$1"]
    correct: 1
    explanation: "1% of $5,000 is $50. If the trade hits your stop loss, you lose exactly $50."
  - question: "Why is losing 50% of your account so dangerous?"
    options: ["Your broker will close your account", "You have to pay taxes on the loss", "You need a 100% gain just to break even", "You can't use leverage anymore"]
    correct: 2
    explanation: "If a $1,000 account drops 50% to $500, a 50% gain from $500 only gets you back to $750. You need a 100% gain to get back to $1,000."
  - question: "What variable ultimately determines your Lot Size?"
    options: ["How much profit you want", "Your distance to your Stop Loss", "The time of day", "Your broker"]
    correct: 1
    explanation: "Your lot size is mathematically derived by taking your predetermined dollar risk and dividing it by the distance (in pips) to your Stop Loss."
---

## The Risk of Ruin

There is a disturbing statistic in retail forex trading: roughly 80% to 90% of all beginners blow their entire trading account within the first 90 days.

Why? It's not because they don't understand support and resistance. It's because they don't understand **Position Sizing** and the mathematics of drawdown.

If you lose a trade and your account drops by 10%, you might think you need a 10% win to get it back. Mathematically, that's impossible. 
- If you have $1,000 and lose 50%, you now have $500. 
- A 50% gain on $500 is $250, putting your balance at $750. 
- To get back to your original $1,000, you don't need a 50% gain. You need a **100% gain**.

The more money you lose, the exponentially harder it becomes to recover. This is called the **Risk of Ruin**.

## The 1% Rule

Professional traders are obsessed with defense, not offense. To completely eliminate the Risk of Ruin, professionals adhere strictly to the **1% Rule**.

**You should never risk more than 1% (to a maximum of 2%) of your entire account balance on any single trade.**

If you have a $1,000 account, 1% is $10. 
If you lose the trade, you lose $10. You still have $990.

By risking 1%, you would have to lose 100 trades in a row to blow your account. It gives you the statistical staying power to outlast your losing streaks.

## How to Calculate Position Size

Never choose a Lot Size randomly. It must be precisely calculated. 

To calculate your lot size, you need three pieces of information:
1. **Account Balance:** How much money is in your account? (e.g., $5,000)
2. **Risk Percentage:** Usually 1%. (1% of $5,000 = $50 risk).
3. **Stop Loss Distance:** How many pips away is your invalidation level? (e.g., 25 pips).

### The Formula:
> **(Dollar Risk) ÷ (Stop Loss in Pips) = Required Value Per Pip**

*Let's plug in the numbers:*
> $50 ÷ 25 Pips = **$2 per pip**.

Now, you translate "$2 per pip" into a lot size. We know that a **Mini Lot (0.10)** is roughly $1 per pip. Therefore, to get $2 per pip, you need to execute a trade of **0.20 Lots**.

### Automate the Math

You don't need to do this complex math in your head. Professional traders use calculators before every single entry. 

Input a hypothetical $10,000 account, 1% risk, and a 40 pip stop loss into the calculator below to see the required lot size.

::calculator{type="position-size"}

Trading without a position size calculator is gambling. Trading with one is a business.
