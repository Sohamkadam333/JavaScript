const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (value, time) => {

        if (value != '') {
                const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="todo-text">${value}</span>
          <small class="time">${time}</small>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

                list.innerHTML += html;
        }
}



// add todos
addForm.addEventListener('submit', e => {
        e.preventDefault();

        const time = new Date();
        const today = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
        console.log(today);

        const todo = addForm.add.value.trim();
        console.log(todo);
        localStorage.setItem('todo', todo);

        generateTemplate(todo, today);

        addForm.reset();
});

// delete todos
list.addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
                e.target.parentElement.remove();
        }


        if (e.target.classList.contains('todo-text')) {
                e.target.classList.toggle('todo-done');
        }
});

const filterTodos = (term) => {
        // console.log(term);
        (Array.from(list.children))
                .filter(todo => !todo.textContent.toLowerCase().includes(term))
                .forEach((todo) => todo.classList.add('filtered'));

        (Array.from(list.children))
                .filter(todo => todo.textContent.toLowerCase().includes(term))
                .forEach((todo) => todo.classList.remove('filtered'));
};

// keyUp event
search.addEventListener('keyup', (e) => {
        const term = search.value.trim().toLowerCase();
        filterTodos(term);

        e.preventDefault();
});