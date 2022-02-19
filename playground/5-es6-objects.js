// // Object property shorthand

// const name = "Sherief"
// const userAge = 50

// const user = {
//     name,
//     age: userAge,
//     location: 'Gold River'
// }


// console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    // stock: 201,
    salePrice: undefined
}

// Destructuring objects

// const {label:productLabel, price, stock, rating = 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

// function to take the object

const transaction = (type,{label, stock = 0}={}) => {
    console.log(type, label, stock)
}

transaction('order')