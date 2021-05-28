console.log('Dom File');

const body = document.querySelector('body');

const styleBody = () => {
        body.style.background = 'lightblue';
};


const addTitle = (text) => {
        const title = document.createElement('h1');

        title.textContent = text;
        body.appendChild(title);
};


const contact = 'johndoe@gmail.com';


export { styleBody, addTitle, contact };