// concatenate string
let greeting = 'Hii';
let message = greeting.concat(' Soham');
console.log(message);

// concatenate array of strings
let colors = ['red ', 'green ', 'blue ', 'white'];
let results = ''.concat(...colors);
console.log(results);


// concatenating a non string
let num = 123;
let con = ''.concat(num);
console.log(con);