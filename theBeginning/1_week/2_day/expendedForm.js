function zeros(arr, start) {

    for (let i = start ; i < arr.length ; i++) {

        if (arr[i] !== '0') {
            return false;
        }
    }
    return true;
}


/*

Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*/

function expandedForm(num) {

    let string = num.toString();
    let arr = string.split('');
    let result = '';

    for (let i = 0 ; i < arr.length ; i++) {

        if (arr[i] !== '0') {
            
            result += arr[i] + '0'.repeat(arr.length-i-1);
            
            if (i < arr.length - 1 && !zeros(arr,i+1)) {
                result += ' + ';
            }
        }
    }   
    return result;
}

const n = 5000;
console.log(expandedForm(n));

var expandedForm_bestsolution = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for(var i = 0; i < arr.length; i++){
      arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
  }

