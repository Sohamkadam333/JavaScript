const person = {
        firstName: 'John',
        lastName: 'Doe',
        ssn: '299-24-42424'
}

for (const key in person) {
        console.log(key, person[key]);

}