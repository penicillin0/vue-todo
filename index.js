var app = new Vue({
  el: "#app",
  data: {
    message: "",
    todos: [
      {
        name: "掃除",
        isDone: true,
      },
      {
        name: "洗濯",
        isDone: true,
      },
      {
        name: "洗い物",
        isDone: true,
      },
    ],
    todoName: "",
  },
  methods: {
    handleAddClick: function () {
      this.todos = this.todos.concat({ name: this.todoName, isDone: false });
      this.todoName = "";
    },
    handleTodoDelete: function (deletedTodo) {
      this.todos = this.todos.filter((todo) => todo !== deletedTodo);
    },
  },
  computed: {
    getDoneNum: function () {
      return this.todos.filter((todo) => todo.isDone === true).length;
    },
    getNotDoneNum: function () {
      return this.todos.filter((todo) => todo.isDone === false).length;
    },
    getDoneTodo: function () {
      return this.todos.filter((todo) => todo.isDone === true);
    },
    getNotDoneTodo: function () {
      return this.todos.filter((todo) => todo.isDone === false);
    },
  },
});
