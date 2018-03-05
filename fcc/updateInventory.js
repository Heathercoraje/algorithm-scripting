function updateInventory(arr1, arr2) {
	var oldItems = arr1.map(el => el[1]);
	var targetItemIndex;

	newInv.map((el, i) => {
		targetItemIndex = oldItems.indexOf(el[1]);
		if (targetItemIndex < 0) {
			curInv.push(el);
		} else {
			curInv[targetItemIndex][0] += el[0];
		}
	});
	return curInv.sort(function(a, b) {
		return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
	});
}

var curInv = [
	[21, 'Bowling Ball'],
	[2, 'Dirty Sock'],
	[1, 'Hair Pin'],
	[5, 'Microphone']
];

var newInv = [
	[2, 'Hair Pin'],
	[3, 'Half-Eaten Apple'],
	[67, 'Bowling Ball'],
	[7, 'Toothpaste']
];

module.exports = updateInventory;
