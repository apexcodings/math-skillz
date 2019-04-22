import React from 'react';
import PropTypes from 'prop-types';
import Logic from '../utils/logic';

const Balls = ({ count }) => (
  <>
    {Logic.range(1, count).map(ball => <div key={ball} className="ball" />)}
  </>
);

Balls.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Balls;
