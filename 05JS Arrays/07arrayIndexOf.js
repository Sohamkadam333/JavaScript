let scores = [10, 20, 30, 20, 40, 50];
console.log(scores.indexOf(30)); //(index,formIndex)


console.log(scores.indexOf(40, 3));


let guests = [
        { name: 'John Doe ', age: 30 },
        { name: 'Lily Bush ', age: 20 },
        { name: 'William Gate', age: 25 }
];

let str = ''
let guest = guests.forEach((guest) => {
        console.log(guest);
        str += guest.name;

});

console.log(str);

console.log(scores.lastIndexOf(20));