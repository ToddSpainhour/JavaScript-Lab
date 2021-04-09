/*
https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript

Paul is an excellent coder and sits high on the CW leaderboard. 
He solves kata like a banshee but would also like to lead a normal life, with other activities.
But he just can't stop solving all the kata!!
Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

const calculatePaulsMiseryStatus = (array) => {
  
  let paulsMiseryScore = 0;
  
  for (i = 0; i < array.length; i++) {
    
    switch (array[i]) {
        case 'kata':
        paulsMiseryScore += 5;
        break;
        
        case 'Petes kata':
        paulsMiseryScore += 10;
        break;
        
        case 'life':
        paulsMiseryScore += 0;
        break;
        
        case 'eating':
        paulsMiseryScore += 1;
        break;
        
        default:
        paulsMiseryScore += 0;
    }
    
  }
  
  if (paulsMiseryScore < 40) {
        return 'Super happy!'

  } else if (paulsMiseryScore >= 40 && paulsMiseryScore < 70 ) {
        return 'Happy!'
    
  } else if (paulsMiseryScore >= 70 && paulsMiseryScore < 100  ) {
        return 'Sad!'
    
  } else if (paulsMiseryScore => 100) {
        return 'Miserable!'
    }
}
