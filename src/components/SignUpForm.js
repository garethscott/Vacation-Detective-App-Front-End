import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SignUpForm extends React.Component {
    state = {
        firstName: '',
        surname: '',
        username: '',
        email: '',
        password: ''
    }

    handleChange = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const newForm = {
            firstName: this.state.firstName,
            surname: this.state.surname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        await axios.post('', newForm)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        this.setState({
            firstName: '',
            surname: '',
            username: '',
            email: '',
            password: ''
        })

    }

    render() {
        // console.log(this.state.firstName)
        // console.log(this.state.surname)
        // console.log(this.state.username)
        // console.log(this.state.email)
        // console.log(this.state.password)
        return (
            <div className="signup-form-box">
                <h1>Please fill out form below</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="main-form-box">
                        <div className="left-form-box">
                            <h3>Name:</h3>
                            <input type="text" name="firstName" onChange={this.handleChange} />
                            <h3>Surname:</h3>
                            <input type="text" name="surname" onChange={this.handleChange} />
                            <h3>Username:</h3>
                            <input type="text" name="username" onChange={this.handleChange} />
                        </div>
                        <div className="right-form-box">
                            <h3>Email:</h3>
                            <input type="text" name="email" onChange={this.handleChange} />
                            <h3>Password:</h3>
                            <input type="text" name="password" onChange={this.handleChange} />
                            <Link to="/home"><h3>Home</h3></Link>
                        </div>
                    </div>
                    <button className="submit-signup-btn" type="submit">Submit</button>
                </form>

            </div>
        )
    }
}

export default SignUpForm;