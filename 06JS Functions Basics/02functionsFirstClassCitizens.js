// functions in JavaScript are first-class objects, which means you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.



// 1 storing function into another variable

const result = sum(10, 20);

function sum(a, b) {
        return a + b;
}

console.log(result);

//  2 Passing a function to another function

function average(a, b, fn) {
        return fn(a, b) / 2;
}

let sum1 = add;

const result1 = average(10, 20, sum1);

function add(a, b) {
        return a + b;
}


console.log(result1);


// 3 Returning function from function

function compareBy(propName) {
        return (a, b) => {
                let x = a[propName];
                let y = b[propName];


                if (x > y) {
                        return 1;
                } else if (x < y) {
                        return -1;
                } else {
                        return 0;
                }


        }
}

let products = [
        { name: 'iPhone', price: 900 },
        { name: 'Samsung', price: 600 },
        { name: 'Sony', price: 700 }
];

console.log('Product Sorted by names');
console.table(products.sort(compareBy('name')));


// function compareBy(propName) {
//         return function (a, b) {
//                 let x = a[propName],
//                         y = b[propName];

//                 if (x > y) {
//                         return 1;
//                 } else if (x < y) {
//                         return -1
//                 } else {
//                         return 0;
//                 }
//         }
// }

// let products = [
//         { name: 'iPhone', price: 900 },
//         { name: 'Samsung Galaxy', price: 850 },
//         { name: 'Sony Xperia', price: 700 }
// ];

// console.log('Products sorted by name:');
// products.sort(compareBy('name'));

// console.table(products);