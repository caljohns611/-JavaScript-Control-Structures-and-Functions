// task 1 //
let loggedIn = true

if (loggedIn) {
    console.log("The user is logged in")
} else {
    console.log("The user is not logged in")
}

// task 2 //
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic']

if (loggedIn) {
    for (let item in cart) {
        console.log("Item in cart", cart[item]);
    }
} else {
    console.log("You need to log in to view cart.")
}