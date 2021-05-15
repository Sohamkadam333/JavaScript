// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.


const price = [10, 20, 30];
console.log(price);
function increasedPrice(price) {
        return price * 2;
}

// map with function
const newPrice = price.map(increasedPrice);
console.log(newPrice);


// map with anonymous function
const newPrice1 = price.map(function (price) {
        return price * 3;
});

console.log(newPrice1);