const addButton = document.querySelector('.add-todo-button');
  addButton.addEventListener('click',()=>{
    addTodo();
  });

const todoList = [{
    name: 'watch youtube',
    dueDate: '2024-02-13'
  },{
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];

renderTodolist();

function renderTodolist(){
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div> 
      <div>${dueDate}</div>
      <button class="js-delete-todo delete-todo">Delete</button>
    `;
    todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
     .innerHTML = todoListHTML;

const deleteButton = document.querySelectorAll('.js-delete-todo');
  deleteButton.forEach((button, index) => { 
    button.addEventListener('click',() => {
      todoList.splice(index, 1);
      renderTodolist();
    })
});

};
 

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const inputDate = document.querySelector('.js-date-input');
  const dueDate = inputDate.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = ''

  renderTodolist();
};
