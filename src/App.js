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
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };
  decrementScore = () => {
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
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

const Player = props => {
  return (
    <div className='player'>
      <span className='player-name'>
        <button
          className='remove-player'
          onClick={() => props.removePlayer(props.id)}
        >
          x
        </button>
        {props.name}
      </span>
      <Counter />
    </div>
  );
};
class App extends React.Component {
  state = {
    players: [
      { id: 1, name: 'Vinay' },
      { id: 2, name: 'Tolu' },
      { id: 3, name: 'Maleek' },
      { id: 4, name: 'Abass' }
    ]
  };
  handleRemovePlayer = id => {
    this.setState(prevState => ({
      players: prevState.players.filter(p => p.id !== id)
    }));
  };
  render() {
    return (
      <div className='scoreboard'>
        <Header title='Scoreboard' totalPlayers={this.state.players.length} />
        {/* Player list  */}
        {this.state.players.map(player => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
