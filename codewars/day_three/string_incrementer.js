function incrementString (strng) {
  
    let temp = strng;                                          //we copy strng
    let last = temp[temp.length-1];                            //we get the last element of strng from temp
    
    if (!isNaN(parseInt(last))) {                              //if the last element is a number we stock it in num and increment it by one as requested
        let num = String(parseInt(last)+1);
        
        if (num >= 10) {                                       //if it turns out num >= 10 we have to make a recursive call to carry over the 1 from 10
            let sub_strng = strng.slice(0, strng.length - 1);  //to do so we make a new string indexed from 0 to the last number, here 9
            return incrementString(sub_strng) + num%10;        //and we do so until the sub_strng's last element isn't a number anymore
                                                               //ex: yes999 -> sub_strng = 'yes999', num = 10 -> sub(sub_strng) = 'yes99' + '0'
                                                               //sub(sub(...)) = 'yes' + '000' and eventually sub(sub(...)) = 'yes' + '1000'

        } else {                                               //else we simply 'replace' the last element by itselt incremented by one
            return (strng.slice(0, strng.length-1) + num);
        }
    } else {                                                   //else the last element isn't a number, we then add '1' at the end of our string
        return (strng + '1');
    }
  }

const strng = "yullie999";
console.log(incrementString(strng));

function incrementString_bestsolution(input) {
    if(isNaN(parseInt(input[input.length - 1]))) return input + '1';
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
      var up = parseInt(p2) + 1;
      return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
    });
  }
