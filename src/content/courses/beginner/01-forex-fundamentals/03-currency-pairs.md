---
title: "Currency Pairs & Quotes"
module: "Forex Fundamentals"
order: 3
description: "How foreign exchange quotes are read, structured, and interpreted."
illustration: "CurrencyPairsVisual"
time: 8
difficulty: "Beginner"
tools: ["chart", "calculator"]
objectives:
  - "Identify the Base and Quote currency in any pair"
  - "Read and calculate movements using pips and pipettes"
  - "Understand bidirectional trading (Long vs. Short)"
quiz:
  - question: "In the pair GBP/USD, which is the base currency?"
    options: ["USD (US Dollar)", "GBP (British Pound)", "Both", "Neither"]
    correct: 1
    explanation: "The first currency listed in a pair is always the base currency."
  - question: "If you believe the Japanese Yen (JPY) will get stronger, what should you do with the USD/JPY pair?"
    options: ["Buy (Go Long)", "Sell (Go Short)", "Wait", "None of the above"]
    correct: 1
    explanation: "Because JPY is the quote currency, if it gets stronger, the value of USD/JPY goes down. Therefore, you should sell."
  - question: "What is typically the 4th decimal place in a currency pair quote (e.g., 1.1054)?"
    options: ["A full dollar", "A Pipette", "A Pip", "A Spread factor"]
    correct: 2
    explanation: "The 4th decimal place usually represents a single Pip (Percentage in Point)."
  - question: "If EUR/USD moves from 1.1050 to 1.1080, how many pips has it moved?"
    options: ["300 pips", "30 pips", "3 pips", "0.3 pips"]
    correct: 1
    explanation: "The difference between .1050 and .1080 is 30 points at the 4th decimal, which is 30 pips."
---

## Anatomy of a Currency Pair

Because currencies are priced relative to one another, they are always displayed in pairs. You cannot simply "buy Euros." You must buy Euros *using* another currency.

Every currency pair is written as a three-letter code followed by another three-letter code: 

**EUR / USD = 1.1050**

### 1. The Base Currency
The first currency listed (the **EUR**) is called the **Base Currency**. 
- The base currency is always equal to **1 unit**.
- It is the "basis" of the trade. If you click "Buy", you are buying the base currency.

### 2. The Quote Currency
The second currency listed (the **USD**) is called the **Quote Currency**.
- It tells you exactly how much of the quote currency is required to purchase *1 unit* of the base currency.
- In our example, it costs exactly **1.1050 US Dollars** to buy **1 Euro**.

## Bidirectional Trading: Long vs. Short

One of the greatest advantages of the Forex market is the ease of making money when the market is falling. You are simply taking a different side of the equation.

If you analyze the European and US economies and decide:
- **"I think the Euro will become stronger than the Dollar."**
  - **Action:** You **Buy** EUR/USD. (This is called going "Long").
  - **Result:** You profit if the chart goes up (e.g., from 1.1050 to 1.1100).
- **"I think the Dollar will become stronger than the Euro."**
  - **Action:** You **Sell** EUR/USD. (This is called going "Short").
  - **Result:** You profit if the chart goes down (e.g., from 1.1050 to 1.0900).

::chart{type="advanced" pair="GBP/JPY" timeframe="1H"}

## Pips and Pipettes

In the stock market, you measure price movement in dollars and cents. In Forex, price changes are minuscule. They are measured in **Pips** (Percentage in Point).

For most currency pairs, a pip is the **4th decimal place**.

- If EUR/USD moves from **1.1050** to **1.1051**, that is a movement of **1 Pip**.
- If GBP/USD moves from **1.2500** to **1.2550**, that is a movement of **50 Pips**.

*(Note: Yen pairs, like USD/JPY, are the exception. In Yen pairs, the pip is the **2nd decimal place**. E.g., a move from 140.50 to 140.51 is 1 pip.)*

### Fractional Pips (Pipettes)

Modern brokers offer extremely precise pricing, often showing 5 decimal places. The 5th decimal place is called a **Pipette** (or a fractional pip). 
It represents 1/10th of a pip.

If the quote reads **1.10504**:
- The `0` is the pip.
- The `4` is the pipette.

Understanding pips is absolutely vital because it forms the foundation of all your risk management calculations. You don't risk "dollars" directly on a trade setup; you calculate your physical stop loss distance in *pips*, and size your position accordingly.

::calculator{type="position-size"}

In the final fundamental lesson, we will look at *when* you should be trading these pairs.
