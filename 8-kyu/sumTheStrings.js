/*
https://www.codewars.com/kata/5966e33c4e686b508700002d

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string) 
If either input is an empty string, consider it as zero.

Example: (Input1, Input2 -->Output)
"4",  "5" --> "9"
"34", "5" --> "39"
*/


const sumStr = (a, b) => {
  
  if (a == '' && b == '') {
    
      return '0';
    
  } else if (a == '') {
      return b;
    
  } else if (b == '') {
      return a;
    
  } else {
      const sum = parseInt(a) + parseInt(b);
      const sumString = sum.toString();
    
    return sumString;
  }
}
