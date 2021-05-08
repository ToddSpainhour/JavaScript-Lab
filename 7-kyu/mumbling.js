/*
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/



const accum = (s) => {
  
  const finalFormArray = [];
  
  const seperatedCharacters = s.split("");
  
  for ( i = 0; i < seperatedCharacters.length; i++) {
    
    const newRepeatedChar = seperatedCharacters[i].repeat(i + 1);
    
    const makeFirstCharUpperCased = newRepeatedChar[0].toUpperCase() + newRepeatedChar.slice(1).toLowerCase();
    
    finalFormArray.push(makeFirstCharUpperCased);      
  }
  return finalFormArray.join('-');  
}
