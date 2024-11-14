//Concatenation and Interpolation
var price = 50;
var itemName = 'Cup';
var messageToPrint = 'The price for your ' + itemName + ' is ' + price + '€'; //concatination
var messageToPrint2 = `The price for your ${itemName} is ${price}€`; //interpolation
console.log(messageToPrint);
console.log(messageToPrint2);