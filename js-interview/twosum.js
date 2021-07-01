var a = [1, 9, 3, 2, 3];
var t = 6;
// The 'in' operator gives us the index of the array
// for (let i=0; i<a.length; i++)

var twoSumMinimal = function (a, t) {
	let x = {};
	for (let i = 0; i < a.length; i++) {
		let num = a[i];
		x[num] = i;
	}
	for (let j = 0; j < a.length; j++) {
		let d = t - a[j];
		if (x.hasOwnProperty(d) && x[d] !== j) {
			return [j, x[d]];
		}
	}
};

const twoSum = (a, t) => {
	// We want to store the values and the
	// index of each. This gives us a "copy" of the
	// array and lets us access the index of a value
	// without having to loop.
	let x = {};
	for (let i = 0; i < a.length; i++) {
		let num = a[i];
		x[num] = i;
	}
	console.log('x');
	console.table(x);
	console.log('a');
	console.table(a);
	for (let j = 0; j < a.length; j++) {
		let d = t - a[j];
		// We loop through the original array.
		// We subtract the loop value from the target.
		// This tells us what number
		// added to the current value gives us
		// the target.
		// Now, we can see if it's in our "copy"
		// of the array
		// if it is, grab the index and return it
		// along with the current index.
		console.log(`(target - a[j]): ${t} - ${a[j]} is ${d}`);
		if (x.hasOwnProperty(d) && x[d] !== j) {
			console.log(
				`x[d] is ${x[d]} which is not ${j}, so I'm returning ${j} and ${x[d]}`
			);
			return [j, x[d]];
		} else if (x.hasOwnProperty(d)) {
			console.log(
				`nope, x has prop ${d}, but x[d] === j and they are both ${j}`
			);
		} else if (!x.hasOwnProperty(d)) {
			console.log(`nope, x does not have own prop ${d}`);
		}
	}
};
const result = twoSum(a, t);
console.log(result);

// let result = [];
// for (let i=0; i<a.length; i++) {
//     // how do I look at a number? a[i]
//     for (let j=i+1; j<a.length; j++) {
//         const s = a[i] + a[j];
//         // console.log(`${a[i]} + ${a[j]} = ${s}`);
//         if ((a[i] + a[j]) === t) {
//             console.log('found them', i, j);
//             result.push(i);
//             result.push(j);
//             return result
//         }
//     }
// }
