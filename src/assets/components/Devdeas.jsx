import React, {Component} from 'react';
import Showcase from './devdeas/Showcase.jsx';
import UsersPage from './devdeas/Users.jsx';

class Devdeas extends Component{
  render(){
    return(
      <div id="devdeas">
        <Showcase/>
      </div>
    )
  }
}

export default Devdeas;
