///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//DJ's solution:
const summedPrice = cart.reduce((acc,curr) => acc + curr.price, 0)
console.log(summedPrice);

console.log("----------------------------------------");

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) =>{
    // let totalAfterTax = cartTotal + 
    let totalAfterTax = cartTotal + (1 + tax);
    let calcFinalPrice = totalAfterTax - couponValue;
    
    return calcFinalPrice;
}

console.log(calcFinalPrice(100,15,.05));

console.log("----------------------------------------");

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The customer object will object that I will create will have the follwing properties listed:
    "ID, first name, last name, gender, email, phone number, and residence". The "ID" is a key property as
     it serves as an identifier or tag for each incoming/ new customer we get. Also it helps to avoid any 
     confusion by differentiating between customers in the case they may share similar traits such as name. 
     The names, email, and residence are string data types, which serve to be an extra way to contact the customer
     alongside with thw cutomer's  phone number. The properties also serve a great way to sort out what could be the
     customer's preference.

*/
console.log("----------------------------------------");

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
class Customer {
    constructor(id, firstName, lastName, gender, email, phoneNumber, location) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.email = email;
      this.phoneNumber = phoneNumber;
      this.location = location;
    }
  }

const IncomingCustomer = new Customer(
    1,
    "Zayvion",
    "Amreael",
    "Zayvion_was_here@gmail.com",
    "Male",
    123456789,
    "Dallas, TX"
);

console.log(IncomingCustomer);
console.log("----------------------------------------");
