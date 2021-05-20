// prior to ES6 Classes

function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
}

Person.prototype.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'Doe');
console.log(john);

console.log(john.fullName());

// ES6 class declaration
// First, class declarations are not hoisted like function declarations.
// Second, all the code inside a class automatically executes in the strict mode. And you cannot change this behavior.
// Third, class methods are non-enumerable. If you use a constructor function, you have to use the Object.defineProperty() method to make a property non-enumerable.
// Fourth, calling the class constructor without the new operator will result in an error as shown in the following example

class Person1 {
        constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName
        }
        fullName() {
                return `${this.firstName} ${this.lastName}`;
        }
}

const jane = new Person1('Jane', 'Doe');
console.log(jane);
console.log(jane.fullName());