const reverseString = function (text) {
  let myArray = [];
  myArray = text.split("");
  myArray.reverse();
  text = myArray.join("");
  return text;
};

// Do not edit below this line
module.exports = reverseString;
