export const drawLetters = () => {
  // Implement this method for wave 1
  const LETTER_POOL = {
    A: 9,B: 2,C: 2,D: 4,E: 12,F: 2,G: 3,H: 2,I: 9,J: 1,K: 1,L: 4,M: 2,
    N: 6,O: 8,P: 2,Q: 1,R: 6,S: 4,T: 6,U: 4,V: 2,W: 2,X: 1,Y: 2,Z: 1
};

  const drawLettersList = [];

  // Flatten the letter pool into a list
  for (const letter in LETTER_POOL) {
    const count = LETTER_POOL[letter];
    for (let i = 0; i < count; i++) {
      drawLettersList.push(letter); //.extend in Python
    }
  }

  const resultLetters = [];
  let counter = 0;

  while (counter < 10) {
    const index = Math.floor(Math.random() * drawLettersList.length);
    const letter = drawLettersList.splice(index, 1)[0]; //.pop in Python
    resultLetters.push(letter);
    counter++;
  }

  return resultLetters;
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
