/*
https://www.codewars.com/kata/57eae20f5500ad98e50002c5

Simple, remove the spaces from the string, then return the resultant string.
*/

const noSpace = (string) => {  
  const stringWithoutSpaces = string.replace(/ /g, '')
  return stringWithoutSpaces
}
