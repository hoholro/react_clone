import React from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="container">
        <div className="banner">
          Total Count : {count} {count > 10? ''}
        </div>
      </div>
      <Counter />
      <Counter />
    </div>
  );
}
