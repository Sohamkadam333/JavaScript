"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  return console.log(name);
};

greet('Soham');
greet('john');
greet('Mario');
greet('Jane');
greet('Person1');

var Person = function Person() {
  _classCallCheck(this, Person);

  this.score = 0;
};

var person1 = new Person();
console.log(person1.score);
