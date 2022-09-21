const todoList = new TodoList();

const GetEle = (id) => document.getElementById(id);

//============================================================

/* hiển thị ra màn hình  */

const renderTodo = () => {
  const html = todoList.fillterTodo().reduce((result, todo) => {
    return (result += `
     <li class="d-flex">
      <p>${todo.id}</p>
       <div class="buttons">
        <span class="far fa-trash-alt remove" onclick="removeToDo('${todo.id}')"></span>
        <span class="fas fa-check-circle complete" complete onclick="completeToDo ('${todo.id}')"></span>
       </div>
    </li>  
 `);
  }, "");

  GetEle("todo").innerHTML = html;
};

/* hiển thị complete an activity */
const renderTodoComplete = () => {
  const html = todoList.filterTodoComplete().reduce((result, todo) => {
    return (result += `
     <li class="d-flex">
        <p>${todo.id}</p>
       <div class="buttons">
         <span class="far fa-trash-alt remove" onclick="removeToDo('${todo.id}')"></span>
         <span class="fas fa-check-circle complete")"></span>
       </div>
    </li>   
`);
  }, "");
  GetEle("completed").innerHTML = html;
};

//========================================================================

const SetItem = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.todos));
};

const GetItem = () => {
  const data = localStorage.getItem("todos");
  const dataparse = JSON.parse(data) || [];
  /* sử dụng hàm map => return về 1 mảng mới */
  todoList.todos = dataparse.map((value) => {
    const todo = new Todo();
    for (let key in value) {
      todo[key] = value[key];
    }
    return todo;
  });
  renderTodo();
};

GetItem();

/* add an activity  */
GetEle("addItem").onclick = () => {
  const todoadd = GetEle("newTask").value;
  // console.log(todoadd)
  if (todoadd == "") {
    alert("Hãy nhập một hoạt động vào ô:  Enter an activity");
    return;
  }
  const todo = new Todo(todoadd, "Tiến Độ");
  console.log("Tiến Độ", todo)
  todoList.addtodo(todo);
  renderTodo();
  renderTodoComplete();
  GetEle("newTask").value = "";
  SetItem();
};

/* remove an activity  */
window.removeToDo = (todo) => {
  todoList.removetodo(todo);
  renderTodo();
  renderTodoComplete();
  SetItem();
};
/* completed an activity */
window.completeToDo = (todo) => {
  // console.log("Complete: ",todo)
  todoList.todos.forEach((e) => {
    if (e.id === todo) {
      e.desc = "Hoàn Tất";
    }
  });
  renderTodo();
  renderTodoComplete();
  SetItem();
};

GetEle("two").onclick = () => {
  todoList.sorttaskAsc();
  renderTodo();
  renderTodoComplete();
  SetItem();
  GetItem();
};

GetEle("three").onclick = () => {
  todoList.sorttaskDesc();
  renderTodo();
  renderTodoComplete();
  SetItem();
  GetItem();
};
