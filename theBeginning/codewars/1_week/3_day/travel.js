/*

John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible to please Mary and John?

Example:
With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or zero integers and this list has at least one element). The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. In that case with C, C++, D, Dart, Fortran, F#, Go, Julia, Kotlin, Nim, OCaml, Pascal, Perl, PowerShell, Reason, Rust, Scala, Shell, Swift return -1.

*/

function chooseBestSum(t, k, ls) {

  let maxSum = null;                                            //var to stock the maximum sum found                                     
  
  function combination(index, count, sum) {                     //we make a sub function to go through each possible combinations of distances

    if (count === 0) {                                          //if count becomes 0, a combination is formed because it went through k indexes in ls

      if (sum <= t && (maxSum === null || sum > maxSum)) {      //checks if the current sum is greater than maxSum and if it satisfies our request
        maxSum = sum;
      }
        return;                                                 //we're done with this, we found what we were looking for!!
      }
  
    if (index === ls.length) {                                  //if we reach the end of ls, we stop
      return;
    }
  
    combination(index + 1, count - 1, sum + ls[index]);         //recursive call to go through every combinations by including the current distance
                                                                //hence we move to the next index and decrement the count because we picked a distance
                                                                //we then update the sum to include the value of the current distance

    combination(index + 1, count, sum);                         //recursive call to go through every combinations by excluding the current distance
                                                                //hence we move to the index and this time keep the count and sum unchanged
    }
  
  combination(0, k, 0);                                         //initial recursive call to go through combinations.
                                                                //we begin from the first index in the array (index 0),
                                                                //with the goal of forming a combination of 'k' distances, count initially being 'k'
                                                                //and the current sum is 0 at the beginning.                        
  
  return maxSum;
}

const result = chooseBestSum(163, 3, [50, 55, 56, 57, 58]);
console.log(result);

/*(0,3,0)
  (1,2,50)
    (2,1,105)
      (3,0,163)
        (4,2,206)
          (5,1,206)
  (1,3,0)
    (2,2,50)
      (3,1,105)
        (4,1,162)
        (5,0,162)
      (3,2,0)
        (4,1,206) */
  
  
  
  
  
  