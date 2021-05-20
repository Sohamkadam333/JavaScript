// prior ES6 adding static method

function Person(firstName, lastName) {


        this.firstName = firstName;
        this.lastName = lastName;

}

// prtotypal method
Person.prototype.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
}

// Adding static Methods Prior ES6
Person.getFirstName = function () {
        const fName = 'Jane';
        return fName;
}

const john = new Person('John', 'Doe');
console.log(john);
console.log(john.fullName());

console.log(Person.getFirstName());

// Static Method in ES6

class Person1 {
        constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
        }

        fullName() {
                return `${this.firstName} ${this.lastName}`;
        }

        static getFirstName() {
                return this.firstName;
        }
}
console.log(Person1);

const jane = new Person('Jane', 'Doe');
console.log(jane);
console.log(jane.fullName());