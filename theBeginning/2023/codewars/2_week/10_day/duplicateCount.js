/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function duplicateCount(text){

  let new_text = text.toLowerCase();
  let sumDuplicates = 0;
  let duplicates = '';

  for (let i = 0 ; i < new_text.length ; i++) {

    let sub_text = new_text.slice(0, i) + new_text.slice(i + 1);

    for (let j = 0 ; j < sub_text.length ; j++) {

      if (sub_text[j] === new_text[i] && !duplicates.includes(new_text[i])) {
        duplicates += new_text[i];
        sumDuplicates++;
      }
    }
  }
  return sumDuplicates;
}

console.log(duplicateCount('abcdkrfjeoseda'));