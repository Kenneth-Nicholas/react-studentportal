import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {
        email: '',
        password: ''
    }

    signInSubmitHandler = (event) => {
      event.preventDefault();
      const studentLogin = {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('http://localhost:8080/loginStudent', studentLogin)
      
      .then( (response) => {
        // This line below gets the user credentials from the Spring backend application.
        const loggedInUser = response.data;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        // Now we have a logged in user stored in javascript memory while the application is running.
        
        this.props.history.push('/home'); // changed this from '/' to '/home'

        // Pushes the user to the home page, we are going to create an additional route so that if the user is logged in, their home
        // page doesn't look like the signup page that people see by default when they type in the main URL.
      })
    }

    signInChangeHandler = (event) =>   
    {
        const name = event.target.name;
        const value = event.target.value;
        this.setState( {
            [name]:value // changed from [name]:event.target.value
        })
    }

    signOut = (event) =>{
      localStorage.removeItem('loggedInUser');
      this.props.history.push('/');
    }

    render() {
      let links =(
        <React.Fragment>
        <li className="nav-item">
           <Link to="/about-us" id="whiteLinks3" className="margin-right-5px"> About Us </Link>
        </li>
        <li className="nav-item"> 
              <Link to ="/sign-up" id="whiteLinks4" className="margin-right-5px"> Sign Up</Link>
        </li>
        </React.Fragment>
      );


      let headerDefault = (
        <React.Fragment>
          <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0">
            <input onChange ={this.signInChangeHandler} id="whiteLinks" name="email" type="text" className="margin-right-5px" placeholder="Email" />  
            <input onChange ={this.signInChangeHandler} id="whiteLinks2" name="password" type="password" className="margin-right-5px"placeholder="Password" />
            <button className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
          </form>
        </React.Fragment>
      )

      //if user is logged in show different links
      if(localStorage.getItem('loggedInUser')){
        links = (
           <React.Fragment>
           <li className="nav-item">
              <Link to="/about-us" className="margin-right-5px"> About Us </Link>
           </li>
           <li className="nav-item">
              <Link to ="/" className="margin-right-5px"> Setting</Link>
          </li>
        </React.Fragment>
        );

        headerDefault = (
          <React.Fragment>
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />    
              <button className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
              <button onClick={this.signOut} className="nav-bar-button-custom btn btn-outline-success my-2 my-sm-0" type="text">Sign Out</button>
          </React.Fragment>
        )
      }

      return (            
          <header>
          <nav className="nav-bar-custom navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a className=" navbar-brand" id="studentPortal" href="#">Student Portal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">    
              <ul className="navbar-nav mr-auto">
                    {links}
              </ul>
                {headerDefault}
            </div>
          </nav>
          </header>  
      );
    }
}

export default Header;