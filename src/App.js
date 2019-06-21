import React from "react";
import "./App.css";

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

const Counter = props => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
};

const Player = ({ name, score }) => {
  return (
    <div className="player">
      <span className="player-name">{name}</span>
      <Counter score={score} />
    </div>
  );
};
const App = props => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {/* Player list  */}
      {props.initialPlayers.map(player => (
        <Player
          key={player.id.toString()}
          name={player.name}
          score={player.score}
        />
      ))}
    </div>
  );
};

export default App;
