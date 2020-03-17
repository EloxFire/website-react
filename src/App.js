import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';
import TrophyHeader from './assets/components/trophy/TrophyHeader.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar leftTitles={["Home", "Work", "Blog"]} rightTitles={["Contact", "4L Trophy"]}/>
        <Switch>
          <Route path="/" exact component={props => <HeaderContent quote={["Student | Junior Web Developper"]}/> }/>
          <Route path="/" exact component={props => <TechContent/>}/>

          <Route path="/blinxon" component={TrophyHeader}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
