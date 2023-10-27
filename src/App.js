import { useState } from "react";
import "./styles.css";

export default function App() {
  const [rate, setrate] = useState();
  const [time, setTime] = useState();
  const [amount, setAmount] = useState();
  const [total, settotal] = useState();
  console.log(rate, time, amount, total);
  const handleRate = (event) => {
    setrate(event.target.value);
  };
  const handleTime = (event) => {
    setTime(event.target.value);
  };
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const HanldeCalulate = () => {
    const interest = (amount * (rate * 0.01)) / time;
    settotal(amount / time + interest);
  };
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <input onChange={handleAmount} placeholder="please enter amount" />
        <input onChange={handleTime} placeholder="please enter time" />
        <input onChange={handleRate} placeholder="please enter rate" />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <button onClick={HanldeCalulate}>Calculate EMI Per month</button>
      </div>
      {total}
    </div>
  );
}
