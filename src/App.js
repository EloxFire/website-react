import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';
import Me from './assets/components/Me.jsx';
import Work from './assets/components/Work.jsx';
import Contact from './assets/components/Contact.jsx';
//import BlogNav from './assets/components/blog/BlogNav.jsx';
import Home from './assets/components/blog/Home.jsx';
import Footer from './assets/components/Footer.jsx';

import TrophyHeader from './assets/components/trophy/TrophyHeader.jsx';

class App extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
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

            <Route path="/home" component={props =>
              <div>
                <HeaderContent quote={["Student | Junior Web Developper"]}/>
                <TechContent/>
                <Me/>
              </div>
            }/>

            <Route path="/work" component={props =>
              <div>
                <Work/>
              </div>
            }/>

            <Route path="/blog" component={props =>
              <div>
                {/*<BlogNav titles={["First year", "Second year"]} where={["firstyear", "secondyear"]}/>*/}
                <Home/>
              </div>
            }/>

            <Route path="/contact" component={props =>
              <div>
                <Contact/>
              </div>
            }/>

            <Route path="/blinxon" component={props =>
              <div>
                <TrophyHeader/>
              </div>
            }/>

            <Route path="/arch" component={props =>
              <div>
                {/*<Arch/>*/}
              </div>
            }/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
