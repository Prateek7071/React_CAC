import React from "react";
import { useId } from "react";

export default function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false
}) {
  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          id={amountInputId}
          placeholder="Amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value)) // making sure passing value check
          }}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value)
          }}
        >
          {currencyOptions.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))} // very important to pass key when rendering like this preferably id when available 
        </select>
      </div>
    </div>
  );
}
