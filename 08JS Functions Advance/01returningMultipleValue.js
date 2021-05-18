const person = {
        firstName: 'John',
        lastName: 'Doe',

        getFullName() {
                return [this.firstName, this.lastName];
        }
};


// object desctructring
const [firstName, lastName] = person.getFullName();

console.log(firstName, lastName);