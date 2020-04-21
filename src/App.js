import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Website index page
import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';
import Me from './assets/components/Me.jsx';

// Website pages
import Work from './assets/components/Work.jsx';
import Contact from './assets/components/Contact.jsx';
import Home from './assets/components/blog/Home.jsx';
import Footer from './assets/components/Footer.jsx';
import Devdeas from './assets/components/Devdeas.jsx';

// Blinxon component
import Blinxon from './assets/components/trophy/Blinxon.jsx';

// Coming soon page
import ComingSoon from './assets/components/ComingSoon.jsx';

class App extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
    return (
      <Router>
        <div>
          <Navbar leftTitles={["Home", "Work", "Blog", "Blinxon"]} rightTitles={["Devdeas", "Contact"]}/>
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
                {/*<Home/>*/}
                <ComingSoon/>
              </div>
            }/>

            <Route path="/contact" component={props =>
              <div>
                <Contact/>
              </div>
            }/>

            <Route path="/blinxon" component={props =>
              <div>
                <Blinxon/>
                {/*<ComingSoon/>*/}
              </div>
            }/>

            <Route path="/devdeas" component={props =>
              <div>
                <Devdeas/>
              </div>
            }/>

            <Route path="/arch" component={props =>
              <div>
                {/*<Arch/>*/}
                <ComingSoon/>
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
