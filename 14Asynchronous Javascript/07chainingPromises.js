const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';
const url4 = 'https://jsonplaceholder.typicode.com/todos/4';
const url5 = 'https://jsonplaceholder.typicode.com/todos/5';
const url6 = 'https://jsonplaceholder.typicode.com/todos/6';

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
                                reject("Error getting Resource");
                        }
                }
                request.send();

        })
}

// getData('https://jsonplaceholder.typicode.com/todos/1').then(async (data) => {
//         console.log('Promise 1 Resolved : ', data);
//         const data_2 = await getData(url2);
//         console.log('Promise 2 Resolved : ', data_2);
//         const data_3 = await getData(url3);
//         console.log('Promise 3 Resolved : ', data_3);
// }).catch((err) => {
//         console.log('Promise Rejected : ', err);
// })

// getData(url1).then((data) => {
//         console.log('Promise 1 Resolved : ', data);
//         getData(url2).then((data) => {
//                 console.log('Promise 2 Resolved : ', data);
//                 getData(url3).then((data) => {
//                         console.log('Promise 3 Resolved : ', data);
//                 })
//         })
// }).catch((err) => {
//         console.log('Promise Rejected : ', err);
// })



// promise chaining
// getData(url1).then((data) => {
//         console.log('Promise 1 resolved: ', data);
//         return getData(url2);
// }).then((data) => {
//         console.log('Promise 2 resolved: ', data);
//         return getData(url3);
// }).then((data) => {
//         console.log('Promise 3 resolved: ', data);
// }).catch((err) => {
//         console.log('Promise Rejected: ', err);
// })