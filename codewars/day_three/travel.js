function chooseBestSum(t, k, ls) {
    let maxSum = null;                                          //var to stock the maximum sum found                                     
  
    function combination(index, count, sum) {                   //we make a sub function to go through each possible combinations of distances
      if (count === 0) {                                        //if count becomes 0, a combination is formed because it went through k indexes in ls
        if (sum <= t && (maxSum === null || sum > maxSum)) {    //checks if the current sum is greater than maxSum and if it satisfies our request
          maxSum = sum;
        }
        return;                                                 //we're done with this, we found what we were looking for!!
      }
  
      if (index === ls.length) {                                //if we reach the end of ls, we stop
        return;
      }
  
      combination(index + 1, count - 1, sum + ls[index]);       //recursive call to go through every combinations by including the current distance
                                                                //hence we move to the next index and decrement the count because we picked a distance
                                                                //we then update the sum to include the value of the current distance

      combination(index + 1, count, sum);                       //recursive call to go through every combinations by excluding the current distance
                                                                //hence we move to the index and this time keep the count and sum unchanged
    }
  
    combination(0, k, 0);                                       //initial recursive call to go through combinations.
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
  
  
  
  
  
  