// In javascript callback is a function passed into another function as an parameter


// filter()
/*
let numbers = [1, 2, 4, 7, 3, 5, 6];

function isOddNumber(number) {
        return number % 2;
}

const oddNumbers = numbers.filter(isOddNumber);
console.log(oddNumbers);


// es6 arrow function
const newOddNumbers = numbers.filter(number => number % 2);
console.log(newOddNumbers);
*/

//----------------------------------------------
// callback function Synchronously
// here arrow function is synchronously working
/*
numbers.sort((a, b) => a - b);
console.log(numbers);
*/

//---------------------------------------------------
// Asynchronous callback function
/*
function download() {
        setTimeout(() => {
                console.log('Image downloaded');
        }, 3000);
};

function process() {
        console.log('Image Processed');
}

download();
process();
*/
// here image get processed without image download
// process function works before download function
//-------------------------------------------------------


// with asynchronous callback
/*
const getData = function (downloadingData, callback) {
        setTimeout(() => {
                console.log(downloadingData);

                callback();
        }, 3000);
}

function showingData() {
        console.log('Data showed');
}

getData('Data Download', showingData);
*/
// --------------------------------------------------------


// using anonymous function as callback function


function getData(url, success, faliure) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function () {


                if (this.readyState === 4 && this.status === 200) {
                        success('Success');
                        console.log('Getting Data');
                        console.log(JSON.parse(this.responseText));
                } else {
                        console.log('Error in getting Data');
                        faliure('Faliure');
                }
        }

        xhr.send();
}

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';
const url4 = 'https://jsonplaceholder.typicode.com/todos/4';


// callback hell
getData(url1, function (message) {
        console.log(message);
        getData(url2, function (message) {
                console.log(message);
                getData(url3, function (message) {
                        console.log(message);
                        getData(url4, function (message) {
                                console.log(message);
                        })
                })
        })
})


// To avoid the pyramid of doom, you use promises or async/await functions.