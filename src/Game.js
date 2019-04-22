import React, { useState } from 'react';
import './App.css';
import Logic from './utils/logic';
import Balls from './components/Balls';
import PlayDigit from './components/PlayDigit';
import PlayAgain from "./components/PlayAgain";

const Game = () => {
  const [balls, setBalls] = useState(Logic.random(1, 9));
  const [availableDigits, setAvailableDigits] = useState(Logic.range(1, 9));
  const [candidateDigits, setCandidateDigits] = useState([]);

  const candidatesAreWrong = Logic.sum(candidateDigits) > balls;
  const gameIsDone = availableDigits.length === 0;

  const digitStatus = (digit) => {
    if (!availableDigits.includes(digit)) {
      return 'used';
    }
    if (candidateDigits.includes(digit)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };

  const onDigitClick = (digit, currentStatus) => {
    if (currentStatus === 'used') {
      return false;
    }

    const newCandidateDigits = currentStatus === 'available'
      ? candidateDigits.concat(digit) : candidateDigits.filter(cn => cn !== digit);

    if (Logic.sum(newCandidateDigits) !== balls) {
      setCandidateDigits(newCandidateDigits);
    } else {
      const newAvailableDigits = availableDigits.filter(n => !newCandidateDigits.includes(n));
      setBalls(Logic.randomSumIn(newAvailableDigits, 9));
      setAvailableDigits(newAvailableDigits);
      setCandidateDigits([]);
    }
  };

  const resetGame = () => {
    setBalls(Logic.random(1, 9));
    setAvailableDigits(Logic.range(1, 9));
    setCandidateDigits([]);
  };

  return (
    <div className="App">
      <div className="header-title">Math Skillz</div>
      <div className="visuals">
        <div className="quiz-card left">
          { gameIsDone ? <PlayAgain onClick={resetGame} /> : <Balls count={balls} />}
        </div>
        <div className="quiz-card right">
          {Logic.range(1, 9)
            .map(number => <PlayDigit key={number} status={digitStatus(number)} number={number} onClick={onDigitClick} />)}
        </div>
      </div>
      <div className="header-title">Timer</div>
    </div>
  );
};

export default Game;
