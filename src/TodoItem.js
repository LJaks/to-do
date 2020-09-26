import React from 'react';
// import './TodoItems.css';


function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
}
  return (
    <div className="todo-item">
      <input type="checkbox" onChange={()=>props.handleChange(props.item.id)} checked={props.item.completed} />
     <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
