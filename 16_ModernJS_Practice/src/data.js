const users = [
        { name: 'person1', premium: true },
        { name: 'person2', premium: false },
        { name: 'person3', premium: true },
        { name: 'person4', premium: false },
        { name: 'person5', premium: true }
];

const getPrimUsers = users => {
        return users.filter(user => user.premium);
};

// export default users;
export { getPrimUsers, users as default };