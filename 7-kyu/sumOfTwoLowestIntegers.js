/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

const sumTwoSmallestNumbers = (numbers) => {
  
  const smallestNumber = Math.min(...numbers);

  const indexPositionOfSmallestNumber = numbers.indexOf(Math.min(...numbers));
  
  numbers.splice(indexPositionOfSmallestNumber, 1) 

  const secondSmallestNumber = Math.min(...numbers);
          
    return smallestNumber + secondSmallestNumber;
}
