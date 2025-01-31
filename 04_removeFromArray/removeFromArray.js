const removeFromArray = function (array, ...moreArgs) {
	for (const arg of moreArgs) {
		array = array.filter((item) => item !== arg);
	}

	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
