import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

class SignUp extends Component {

  state = {
    firstName: '',
    lastName: '',
    age: '',
    telephone: '',
    email: '',
    password: ''
  }

  signUpSubmitHandler = (event) =>
  {
    event.preventDefault();
    const student = {
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      age:this.state.age,
      telephone:this.state.telephone,
      email:this.state.email,
      password:this.state.password
    }
    axios.post("http://localhost:8080/submitStudentDetails", student)
    .then( (response) => {
      this.props.history.push('/thank-you');
    })
  }

  signUpChangeHandler = (event)=>   
  {
      const name = event.target.name;
      const value = event.target.value;
      this.setState( {
          [name]:event.target.value
      })

  }

  render() {
    return (
      <form className="container" onSubmit={this.signUpSubmitHandler}>
        <h1>Sign Up Below!</h1>
        <div className="form-row">
          <div className="col">
            <input name="firstName" type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col">
            <input name="lastName" type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input name="age" type="text" className="form-control" placeholder="Age" />
          </div>
          <div className="col">
            <input name="telephone" type="text" className="form-control" placeholder="Telephone" />
          </div>
        </div>

        <div className="form-row">
          <div className="col">
            <input name="email" type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="col">
            <input name="password" type="password" className="form-control" placeholder="Password" />
          </div>
        </div>

        <button className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>

      </form>
    );
  }
}

export default SignUp;