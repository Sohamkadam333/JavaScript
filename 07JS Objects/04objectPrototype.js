// function prototype
/*
console.log(Object);
console.log(Object.prototype);

console.log(Object === Object.prototype.constructor);


function Person(fname) {
        this.fname = fname;
}

Person.prototype.greet = function () {
        return `Hii, I'm ${this.fname}!`;
}


console.log(Person);
console.log(Person.prototype);

const person1 = new Person('John');
console.log(person1);

console.log(person1.greet());

let s = person1.toString();
console.log(s);


const person2 = new Person('Jane');
console.log(person2);

person2.getsMarried = function (newLastName) {
        this.lastName = newLastName;
        return this.lastName;
}

console.log(person2.getsMarried('Marry'));
*/

function Person(firstName, lastName) {
        if (!new.target) {
                throw Error('Use new keyword while creating Object')
        } else {
                this.firstName = firstName;
                this.lastName = lastName;
        }

}

Person.prototype.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'Doe');
const jane = new Person('Jane', 'Smith');


console.log(john);
console.log(jane);
console.log(john.fullName());
console.log(jane.fullName());

jane.getsMarried = function (newLastName) {
        this.lastName = newLastName;
}

jane.getsMarried('Doe');
console.log(jane.fullName());


// Getting prototype linkage
console.log(john.__proto__);
// proto get depricated
console.log(Object.getPrototypeOf(john) === Object.getPrototypeOf(jane));
console.log(Object.getPrototypeOf(jane));


console.log(john.constructor.prototype);