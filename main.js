const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector('.todo-form');
const todoItem = document.querySelector('.todo-item');
const todoButton = document.querySelector('.todo-button');
const search = document.querySelector('input[name="search-form"]');
const searchItems = document.querySelectorAll(".todo-item");
const openTodo = document.querySelector('.open-todo');
let todoTitle = document.querySelector('input[name="title"]');
let todoDescription = document.querySelector('input[name="description"]');
let todoCategory = document.querySelector('select[name="category"]');


function createTodo (e) {
    /* Prevents browser reload */
    e.preventDefault();

    if (todoTitle.value === '' || todoDescription.value === '') {
        alert('Title and description cannot be empty');
        return;
    }

    todoList.insertAdjacentHTML('afterbegin', `
     <li class="todo-item">
                <div class="todo-item-header">
                    <input type="checkbox" name="checkbox" aria-label="Mark as finished">
                    <h2 class="todo-title">${todoTitle.value}</h2>
                    <span class="todo-icon-category-${todoCategory.value}"></span>
                    <p>${todoCategory.value}</p>
                </div>
                <p class="todo-item-body">${todoDescription.value}</p>
            </li>
    `);
    
    localStorage.setItem(`${todoTitle.value}`, 'test');
    /* resets form inputs value after submit */
    todoForm.reset();
}

todoButton.addEventListener('click', createTodo);

/* Open and closes modal to create a todo */
openTodo.addEventListener('click', () => {
    todoForm.classList.toggle('hidden');
});

/* Search filter */
search.addEventListener('keyup', function (e) {
    
    const term = e.target.value.toLowerCase();
    
    Array.from(searchItems).forEach(function (item) {
        const text = item.textContent.toLowerCase();
        
        if (text.includes(term)) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
})