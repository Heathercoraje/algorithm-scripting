const assert = require("assert");
const telephoneCheck = require("../telephoneCheck");
const updateRecords = require("../updateRecords.js");
const sym = require("../symDifference.js");

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe("telephoneCheck", function() {
  describe("#telephoneCheck", function() {
    it("should return true when input is not US number", function() {
      assert.equal(telephoneCheck("555-555-5555"), true);
    });
  });
});

describe("updateRecords", function() {
  describe("#length of array", function() {
    it("should return 3 as after recordUpdate adds a track", function() {
      assert.equal(
        updateRecords(2468, "tracks", "Oh lordy")[2468]["tracks"].length,
        3
      );
    });
  });
});

describe("symDifference", function() {
  describe("#length of array", function() {
    it("show return 5", function() {
      assert.equal(
        sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]).length,
        5
      );
    });
  });
});
