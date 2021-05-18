const name = {
        firstName: 'Soham',
        lastName: 'Kadam',
}
const person1 = {
        firstName: 'John',
        lastName: 'Doe'
}

const person2 = {
        firstName: 'Jane',
        lastName: 'Smith'
}

function fullName(homeTown, state) {
        console.log(this.firstName, this.lastName, homeTown, state);
}



// function borrowing using call method
fullName.call(name, 'Ahmednagar', 'Maharashtra');
fullName.call(person1, 'Mumbai', 'Maharashtra');

// function borowing using apply method
// apply method takes arguments in array
fullName.apply(name, ['Ahmednagar', 'Maharashtra']);
fullName.apply(person1, ['Mumbai', 'Maharashtra']);



// bind method creates a copy of fullname method and bind to person2
// bind and keep a copy of that method and use it later
const person2Fullname = fullName.bind(person2, 'Ahmednagar', 'Maharashtra');

person2Fullname();