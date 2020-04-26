import React, {Component} from 'react';
import PreRelease from './PreRelease.jsx';
import Squad from './Squad.jsx';
import Edd from './Edd.jsx';

class Blinxon extends Component{
  render(){
    return(
      <div className="">
        <PreRelease/>
        <Squad/>
        <Edd/>
      </div>
    )
  }
}

export default Blinxon;
