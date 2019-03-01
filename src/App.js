import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Component/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout /> 
      </BrowserRouter>
    );
  }
}

export default App;
