//Palindrome Checker




function palindrome(str) {
  const nonA = /[\W_]/g;
  let newStr = str.replace(nonA,'')
                  .split('')
                  .reverse()
                  .join('')
                  .toLowerCase();
  return (str.replace(nonA,'').toLowerCase() === newStr);
}

palindrome("A man, a plan, a canal. Panama");
palindrome("_eye");
palindrome("0_0 (: /-\ :) 0-0");




//Roman Numeral Converter




function convertToRoman(num) {
  let result = '';
  while (num >= 1000) {
    result += 'M';
    num -= 1000;
  }
  while (num >= 900) {
    result += 'CM';
    num -= 900;
  }
  while (num >= 500) {
    result += 'D';
    num -= 500;
  }
  while (num >= 400) {
    result += 'CD';
    num -= 400;
  }
  while (num >= 100) {
    result += 'C';
    num -= 100;
  }
  while (num >= 90) {
    result += 'XC';
    num -= 90;
  }
  while (num >= 50) {
    result += 'L';
    num -= 50;
  }
  while (num >= 40) {
    result += 'XL';
    num -= 40;
  }
  while (num >= 10) {
    result += 'X';
    num -= 10;
  }
  while (num >= 9) {
    result += 'IX';
    num -= 9;
  }
  while (num >= 5) {
    result += 'V';
    num -= 5;
  }
  while (num >= 4) {
    result += 'IV';
    num -= 4;
  }
  while (num >= 1) {
    result += 'I';
    num -= 1;
  }
  if (num === 0) {
    return result;
  } else {
    return result + convertToRoman(num);
  }
}

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (const pair of romanNumerals) {
    while (num >= pair.value) {
      result += pair.numeral;
      num -= pair.value;
    }
  }

  return result;
}

console.log(convertToRoman(29));
console.log(convertToRoman(83));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1023));




//Caesars Cipher




function rot13(key) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let message = [];
  for (let i = 0 ; i < key.length ; i++) {
    if (alphabet.includes(key[i])) {
      let index = (alphabet.indexOf(key[i])+13)%26;
      let letter = alphabet[index];
      message.push(letter);
    } else {
      message.push(key[i]);
    }
  }
  return message.join('');
}

rot13("SERR PBQR PNZC");



//Telephone Number Validator

function telephoneCheck(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

//Cash Register

function checkCashRegister(price, cash, cid) {

  const currencyUnit = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  let changeDue = (cash - price)*100;
  const totalCash = cid.reduce((total, [, amount]) => total + (amount * 100),0);

  if (changeDue > totalCash) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCash) {
    return { status: "CLOSED", change: cid };
  }

  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const [unit, amount] = cid[i];
    const unitValue = currencyUnit[unit];
    const maxAvailable = amount * 100;
    let returned = 0;
    while (changeDue >= unitValue && returned < maxAvailable) {
      changeDue -= unitValue;
      returned += unitValue;
    }

    if (returned > 0) {
      change.push([unit, returned / 100]);
    }
  }

  if (changeDue === 0) {
    return { status: "OPEN", change };
  }

  return { status: "INSUFFICIENT_FUNDS", change: [] };
}