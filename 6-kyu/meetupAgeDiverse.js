/*
https://www.codewars.com/kata/5829ca646d02cd1a65000284

You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:
true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian.
false otherwise.

For example, given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
];

Notes:
The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer up to 199.
*/

const isAgeDiverse = (list) => {
  
  const teenParticipant = list.some(person => person.age >= 13 && person.age <= 19) 
  const twentiesParticipant = list.some(person => person.age >= 20 && person.age <= 29)
  const thirtiesParticipant = list.some(person => person.age >= 30 && person.age <= 39)
  const fourtiesParticipant = list.some(person => person.age >= 40 && person.age <= 49)
  const fiftiesParticipant = list.some(person => person.age >= 50 && person.age <= 59)
  const sixtiesParticipant = list.some(person => person.age >= 60 && person.age <= 69)
  const seventiesParticipant = list.some(person => person.age >= 70 && person.age <= 79)
  const eightiesParticipant = list.some(person => person.age >= 80 && person.age <= 89)
  const ninetiesParticipant = list.some(person => person.age >= 90 && person.age <= 99)
  const oneHundredOrMore = list.some(person => person.age >= 100)
 
  if (teenParticipant && 
    twentiesParticipant && 
    thirtiesParticipant && 
    fourtiesParticipant && 
    fiftiesParticipant && 
    sixtiesParticipant && 
    seventiesParticipant && 
    eightiesParticipant && 
    ninetiesParticipant && 
    oneHundredOrMore) {
   return true
  } else {
      return false
  }
}
