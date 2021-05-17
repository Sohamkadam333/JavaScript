// object literal
const person = {
        firstName: 'John',
        lastName: 'Doe'
};

console.log(person);

// constructor function
// A constructor function always start with Capital letter
// A consutuctor function should be called with new operator
function Person(firstName, lastName) {
        // if the constructor is called with new keyword
        if (!new.target) {
                throw Error('Cannot be called without the new keyword')
        } else {
                console.log(new.target);

                this.firstName = firstName;
                this.lastName = lastName;

                // adding methods to Constructor function
                this.fullName = function () {
                        return this.firstName + ' ' + this.lastName;
                }
        }
}

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Doe');
console.log(person1, person2);

// new Operator Does following things
// 1 creats new empty object
// 2 Assign arguments ex('john','Doe' to 'firstName' and 'lastName' properties)
// 3 return this value;
console.log(Person);


console.log(person1.fullName());