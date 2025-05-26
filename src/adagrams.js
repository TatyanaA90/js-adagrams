import { LETTER_POOL } from './constant';
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
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
