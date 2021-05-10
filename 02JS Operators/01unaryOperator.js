/*
* The simplest operators in JavaScript are unary operators. A unary operator works on one operand. The unary operators in JavaScript are:

* Unary plus (+)  – convert an operand into a number
* Unary minus (-) – convert an operand into a number and negate the value after that.
* prefix / postfix increments (++) – add one to its operand
* prefix / postfix decrements (--) – subtract one from its operand.
*/

// Unary plus/minus
let a = 10;
a = +20;
console.log(a); // 20
a = -10;
console.log(a);


// with string
let s = '10';
console.log(+s); //converts a string to a number

// with Boolean
let f = false;
console.log(+f);  // 0


// Increment Decrement
// prefix 
let dan = 10;
++dan;
console.log(dan); //11
--dan;
console.log(dan); //10

// postfix
dan++; //10
console.log(dan); //11
dan--; //10
console.log(dan--); //10
