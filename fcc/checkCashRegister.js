function checkCashRegister(price, cash, cid) {
	var change = (cash - price) * 100;
	var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
	var changeRecord = [];
	var value;

	// mutate cid money to have same unit with currency and change
	cid.forEach(el => (el[1] = Math.round(el[1] * 100)));

	//calcuate total money to return string for 2 cases
	function enoughFund(cid) {
		var sum = cid.filter((el, i) => change >= currency[i]);
		return sum.reduce((a, b) => {
			return a + b[1];
		}, 0);
	}

	// first, check 2 string cases
	if (enoughFund(cid) < change) {
		return 'Insufficient fund';
	} else if (enoughFund(cid) === change) {
		return 'Closed';
	} else {
		for (var i = cid.length - 1; i > -1; i--) {
			value = 0;
			while (cid[i][1] > 0 && change >= currency[i]) {
				change -= currency[i];
				cid[i][1] -= currency[i];
				value += currency[i];
			}
			if (value) {
				changeRecord.push([cid[i][0], value]);
			}
		}
	}

	changeRecord.forEach(el => (el[1] = el[1] / 100));
	return changeRecord;
}

module.exports = checkCashRegister;

checkCashRegister(19.5, 20.0, [
	['PENNY', 0.01],
	['NICKEL', 0],
	['DIME', 0],
	['QUARTER', 0],
	['ONE', 1.0],
	['FIVE', 0],
	['TEN', 0],
	['TWENTY', 0],
	['ONE HUNDRED', 0]
]);
