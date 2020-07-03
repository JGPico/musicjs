import React from "react";
import "./App.css";

import Balls from "./components/Balls";
import Pads from "./components/Pads";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tap Music</h1>
        <p>Make music with some taps</p>
      </header>
      <Balls></Balls>
      <Pads></Pads>
    </div>
  );
}

export default App;
