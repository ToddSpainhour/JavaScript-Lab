/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

Example:
'world'  =>  'dlrow'
*/

const solution = (str) => {
  const reversedString = str.split('').reverse().join('')
  return reversedString
}
