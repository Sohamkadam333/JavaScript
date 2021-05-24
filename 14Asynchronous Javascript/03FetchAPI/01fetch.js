// fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((data) => {
//                 if (data.status === 200 && data.statusText === 'OK') {
//                         return data.json();
//                 } else {
//                         console.log("Error getting data");
//                 }
//         })
//         .then((response) => console.log(response))
//         .catch((err) => console.log(err))


const url1 = 'url1.json'
const url2 = 'url2.json'
const url3 = 'url3.json'

async function getUsers(url) {
        try {
                let users = await fetch(url);
                let response = await users.json();
                return response;

        } catch (err) {
                console.log(err.name, err.message);
        }
}

// getUsers(url1).then((data) => {
//         console.log(data);
//         return getUsers(url2)
// }).then((data) => {
//         console.log(data);
//         return getUsers(url3)
// }).then((data) => {
//         console.log(data);
// }).catch((err) => console.log(err.name, err.message));

async function populateUsers() {

        let users1 = await getUsers(url1);
        let users2 = await getUsers(url2);
        let users3 = await getUsers(url3);
        console.log([users1, users2, users3]);
}

populateUsers();