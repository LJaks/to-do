import React from "react";
// import { FaGlassWhiskey } from "react-icons/fa";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <div className="todo-list">
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </div>
    );
  }
}

export default TodosList;
