const palindromes = function (string) {
	let result = string.replaceAll(",", "");
	result = result.replaceAll(" ", "");
	result = result.replaceAll(".", "");
	result = result.replaceAll("!", "");
	result = result.toUpperCase();
	return result === result.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
