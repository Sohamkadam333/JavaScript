let cities = [
        { name: 'Los Angeles', population: 3792621 },
        { name: 'New York', population: 8175133 },
        { name: 'Chicago', population: 2695598 },
        { name: 'Houston', population: 2099451 },
        { name: 'Philadelphia', population: 1526006 }
];

console.log(cities);
let overThreeMillion = cities.filter(e => {
        // if (e.population > 3000000) {
        //         console.log(e);
        // }

        return e.population > 3000000;

});
console.log(overThreeMillion);

cities
        .filter(city => city.population < 3000000)
        .sort((c1, c2) => c1.population - c2.population)
        .map(city => console.log(city.name + ':' + city.population));