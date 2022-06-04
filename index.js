  // let splitString = word.split('');
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join('');
  // return joinArray;

function isPalindrome(word) {
  // Write your algorithm here
  if(word.split('').reverse().join('') == word) {
    return true;
  } else {
    return false;
  }
}

isPalindrome('abba'); //=> true
isPalindrome('racecar'); //=> true
isPalindrome('a'); //=> true
isPalindrome('robot'); //=> false
isPalindrome('ab'); //=> false

/* 
  reverse word,
  return true if match
  return false if no match
*/

/*
  Add written explanation of your solution here
  To reverse the word we must first split the word, then reverse it, and rejoin it.
  We are able to give it a true/false result by using the if, else statements.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
