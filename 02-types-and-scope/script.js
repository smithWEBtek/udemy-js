//======  PRIMITIVE TYPES and REFERENCE TYPES ===================
// undefined, null, boolean, number, string, symbol
// object points to place in memory (a pointer)
// object copied in memory (a copy)


// ======== PRIMITIVE COPY ===============================
// var aNumber = 5;
// console.log(aNumber);

// var anotherNumber = aNumber;
// console.log(anotherNumber);

// aNumber = 12
// console.log(aNumber);
// console.log(anotherNumber);  // does not care that we changed value of 'aNumber'


// ========== REFERENCE POINTER =========================
// var array = [1, 2, 3];
// var anotherArray = array;
// console.log(array);
// console.log(anotherArray);

// array.push(4)   // EDITING AN EXISTING OBJECT
// console.log(array);
// console.log(anotherArray);

// var array = [1, 2, 3];
// var anotherArray = array;
// console.log(array);
// console.log(anotherArray);

// array = ['a', 'b']    // CREATING A NEW OBJECT  (anotherArray still points to originall array)
// console.log(array);
// console.log(anotherArray);


// ===========  SCOPE =============

// var test = 'Global scope';
// function localScope() {
// 	var test = 'Local scope';
// 	console.log(test);
// }

// localScope();
// console.log(test);

//=======================

// function localScope() {
// 	// var test = 'Local scope';
// 	console.log(test);
// }

// localScope();
// console.log(test);
// Uncaught ReferenceError: test is not defined


//===========================
// function localScope() {
// 	test = 'Local scope';
// 	console.log(test);
// }

// localScope();
// console.log(test);
// Local scope
// Local scope
