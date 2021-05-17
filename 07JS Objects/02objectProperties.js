'use strict';
// object have tow property types
// 1 data properties
// 2 Accessor Properties

// 1 Data properties have 4 attributes
/*
* 1 [configurable] -- determine whether the property can be redefined or removed by delete operator
* 2 [enumbrable] -- indiacte that if property will return in for..in loop
* 3 [writable] -- specify that the value of property can be changed
* 4 [value] -- contains the value of property
 */

const person = {
        firstName: 'John',
        lastName: 'Doe'
}


// to change any attribute of an property use Object.defineProperty() method
// Object.defineProperty takes 3 argument2s
// 1 object
// 2 property of an object
// object discriptor (Attribute)


person.age = 20;
console.log(person);


delete person.age;
// default value of configurable attribute is true object property can be deleted

console.log(person);

// Object.defineProperty()
Object.defineProperty(person, 'ssn', {
        configurable: false,
        value: '323 / 24 / 32',
        enumerable: false
});

Object.defineProperty(person, 'lastName', {
        enumerable: false // now lastName is not iterable
})

console.log(person);
console.log(person.ssn);
// delete person.ssn;
console.log(person.ssn);

// Object.defineProperty(person, 'ssn', {
//         configurable: true
// })
// cannot redefined property 

console.log(person);
console.log(person.ssn);

for (const key in person) {
        console.log(key);
}


// 2 Accessor properties
// Accessor properties have [configurable] and [enurable] attribute but does not have [writable] and [value] attribute instead of have [Get] and [Set] attribute

Object.defineProperty(person, 'fullName', {
        get() {
                return this.firstName + ' ' + this.lastName;
        },

        set(value) {
                let parts = value.split(' ');
                if (parts.length == 2) {
                        this.firstName = parts[0];
                        this.lastName = parts[1];
                } else {
                        throw 'Invalid name format';
                }
        }
});

console.log(person.fullName);

// Object.defineProperties()
const product = {};

Object.defineProperties(product, {
        name: {
                value: 'Smartphone'
        },
        price: {
                value: 799
        },
        tax: {
                value: 0.1
        },
        netPrice: {
                get() {
                        return this.price * (1 + this.tax);
                }
        }

});

console.log(product);


// Js Object Property Descriptor
const descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);
