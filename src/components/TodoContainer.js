import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import Alert from "./Alert";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
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
      id: uuidv4(),
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
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
        <InputTodo addTodoProps={this.addTodoItem} />
      </div>
    );
  }
}
export default TodoContainer;
