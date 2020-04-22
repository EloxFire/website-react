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
// import Home from './assets/components/blog/Home.jsx';
import Footer from './assets/components/Footer.jsx';
import Devdeas from './assets/components/Devdeas.jsx';

// Blinxon component
import Blinxon from './assets/components/trophy/Blinxon.jsx';
import BlinxonNav from './assets/components/trophy/BlinxonNav.jsx';
import BlinxonFooter from './assets/components/trophy/BlinxonFooter.jsx';

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
          <Route path="/(home|work|devdeas|blog|contact|arch)/" component={props =>
            <div>
              <Navbar leftTitles={["Home", "Work", "Blog", "Blinxon"]} rightTitles={["Devdeas", "Contact"]}/>
            </div>
          }/>
          <Switch>

            <Route path="/" exact component={props =>
              <div>
                <Navbar leftTitles={["Home", "Work", "Blog", "Blinxon"]} rightTitles={["Devdeas", "Contact"]}/>
                <HeaderContent quote={["Student | Junior Web Developper"]}/>
                <TechContent/>
                <Me/>
                <Footer/>
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
                <Navbar leftTitles={["Home", "Work", "Blog", "Blinxon"]} rightTitles={["Devdeas", "Contact"]}/>
                <Work/>
              </div>
            }/>

            <Route path="/blog" component={props =>
              <div>
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
                <BlinxonNav/>
                <Blinxon/>
                <BlinxonFooter/>
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
          <Route path="/(home|work|devdeas|blog|contact|arch)/" component={props =>
            <div>
              <Footer/>
            </div>
          }/>
        </div>
      </Router>
    )
  }
}

export default App;
