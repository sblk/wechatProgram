console.log("I'm common.js");
function sayHello(name) {
	console.log('Hello' + name + '!')
}
module.exports={
	sayHello:sayHello
}