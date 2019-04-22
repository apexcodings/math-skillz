import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = ({ onClick, gameStatus }) => (
  <div className="game-done">
    <div
      className="message"
      style={{ color: gameStatus === 'lost' ? 'red' : 'green' }}
    >
      {gameStatus === 'lost' ? 'Game Over' : 'Nice'}
    </div>
    <button onClick={onClick}>Play Again</button>
  </div>
);

PlayAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
  gameStatus: PropTypes.string.isRequired,
};

export default PlayAgain;
