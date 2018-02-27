function checkCashRegister(price, cash, cid) {
  var change = (cash - price) * 100;
  console.log("??", change);
  var currency = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  var value = 0;
  var changeRecord = [];
  // muatate cid?
  cid.forEach(el => (el[1] = Math.round(el[1] * 100)));

  console.log(cid);

  function enoughFund(cid) {
    var sum = cid.filter((el, i) => change >= currency[i]);
    return sum.reduce((a, b) => {
      return a + b[1];
    }, 0);
  }
  console.log(enoughFund(cid));
  console.log("?", change);
}
checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);
