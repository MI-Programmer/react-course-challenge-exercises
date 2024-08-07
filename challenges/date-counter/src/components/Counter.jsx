import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  // const decreaseStep = () => setStep((s) => (s > 1 ? s - 1 : s));
  // const increaseStep = () => setStep((s) => s + 1);

  const decreaseCount = () => setCount((c) => c - step);
  const increaseCount = () => setCount((c) => c + step);

  const handleResetState = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div className="step">
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{ marginLeft: "10px" }}>Step : {step}</span>
        {/* <button onClick={decreaseStep}>-</button>
        <span>Step : {step}</span>
        <button onClick={increaseStep}>-</button> */}
      </div>

      <div className="count">
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <span>Count : {count}</span> */}
        <button onClick={increaseCount}>+</button>
      </div>

      <div className="date">
        <span>{count === 0 ? "" : Math.abs(count)}</span>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? " days from today is "
            : " days ago was "}
        </span>
        <span>{date.toDateString()}</span>
        <div>
          {step !== 1 || count !== 0 ? (
            <button onClick={handleResetState}>Reset</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
