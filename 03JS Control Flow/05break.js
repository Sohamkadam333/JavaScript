// break

for (let i = 1; i < 10; i++) {
        if (i % 3 == 0) {
                break;
        }
        console.log(i);
}

// lable
// example label: outer 
// In JavaScript, you can label a statement for later use

let iteration = 0;
top: for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
                iteration++;
                if (i === 2 && j === 2) {
                        break top;
                }
        }
}
console.log(iteration);