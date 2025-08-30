let todoInput = document.querySelector(".input");
let addTodoButton = document.querySelector(".add-button");
let showTodos = document.querySelector(".todos-container");
let todo;

let localData = JSON.parse(localStorage.getItem("todo"));
let todoList = localData || [];

// Creating function to get unique identification(id)
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxx'.replace(/[xy]/g, function(param) {
        let number = Math.random() * 16 | 0;
        let randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    });
}
addTodoButton.addEventListener("click", (event) => {
    event.preventDefault();
    todo = todoInput.value;
    if(todo.length > 0) {
        todoList.push({id: uuid(), todo, isCompleted: false});
    }
    localStorage.setItem("todo", JSON.stringify(todoList));
    renderTodoList(todoList);
    todoInput.value = "";
});

showTodos.addEventListener("click", (e) => {
    let key = e.target.dataset.key;
    let delTodokey = e.target.dataset.todokey;
    todoList = todoList.map(todo => todo.id === key ? {...todo, isCompleted: !todo.isCompleted} : todo);
    todoList = todoList.filter(todo => todo.id !== delTodokey);
    localStorage.setItem("todo", JSON.stringify(todoList));
    renderTodoList(todoList);
})

function renderTodoList(todoList) {
    console.log(todoList);
    showTodos.innerHTML = todoList.map(({id, todo, isCompleted}) => `
    <div class="todo-item">
        <input data-key=${id}  ${isCompleted ? "checked" : ""} id="item-${id}" type="checkbox" class="t-checkbox">
        <label class="todo todo-text t-pointer ${isCompleted ? "checked-todo": ""}" for="item-${id}" data-key=${id}>${todo}</label>
        <button class="del-button cursor">
            <span class="material-icons-outlined" data-todokey=${id}> delete </span>
        </button>
    </div>
    `);
}

renderTodoList(todoList);
