/*
JavaScript provides three logical operators:

! (Logical NOT)
|| (Logical OR)
&& (Logical AND)
*/

// Logical Not
console.log("LOGICAL NOT");
console.log(!true); //false
console.log(!false); // true
console.log(!NaN); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!0); // true
console.log(!20); // flase
console.log(!{}); // flase
console.log(!''); // true
console.log(!'OK'); // false

// double negation
console.log("DOUBLE NEGATION");
console.log(!!true);

// logical AND &&
console.log("LOGICAL AND");
console.log(true && true); // true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

// && chaining
console.log('&& Chaining');
console.log(true && true && 10);
//if all values are truthy values, returns the last value.
console.log(true && 0 && true && false);
// In other words, The && operator returns the first falsy value or the last value if none were found.


// logical or
console.log("LOGICAL OR");
console.log(true || true); // true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

// || chaining
console.log('|| Chaining');
console.log(true || true || 10); //true
//if all values are truthy values, returns the first value.
console.log(false || 0 || 10 || false); // 10
// In other words, The || operator returns the first truthy value or the last value if none were found