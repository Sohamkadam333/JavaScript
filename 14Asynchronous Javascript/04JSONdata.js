console.log(1);
console.log(2);
console.log(4);

const getTodos = (url, callback) => {
        const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = () => {
                if (request.readyState === 4 && request.status === 200) {
                        // parsing json data to object
                        // json string to javascript object
                        // using JSON.parse
                        const response = JSON.parse(request.responseText);
                        callback('Message : Callback successfull, Data : ', response);

                        // convert javascript object to json string 
                        // using JSON.stringify
                        // const jsonString = JSON.stringify(response);
                        // console.log(jsonString);


                } else if (request.readyState === 4) {
                        callback('Message : Callback failed Could not fetch data, Data :', undefined);
                }
        }
        request.send();
}

const url1 = 'https://jsonplaceholder.typicode.com/todos/1';
const url2 = 'https://jsonplaceholder.typicode.com/todos/2';
const url3 = 'todo.json';  //json file

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


// when wirting json everything must be in double quotes
// json is data representation format as XML
// commenly used for apis and configs
// light weight and easy to read and write
// Integrate easily with most languages