/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

Your goal is to create a function that removes the first and last characters of a string.
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

const removeFirstAndLastCharacter = (userEnteredString) => {
  const firstAndLastCharRemoved = userEnteredString.substr(1, userEnteredString.length - 2);
  return (userEnteredString.length > 2) ? firstAndLastCharRemoved : userEnteredString;
}
 