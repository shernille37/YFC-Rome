import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Members from '../src/components/Members';
import Contacts from './components/Contacts';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/members' component={Members} />
          <Route exact path='/contacts' component={Contacts} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
