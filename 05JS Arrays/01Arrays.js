// Array Object
let scores = new Array(10, 20, 30, 40);
console.log(scores);

// JavaScript allows you to omit the new operator when you use the array constructor. 
let arr = Array(10, 30, 50, 70);
console.log(arr);


// array literal notation
let arrName = ['john', 'marry', 'mark'];
console.log(arrName);

// empty array
let emptyArr = [];
console.log(emptyArr);

// accessing array element
console.log(arrName[0]);
console.log(arrName[1]);
console.log(arrName[2]);


// manipulating array element
arrName[0] = 'Soham';
console.log(arrName);

// adding element to the end of Array
// push pop unshift shift method changes original array
arrName.push('john');
console.log(arrName);


// adding element to the begining
arrName.unshift('Doe');
console.log(arrName);

// pop()
arrName.pop();
console.log(arrName);

// shift()
arrName.shift();
console.log(arrName);


// indexOf()
console.log(arrName.indexOf('marry'));

// check if an value is an array
console.log(Array.isArray(arrName));