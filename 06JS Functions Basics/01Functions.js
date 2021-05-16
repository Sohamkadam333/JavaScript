// function with one parameter
//message is parameter
function say(message) {
        console.log(message);
}

// calling a function
say('hello');


// function with 2 parameter
function greet(message, name) {
        console.log(message, name);
}

greet('Hello', 'Soham');


// return in function

function compare(a, b) {
        if (a > b) {
                return -1
        } else if (a < b) {
                return 1;
        } else {
                return 0;
        }
}
console.log(compare(3, 2));



// function hoisting

message('I am hoisted');

function message(msg) {
        console.log(msg);
}