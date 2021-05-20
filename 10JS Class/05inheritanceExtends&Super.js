// prior ES6 Inheritance

function Animal(legs) {
        this.legs = legs;
}

Animal.prototype.walk = function () {
        console.log(`walking on ${this.legs} legs`);
}

function Bird(legs) {
        Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;


console.log(Animal);
console.log(Bird);

const cat = new Animal(4);
console.log(cat);
cat.walk();

const crow = new Bird(2);
console.log(crow);
crow.walk(2);