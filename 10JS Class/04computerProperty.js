let propName = 'c';
const rank = {
        a: 1,
        b: 2,
        [propName]: 3
};

console.log(rank.c);
// In this example, the[propName] is a computed property of the rank object.The property name is derived from the value of the propName variable.