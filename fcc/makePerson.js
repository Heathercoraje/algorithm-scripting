var Person = function(firstAndLast) {
	var fullName = firstAndLast;

	this.getFullName = function() {
		return fullName;
	};
	this.getFirstName = function() {
		return fullName.split(' ')[0];
	};
	this.getLastName = function() {
		return fullName.split(' ')[1];
	};
	this.setFirstName = function(first) {
		fullName = first + ' ' + this.getLastName();
	};
	this.setLastName = function(last) {
		fullName = last + ' ' + this.getFirstName();
	};
	this.setFullName = function(newFullName) {
		fullName = newFullName;
	};
};
// test
// var bob = new Person('Bob Ross');
// bob.getFullName();
module.exports = Person;
