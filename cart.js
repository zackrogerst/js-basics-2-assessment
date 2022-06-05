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

// const summedPrice = cart.reduce(
//     function (accumulatedPrices, currentObject) {
//         return accumulatedPrices + currentObject.price
//     },
//     0
// );

const summedPrice = cart.reduce((accumulatedPrices, currentObject) => accumulatedPrices + currentObject.price, 0);

// console.log(summedPrice);

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

function calcFinalPrice (cartTotal, couponValue, tax) {
    cartTotal = cartTotal - couponValue;
    cartTotal = cartTotal * (1 + tax);
    return cartTotal
}

// console.log(calcFinalPrice(8.99, 1, .06));


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

    customer object should contain 
    name(str),          for restaurant to call out            str for flexibiliy
    order number(int),  for restaurant to track internally    int for math
    food order(str),    for restaurant to make food           str for flexibiliy
    drink order(str),   for restaurant to provide beverage    str for flexibiliy
    dine in(boo)        for restaurant to track internally    boo for simplicity

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

customer1 = {
    name: "Gary",
    orderNumber: 45,
    foodOrder: "Hamburger",
    drinkOrder: "Water",
    dineIn : false
}

// console.log(customer1);