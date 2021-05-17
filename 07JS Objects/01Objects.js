// creating Object literal
const person = {
        firstName: 'Soham',
        lastName: 'Kadam'
}

// accessing object property

// 1 Dot notation .
console.log(person.firstName);
console.log(person.lastName);

// 2 Array like Notation ([])
console.log(person['firstName']);
console.log(person['lastName']);


// property that contains space must be in quotes

const address = {
        'building no': 5876,
        street: 'MG Road',
        state: 'MH',
        city: 'mumbai'
}

console.log(address["building no"]);

// rading a property that does not exists gives us undefined

console.log(address.fname);

// modifying that value of property
console.log(person);
person.firstName = 'Shivam';
console.log(person);


// adding new property to object
person.age = 15;
console.log(person);


// deleting property of an object
// delete operator
delete person.age;
console.log(person);


// checking if property exists in object
// in keyword 
// in keyword returns true if property exists in object

console.log('ssn' in person);
console.log('firstName' in person);


// iterating over properties of object using for in loop
for (key in person) {
        console.log(key, person[key]);
}


// methods in object

let newPerson = {
        firstName: 'John',
        lastName: 'Doe',
        fullName() {
                console.log(this.firstName, this.lastName);
        }
}

newPerson.fullName();

newPerson.greet = function () {
        console.log('Hello', this.firstName);
}

newPerson.greet();

console.log(newPerson);