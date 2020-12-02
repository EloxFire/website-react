import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends Component{

  render(){
    return (
      <div id="website" className="">
        <Router>

          <Navbar/>
          <Switch>
            <Route path="/" exact component={props =>
              <div>
                <Home/>
              </div>
            }/>

            <Route path="/home" component={props =>
              <div>
                <Home/>
              </div>
            }/>

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
          </Switch>
          <Footer/>
        </Router>
      </div>
    )
  }
}

export default App;
