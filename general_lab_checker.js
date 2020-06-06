'use strict';
const labNumber = 71;

switch (labNumber) {
case 11: {
  const { fn } = require('./index1_1.js');
  const number2 = 5;
  const func = function cl(number1) {
    console.log(number1);
  };
  if (fn(number2) === func(number2)) {
    console.log('Done right');
  } else {
    console.log('Error');
  }
  break; }
case 12: {
  const { incNumber } = require('./index1_2.js');

  let number = 10;

  if (incNumber(number) !== ++number) {
    throw new Error('Something went wrong');
  } else {
    console.log('Success!');
    console.log(number);
  }
  break; }
case 13: {
  const { inc1 } = require('./index1_3.js'); {
    const argument = { n: 5 };
    const output = inc1(argument);
    if (typeof output === 'undefined') {
      console.log('Good job!');
    } else {
      throw new Error('Bad argument');
    }
    break; }
}
case 14: {
  const { countTypesInArray } = require('./index1_4.js');
  const arrayOfTypes = [1, false, 'Hello', 8, 2, true, false, 'a', 'b'];
  const types = function numberOfTypesInArray(arrayOfTypes) {
    const counters = {};
    for (const element of arrayOfTypes) {
      const type = typeof element;
      const count = counters[type] || 0;
      counters[type] = count + 1;
    }
    return counters;
  };
  if (types(arrayOfTypes) !== countTypesInArray(arrayOfTypes)) {
    throw new Error('Fix something');
  }
  break; }
case 21: {
  const { name } = require('./index2_1.js');
  if (typeof name === 'string') {
    console.log('Good job');
  } else {
    throw  new Error('Name must be string');
  }
  break; }
case 71: {
  const { removeElement } = require('./index7_1.js');
  let array1 = ['Kiev', 'Beijing', 'Lima', 'Saratov', 'Lviv', 'Rivne'];
  const array = ['Beijing', 'Lima', 'Saratov', 'Lviv', 'Rivne'];
  const index = array1.indexOf('Kiev');
  if (index !== -1) {
    array1 = array1.splice(index, 1);
    return array1;
  }
  if (array !== removeElement(array1, 0)) {
    throw new Error('Function should remove Kiev');
  }
  break; }
case 46: {
  const matrixOfNumbers = [[4, 8, 10, 56], [57, 90, 1, 4], [76, 6, 25, 85]];
  const ttr = function findMax(matrixOfNumbers) {
    const number = matrixOfNumbers[0][0];
    for (let i = 0; i < matrixOfNumbers.length; i++) {
      const row = matrixOfNumbers[i];
      for (let j = 0; j < row.length; j++) {
        const littleArray = row[j];
        if (number < littleArray) {
          return number;
        }
      }
    }

  };
  const { maxElement } = require('./index4_6.js');
  if (maxElement(matrixOfNumbers) !== ttr(matrixOfNumbers)) {
    throw new Error('Something went wrong');
  }
  break; }
case 51: {
  const a = x => x + 10;
  const f = x => x + 10;
  const seq1 = a => b => (typeof b === 'number' ? a(b) : seq1(x => a(b(x))));
  const { seq } = require('./index5_1');
  if (seq(f) !== seq1(a)) {
    throw new Error('Fix function!');
  }
  break; }
}
