// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let stringToCheck = text.toLowerCase(); // convert to lowercase to avoid case sensitivity
  let charsFound = {}; 
  for (let i of stringToCheck) { // iterate through string
    if (!Object.keys(charsFound).includes(i)) {  
      charsFound[i] = 1; //if the character is not in the object add it to the object with a value of 1
    } else {
      charsFound[i]++; // if the character is in the object, increment the value
    }
  }
  let repeats = 0; 
  for (let i in charsFound) { // count how many characters show up more than once
    if (charsFound[i] > 1) {
      repeats++;
    }
  }
  return repeats;
}
