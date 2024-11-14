//Declarative function -> can be called anywhere in the code
function helloOne(){
    console.log('Hello one!');
}
helloOne();

//Anonymus function -> cant be called before it has been declared
var helloTwo = function(){
    console.log('Hello two!');
}
helloTwo();

//ES6 function syntax or arrow function
var helloThree = () => {
    console.log('Hello three!');
}
helloThree();

//Function with arguments

function printName(name, age){
    console.log(`${name} is ${age} years old`);
}
printName('John', 23);

//Function with return

function multiplyByTwo(number){
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(5);
console.log(myResult);

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(5);

// import everything

import * as helper from '../helpers/printHelper.js'
helper.printAge(10);