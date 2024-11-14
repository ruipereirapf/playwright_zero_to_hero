//Objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ['Volvo','Toyota','Tesla']
}

console.log(customer);
console.log(customer.firstName);
console.log(customer['lastName']);

//Dot notation
customer.firstName = 'Mike';
//bracket notation
customer['lastName'] = 'Silver';

console.log(`${customer.firstName} ${customer.lastName}`);
console.log(customer.cars[2]);


//Arrays

var car = ['Volvo','Toyota','Tesla'];
console.log(car[1]);

car[0] = 'BMW';
console.log(car[0]);