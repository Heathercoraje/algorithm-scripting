function sym(args) {
  var arrays = Array.from(arguments);
  return arrays
    .reduce(
      (a, b) =>
        a.concat(b).filter(el => a.indexOf(el) == -1 || b.indexOf(el) == -1),
      []
    )
    .filter((c, i, o) => o.indexOf(c) == i);
}

// First, concat 2 arrays and filter to return items only exist in one of 2 arrays, not both.
// Second, apply it to entire arrays by reduce method
// third, with newly created arrays with items, return only unique ones by checking their first index

// test case
// sym([1, 2, 3], [5, 2, 1, 4]);

module.exports = sym;
