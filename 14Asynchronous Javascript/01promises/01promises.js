// promise constructor
let completed = false;

let learnJS = new Promise(function (resolve, reject) {
        setTimeout(() => {
                if (completed) {
                        resolve("I have completed learning JS.");
                } else {
                        reject("I haven't completed learning JS yet.");
                }
        }, 3 * 1000);
});

// console.log(learnJS);

// 01 promise.then()
// .then()  takes 2 callback functions onfulfilled for resolve and onRejected for reject
// learnJS.then(
//         function onfulfilled(data) {
//                 console.log(data);
//         },
//         function onRejected(error) {
//                 console.log(error);
//         }
// );

// learnJS.then(
//         success => console.log(success),
//         error => console.log(error)
// )


// 02 .catch()
// .catch is used for when promise is rejected
// learnJS.catch(
//         reason => console.log(reason)
// );


// 03 .finally()
// to execute the same piece of code whether the promise is fulfilled or rejected
learnJS.then(success => console.log(success))
        .catch(error => console.log(error))
        .finally(console.log('I will always execute either promise resolve or reject'));
