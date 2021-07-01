// Recursion: it's like a loop, but!
// you use a function that calls itself.

// Add all the numbers in an array
// using recursion

// The sum of an array is:
// the first number
// plus
// the sum of the rest of the array.
// 1 + sum([ 3, 5, 7, 11, 13, 17, 19, 23])
// 1 + 3 + sum([5, 7, 11, 13, 17, 19, 23])
// 1 + 3 + 5 + sum([7, 11, 13, 17, 19, 23])
const numbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

// When writing a recursive function:
// 1. specify the base case (tells the function when to end)
// 2. call the same function but with a smaller data set
function sum(arr) {
	// 1. check if there are any elements
	// if not, return 0;
	if (arr.length === 0) {
		return 0;
	} else {
		// 2. otherwise, take the first element
		// and add it to sum([rest of the array])
		const rest = arr.slice(1);
		return arr[0] + sum(rest);
	}
}

const result = sum(numbers);
console.log(result);
