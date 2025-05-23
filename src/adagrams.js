import { LETTER_POOL } from './helper';

// export const drawLetters = () => {
//  // Implement this method for wave 1
//
//  const drawLettersList = [];
//
//  // Flatten the letter pool into a list
//  for (const letter in LETTER_POOL) {
//    const count = LETTER_POOL[letter];
//    for (let i = 0; i < count; i++) {
//      drawLettersList.push(letter); //.extend in Python
//    }
//  }
//
//  const resultLetters = [];
//  let counter = 0;
//
//  while (counter < 10) {
//    const index = Math.floor(Math.random() * drawLettersList.length);
//    const letter = drawLettersList.splice(index, 1)[0]; //.pop in Python
//    resultLetters.push(letter);
//    counter++;
//  }
//
//  return resultLetters;
//};


// var_2

export const drawLetters = () => {
  const computeCumulativeWeights = (letterPool) => {
    const cumulativeWeights = {};
    let totalWeight = 0;

    for (const [letter, weight] of Object.entries(letterPool)) {
      totalWeight += weight;
      cumulativeWeights[letter] = totalWeight;
    }
    return [cumulativeWeights, totalWeight];
  };

    const [cumulative, totalWeight] = computeCumulativeWeights(LETTER_POOL);
    const selectedLetters = [];
    const drawnCount = {}; 

  while (selectedLetters.length < 10) {
    const randValue = Math.floor(Math.random() * totalWeight) + 1;

    for (const [letter, cumulativeWeight] of Object.entries(cumulative)) {
          if (randValue <= cumulativeWeight) {
            if ((drawnCount[letter] || 0) < LETTER_POOL[letter]) {
              drawnCount[letter] = (drawnCount[letter] || 0) + 1;
              selectedLetters.push(letter);
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
