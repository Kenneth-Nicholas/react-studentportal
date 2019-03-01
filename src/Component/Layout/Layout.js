import React, { Component } from 'react';
import Header from '../Header/Header';
import SignUp from '../SignUp/SignUp';
import AboutUs from '../AboutUs/AboutUs';
import ThankYou from '../ThankYou/ThankYou';
import {Route} from 'react-router-dom';

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

        return (
            <React.Fragment>
                <Header />
                {routes}
                <Route exact path="/about-us" component={AboutUs} />
            </React.Fragment>
        );
    }
}

export default Layout;