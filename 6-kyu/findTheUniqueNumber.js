/*
https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

const findUniqueNumber = (arr) => {
  
  const firstNumberInArray = arr[0];
  
  for (i = 0; i < arr.length; i++) {    
    if (firstNumberInArray !== arr[i]) {
      return arr[i];
    } else if (firstNumberInArray != arr[1] && arr[1] === arr[2]) {
      return firstNumberInArray;
    }
  }
}
