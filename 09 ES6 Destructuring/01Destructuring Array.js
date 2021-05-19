function getScore() {
        return [70, 80, 90];
}


const scores = getScore();
console.log(scores);

// array destructuring
const [x, y, z] = getScore();
console.log(x, y, z);


// array destructuring and rest pattern
const [one, ...remaining] = getScore();
console.log(one, remaining);

// setting default value
const [a = 40, b = 30, c = 20, d = 10] = getScore();

console.log(a, b, c, d);


// nested destructuring
function getProfiles() {
        return [
                'John',
                'Doe',
                ['Red', 'Green', 'Blue']
        ];
};

// using rest pattern
const [firstName, lastName, ...colors] = getProfiles();
// using spread operator
console.log(firstName, lastName, ...colors);

// Array destructuring assignment application

// 1 swapping varilables
let a1 = 10, b1 = 20;
console.log(a1, b1);
[a1, b1] = [b1, a1];
console.log(a1, b1);

// 2 Functions thta return multiple values

function stat(a, b) {
        return [
                a + b,
                (a + b) / 2,
                a - b
        ]
}

const [add, average, sub] = stat(10, 20);
console.log(add, average, sub);