/*

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

*/

function generateHashtag (str) {
  const newStr = str.trim().length ? str.replace(/^\s*(.)/,'#$1').replace(/\b\w/g, match => match.toUpperCase()).replace(/\s/g,'') : false;
  const result = newStr.length <= 140 ? newStr : false;
  return result;
}

//studying regex paid off!! ^c^