import React from 'react';
import './App.css';

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className='stats'>Players: {props.totalPlayers}</span>
    </header>
  );
};

class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     score: 0
  //   };
  // }
  state = {
    score: 0
  };
  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  };
  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  };
  render() {
    return (
      <div className='counter'>
        <button
          className='counter-action decrement'
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className='counter-score'>{this.state.score}</span>
        <button
          className='counter-action increment'
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

const Player = ({ name, score }) => {
  return (
    <div className='player'>
      <span className='player-name'>{name}</span>
      <Counter />
    </div>
  );
};
const App = props => {
  return (
    <div className='scoreboard'>
      <Header title='Scoreboard' totalPlayers={props.initialPlayers.length} />
      {/* Player list  */}
      {props.initialPlayers.map(player => (
        <Player key={player.id.toString()} name={player.name} />
      ))}
    </div>
  );
};

export default App;
