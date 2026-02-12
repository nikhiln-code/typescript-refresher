const menu = [
  { name: "Margaritta", price: 20 },
  { name: "Panner Chilly", price: 30 },
  { name: "Soya", price: 40 },
  { name: "Mashroom", price: 35 },
  { name: "Checken", price: 25 },
];

const cashInRegister = 100;
const orderQueue = [];

/**
 *Challenge:Add a unitilty function "addNewPizza" that takes the pizza name and price and adds it to the menu.
 */
function addNewPizza(name, price) {
  menu.push({ name, price });
  console.log(`Pizza ${name} added to the menu with price: ${price}`);
}


/**
 * Challenge: Write another function which takes the pizza name and adds it to the order queue.
 * 1. check if the pizza is available in the menu before adding to the order queue.
 * 2. If the pizza is not available, log a message "Pizza not available".
 * 3. If the pizza is available, add it to the order queue 
 * 4. Add it the price amount to cashInRegister 
 * 5. Return the updated order queue
 */
function placeOrder(pizzaName) : [] { 
	const pizza = menu.find(item => item.name === pizzaName);
	if(!pizza){
		console.log("Pizza not available");
		return orderQueeue;
	}
	const order = { "pizza": pizzaName, "status":"Ordered" }
	orderQueue.push(order);
	cashInRegister += pizza.price;
	return orderQueue;
}