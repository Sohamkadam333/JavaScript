import { styleBody, addTitle, contact } from './dom.js';
import usersData from './data.js'
import { getPrimUsers } from './data.js'

console.log('Before file');


styleBody();
addTitle('Hii Dom');
addTitle('Hii Dom1');
console.log(contact);

console.log(usersData);

console.log(getPrimUsers(usersData));
console.log('watching files');