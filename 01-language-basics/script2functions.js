// ===============================================

var calc1 = function (arg) {
	console.log('Inside calc1:', arg.toUpperCase());
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

calc1();


