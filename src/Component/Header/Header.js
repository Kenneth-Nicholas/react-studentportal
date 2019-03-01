import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        email: '',
        password: ''
    }

    signInChangeHandler = (event)=>   
    {
        const name = event.target.name;
        const value = event.target.value;
        this.setState( {
            [name]:event.target.value
        })
    }

    render() {
        return (            
            <header>
            <nav className="nav-bar-custom navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <a className="navbar-brand" href="#">Student Portal</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/about-us">AboutUs <span className="sr-only">(current)</span></Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/sign-up/">SignUp</Link>
                  </li>
                </ul>
                <form className="form-inline mt-2 mt-md-0">
                <input onChange ={this.signinChangeHandler} name="email" type="text" className="margin-right-5px" placeholder="Email" />  
                <input onChange ={this.signinChangeHandler} name="password" type="password" className="margin-right-5px"placeholder="Password" />
                  {/*  ***    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>   ***     */}
                  <button className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
                </form>
              </div>
            </nav>
          </header>  
        );
    }
}

export default Header;