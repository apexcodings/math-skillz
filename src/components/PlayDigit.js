import React from 'react';
import PropTypes from 'prop-types';

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const PlayDigit = ({ number, status, onClick }) => (
  <button
    type="button"
    key={number}
    className="number"
    onClick={() => onClick(number, status)}
    style={{ backgroundColor: colors[status] }}
  >
    {number}
  </button>
);

PlayDigit.propTypes = {
  number: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayDigit;
