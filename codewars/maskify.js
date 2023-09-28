function maskify(cc) {

  if (cc.length < 4) {
    return cc;
  }

  const masked = cc.split(''); //we have to convert the string cc into an array of characters first

  for (let k = 0; k <= cc.length - 5 ; k++) {
    masked[k] = '#';
  }
  return masked.join(''); //since we previously used split, each characters are seperated so we then join them to get back to a string
}

const arr = "0123456789";
console.log(maskify(arr));

function maskify_bestsolution(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }