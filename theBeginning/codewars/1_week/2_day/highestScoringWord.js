/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x){

    
    let result = '';
    let temp = 0;
    let words = x.split(' '); //we create an array of the words included in x, be careful to use split(' ') to make an array of words and not just characters with split('')
    let alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for (let i = 0; i < words.length; i++) {

        let sum = 0;

        for (let j = 0; j < words[i].length; j++) {
            
            if (alph.includes(words[i][j])) {
                sum += alph.indexOf(words[i][j])+1;
            }
        }

        if (sum > temp) {
            temp = sum;
            result = words[i];
        }

        if (sum === temp && i < words.indexOf(result)) {
            result = words[i];
        }

    }

    return result;
}
    
console.log(high('aa b'));

function high_bestsolution(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
  }