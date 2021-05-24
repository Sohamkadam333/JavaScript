// let p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve(10)
//         }, 3000);
// });


// promise chaining
// p.then(result => {
//         console.log(result);
//         return result * 2;
// }).then(result => {
//         console.log(result);
//         return result * 3;
// }).then(result => {
//         console.log(result);
// });

// Returning a Promise
// When you return a value in the then() method, the then() method returns a new Promise that immediately resolves to the return value.


// let k = new Promise((resolve, reject) => {
//         setTimeout(() => {
//                 resolve(10);
//         }, 3000);
// });

// k.then(result => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve(result * 2);
//                 }, 2 * 3000);
//         });
// }).then((result) => {
//         console.log(result);
//         return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                         resolve(result * 3);
//                 }, 3 * 3000);
//         });
// }).then(result => {
//         console.log(result);
// })


// ES2017 introduced the async/await keywords that help you write cleaner code than using this promise chain technique.

// promise example


const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';
const url4 = 'https://jsonplaceholder.typicode.com/todos/4';
const url5 = 'https://jsonplaceholder.typicode.com/todos/5';
const url6 = 'https://jsonplaceholder.typicode.com/todos/6';

const getData = function (url) {
        return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.onload = () => {
                        if (xhr.readyState = 4 && xhr.status === 200) {
                                const data = JSON.parse(xhr.responseText);
                                resolve(data);
                        } else {
                                reject('Error Getting data');
                        }
                }

                xhr.send();
        });
}


getData(url1).then(response => {
        console.log('Promise 1 Resolved : ', response);
        return getData(url2);
}).then(response => {
        console.log('Promise 2 Resolved : ', response);
        return getData(url3);
}).then(response => {
        console.log('Promise 3 Resolved : ', response);
        return getData(url4);
}).then(response => {
        console.log('Promise 4 Resolved : ', response);
        return getData(url5);
}).then(response => {
        console.log('Promise 5 Resolved : ', response);
        return getData(url6);
}).then(response => {
        console.log('Promise 6 Resolved : ', response);
}).catch(err => {
        console.log('Promise Rejected', err);
})