/*
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

Examples:
Sam Harris => S.H
Patrick Feeney => P.F
*/

const abbrevName = (name) => {
  const firstNameInitial = name[0].toUpperCase() 
  const indexOfCharAfterSpace = name.indexOf(' ') + 1
  const lastNameInitial = name[indexOfCharAfterSpace].toUpperCase()
  const combinedInitials = `${firstNameInitial}.${lastNameInitial}`
      
    return combinedInitials  
}
