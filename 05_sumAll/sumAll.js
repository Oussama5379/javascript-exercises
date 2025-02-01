const sumAll = function (a, b) {
	if (a < b) {
		num1 = a;
		num2 = b;
	} else {
		num1 = b;
		num2 = a;
	}
	if (num1 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
		return "ERROR";
	}
	let sum = 0;
	for (let i = num1; i <= num2; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
