/*
https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
If the input array is empty or null, return an empty array.
*/


const countPositivesSumNegatives = (input) => {
  
  let solutionArray = [];
  
  if (input === '' || input === null) {
    return solutionArray = [];
  }
    
  let amountOfPositiveNumbers = input.filter((value) => value > 0).length
  
  solutionArray.push(amountOfPositiveNumbers);
  
  
  let onlyNegativeNumbers = input.filter((number) => number < 0);
  
  let sumOfNegitives = onlyNegativeNumbers.reduce((a, b) => a + b, 0);
  
  solutionArray.push(sumOfNegitives);
  
  
  solutionArray[0] === 0 && solutionArray[1] === 0 ? solutionArray = [] : solutionArray;
  
  return solutionArray;
  
}
