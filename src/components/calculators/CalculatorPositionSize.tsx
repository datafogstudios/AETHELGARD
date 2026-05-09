import React from 'react';

export function CalculatorPositionSize() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200">
      <h3 className="text-xl font-bold font-serif text-[#1A1A1A] mb-4">Position Size Calculator</h3>
      <form className="space-y-4">
        <div>
          <label htmlFor="pz-amount" className="block text-sm font-bold text-gray-700 mb-1">Account Balance ($)</label>
          <input id="pz-amount" type="number" required className="w-full p-3 border border-gray-200 rounded-xl" placeholder="10000" />
        </div>
        <div>
          <label htmlFor="pz-risk" className="block text-sm font-bold text-gray-700 mb-1">Risk %</label>
          <input id="pz-risk" type="number" required className="w-full p-3 border border-gray-200 rounded-xl" placeholder="1" />
        </div>
        <div>
          <label htmlFor="pz-stop" className="block text-sm font-bold text-gray-700 mb-1">Stop Loss (Pips)</label>
          <input id="pz-stop" type="number" required className="w-full p-3 border border-gray-200 rounded-xl" placeholder="20" />
        </div>
        <button type="button" className="w-full py-3 bg-[#002B5B] text-white font-bold rounded-xl">Calculate</button>
      </form>
    </div>
  );
}
