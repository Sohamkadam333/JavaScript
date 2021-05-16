// Anonymous functions

const show = function () {
        console.log('Anonymous Functions');
}

show();


// Using anonymouse function as argument of other function

setTimeout(function () {
        console.log('Execute late after 1 second');
}, 1000);


// Immediately Invokable function Expression

(function () {
        console.log("I am IIFE");
})();


let person = {
        firstName: 'John',
        lastName: 'Doe'
};

(function () {
        console.log(`${person.firstName} ${person.lastName}`);
})(person);


// Arrow function

const arrFunc = (a, b) => a + b;
console.log(arrFunc(10, 20));