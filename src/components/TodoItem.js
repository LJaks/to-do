import React from "react";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "grey",
      opacity: 0.4,
      textDecoration: "line-through",
    };
    const { completed, id, title } = this.props.todo;
    return (
      <li className="todo-item">
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>
          <input
            type="text"
            id={id}
            value={title}
            onChange={(e) => {
              this.props.editTodoProps(e.target.value, id);
            }}
          />
        </span>
        <button onClick={() => this.props.deleteTodoProps(id)}>X</button>
      </li>
    );
  }
}

export default TodoItem;
