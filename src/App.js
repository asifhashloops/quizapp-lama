import "./App.css";
import { useState } from "react";
import Quiz from "../src/quiz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(10);
  const [asnwer, setAsnwer] = useState(0);
  const moneyPyramid = [
    {
      id: 1,
      amount: "$ 100",
    },
    {
      id: 2,
      amount: "$ 200",
    },
    {
      id: 3,
      amount: "$ 400",
    },
    {
      id: 4,
      amount: "$ 600",
    },
    {
      id: 5,
      amount: "$ 700",
    },
    {
      id: 6,
      amount: "$ 800",
    },
    {
      id: 7,
      amount: "$ 900",
    },
    {
      id: 8,
      amount: "$ 1000",
    },
    {
      id: 9,
      amount: "$ 10000",
    },
    {
      id: 10,
      amount: "$ 20000",
    },
    {
      id: 11,
      amount: "$ 30000",
    },
    {
      id: 12,
      amount: "$ 40000",
    },
    {
      id: 13,
      amount: "$ 50000",
    },
    {
      id: 14,
      amount: "$ 60000",
    },
    {
      id: 15,
      amount: "$ 70000",
    },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz />
        </div>
      </div>
      <div className="reward-container">
        <ul className="reward-list">
          {moneyPyramid.map((item) => (
            <li
              className={
                questionNumber == item.id
                  ? "reward-list-item active"
                  : "reward-list-item"
              }
            >
              <span className="reward-number">{item.id}</span>
              <span className="reward-amount">{item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
