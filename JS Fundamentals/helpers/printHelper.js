export function printAge(age){
    console.log(age);
}

class CustomerDetails {

    printFirstName(firstName){
        console.log(firstName)
    }

    /**
     * This method will print the last name
     * @param {string} lastName 
     */
    printLastName(lastName){
        console.log(lastName)
    }


} export const customerDetails = new CustomerDetails();