//Using the Test Method

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Match Literal Strings

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

//Match a Literal String with Different Possibilities

let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/;
let result3 = petRegex.test(petString);

//Ignore Case While Matching

let myString4 = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result4 = fccRegex.test(myString);

//Extract Matches

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result5 = extractStr.match(codingRegex);

//Find More Than the First Match

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);

//Match Anything with Wildcard Period

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/gi;
let result7 = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex);

//Match Letters of the Alphabet

let quoteSample9 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result9 = quoteSample.match(alphabetRegex);

//Match Numbers and Letters of the Alphabet

let quoteSample10 = "Blueberry 3.141592653s are delicious.";
let myRegex10 = /[h-s2-6]/gi;
let result10 = quoteSample.match(myRegex);

//Match Single Characters Not Specified

let quoteSample11 = "3 blind mice.";
let myRegex11 = /[^0-9^aeiou]/gi;
let result11 = quoteSample.match(myRegex);

//Match Characters that Occur One or More Times

let difficultSpelling = "Mississippi";
let myRegex12 = /s+/gi;
let result12 = difficultSpelling.match(myRegex);

//Match Characters that Occur Zero or More Times

let chewieRegex = /Aa*/;
let result13 = chewieQuote.match(chewieRegex);

//Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let myRegex14 = /<.*?>/g;
let result14 = text.match(myRegex);

//Find One or More Criminals in a Hunt

let reCriminals = /C+/g;

//Match Beginning String Patterns

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result15 = calRegex.test(rickyAndCal);

//Match Ending String Patterns

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result16 = lastRegex.test(caboose);

//Match All Letters and Numbers

let quoteSample17 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi;
let result17 = quoteSample.match(alphabetRegexV2).length;

//Match Everything But Letters and Numbers

let quoteSample18 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi;
let result18 = quoteSample.match(nonAlphabetRegex).length;

//Match All Numbers

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result19 = movieName.match(numRegex).length;

//Match All Non-Numbers

let movieName20 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result20 = movieName.match(noNumRegex).length;

//Restrict Possible Usernames

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]+\d\d+$/i;
let result21 = userCheck.test(username);

//Match Whitespace

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result22 = sample.match(countWhiteSpace);

//Match Non-Whitespace Characters

let sample23 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result23 = sample.match(countNonWhiteSpace);

//Specify Upper and Lower Number of Matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
let result24 = ohRegex.test(ohStr);

//Specify Only the Lower Number of Matches

let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i;
let result25 = haRegex.test(haStr);

//Specify Exact Number of Matches

let timStr = "Timmmmber";
let timRegex = /tim{4}ber/i;
let result26 = timRegex.test(timStr);

//Check for All or None

let favWord = "favorite";
let favRegex = /favou?rite/i;
let result27 = favRegex.test(favWord);

//Positive and Negative Lookahead

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result28 = pwRegex.test(sampleWord);

//Check For Mixed Grouping of Characters

let myString29 = "Eleanor Roosevelt";
let myRegex29 = /(Franklin|Eleanor)\s(([A-Z]\.?|[A-Z][a-z]+)\s)?Roosevelt/;
let result29 = myRegex.test(myString);

//Reuse Patterns Using Capture Groups

let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result30 = reRegex.test(repeatNum);

//Use Capture Groups to Search and Replace

let str = "one two three";
let fixRegex = /^(\w+)\s(\w+)\s(\w+)$/;
let replaceText = "$3 $2 $1";
let result31 = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End

let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)|(\s+)$/g;
let result32 = hello.replace(wsRegex, '');