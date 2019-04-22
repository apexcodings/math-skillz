import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


const BallMatch = () => {
  const [gameId, setGameId] = useState(1);

  return (
    <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
  );
};

ReactDOM.render(<BallMatch />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
