/*
https://www.codewars.com/kata/5a1a9e5032b8b98477000004

Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/

const evenLast = (numbers) => {  
  
  const numbersWithEvenIndexes = []
  const lengthOfOriginalArray = numbers.length
  
  if (numbers.length === 0) {
    return 0
  } else {
    for (i=0; i < numbers.length; i += 2) {
      numbersWithEvenIndexes.push(numbers[i]) 
    }
    
    const sumOfRemainingNumbers = numbersWithEvenIndexes.reduce((a,b) => a+b) 
    
    const lastNumberInOriginalArray = numbers[lengthOfOriginalArray - 1]
    
    const solution = sumOfRemainingNumbers * lastNumberInOriginalArray
    
    return solution
  }
}
