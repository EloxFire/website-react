import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';

class App extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
    return (
      <div id="website">
        <Router>

          <Navbar titles={["About", "My work", "Blog", "Devdeas", "Blinxon"]}/>
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
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
