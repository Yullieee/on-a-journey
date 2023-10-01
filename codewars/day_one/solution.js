function solution(str, ending) {

    for (let i = 0; i < ending.length; i++) {
      
      if (ending[ending.length - 1 - i] !== str[str.length - 1 - i]) {
        return false; 
      }
    }
    return true; 
  }

console.log(solution('abcd','cd'));


function solution_bestsolution(str, ending){
    return str.endsWith(ending);
  }