
// local storage
localStorage.setItem('name', 'John'); // key value
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');
console.log(localStorage.getItem('name'));


// session storage
sessionStorage.setItem('name', 'Jane');
console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
sessionStorage.setItem('name', 'Bob');



// cookies
document.cookie = 'name=mike; expires=' + new Date(99999999, 04, 22).toUTCString();

document.cookie = 'lastName=Smith; expires=' + new Date(99999999, 04, 22).toUTCString();


console.log(document.cookie);

console.log(window);