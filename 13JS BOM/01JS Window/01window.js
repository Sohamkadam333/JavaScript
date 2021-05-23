// 01 Window size
/*
window size have 4 properties
1. innerWidth
2. innerHeight
returns the size of page viewport not including the size of toolbar and browser border
3. outerWidth
4. outerHieght
return the size of browser itself
*/

const innerHeight = window.innerHeight;
const innerWidth = window.innerWidth;
console.log('Inner', innerHeight, innerWidth);

const outerHeight = window.outerHeight;
const outerWidth = window.outerWidth;
console.log('Outer', outerHeight, outerWidth);


// 02 Opening a new window
// window.open(url,windowName)

// window.open('https://sohamkadam.netlify.app/', 'profile');

let features = 'height = 600,width = 500',
        url = 'https://sohamkadam.netlify.app/';

// let jsWindow = window.open(url, 'sohamkadam', features);
let jsWindow2;
setTimeout(() => {
        jsWindow2 = window.open(url, 'sohamkadam', features);

}, 10000);

// 03 Resize a window
// let jsWindow = window.open(
//         'https://unsplash.com/',
//         'about',
//         'height=600,width=800');

// setTimeout(() => {
//         jsWindow.resizeTo(600, 300);
// }, 3000);


// 4 moving a window
// setTimeout(() => {
//         jsWindow2.moveTo(600, 300);
// }, 20000);



// 05 window close
setTimeout(() => {
        jsWindow2.close();
}, 20000);