const name = 'soham'; //Global Scope

function greet(message) {
        console.log(message, name); // Local Scope
};
greet('Hello');


function greeting() {
        const message = 'Hi';

        function sayHi() {
                console.log(message);
        }


        sayHi();
}

greeting();

// Javascript Closures

function newGreeting() {
        const message = 'Hi';

        function sayHi() {
                console.log(message);
        }

        return sayHi;
}

const hi = newGreeting();
hi();


// 2nd Example
function greeting2(message) {
        return (name) => `${message} ${name}`
}

const greetJohn = greeting2('Hii')('John');
console.log(greetJohn);