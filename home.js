///////////////////////////////////////////////
///////////////////HOME.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    helps with some functionality on the home 
    page of the restaurant's website.
*/
console.log("Hello World!");    
console.log("------------------------------------------");

//////////////////PROBLEM 1////////////////////
/* 
    Write an *arrow* function called `greetUser`
    It should have one parameter, `username`
    The function should return a string that says: 
    'Welcome back, [USERNAME]'
    Where USERNAME is the `username` arguement sent in

    For example, if called with `Andrew` as the 
    argument, `greetUser` should return the string:
    'Welcome back, Andrew'
*/

const greetUser = (username) => {
    return console.log("Welcome back, " + username)
};

greetUser("Emmanuel");
console.log("------------------------------------------");

//////////////////PROBLEM 2////////////////////
/* 
    Below is an array of zip codes that are in
    the restaurant's delivery zone. 

    Write a function called `canWeDeliver` that
    takes in one argument, `zipCode`.

    If the zip code passed in is in the array,
    return a string letting the user know they
    are eligible for delivery. If they are not, 
    return a string letting them know that. 

    For example:
    canWeDeliver(84606) 
        // `Sorry, we can't deliver to that address`
    canWeDeliver(85205) 
        // `You're in our delivery zone!`
*/

const deliveryAreaZipCodes = [85205, 85204, 85203, 85213, 85206]

const canWeDeliver = (zipCode) => {
    for(i = 0; i < deliveryAreaZipCodes.length; i++)
    {
        if(zipCode === i){
             console.log("You're in our delivery zone!");
        }else{
             console.log("Sorry, we can't deliver to that address."); 
        }
    } 

}
canWeDeliver(179273);
console.log("------------------------------------------");
canWeDeliver(85205); //???Why don't I get a " You're in our delivery zone! " print result to the console?
                  //should at least get one for the first loop (0th positon of the array) with this integer (zipCode)
console.log("------------------------------------------");

/* 
    Problem 2 Continued

    Now you're going to rewrite your function.

    If you wrote `canWeDeliver` using a loop of
    some kind, write a new function (`canWeDeliverTwo`)
    below, using the `includes` array method. 
    Look it up on MDN if you're not sure how to use 
    it. 

    If you already used the `includes` method, 
    write a new function using some sort of 
    loop (for loop, higher order array method).
    Name your new function `canWeDeliverTwo`.
*/

function canWeDeliverTwo(zipCode2){
    console.log(deliveryAreaZipCodes.includes(zipCode2))
};

canWeDeliverTwo(85205);
console.log("------------------------------------------");
canWeDeliverTwo(12345);
console.log("------------------------------------------");

// //DJ's alternative 
// const canWeDeliverThree = zip => {
//     const filteredZip = deliveryAreaZipCodes.filter(code > code === zip)
//                         //"If" expression                               "else" expression
//     filteredZip.length > 0 ? console.log("You're in the delivery zone!") : console.log("Sorry, we cannot deliver it to you. ");
// }

// console.log(canWeDeliverThree(85205));


//////////////////PROBLEM 3////////////////////
/* 
    Below is an array of objects that have some
    information about a couple of deals that are
    available at the restaurant currently. 

    You are going to access the object's properties 
    and change some values. Don't edit the array 
    directly, let's use the `replace` method.

    Read on for more instructions.
*/

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.

    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

console.log(deals);
console.log("------------------------------------------");
console.log(deals[0].title);
console.log("------------------------------------------");
////???Don't know why the "replace()" array function is NOT working is not working on the deals array"

// use a for loop on  deals array 
const newDeals1 = deals;
const discount = deals[0].title.replace("15% Off!", "10% Off!")
newDeals1[0].title = discount;
console.log(newDeals1);
console.log("------------------------------------------");


///DJ's solution:
// deals[1].desc = deals[1].desc.trim().replace("March", "April");
// console.log(deals)
/*
    The restaurant is going to continue its
    family deal for another month. 

    Reassign the value of the second deal's desc
    to be itself, but use the `replace` method
    to replace the word March with April.

    You should also make sure that there is no
    whitespace in this string, since it seems
    to be displaying wrong on the live site.
*/

////???????? Don't know why my replace() method is not working on the object array???!!!!

// console.log(newDeals1);
// const month = deals[7].desc.replace("March", "April");
// newDeals1[7].desc = month;
// console.log(newDeals1);
// console.log("------------------------------------------");
