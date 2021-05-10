for (let counter = 1; counter < 5; counter++) {
        console.log('Inside the loop:' + counter);
}
console.log('Outside the loop:');


// for loop without initialization
var j = 1;
for (; j < 10; j += 2) {
        console.log(j);
}


// for loop without the condition
for (let k = 1; ; k++) {
        console.log(k);
        if (k > 10) {
                break;
        }
}

// for loop without expression
let a = 0;
for (; ;) {
        if (a > 10) {
                break;
        } else {
                console.log(a);
                a++;
        }
}

// forLoop without body
let sum = 0;
for (let z = 0; z <= 9; z++, sum += z);
console.log(sum);