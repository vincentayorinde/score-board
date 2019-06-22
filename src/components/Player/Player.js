import React from 'react';
import Counter from '../Counter/Counter';

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
      <Counter
        index={props.index}
        changeScore={props.changeScore}
        score={props.score}
      />
    </div>
  );
};

export default Player;
