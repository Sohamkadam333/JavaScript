// The substring() method accepts two parameters: startIndexand endIndex:

// The startIndex specifies the index of the first character to include in the returned substring.
// The endIndex determines the first character to exclude from the returned substring.In other words, the returned substring doesn’t include the character at the endIndex.

let str = 'JavaScript Substring';
let substring = str.substring(0, 10);

console.log(substring);

// Extracting a substring to the end of the string example
console.log(str.substring(11));

// Extracting domain from the email example
let email = 'sohamkadam58@gmail.com';
console.log(email.substring(email.indexOf('@') + 1));
