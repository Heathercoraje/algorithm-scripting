function permAlone(str) {
	var arr = str.split('');
	var counter = 0;
	var container = [];
	function swap(a, b) {
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}

	function generator(n) {
		if (n === 1 && !/([a-z])\1+/.test(arr.join(''))) {
			container.push(arr.join(''));
			counter++;
		} else {
			for (var i = 0; i !== n; i++) {
				generator(n - 1);
				swap(n % 2 ? 0 : i, n - 1);
			}
		}
	}
	generator(arr.length);
	return counter;
}
//test
//permAlone('abc');

module.exports = permAlone;
