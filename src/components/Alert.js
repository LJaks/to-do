import React from "react";

class Alert extends React.Component {
  componentDidMount = () => {
    const timeout = setTimeout(() => {
      this.props.removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  };
  render() {
    return <p className={`alert alert-${this.props.type}`}>{this.props.msg}</p>;
  }
}

export default Alert;
