class TodoList {
    constructor() {
      this.todos = [];
    }
  
    addtodo(todo) {
      this.todos = [...this.todos, todo];
    }
  
    findTodo(TodoId) {
      return this.todos.find((todo) => todo.id === TodoId);
    }
  
    removetodo(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    }
  
    updatetodo(todo) {
      this.todos = this.todos.map((ele) => {
        return ele.id === todo.id ? todo : ele;
      });
    }
    
    fillterTodo() {
      return this.todos.filter((todo) => {
        if (todo.desc === "Tiến Độ") {
          return true;
        }
        return false;
      });
    }
  
    filterTodoComplete() {
      return this.todos.filter((todo) => {
        if (todo.desc === "Hoàn Tất") {
          return true;
        }
        return false;
      });
    }
  
    sorttaskAsc() {
      this.todos.sort((todo, nextTodo) => {
        if (todo.id > nextTodo.id) {
          return 1;
        }
        return -1;
      });
    }
  
    sorttaskDesc() {
      this.todos.sort((todo, nextTodo) => {
        if (todo.id < nextTodo.id) {
          return 1;
        }
        return -1;
      });
    }
  }
  