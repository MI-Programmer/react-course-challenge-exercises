import { useState, useEffect } from "react";
import "./App.css";

const currencies = [
  "USD",
  "IDR",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
];

function App() {
  const [currency, setCurrency] = useState({
    amount: 1,
    from: "USD",
    to: "IDR",
  });
  const [result, setResult] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { amount, from, to } = currency;

  const handleChange = (e) => {
    setCurrency((currency) => ({
      ...currency,
      [e.target.name]: e.target.value,
    }));
  };

  const options = currencies.map((c, i) => (
    <option value={c} key={i}>
      {c}
    </option>
  ));

  useEffect(() => {
    const fetchConvertCurrency = async () => {
      setIsDisabled(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
      );
      const { rates } = await res.json();
      setResult(rates[to]);
      setIsDisabled(false);
    };

    if (!Number(amount)) {
      setResult(0);
      return;
    } else if (from === to) {
      setResult(amount);
      return;
    }
    fetchConvertCurrency();
  }, [currency]);

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={handleChange}
        name="amount"
        disabled={isDisabled}
      />
      <select
        value={from}
        name="from"
        onChange={handleChange}
        disabled={isDisabled}
      >
        {options}
      </select>
      <select
        value={to}
        name="to"
        onChange={handleChange}
        disabled={isDisabled}
      >
        {options}
      </select>
      <p>
        {amount ? amount : "0"} {from} is equal to {result} {to}
      </p>
    </div>
  );
}

export default App;
