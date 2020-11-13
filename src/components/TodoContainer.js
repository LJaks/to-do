import React from "react";
import { todos } from "./data";
import TodoItem from "./TodoItem";
import InputTodo from "./InputTodo";
import Alert from "./Alert";
import Header from "./Header";

class TodoContainer extends React.Component {
  state = {
    todos: todos,
    alert: { show: false, msg: "", type: "success" },
  };
  showAlert = (show = false, type = "", msg = "") => {
    this.setState({
      alert: { show, type, msg },
    });
  };
  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    this.showAlert(true, "danger", "item removed");
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  addTodoItem = (title) => {
    this.showAlert(true, "success", "item added to the list");
    const newTodo = {
      id: new Date().getTime().toString(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.alert.show && (
          <Alert {...this.state.alert} removeAlert={this.showAlert} />
        )}
        <Header todosLength={this.state.todos.length} />
        <div className="todo-list">
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
            />
          ))}
        </div>
        <InputTodo addTodoProps={this.addTodoItem} emptyAlert={this.showAlert} />
      </div>
    );
  }
}
export default TodoContainer;
