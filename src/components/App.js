import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Player from './Player/Player';

class App extends Component {
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
