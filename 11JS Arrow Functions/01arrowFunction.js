// normal function expression
const add = function (x, y) {
        return x + y;
}

console.log(typeof add);
console.log(add(10, 20));


// Arrow function
const add1 = (x, y) => x + y;
console.log(typeof add1);
console.log(add1(20, 30));

let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);
