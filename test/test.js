const assert = require("assert");
const telephoneCheck = require("../telephoneCheck");
const updateRecords = require("../updateRecords.js");

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
