import { LETTER_POOL, SCORE_CHART } from './constant';
import { cloneObject } from './helpers';

//Implement drawLetters with weighted randomness
export const drawLetters = () => {
  // Implement this method for wave 1
  const availableLetters = cloneObject(LETTER_POOL);
  const selectedLetters = [];

  for (let i = 0; i < 10; i++) {
    const total = Object.values(availableLetters).reduce((summary, count) => summary + count, 0);
    const randLetter = Math.floor(Math.random() * total) + 1;

    let cumulative = 0;
    for (const [letter, count] of Object.entries(availableLetters)) {
      cumulative += count;
      if (randLetter <= cumulative) {
        selectedLetters.push(letter);
        availableLetters[letter] -= 1;
        if (availableLetters[letter] === 0) {
          delete availableLetters[letter];
        }
        break;
      }
    }
  }

  return selectedLetters;
};


export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const letterCount = {};
  input = input.toUpperCase();

  for (const letter of lettersInHand) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (const charset of input) {
    if (letterCount[charset]) {
      letterCount[charset] -= 1;
    } else {
      return false;
    }
  }

  return true;
};


export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (!word) return 0;

  word = word.toUpperCase();
  let totalPoints = 0;

  if (word.length >= 7) {
    totalPoints += 8;
  };
  for (const charset of word) {
    totalPoints += SCORE_CHART[charset]
  };
  return totalPoints
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
  let topScore = 0;
  let tiedWords = [];


  for (const word of words) {
    const score = scoreWord(word);

    if (score > topScore) {
      topScore = score;
      tiedWords = [word];
    } else if (score === topScore) {
      tiedWords.push(word);
    }
  };


  let winningWord = tiedWords[0];

  for (const word of tiedWords) {
    if (winningWord.length === 10) {
      continue;
    }
    else if (word.length === 10) {
      winningWord = word;
    }
    else if (word.length < winningWord.length) {
      winningWord = word;
    }
  };

  return {
    word: winningWord,
    score: topScore
  };
};
