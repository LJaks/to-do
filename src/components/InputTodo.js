import React from "react";

class InputTodo extends React.Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title === "") {
      return this.props.emptyAlert(true, "danger", "please add name");
    }
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Add To-do item"
            value={this.state.title}
            name="title"
            className="input-text"
            onChange={this.onChange}
          />
          <input type="submit" className="input-submit" value="Enter" />
        </form>
      </div>
    );
  }
}
export default InputTodo;
