const colors = require('./colors.json');
const coffee = require('./coffee.json');

// 1.
// Write a function that accepts an array as an argument and returns a new array that contains values matching `'orange'`.
// Modify your array so that it accepts a String as the second argument. Instead of returning an array that only contains `'orange'` values, return an array of values that match the String argument.

// const hasColor(arr, string) => {
//     const newArr = arr.filter((c) => c === string)
//     return newArr
// }

// 2.
//Given an array of receipt objects, write a function that returns the total amount spent on `'espresso'`.
//Update your function so that it accepts an additional String argument (e.g., 'black coffee') returns the total amount for that kind of order.

// total cost for "espresso"
function calculateTotal(arr) {
	const orderType = 'espresso';

	// get everything matching 'espresso'
	const justEspresso = arr.filter((o) => {
		// does the o.order === 'espresso'?
		// if (o.order === orderType) {
		// 	return true;
		// } else {
		// 	return false;
		// }
		return o.order === orderType;
	});
	console.log(justEspresso);

	// grab just the costs

	// add it up
}

// 3.
// Write a function that accepts the array as an argument and returns a new array of products that are on sale.

const productsDB = require('./json/products.json');
const saleProducts = (arr) => {
	return arr.filter((product) => {
		return product.price !== product.originalPrice;
	});
};
const itemsOnSale = saleProducts(productsDB);
console.log(itemsOnSale);
