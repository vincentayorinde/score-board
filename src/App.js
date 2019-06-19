import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Header = props => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Counter = () => {
  return (
    <div className="counter">
      <button> - </button>
      <span className="counter-score">35</span>
      <button> + </button>
    </div>
  );
};

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">Vinay</span>
      <Counter />
    </div>
  );
};
function App() {
  return (
    <div>
      <Header title="Scoreboard" totalPlayers={1} />
      {/* Player list */}
      <Player />
    </div>
  );
}

export default App;
