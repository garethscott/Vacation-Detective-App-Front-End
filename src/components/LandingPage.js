import React from "react";
import { Link } from "react-router-dom";


class LandingPage extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state.email);
    console.log(this.state.password);
    return (
      <div className="signin-content-box">
        <h1>Welcome to Vacation Detective</h1>
        <form>
          <h3>Email:</h3>
          <input type="text" name="email" onChange={this.handleChange} />
          <h3>Password:</h3>
          <input type="password" name="password" onChange={this.handleChange} />
          <br />
          <button className="submit-btn" type="submit">
            Submit
          </button>
          <Link to="/signup">
            <h3>Sign up</h3>
          </Link>
        </form>
      </div>
    );
  }
}

export default LandingPage;
