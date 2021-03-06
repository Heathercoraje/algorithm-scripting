function pairwise(arr, arg) {
	var newPairArr = arr.slice();
	return newPairArr.reduce(function(a, b, i) {
		var diff = arg - b;
		if (newPairArr.indexOf(diff) !== -1 && newPairArr.indexOf(diff) !== i) {
			var total = i + newPairArr.indexOf(diff);
			newPairArr.splice(i, 1, NaN);
			newPairArr.splice(newPairArr.indexOf(diff), 1, NaN);
			return a + total;
		}
		return a;
	}, 0);
}

module.exports = pairwise;
