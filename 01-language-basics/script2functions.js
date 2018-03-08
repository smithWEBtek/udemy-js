// ===============================================

var calc1 = function (arg) {
	console.log('Inside calc1:', arg.toUpperCase());
};

var calc = function () {
	console.log('Inside calc');
	return 'chicken soup'
};

function calc2(arg) {
	console.log('Inside calc2: ', arg.toLowerCase());
};

calc3 = (arg) => {
	console.log('Inside calc3: ', arg);
};

calc4 = () => {
	// console.log('Inside calc4:');
	return 'Time for lunch ?';
};

// calc1('the cat likes it');
// calc2('WHAT DID YOU SAY ?');
// calc3('2 + 2');

function calc5(number1, number2) {
	return number1 + number2;
};

var returned = calc5(4, 8);
console.log(returned)

var calculator = calc5;
console.log(calculator(15, 2));

