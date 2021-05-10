
// Boolean Object
let boo = new Boolean(false);
console.log(boo.valueOf());

// boolean Primitve
let booP = true;
console.log(booP);

// typeOf()
console.log(typeof boo);
console.log(typeof booP);


// Adding property to boo object
boo.primitiveValue = boo.valueOf();
console.log(boo.primitiveValue);

// cannot add property to primitive boolean
booP.primitiveValue = booP.valueOf();
console.log(booP.primitiveValue); // Undefined


// instanceof
console.log(boo instanceof Boolean); //true
console.log(booP instanceof Boolean); //

/*
*It is a good practice to never use the Boolean object because it will create many confusions especially when you use it in an expression. See the following example.


*/