// forEach method behaves like for loop

let ranks = ['A', 'B', 'C'];
for (let i = 0; i < ranks.length; i++) {
        console.log(ranks[i]);
}

// using forEach method
ranks.forEach(function (rank) {
        console.log(rank);
})

// forEach method does not returns a new Array
