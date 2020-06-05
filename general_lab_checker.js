'use strict';
let labNumber ;

switch (labNumber) {
  case 11:
    const {fn} = require('./index1_1.js');

    if (fn === fn){
      console.log('Done right')
    } else {
      console.log('Error')
    }
    break;
  case 12:
    const {incNumber} = require('./index1_2.js');

    let number = 10;

    if (incNumber(number)!== ++number){
      throw new Error('Something went wrong')
    } else {
      console.log('Success!');
      console.log(number)
    }
    break;
  case 13:

    const {inc1} = require('./index7_1.js');{
    const argument = { n: 5};
    const output = inc1(argument);
    if(typeof output == 'undefined'){
      console.log('Good job!')
    } else {
      throw new Error ('Bad argument')
    }
    break
  }
  case 14:
    const {countTypesInArray} = require('./index7_1.js');
      let counterOfTypes = [];

      for (let i = 0, j = counterOfTypes.length; i < j; i++) {
      const type = typeof counterOfTypes[i];
      const number = counterOfTypes[type] || 0;
      counterOfTypes[type] = number + 1;
    }
    return counterOfTypes;{

    break}

  case 21:
    const {name} = require('./index2_1.js');
    if (typeof name === 'string'){
      console.log('Good job')
    } else {
      throw  new Error('Name must be string')
    }
    break;
  case 71:
    const {removeElement} = require('./index7_1.js');
    const index = array.indexOf(item);
    if (index !== -1) {
      array = array.splice(index, 1);
      return array
    }

    if(removeElement(array,item) !== array){
      throw new Error('Fix something')
    }
    break
