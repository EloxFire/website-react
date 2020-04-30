import React, {Component} from 'react';
import PreRelease from './PreRelease.jsx';
import Squad from './Squad.jsx';
import Edd from './Edd.jsx';
import HelpUs from './HelpUs.jsx';

class Blinxon extends Component{
  render(){
    return(
      <div className="">
        <PreRelease/>
        <Squad/>
        <Edd/>
        <HelpUs/>
      </div>
    )
  }
}

export default Blinxon;
