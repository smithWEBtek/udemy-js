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
var condition;
// var condition = 1; // evaluates to true
// var condition = 2; // evaluates to true, but 2 == true evalutes to false
// var condition = 0; // evaluates to false
// var condition = -1; // evaluates to true, but -1 == true evaluates to false
var condition = null; // evaluates to true, but -1 == true evaluates to false
var anotherCondition = false;


// evaluating 'truthiness' vs equality to 'true'
// condition is a valid javascript string, object, number, array or function
// its validity is what we are evaluating, not its actual value
// unless we say:   if (condition === 'something')
if (condition) {
	console.log('Executed');
} else if (anotherCondition) {
	console.log('Still Executed');
} else {
	console.log('Not executed');
}
