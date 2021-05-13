//  array.every() takes 3 arguments
/*
1.callback function;
2. index
3. array
*/
// example

let arr = [1, 3, 5];
let result = arr.every(function (e) {
        return e > 0;
});

console.log(result);

// check every element is even using arrow function
let result2 = arr.every(e => e % 2 == 0);
console.log(result2);

// check every element is odd
let result3 = arr.every(e => e % 2 == 1);
console.log(result3);


let isInRange = arr.every(e => {
        let range = {
                min: 0,
                max: 10
        }

        return e > range.min && e <= range.max;
});

console.log(isInRange);