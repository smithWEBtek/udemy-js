// ===================================================
// var condition = false;
// var anotherCondition = false;

// if (condition) {
// 	console.log('Executed');
// } else if (anotherCondition) {
// 	console.log('Still Executed');
// } else {
// 	console.log('Not executed');
// }

// ===================================================
// var condition;
// var condition = 1; // evaluates to true
// var condition = 2; // evaluates to true, but 2 == true evalutes to false
// var condition = 0; // evaluates to false
// var condition = -1; // evaluates to true, but -1 == true evaluates to false

// only 0 and 1 treated as 'boolean'
// var condition = null; // evaluates to true, but -1 == true evaluates to false
// var anotherCondition = false;


// evaluating 'truthiness' vs equality to 'true'
// condition is a valid javascript string, object, number, array or function
// its validity is what we are evaluating, not its actual value
// unless we say:   if (condition === 'something')
// if (condition) {
// 	console.log('Executed');
// } else if (anotherCondition) {
// 	console.log('Still Executed');
// } else {
// 	console.log('Not executed');
// }

// ========= SWITCH STATEMENTS ========================

// var luckyNumber = 8;

// switch (luckyNumber) {
// 	case 1:
// 		console.log('is 1');
// 		break;
// 	case 8:
// 		console.log(' is 8');
// 		break;
// 	default:
// 		console.log('Default returned');
// }


// ========= LOOPS ========================

// for (var i = 1; i < 5; i++) {
// 	console.log(i);
// }


// ========= NESTED LOOPS ========================

// for (var i = 0; i < 5; i++) {
// 	for (var j = 0; j < 2; j++) {
// 		console.log(i * j);
// 	}
// }

// for (var i = 0; i < 5; i++) {
// 	if (i === 1) {
// 	}
// 	console.log(i);
// }

// for (let i = 0; i < 5; i++) {
// 	for (var j = 0; j < 2; j++) {
// 		if (i == 1) {
// 			// console.log('j: ', j);
// 			// continue;
// 			break;
// 		}
// 		console.log('inside inner loop, j = ', j);
// 	}
// 	console.log(i);
// }

// ========= FOR LOOP VARIATIONS ========================

// for (let i = 2; i < 5; i += 3) {
// 	console.log(i);
// }

// ========= LOOP THROUGH ARAYS ========================

// var array = [1, 2, 3]

// for (var i = 0; i < array.length; i++) {
// 	console.log(i);
// }

// for (var i = 0; i < 3; i++) {
// 	console.log(array[i]);
// }

// for (var i = 0; i < 5; i++) {
// 	console.log(array[i]);
// }

// for (var i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// for (var i = 0; i < array.length; i++) {
// 	console.log(array[i]);
// }

// ========= LOOP THROUGH ARRAYS ========================

// var number = 5;

// while (number < 7) {
// 	console.log(number);
// 	number++;
// }

// var condition = true;
// var i = 2;

// while (condition) {
// 	if (i == 3) {
// 		condition = false;
// 	}
// 	console.log(i);
// 	i++;
// }

var condition = false;
do {
	console.log("Executed");
}
while (condition)
