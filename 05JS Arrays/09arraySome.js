// /  array.some() takes 3 arguments
// JavaScript Array some: Check If at Least one Array Element Passes a Test
/*
1.callback function;
2. index
3. array
*/
// example

let marks = [4, 5, 7, 9, 10, 3];
let result1 = marks.some(e => {
        if (e >= 5) {
                console.log(e);
        }

        return e;
});
console.log(result1);



let marks1 = [4, 5, 7, 9, 10, 2];

const range = {
        min: 8,
        max: 10
};

let result = marks1.some(function (e) {
        return e >= this.min && e <= this.max;
}, range);

console.log(result);
