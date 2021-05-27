// prior ES6 Inheritance

// function Animal(legs) {
//         this.legs = legs;
// }

// Animal.prototype.walk = function () {
//         console.log(`walking on ${this.legs} legs`);
// }

// function Bird(legs) {
//         Animal.call(this, legs);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;


// console.log(Animal);
// console.log(Bird);

// const cat = new Animal(4);
// console.log(cat);
// cat.walk();

// const crow = new Bird(2);
// console.log(crow);
// crow.walk(2);

// class Inheritance
class Animal {
        constructor(legs) {
                this.legs = legs;
        }

        walk() {
                console.log(`walking on ${this.legs} legs`);
        }
}

// extends keyword use for inheritance in class
class Bird extends Animal {
        constructor(legs, color = 'nocolor') {
                super(legs);
                this.color = color;
        }

        fly() {
                console.log('Flying');
        }
        getColor() {
                console.log(this.color);
        }
}

let bird = new Bird(2);
bird.walk();
bird.fly();

let pegion = new Bird(2, 'white');
pegion.walk();
pegion.getColor();


// shadowing methods
class Dog extends Animal {
        constructor() {
                super(4);
        }

        walk() {
                super.walk();
                console.log('Go Walking');
        }
}

let bingo = new Dog();
bingo.walk();