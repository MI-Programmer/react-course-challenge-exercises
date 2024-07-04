// CCP Compound Component Pattern

import Counter from "./Counter";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}

      <div style={{ margin: "15px 10px" }}>
        <Counter>
          <Counter.Increase />
          <Counter.Count />
          <Counter.Decrease />
        </Counter>
      </div>

      <div style={{ margin: "15px 10px" }}>
        <Counter>
          <div>
            <Counter.Label>Counter : </Counter.Label>
            <Counter.Count />
          </div>
          <Counter.Increase icon="➕" />
          <Counter.Decrease icon="➖" />
        </Counter>
      </div>

      <Counter>
        <Counter.Increase icon="⬆️" />
        <div>
          <Counter.Label>Count : </Counter.Label>
          <Counter.Count />
        </div>
        <Counter.Decrease icon="⬇️" />
      </Counter>
    </div>
  );
}
