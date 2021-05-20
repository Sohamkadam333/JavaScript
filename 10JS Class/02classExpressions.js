//  class expressions

const Person = class {
        constructor(firstName) {
                this.firstName = firstName;
        }

        getName() {
                return this.firstName;
        }
};

const john = new Person('John');
console.log(john);


// first-class Citizens
// JavaScript classes are first - class citizens.It means that you can pass a class into a function, return it from a function, and assign it to a variable.

function factory(aCLass) {
        return new aCLass;
}

let greeting = factory(class {
        sayHi() { console.log('Hiii'); }
});

greeting.sayHi();


// singleton
// Singleton is a design pattern that limits the instantiation of a class to a single instance.It ensures that only one instance of a class can be created thoughout the system.
// Class expressions can be used to create a singleton by calling the class constructor immediately.


const app = new class {
        constructor(name) {
                this.name = name;
        }
        start() {
                console.log(`Starting the ${this.name}`);
        }
}('Awesome App');

app.start();