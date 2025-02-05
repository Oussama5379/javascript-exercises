const fibonacci = function (memberPosition) {
	let f2 = 1,
		f3 = 2;
	if (memberPosition == 1 || memberPosition == 2) return 1;
	if (memberPosition == 0) return 0;
	if (memberPosition < 0) return "OOPS";
	let pos = 3;
	let aux;
	while (memberPosition != pos) {
		aux = f3;
		f3 = f3 + f2;
		f2 = aux;
		pos++;
	}
	return f3;
};

// Do not edit below this line
module.exports = fibonacci;
