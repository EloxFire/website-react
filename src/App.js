import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';
import Me from './assets/components/Me.jsx';
import Work from './assets/components/Work.jsx';
import BlogNav from './assets/components/blog/BlogNav.jsx';
import Footer from './assets/components/Footer.jsx';

import TrophyHeader from './assets/components/trophy/TrophyHeader.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar leftTitles={["Home", "Work", "Blog", "Blinxon"]} rightTitles={["Contact"]}/>
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

          <Route path="/Work" component={props =>
            <div>
              <Work/>
            </div>
          }/>

          <Route path="/Blog" component={props =>
            <div>
              <BlogNav titles={["First year", "Second year"]} where={["firstyear", "secondyear"]}/>
            </div>
          }/>

          <Route path="/Blinxon" component={props =>
            <div>
              <TrophyHeader/>
            </div>
          }/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
