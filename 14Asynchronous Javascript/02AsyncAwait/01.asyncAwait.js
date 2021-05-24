
// with callback before ES6
/*
function getUser(userId, callback) {
        console.log('Get user from the database');
        setTimeout(() => {
                callback({
                        userId: userId,
                        username: 'john'
                })
        }, 1000);
}

function getServices(user, callback) {
        console.log(`Get services of  ${user.username} from the API.`);
        setTimeout(() => {
                callback(['Email', 'VPN', 'CDN']);
        }, 2 * 1000);
}


function getServiceCost(services, callback) {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout(() => {
                callback(services.length * 100);
        }, 3 * 1000);
}

getUser(100, (user) => {
        getServices(user, (services) => {
                getServiceCost(services, (cost) => {
                        console.log(`The service cost is ${cost}`);
                })
        })
});
*/


// Using promises  ES6
function getUser(userId) {
        return new Promise((resolve, reject) => {
                console.log('Get user from the database');
                setTimeout(() => {
                        resolve({
                                userId: userId,
                                username: 'john'
                        })
                }, 1000);
        });
};

function getServices(user) {
        return new Promise((resolve, reject) => {
                console.log(`Get services of  ${user.username} from the API.`);
                setTimeout(() => {
                        resolve(['Email', 'VPN', 'CDN']);
                }, 2 * 1000);
        });
};

function getServiceCost(services) {
        return new Promise((resolve, reject) => {
                console.log(`Calculate service costs of ${services}.`);
                setTimeout(() => {
                        resolve(services.length * 100);
                }, 3 * 1000);
        });
};

/*
getUser(100)
        .then(getServices)
        .then(getServiceCost)
        .then(cost => console.log(cost));
*/

// ES2017 introduced the async/await keywords that build on top of promises, allowing you to write asynchronous code that looks more like synchronous code and more readable. Technically speaking, the async / await is syntactic sugar for promises.

// If a function returns a Promise, you can place the await keyword in front of the function call, like this:
async function showServieCost() {
        let user = await getUser(100);
        let services = await getServices(user);
        let cost = await getServiceCost(services);
        console.log(`The service cost is ${cost}`);
}

showServieCost();