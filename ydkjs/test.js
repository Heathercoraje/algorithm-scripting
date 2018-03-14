const assert = require('assert'); // built-in module in node.js
const task = require('./delegation');

describe('task obejct', function() {
	describe('#setID', function() {
		it('should return this.id', function() {
			const errand = Object.create(task);
			errand.setID(0);
			assert.equal(errand.id, 0);
		});
	});
});
