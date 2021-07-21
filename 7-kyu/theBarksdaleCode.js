/*
https://www.codewars.com/kata/573d498eb90ccf20a000002a

Fans of The Wire will appreciate this one.
For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers... 
"Jump to the other side of the 5 on the keypad, and swap 5's and 0's."
Here's a keypad for visualization.

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. 
Could you write a program to do this for us?
Write a funciton called decode(). 
Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.
*/


const decode = (encodedPhoneNumber) => {
  
  const decodedNumberArray = []
  const individualDigitsOfEncodedPhoneNumber = encodedPhoneNumber.split('')
  
  
  for (i=0; i < individualDigitsOfEncodedPhoneNumber.length; i++) {
    
    switch (individualDigitsOfEncodedPhoneNumber[i]) {
        
        case '0': 
          decodedNumberArray.push('5')
        break;
        
        case '1': 
          decodedNumberArray.push('9')
        break;
        
        case '2': 
          decodedNumberArray.push('8')
        break;
        
        case '3': 
          decodedNumberArray.push('7')
        break;
        
        case '4': 
          decodedNumberArray.push('6')
        break;
        
        case '5': 
          decodedNumberArray.push('0')
        break;
        
        case '6': 
          decodedNumberArray.push('4')
        break;
        
        case '7': 
          decodedNumberArray.push('3')
        break;
        
        case '8': 
          decodedNumberArray.push('2')
        break;
        
        case '9': 
          decodedNumberArray.push('1')
        break;
        
        default: console.log('Oh, no. The decoder is not working!')
    }
  }
  
  const decodedPhoneNumber = decodedNumberArray.join('')
  
  return decodedPhoneNumber
}
