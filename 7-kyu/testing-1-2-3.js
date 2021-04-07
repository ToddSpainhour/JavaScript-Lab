/*
https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.
Examples:
number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/

const number = (array) => {
  
  let newArrayWithLineItems = [];
  
  if (array.length < 1) {
    return [];
  } else {
    for (i = 0; i < array.length; i++) {
      const currentLineItemNumber = i + 1;
      const lineItem = `${currentLineItemNumber}: ${array[i]}`;
      newArrayWithLineItems.push(lineItem);
    }
    return newArrayWithLineItems;
  } 
}
