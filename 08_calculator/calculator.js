const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
	return array.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function (array) {
	return array.reduce((accumulator, current) => accumulator * current);
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (number) {
	let result = 1;
	while (number != 0) {
		result *= number;
		number--;
	}
	return result;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
