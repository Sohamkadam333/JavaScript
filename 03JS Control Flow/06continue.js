// JavaScript continue: Skipping the Current Iteration of a Loop

// continue

// unlabeled js continue
for (let i = 0; i < 10; i++) {
        if (i === 5) {
                continue;
        }
        console.log(i);
}


// labeled continue
outer: for (let a = 1; a <= 3; a++) {
        for (let j = 1; j <= 3; j++) {
                if ((a == 2) && (j == 2)) {
                        console.log('Continue to Outer');
                        continue outer;
                }
                console.log(a, j);
        }
}