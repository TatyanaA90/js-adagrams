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

// refactor later to improve time complexity from O(n*m) to O(n+m), using {}
export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  input = input.toUpperCase();
  const lettersInHandCopy = cloneObject(lettersInHand);
  for (const charset of input) {
    const index = lettersInHandCopy.indexOf(charset);
    if (index === -1) {
      return false; 
    }
    lettersInHandCopy.splice(index, 1);
  }
  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
  if (!word) return 0;
  
  word = word.toUpperCase();
  let totalPoints = 0;
  
  if (word.length >=7 && word.length <= 10) {
    totalPoints += 8;
  };
  for (const charset of word) {
    totalPoints += SCORE_CHART[charset]
  };
  return totalPoints
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
