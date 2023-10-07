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