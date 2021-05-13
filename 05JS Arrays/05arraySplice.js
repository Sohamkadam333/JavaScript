// JavaScript Array type provides a very powerful splice() method that allows you to insert new elements into the middle of an array. However, you can use this method to delete and replace existing elements as well.'

// splice method manipulate existing array



// removing elements 
let arr = [10, 20, 30, 40, 50];
let deletedArrElements = arr.splice(1, 3);  //(index,number of elements)
console.log(arr);
console.log(deletedArrElements);


// inserting elements
let colors = ['red', 'green', 'blue'];
let newColors = colors.splice(1, 2, 'purple'); //(starting index, number of element to removed, new element to be inserted)
console.log(colors);
console.log(newColors);

// Replacing elements
let languages = ['c', 'C++', 'java'];
languages.splice(2, 1, 'python');
console.log(languages);
