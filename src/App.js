import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';
import Me from './assets/components/Me.jsx';

import TrophyHeader from './assets/components/trophy/TrophyHeader.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar leftTitles={["Home", "Work", "Blog"]} rightTitles={["Blinxon", "Contact"]}/>
        <Switch>

          <Route path="/" exact component={props =>
            <div>
              <HeaderContent quote={["Student | Junior Web Developper"]}/>
              <TechContent/>
              <Me/>
            </div>
          }/>

          <Route path="/Home" component={props =>
            <div>
              <HeaderContent quote={["Student | Junior Web Developper"]}/>
              <TechContent/>
              <Me/>
            </div>
          }/>

          <Route path="/Blinxon" component={props =>
            <div>
              <TrophyHeader/>
            </div>
          }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
