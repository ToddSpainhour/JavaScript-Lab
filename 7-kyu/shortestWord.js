/*
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

const findShort = (string) => {
  
  const seperatedWords = string.split(' ')
      
  seperatedWords.sort((a, b) => a.length - b.length)
    
  const smallestWord = seperatedWords[0].length
  
  return smallestWord
}
