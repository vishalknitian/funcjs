var add = function(a, b){
	return a + b;
}.autoCurry();

var divide= function(divisor, number){
	return number / divisor;
}.autoCurry();

var modulo = function (divisor, number) {
	return number % divisor;
}.autoCurry();

var filter = function (f, array) {
	return array.filter(f);
}.autoCurry();

var divideByTwo = divide(2);

var isOdd = modulo(2);

var findMidValue = compose(add, divideByTwo);

var midValueIsOdd = compose(findMidValue, parseInt, isOdd );

var getTheOdds = filter(isOdd);