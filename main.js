import './styles.scss'
import SvgClose from './assets/remove.svg'

const form = document.querySelector('form');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if (todo.completed) {
            li.classList.add('completed');
        }
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
        });
        const label = document.createElement('label');
        label.innerHTML = `<div>${todo.text}</div>`;
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('todo-remove');
        deleteButton.innerHTML = `<img src="${SvgClose}" alt="#">`
        deleteButton.addEventListener('click', () => {
            todos.splice(index, 1);
            saveTodos()
            renderTodos();
        });
        label.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener('submit', event => {
    event.preventDefault();
    if (input.value.trim() === '') {
        return;
    }
    todos.push({text: input.value, completed: false});
    saveTodos()
    input.value = '';
    renderTodos();
});

renderTodos()

