import React from "react";

const Header = (props) => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em",
  }
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>To-do's App</h1>
      <p style={{ fontSize: "19px" }}>You have <strong>{props.todosLength}</strong> to-do's in the list</p>
    </header>
  )
}

export default Header;