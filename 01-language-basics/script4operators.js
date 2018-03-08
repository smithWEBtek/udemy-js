//========== ADDITION ================
// var a = 5;
// var b = 10;
// console.log(a + b);
// console.log(a += b);

// console.log(a++);
// // a++
// console.log(a);

// var a = 5.2;
// var b = 4.5;

// var a = 'Join '
// // var b = 'us!';
// var b = 3;

// var a = 3;
// var b = 'Join';
// console.log(a + b);

// var a = '3';
// var b = 3;
// console.log(a + b);

// var a = true;
// var b = 'Join';
// console.log(a + b);

// var a = [1, 2];
// var b = 'Join';
// console.log(a + b);

// var a = 12;
// var b = '1';
// console.log(a + b);
// console.log(typeof a + b);
// console.log((typeof a) + b);
// console.log(typeof (a + b));

// var a = 12;
// var b = true;
// console.log(a + b);

// var a = true;
// var b = true;
// console.log(a + b);

// var a = false;
// var b = false;
// console.log(a + b);

// var a = false;
// var b = true;
// console.log(a + b);

// var a = null;
// var b = 12;
// console.log(a + b);

// var a = undefined;
// var b = 12;
// console.log(a + b);

//======= SUBTRACTION ====================

// var a = 12;
// var b = 1;
// console.log(a - b);

// var a = 12;
// var b = 1;
// a -= b;
// console.log(a);

// var a = 12;
// var b = 1;
// a--;
// console.log(a);

// var a = 'test';
// var b = 'ting';
// console.log(a - b);

// var a = 12;
// var b = '1';
// console.log(a - b);


//======= MULTIPLICATION ====================

// var a = 12;
// var b = 2;
// console.log(a * b);

// var a = 12;
// var b = 2;
// a *= 3
// console.log(a);

//======= FLOATING POINT NUMBER MULTIPLICATION ====================
// var a = 1.3;
// var b = 2.2;
// console.log(a * b);
// console.log((a * b).toFixed(2));

// if ((a * b).toFixed(2) == 2.86) {
// 	console.log(true);
// } else {
// 	console.log(false)
// }

// var a = 2;
// var b = '2.2';
// console.log(a * b); 

// var a = 'text string';
// var b = '234';
// console.log(a * b); 

// var a = 12;
// var b = null;
// console.log(a * b);

// var a = 12;
// var b = 'null';
// console.log(a * b);

// var a = 12;
// var b = Infinity;
// console.log(a * b);

//======= DIVISION ====================

// var a = 12;
// var b = 2;
// a /= b;
// console.log(a);

// var a = 12;
// var b = 2;
// console.log(a / b);

// var a = 12;
// var b = '2';
// console.log(a / b);

// var a = 3.3;
// var b = 2.2;
// console.log(a / b);

// var a = 3.3;
// var b = 2.2;
// console.log((a / b).toFixed(3));

// var a = 10;
// var b = 3;
// console.log(a % b);

// var a = 10;
// var b = 0;
// console.log(a / b);

// var a = 10;
// var b = Infinity;
// console.log(a / b);

//======= COMPARISON ====================

// console.log(1 == 1);
// console.log(1 === 1);
// console.log(1 === '1');
// console.log(1 == '1');
// console.log(1 != '1');
// console.log(1 !== '1');

// console.log(1 > 0);
// console.log(1 > 1);
// console.log(1 >= 1);
// console.log(1 >= '1');
// console.log(1 >= '1');

//======= RULES ====================
// console.log(NaN == NaN);
// console.log(NaN != NaN);  // rule in JS
// console.log(0 == null);  // can't compare null
// console.log(null == undefined);  // CAN compare null to undefined
// console.log(0 == undefined);  // undefined compared to anything is false, except when compared to null
// null can't be compared, except with 'undefined'
// undefined always compares to false, except when compare with null


//======= BOOLEAN ====================

// if ((1 == 1) && (2 == 2)) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

// if ((1 == 1) && (2 == 3)) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

// ================= TERNARY ==================
// console.log((1 == 1) && (2 == 2));
// console.log((1 == 1) || (2 == 2));
// console.log((1 == 1) || (2 == 3));
// console.log((1 == 1) || (2 == 2) && (4 == 5));
// console.log((1 == 1) && (2 == 3) || (4 == 5));
// console.log((1 == 1) || (2 == 2) && (4 == 5));
// console.log(((1 == 1) && (2 == 3)) || (4 == 5)); 

// var isTrue = true;
// console.log(!isTrue);


// var a = 5;
// var b = 5;

// if (a === b) {
// 	console.log('Equal');
// } else {
// 	console.log('Not Equal');
// }

// { a == b ? console.log('Equal') : console.log('Not Equal') }
// console.log(a == b ? 'Equal' : 'Not Equal');


//=============== PRECEDENCE =================

// * 

var a = 5;
var b = 6;
console.log(a + b * 2);
console.log((a + b) * 2);

