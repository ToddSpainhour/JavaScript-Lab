/*
https://www.codewars.com/kata/56453a12fcee9a6c4700009c

Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.
a is considered "close to" b if margin is greater than or equal to the distance between a and b.

Please note the following:
When a is close to b, return 0.

Otherwise...
When a is less than b, return -1.
When a is greater than b, return 1.

If margin is not given, treat it as zero.
Assume: margin >= 0
*/

const closeCompare = (a, b, margin) => {
  
  const distanceBetweenAandB = a > b ? a - b : b - a
  
  if (margin === undefined) {
    margin = 0;
  }
  
  if (margin >= distanceBetweenAandB) {
    return 0
  } else if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  }
}
