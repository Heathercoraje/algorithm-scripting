function permAlone(str) {
	var arr = str.split('');
	var counter = 0;
	var container = [];
	function swap(a, b) {
		var temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
		console.log('swap', arr.join(''));
	}

	function generator(n) {
		console.log('hola');
		if (n === 1 && !/([a-z])\1+/.test(arr.join(''))) {
			container.push(arr.join(''));
			counter++;
		} else {
			console.log('one loop');
			for (var i = 0; i !== n; i++) {
				console.log('generator');
				console.log('i', i);
				console.log('n', n);
				generator(n - 1);
				swap(n % 2 ? 0 : i, n - 1);
			}
		}

		console.log(container);
		console.log('counter', counter);
	}
	generator(arr.length);
	console.log('counter', counter);
	return counter;
}
permAlone('abc');
