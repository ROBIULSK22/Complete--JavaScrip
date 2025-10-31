let todoItems = [];
renderTodos();
function addNewTodo() {
  let todoInput = document.querySelector("#todo-input");
  let todoDate = document.querySelector("#todo-date");
  let dateValue = todoDate.value;
  let todoText = todoInput.value.trim();
  todoInput.value = "";
  todoDate.value = "";

  if (todoText === "" || dateValue === "") {
    alert("Please fill out both fields!");
    return;
  } else {
    todoItems.push({ item: todoText, Date: dateValue });
  }
  renderTodos();
}
function renderTodos() {
  let todoContainer = document.querySelector(".todo-container");
  todoContainer.innerHTML = "";
  let newHtml = "";
  for (let i = 0; i < todoItems.length; i++) {
    let todoItem = todoItems[i].item;
    let todoDate = todoItems[i].Date;
    newHtml += `
        
             <span>${todoItem}</span>
             <span>${todoDate}</span>
            <button class="delete-todo-btn", onclick="todoItems.splice(${i},1);renderTodos();">Delete</button>
        `;
  }
  todoContainer.innerHTML = newHtml;
}
