//=====================================
// var array = [1, 2, 3]
// console.log(array.length);
// console.log(array);


// var array = [1, 2, 3]
// array[5] = 100;

// console.log(array);
// console.log(array.length);

//=====================================

// var array = [1, 2, 3]
// array.forEach(element => {
// 	console.log(element * 2)
// });

// var times2 = array.map(element => {
// 	return element * 2
// });

// var times3 = array.map(element => {
// 	return element * 3
// });

// var times4 = array.map(element => {
// 	return element * 4
// });
// console.log(array);
// console.log(times2);
// console.log(times3);
// console.log(times4);


// ============ forEach ========================
// var array = [1, 2, 3, 4, 5, 6, 7, 8]
// var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// console.log(alpha);
// var timesMany = (num) => {
// 	let grouping = []
// 	for (let i = 0; i < num; i++) {
// 		let subgroup = []
// 		array.map(el => {
// 			subgroup.push((el + i) * num + alpha[i] + alpha[i + 1] + [i])
// 		})
// 		grouping.push(subgroup)
// 	}
// 	return grouping
// }

// var group1 = timesMany(1)
// var group2 = timesMany(2)
// var group3 = timesMany(3)

// console.log(group1);
// console.log(group2);
// console.log(group3);

// ============ push ========================

var array = [1, 2, 3, 4, 5, 6, 7, 8]

// function resetArray() {
// 	array = [1, 2, 3, 4, 5, 6, 7, 8]
// }

// array.push(4);
// console.log('array starts out as: ', array);

// ============ pop ========================
// console.log('returning the POPped (last one is removed) element: ', array.pop());
// console.log('and array is now: ', array);
// resetArray();
// console.log('reset array is now: ', array);

// ============ slice ========================
// console.log('returning the SLICED array: ', array.slice());
// console.log('and array is now: ', array);
// resetArray();
// console.log('reset array is now: ', array);

// ============ splice ========================
// console.log('returning the SPLICEd array: ', array.splice(0, 2));
// console.log('and array is now: ', array);
// resetArray();
// console.log('reset array is now: ', array);

// ============ shift ========================
// console.log('returning the SHIFTed (first one is removed) element: ', array.shift());
// console.log('and array is now: ', array);
// resetArray();
// console.log('reset array is now: ', array);

// ============ shift ========================
// console.log('returning the UNSHIFTed (first one is removed) element: ', array.unshift('Bird'));
// console.log('and array is now: ', array);


// ============ indexOf ========================
// getBird = () => {
// 	return array.indexOf('Bird')
// }

// function getBird() {
// 	return array[array.indexOf('Bird')]
// }
// console.log('getBird index: ', getBird());
// console.log(array[getBird()]);
//----------------------------------------------
// The indexOf() method returns the first 
// index at which a given element can be found 
// in the array, or - 1 if it is not present.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
//----------------------------------------------

// ============ findIndex ========================

// function findBird(element) {
// 	return element === 'Bird'
// }

// array.push('0')
// console.log('array: ', array)
// console.log('findIndex of Bird: ', array.findIndex(findBird));
// console.log('array is now: ', array);

// The findIndex() method returns the index of the first element 
// in the array that satisfies the provided testing function. 
// Otherwise -1 is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex


// ==================  re-assigning value of element after finding index ================

// array[array.indexOf("Bird")] = 'Cat';
// console.log('array is now: ', array);

// ============ slice =================
// console.log(array);
// var part = array.slice(array[array.length - 3], array[array.length - 1])
// console.log(part)

// ============ slice =================
// console.log(array);
// var part1 = array.slice(array[array.length - 3])
// var part2 = array.slice(array[array.length - 3], array[array.length - 1])
// console.log(part1)
// console.log(part2)

// ============ splice =================
console.log(array);
var part1 = array.splice(array[array.length - 3])
var part2 = array.splice(array[array.length - 3], array[array.length - 1])
console.log(part1)
console.log(part2)
console.log('array is now: ', array);

var part3 = array.splice(array[array.length - 3], array[array.length - 1])
console.log(part3)
console.log('array is now: ', array);
document.getElementById('main').append(part1)
