function findMissingLetter(array) {
  
    let s = array[0];                                           //s is the first char of array
    let e = array[array.length-1];                              //e is the last char of array
    let str = '';
  
    if (s === s.toUpperCase()) {                                //we check wether the given array is in upper cases or not and adapt the alphabet depending on that
        str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else {
        str = 'abcdefghijklmnopqrstuvwxyz';
    }
    
    const start = str.indexOf(s);                               //we initiliaze start and end as the index they are in the alphabet
    const end = str.indexOf(e);
    
    for (let i = start ; i < end + 1 ; i++) {  
                       //we go through from start to end in the alphabet, say s is 'f' and e is 'l', we go from 'f' to 'l'
      if (str[i] != array[i-start]) {                           //we compare the letter in the alphabet to what it should be in array
        return str[i];                                          //if s is 'j', then start is 9, but 'j' is the first char of array, so we have to be cautious of that 
      }
    }
    return undefined 
}

console.log(findMissingLetter_bestsolution(['a','b','d']));

function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }
