const repeatString = function (string, numberOfRepeat) {
  if (numberOfRepeat < 0) {
    return "ERROR";
  }
  let result = "";
  for (let i = 0; i < numberOfRepeat; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
