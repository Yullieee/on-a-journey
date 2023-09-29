function count(string) {
  
    if (string === '') { return {} }
  
    let result = {};
  
    for (let i = 0 ; i < string.length ; i++) {
        let char = string [i];
        if (!result[char]) {                //if the character, say a, is not in result, we add it with a count of 1 ; a: 1
            result[char]=1;
        } else {                            //else the character, say b : 1, was already in result, we increment its count by 1 ; b : 2
            result[char]=result[char]+1;  
        }
    }
    return result;
}

console.log(count('ababaa'));


function count_bestsolution(string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }