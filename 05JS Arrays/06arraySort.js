let employees = [
        { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
        { name: 'David', salary: 75000, hireDate: "August 15, 2009" },
        { name: 'Ana', salary: 80000, hireDate: "December 12, 2011" }
];

// sort by salary
// employees.sort(function (x, y) {
//         return x.salary - y.salary;
// });



// employees.sort((x, y) => x.salary - y.salary);



let number = [1, 10, 40, 2, 5, 6, 70, 30];

// number.sort((a, b) => a - b);
number.sort((a, b) => b - a);

console.table(number);


let animals = [
        'cat', 'dog', 'elephant', 'bee', 'ant'
];

animals.sort((a, b) => a - b);
console.log(animals);