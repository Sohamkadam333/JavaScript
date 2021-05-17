'use strict';
console.log(this);


// The this references the object of which the function is a property. In other words, the this references the object that is currently calling the function.
const counter = {
        count: 0,
        next() {
                return ++this.count;
        }
}

console.log(counter.count);
counter.next();
console.log(counter.count);

// Global Context
// In global content this refer to the global object which us window object

console.log(this === window); //true

this.color = 'red';
console.log(window.color);


// Function Context

// 1 Simple function invocation
function show() {
        // In non strict mode this inside function returns window object but in strict mode this inside function return undefined
        console.log(this);
};

show();


// 2 Method Invocation
const car = {
        brand: 'Honda',
        getBrand() {
                return this.brand;
        }
}

console.log(car.getBrand());

// const brandOfCar = car.getBrand;
// console.log(brandOfCar());

// 3 COnstructor Invocation

function Car(brand) {
        this.brand = brand;
}

Car.prototype.getBrand = function () {
        return this.brand;
}

const car1 = new Car('Honda');
console.log(car1);
console.log(car1.getBrand());


// 4 Arrow Function
const getThis = () => this;
console.log(getThis());

function Car3() {
        this.speed = 120;
}

Car3.prototype.getSpeed = () => this.speed;


const audi = new Car3();
console.log(audi);
console.log(audi.speed);