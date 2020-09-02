import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage'
import SignUpForm from './components/SignUpForm'



class App extends React.Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <div className="wrapper">
            <Route path="/home" component={LandingPage} />
            <Route path="/signup" component={SignUpForm} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
