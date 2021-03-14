
/*
https://www.codewars.com/kata/58cb43f4256836ed95000f97
In this simple exercise, you will create a program that will take two lists of integers, a and b.
Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
You must find the difference of the cuboids' volumes regardless of which is bigger.
For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
Therefore, the function should return 8.
*/

const cube1 = [2, 2, 3];

const cube2 = [5, 4, 1];


const findSizeDifferenceOfCubiod = (a, b) => {
  
  const volume1 = a[0] * a[1] * a[2];
  const volume2 = b[0] * b[1] * b[2];
  
  if (volume1 > volume2) {
    let sizeDifferenceInCubiods = volume1 - volume2;
    return sizeDifferenceInCubiods;
  } else {
    let sizeDifferenceInCubiods = volume2 - volume1;
        return sizeDifferenceInCubiods;
  }
}
