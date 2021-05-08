/*
https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

const makeNegative = (num) => {
  return num < 0 ? num : num * -1;
}



/*
original solution

const makeNegative = (number) => {
  if (number < 0) {
    
    return number
    
  } else {
    
    const nmakeNumberIsNegativeButAString = '-' + Math.abs(number);
    
    const convertedStringToNumber = parseFloat(nmakeNumberIsNegativeButAString);
    
      return convertedStringToNumber;
  }
}
*/
