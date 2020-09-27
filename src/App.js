import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
    return (
      <div id="website">
        <Router>
          <Switch>
            <Route path="/" exact component={props =>
              <div>
              </div>
            }/>

            <Route path="/home" component={props =>
              <div>
              </div>
            }/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
