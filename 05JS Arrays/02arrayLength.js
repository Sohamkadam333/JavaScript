// 1 Dense Array
// dense array is an array where its element has contigous indexex starting at zer0

let colors = ['red', 'green', 'blue', 'purple'];
console.log(colors);

colors.push('yellow');
console.log(colors);
console.log(colors.length);

colors = [];
console.log(colors);
console.log(colors.length);


// 2 Sparse Array
// sparse array is an array whose element don't have contigious indexes starting at zero

let numbers = [10, 20, , 30, 40];
console.log(numbers);
console.log(numbers.length);

numbers[10] = 100;
console.log(numbers);
console.log(numbers.length);


// Modifying JS array length

// 1 Empty an array
let arr1 = [10, 20, 30, 40];
console.log(arr1.length);
arr1.length = 0;
console.log(arr1.length);


// 2 Remove element
// If you set the length property of an array to a value that is lower than the highest index, all the elements whose index is greater than or equal to the new length are removed

let fruits = ['mango', 'apple', 'oranges'];
console.log(fruits.length);
fruits.length = 2;
console.log(fruits.length);

// 3 Make array sparse
fruits.length = 5;
console.log(fruits);
console.log(fruits.length);