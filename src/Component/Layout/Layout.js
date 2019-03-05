import React, { Component } from 'react';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import AboutUs from '../AboutUs/AboutUs';
import ThankYou from '../ThankYou/ThankYou';
import Home from '../Home/Home';
import {Route, withRouter} from 'react-router-dom';

class Layout extends Component {
    render() {

        let routes = (
            <React.Fragment>
                <Route exact path="/thank-you" component={ThankYou} />
                <Route exact path="/" component={SignUp} />
                <Route exact path="/sign-up" component={SignUp} />
            </React.Fragment>
        ); 

        // Add if statement to check if user is logged in
        if(localStorage.getItem('loggedInUser')){
            routes = (
                <React.Fragment>
                    <Route exact path="/" render={(props)=> <Home {...props} /> } />
                    <Route exact path="/home" render={(props)=> <Home {...props} /> } />
                </React.Fragment>
            )
        }
        // 

        return (
            <React.Fragment>
                <Header {...this.props} />
                {routes}
                <Route exact path="/about-us" component={AboutUs} />
            </React.Fragment>
        );
    }
}

export default withRouter(Layout);