let person = {
        name: 'John Doe',
        greet() {
                return `Hii I'm ${this.name}`;
        }
}

console.log(person);
console.log(person instanceof Object);

const teacher = {
        teach(subject) {
                return `I can teach ${subject}`;
        }
}

console.log(teacher);

teacher.__proto__ = person; // prtotypal Inheritance

console.log(teacher);
console.log(teacher.name);
