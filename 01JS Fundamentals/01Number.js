
// create number object
let numberObject = new Number(100.798);

// logging number object gives [key:value]
console.log(numberObject);

// getting numbe object value
console.log(numberObject.valueOf());


// getting number value as string
console.log(numberObject.toString());


// number primitive
let x = 10.342;
console.log(x.toString(16));


// formatting Number
console.log(numberObject.toFixed(2));

// Exponential
console.log(numberObject.toExponential());


// to precision
console.log(x.toPrecision(3));

// instanceOf
console.log(numberObject instanceof Number);
console.log(x instanceof Number);