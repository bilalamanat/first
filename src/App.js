import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";




function App() {
  const [wives, setWives] = useState(0);

  const [kids, setKids] = useState(0);

  const addWife = () => {
    setWives((prevWives) => prevWives + 1);
    setKids((prevKids) => prevKids + 3);
  };

  const minWife = () => {
    if (wives > 0) {
      setWives(wives - 1);
    }
  };

  const resetValue = () => {
    setWives(0);
    setKids(0);
  };

  return (
    <div className="App">
       <Navbar />
      <h1>{wives === 1 ? "Wife": "Number of Wives"}: {wives}</h1>
      <h1>Number of kids: {kids}</h1>
      <button onClick={minWife}>-</button>

      <button onClick={addWife}>+</button>
      <button onClick={resetValue}>Reset</button>
    </div>
   
  );
}

export default App;
