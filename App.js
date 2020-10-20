import React from 'react';
import Navbar from './Components/NavBar';
import './App.css';
import Home from './Components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './Components/pages/AboutMe';
import Projects from './Components/pages/Projects';
import SignUp from './Components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutMe' component={AboutMe} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
