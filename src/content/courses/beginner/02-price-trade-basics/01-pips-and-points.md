---
title: "Understanding Pips & Points"
module: "Price & Trade Basics"
order: 5
description: "How to measure price movement and define risk in the Forex market."
illustration: "PipsLotsLeverageVisual"
time: 8
difficulty: "Beginner"
tools: ["calculator"]
objectives:
  - "Accurately calculate the value of a Pip"
  - "Understand fractional pips (pipettes)"
  - "Use pips to calculate a basic Stop Loss distance"
quiz:
  - question: "On most major currency pairs (like EUR/USD), which decimal place represents 1 full Pip?"
    options: ["The 1st", "The 2nd", "The 4th", "The 5th"]
    correct: 2
    explanation: "The 4th decimal place is the standard Pip. Any 5th decimal place is a pipette."
  - question: "In JPY (Japanese Yen) pairs, where is the Pip located?"
    options: ["The 1st decimal", "The 2nd decimal", "The 3rd decimal", "The 4th decimal"]
    correct: 1
    explanation: "Because the Yen operates differently, the 2nd decimal place represents a single Pip."
  - question: "If point A is 1.1000 and point B is 1.1050, what is the distance?"
    options: ["5 Pips", "50 Pips", "500 Pips", "0.5 Pips"]
    correct: 1
    explanation: "The difference between 1.1000 and 1.1050 is 50 in the 4th decimal."
  - question: "What is a 'Point' or 'Pipette'?"
    options: ["A full Pip", "1/10th of a Pip", "10 Pips", "A spread marker"]
    correct: 1
    explanation: "A Pipette (sometimes referred to as a Point) is one-tenth of a standard Pip."
---

## What is a "Pip"?

In the stock market, you measure price changes in dollars and cents. In Forex, we measure price changes in **Pips**. Pip stands for *Percentage In Point*.

Because currency exchange rates fluctuate by incredibly tiny fractions of a cent, we need a micro-measurement standard. 

### The 4th Decimal Place Rule
For almost all currency pairs, **a Pip is defined as the 4th decimal place** in the quote.

If the EUR/USD exchange rate is **1.1050**:
- The `1` is the full dollar.
- The `10` is the cents.
- The `5` is tens of pips.
- The `0` is the single pip.

Let's assume you go **Long (Buy)** EUR/USD at `1.1050`.
The market begins to move upward...
The price hits `1.1051`. 
**The market just moved 1 Pip in your favor.**

If the price runs up to `1.1060`, **the market moved 10 Pips.**

### The Japanese Yen (JPY) Exception
Pairs that include the Japanese Yen (such as USD/JPY, EUR/JPY, GBP/JPY) are the only major exception. Because the Yen traditionally is calculated against dollars natively in the hundreds (e.g., 140 Yen = 1 USD), **the Pip is the 2nd decimal place.**

If USD/JPY is trading at `144.50`, and it goes to `144.51`, that is a **1 Pip move.**

## Pipettes (Fractional Pips)

Today's trading platforms offer incredibly precise pricing. You will likely see prices quoted to five decimal places. 

That 5th decimal place is called a **Pipette**, or a "fractional pip" (or sometimes a "point").

It simply represents **1/10th of a single Pip.**

If EUR/USD is quoted at `1.10504`:
- The `0` is the Pip.
- The `4` is the Pipette.

*Pro-tip for charting:* When looking at a chart, always ignore the 5th decimal place when calculating your raw stop loss distances.

## Calculating Risk Using Pips

Why does measuring pips matter? Pips are strictly used to calculate risk.

You should never say, "I am risking $100 on this trade." Instead, your thought process must be:
**"My stop loss is 20 pips away. How do I calculate my lot size so that those 20 pips equal exactly $100?"**

If you don't know how far your stop loss is in Pips, you cannot calculate your correct position size. If you cannot calculate your position size, you are gambling.

Use the inline calculator below to practice finding the correct lot size given different Pip Stop Losses:
::calculator{type="position-size"}

In the next lesson, we will cover exactly how much a pip is "worth" as we dive into Lot Sizes.
