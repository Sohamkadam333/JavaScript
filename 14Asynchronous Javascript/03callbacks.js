console.log(1);
console.log(2);
console.log(4);

const getTodos = (url, callback) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = () => {
                if (request.readyState === 4 && request.status === 200) {
                        const response = JSON.parse(request.responseText);
                        callback('Message : Callback successfull, Data : ', response);
                } else if (request.readyState === 4) {
                        callback('Message : Callback failed Could not fetch data, Data :', undefined);
                }
        }
        request.send();
}

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'https://jsonplaceholder.typicode.com/todos/3';

function data(response, data) {
        console.log(response, data);
}

getTodos(url1, function (response, data) {
        console.log(response, data);
        getTodos(url2, function (response, data) {
                console.log(response, data);
                getTodos(url3, function (response, data) {
                        console.log(response, data)

                });
        });
});

console.log(4);
console.log(5);
console.log(6);