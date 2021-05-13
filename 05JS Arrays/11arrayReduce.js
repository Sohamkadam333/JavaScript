// The reducer function takes four arguments:
// function reducer(accumulator, currentValue, currentIndex, array){}

let arr = [1, 2, 3];
let sum = arr.reduce((acc, cur) => {
        return acc + cur;
});
console.log(sum);


let shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
},
{
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
},
{
        product: 'Memory Card',
        qty: 2,
        price: 20.99
}
];


let total = shoppingCart.reduce((acc, cur) => {
        return acc + cur.qty * cur.price;
}, 0)

console.log(total);