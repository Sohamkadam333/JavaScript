const john = {
        firstName: 'John',
        lastName: 'Doe'
};

const { firstName, lastName } = john;
console.log(firstName, lastName);


let display = ({ firstName, lastName }) => console.log(`${firstName} ${lastName}`);

let person = {
        firstName: 'John',
        lastName: 'Doe'
};

display(person);