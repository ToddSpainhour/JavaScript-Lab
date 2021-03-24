/*
https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most 
secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it. Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

const maskify = (cc) => {
  
  if (cc.length > 4) {
      
  const amountOfRedactedNumbers = cc.length - 4;    
    
  const hashesInsteadOfNumbers = '#'.repeat(amountOfRedactedNumbers);
    
  const lastFourNumbers = cc.substr(cc.length -4, cc.length);
  
  const redactedNumber = hashesInsteadOfNumbers + lastFourNumbers;
    
  return redactedNumber;
    
  } else {
    return cc;
  }
}
