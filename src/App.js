import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

import Login from './components/Login';

class App extends Component{
  render(){
    return (
      <div id="website">
        <Router>

          <Navbar titles={["About", "My work", "Blog", "Devdeas", "Blinxon", "Contact"]}/>
          <Switch>
            <Route path="/" exact component={props =>
              <div>
                <About/>
              </div>
            }/>

            <Route path="/home" component={props =>
              <div>
                <About/>
              </div>
            }/>

            <Route path='/about' component={() => {
              window.location.href = '/home';
              return null;
            }}/>

            <Route path='/devdeas' component={() => {
              window.location.href = 'https://devdeas.enzoavagliano.fr';
              return null;
            }}/>

            <Route path='/blog' component={() => {
              window.location.href = 'https://blog.enzoavagliano.fr';
              return null;
            }}/>

            <Route path='/blinxon' component={() => {
              window.location.href = 'https://blinxon.enzoavagliano.fr';
              return null;
            }}/>

            <Route path="/login" component={props =>
              <div>
                <Login/>
              </div>
            }/>
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
