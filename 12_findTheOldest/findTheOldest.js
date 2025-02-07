const findTheOldest = function (array) {
	const ages = array.map((person) => calculateAge(person));
	const max = Math.max(...ages);
	return array.find((person) => {
		return calculateAge(person) == max;
	});
};
function calculateAge(person) {
	if (person.yearOfDeath == undefined) {
		return new Date().getFullYear() - person.yearOfBirth;
	}
	return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
