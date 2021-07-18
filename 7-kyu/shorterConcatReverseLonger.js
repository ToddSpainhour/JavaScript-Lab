/*
https://www.codewars.com/kata/54557d61126a00423b000a45

Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null.
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/

const shorter_reverse_longer = (a,b) => {
  
  let longerString = ''
  let shorterString = ''
  
   if (a.length == b.length) {
      longerString = a
      shorterString = b
   } else if (a.length > b.length) {
      longerString = a
      shorterString = b
   } else {
      longerString = b
      shorterString = a 
   }
  
  const reversedLongerString = longerString.split('').reverse().join('')
  
  const solution = `${shorterString}${reversedLongerString}${shorterString}`
  
  return solution
}
