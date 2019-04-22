import React from 'react';
import PropTypes from 'prop-types';

const PlayAgain = ({ onClick }) => (
  <div className="game-done">
    <button type="button" onClick={onClick}>Play Again</button>
  </div>
);

PlayAgain.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayAgain;
