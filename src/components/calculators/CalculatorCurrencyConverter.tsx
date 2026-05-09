import React from 'react';

export function CalculatorCurrencyConverter() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-4">Currency Converter</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="conv-amount" className="block text-sm font-bold text-gray-700 mb-1">Amount</label>
          <input id="conv-amount" type="number" required className="w-full p-3 border border-gray-200 rounded-xl" placeholder="100" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="conv-from" className="block text-sm font-bold text-gray-700 mb-1">From</label>
            <select id="conv-from" className="w-full p-3 border border-gray-200 rounded-xl">
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
          <div>
            <label htmlFor="conv-to" className="block text-sm font-bold text-gray-700 mb-1">To</label>
            <select id="conv-to" className="w-full p-3 border border-gray-200 rounded-xl">
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>
        <button type="button" className="w-full py-3 bg-[#002B5B] text-white font-bold rounded-xl">Convert</button>
      </form>
    </div>
  );
}
