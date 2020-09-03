import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    password: null,
  };

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
    console.log(this.state.firstName);
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleUserName = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const response = await fetch(
      "http://localhost:4500/vacationdetective/v1/addUser",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );
    e.preventDefault();
    const data = await response.json();
    console.log(data);
  };

  render() {
    // console.log(this.state.firstName)
    // console.log(this.state.surname)
    // console.log(this.state.username)
    // console.log(this.state.email)
    // console.log(this.state.password)
    return (
      <div className="signup-form-box">
        <h1>Please fill out form below</h1>
        <form>
          <div className="main-form-box">
            <div className="left-form-box">
              <h3>Name:</h3>
              <input type="text" onChange={this.handleFirstName} />
              <h3>Surname:</h3>
              <input type="text" onChange={this.handleLastName} />
              <h3>Username:</h3>
              <input type="text" onChange={this.handleUserName} />
            </div>
            <div className="right-form-box">
              <h3>Email:</h3>
              <input type="text" onChange={this.handleEmail} />
              <h3>Password:</h3>
              <input type="text" onChange={this.handlePassword} />
              <Link to="/home">
                <h3>Home</h3>
              </Link>
            </div>
          </div>
          <button
            className="submit-signup-btn"
            type="submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
