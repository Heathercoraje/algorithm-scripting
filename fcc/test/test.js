const assert = require('assert');
const telephoneCheck = require('../telephoneCheck');
const updateRecords = require('../updateRecords');
const sym = require('../symDifference');
const checkCashRegister = require('../checkCashRegister');
const updateInventory = require('../updateInventory');
const Person = require('../makePerson');
const pairwise = require('../pairwise');
const orbitalPeriod = require('../mapTheDebris');

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});

describe('telephoneCheck', function() {
	describe('#telephoneCheck', function() {
		it('should return true when input is not US number', function() {
			assert.equal(telephoneCheck('555-555-5555'), true);
		});
	});
});

describe('updateRecords', function() {
	describe('#length of array', function() {
		it('should return 3 as after recordUpdate adds a track', function() {
			assert.equal(
				updateRecords(2468, 'tracks', 'Oh lordy')[2468]['tracks'].length,
				3
			);
		});
	});
});

describe('symDifference', function() {
	describe('#length of array', function() {
		it('should return 5', function() {
			assert.equal(
				sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
				5
			);
		});
	});
});
describe('checkCashRegister', function() {
	describe('#return a correct change record array', function() {
		it('should return one array', function() {
			assert.deepEqual(
				checkCashRegister(19.5, 20.0, [
					['PENNY', 1.01],
					['NICKEL', 2.05],
					['DIME', 3.1],
					['QUARTER', 4.25],
					['ONE', 90.0],
					['FIVE', 55.0],
					['TEN', 20.0],
					['TWENTY', 60.0],
					['ONE HUNDRED', 100.0]
				]).length,
				1
			);
		});
	});
});

describe('updateInventory', function() {
	describe('return a correct length of array', function() {
		it('should return 6', function() {
			assert.equal(
				updateInventory(
					[
						[21, 'Bowling Ball'],
						[2, 'Dirty Sock'],
						[1, 'Hair Pin'],
						[5, 'Microphone']
					],
					[
						[2, 'Hair Pin'],
						[3, 'Half-Eaten Apple'],
						[67, 'Bowling Ball'],
						[7, 'Toothpaste']
					]
				).length,
				6
			);
		});
	});
});

describe('Person', function() {
	describe('return number of props inside', function() {
		it('should return 6', function() {
			var bob = new Person('bob ross');
			var length = Object.keys(bob).length;
			assert.equal(length, 6);
		});
	});
});

describe('pairwise', function() {
	describe('returns sum of indices which have its value sumed equal to arg', function() {
		it('should return 1', function() {
			assert.equal(pairwise([1, 3, 2, 4], 4), 1);
		});
	});
});

describe('orbitalPeriod', function() {
	describe('returns an array of object with property "orbitalPeriod"', function() {
		it('it shoulre return [{name: "sputnik", orbitalPeriod: 86400}]', function() {
			assert.deepEqual(
				orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]),
				[{ name: 'sputnik', orbitalPeriod: 86400 }]
			);
		});
	});
});
