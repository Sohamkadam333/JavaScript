// string constructor

let str = new String('Hii there');
console.log(str.valueOf(), typeof str);

// string length
console.log(str.length);


// accessing character
console.log(str[8]);
// or
console.log(str.charAt(8));

// toUppercase
console.log(str.toUpperCase());

// original string
console.log(str.valueOf());


// string concatination
let name = 'soham';
let fName = ' kadam';
console.log(name.concat(fName));

// extracting substring
console.log(name.substr(2, [3])); //index,[length]

// Locating substring
console.log(name.indexOf('ha'));

// lastIndexOf
console.log(name.lastIndexOf('a'));


// removing white Space
let raw = '   hii    ';
console.log(raw.trimStart());
console.log(raw.trim());
console.log(raw.trimEnd());


// chaninging Case
console.log(raw.toUpperCase());
console.log(raw.toLowerCase());


// compare Strings
console.log(raw.localeCompare(name)); // -1 for false
console.log(name.localeCompare(name)); // 0 for true