function sumStrings(a, b) { 
  
    let result = '';

    const A = parseInt(a, 10);      //we associate numbers from the given strings, note that parseInt has two arguments, a the string and 10 the base, here decimal
    const B = parseInt(b, 10);
  
    if (!isNaN(A) && !isNaN(B)) {   //we check if both numbers are actually numbers
      result = (A + B).toString();  //if they are we sum them and then form a string
    } else if (!isNaN(A)) {         
      result = a;
    } else if (!isNaN(B)) {
      result = b;
    }
    return result;
  }

const a = '54597216555645484131353040809517065716051765071941079541076514791407241764015';
const b = '10670097457460750174971064716470149741057103714576054197145761472067514706140';
console.log(sumStrings(a,b)); 

//not precise with big numbers, i don't know how to resolve that yet :(
//6.526731401310624e+76