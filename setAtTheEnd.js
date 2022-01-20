// create native method to the String Object,
// which will delete word provided as an argument from the statement and add it at the end.

String.prototype.seAtTheEnd = function (word) {
  return this.replace(` ${word}`, "") + ` ${word}`;
};

console.log("Ala ma kota Bzika".seAtTheEnd("kota"));

// basic function with a conversion to an array

// string = "Ala ma kota Bzika";
// function setAtTheEnd(statement, word) {
//   //create an array of words from statement
//   const arrayOfWords = statement.split(" ");

//   //find index of provided word
//   const indexOfWord = arrayOfWords.indexOf(word);

//   //remove item at indexOfWord
//   arrayOfWords.splice(indexOfWord, 1);

//   //add word to end of the array
//   arrayOfWords.push(word);

//   //create string from arrayOfWords
//   const resultString = arrayOfWords.join(" ");

//   return resultString;
// }
// console.log(setAtTheEnd(string, "kota"));
