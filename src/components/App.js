import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Player from './Player/Player';

class App extends Component {
  state = {
    players: [
      { id: 1, name: 'Vinay', score: 0 },
      { id: 2, name: 'Tolu', score: 0 },
      { id: 3, name: 'Maleek', score: 0 },
      { id: 4, name: 'Abass', score: 0 }
    ]
  };
  handlechangeScore = (index, value) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += value)
    }));
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
        {this.state.players.map((player, index) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            index={index}
            changeScore={this.handlechangeScore}
            removePlayer={this.handleRemovePlayer}
            score={player.score}
          />
        ))}
      </div>
    );
  }
}

export default App;
