// using indexOf()
let str = 'finding substring in string';
let index = str.indexOf('str');

console.log(index); // 11

// using indexOf to count occurence of sub string
let str1 = 'You do not know what you do not know until you know,';
let substr = 'know';

let count = 0;

let index1 = str1.indexOf(substr);
// console.log(index1);
while (index1 !== -1) {
        count++;
        console.log(index1);
        index1 = str1.indexOf(substr, index1 + 1);
}
console.log(count);


// indexOf is case-sensitive
let str2 = 'JS indexOf';
let substr2 = 'js';

let index2 = str2.indexOf(substr2);
console.log(index2);


// to avoid this
let index3 = str2.toLowerCase().indexOf(substr2.toLowerCase());
console.log(index3);