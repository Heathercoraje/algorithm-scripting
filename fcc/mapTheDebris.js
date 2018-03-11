function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;

	for (var prop in arr) {
		var orbitalPer = Math.round(
			2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
		);
		delete arr[prop].avgAlt;
		arr[prop].orbitalPeriod = orbitalPer;
	}
	return arr;
}
//
// orbitalPeriod([
// 	{ name: 'sputnik', avgAlt: 35873.5553 },
// 	{ name: 'heather', avgAlt: 168 }
// ]);

module.exports = orbitalPeriod;
