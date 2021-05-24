// promises are make to overcome callback hell problem

// const getTodos = (url, callback) => {
//         const request = new XMLHttpRequest();
//         request.open('GET', url, true);
//         request.onload = () => {
//                 if (request.readyState === 4 && request.status === 200) {
//                         const response = JSON.parse(request.responseText);
//                         callback('Message : Callback successfull, Data : ', response);
//                 } else if (request.readyState === 4) {
//                         callback('Message : Callback failed Could not fetch data, Data :', undefined);
//                 }
//         }
//         request.send();
// }

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';
const url4 = 'https://jsonplaceholder.typicode.com/todos/4';
const url5 = 'https://jsonplaceholder.typicode.com/todos/5';
const url6 = 'https://jsonplaceholder.typicode.com/todos/6';

// function data(response, data) {
//         console.log(response, data);
// }

// callback hell
// getTodos(url1, function (response, data) {
//         console.log(response, data);
//         getTodos(url2, function (response, data) {
//                 console.log(response, data);
//                 getTodos(url3, function (response, data) {
//                         console.log(response, data)
//                         getTodos(url4, function (response, data) {
//                                 console.log(response, data)
//                                 getTodos(url5, function (response, data) {
//                                         console.log(response, data)
//                                         getTodos(url6, function (response, data) {
//                                                 console.log(response, data)

//                                         });
//                                 });
//                         });
//                 });
//         });
// });

// promise example
const getSomething = () => {
        return new Promise((resolve, reject) => {
                //fetching data // fetch something
                resolve('Some Data');
                // reject('Some Error');
        });
};

// promise call
// then for resolve 
// catch for reject
getSomething().then((data) => {
        console.log(data);
}).catch(err => console.log(err));


// promise Example
const getData = function (url) {
        return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.open('GET', url, true);
                request.onload = () => {
                        if (request.readyState === 4 && request.status === 200) {
                                const response = JSON.parse(request.responseText);
                                resolve(response);
                        } else if (request.readyState === 4) {
                                reject("Promise Rejected");
                        }
                }
                request.send();

        })
}


getData('https://jsonplaceholder.typicode.com/todos/1')
        .then((data) => console.log('Promise Resolved', data))
        .catch(err => console.log(err));