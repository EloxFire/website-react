import React, {Component} from 'react';
import DevdeasDescritpion from './devdeas/DevdeasDescritpion.jsx';
import IdeaSumit from './devdeas/IdeaSumit.jsx';
import IdeaList from './devdeas/IdeaList.jsx';

class Devdeas extends Component{
  render(){
    return(
      <div id="devdeas">
        <DevdeasDescritpion/>
        <IdeaSumit/>
        <IdeaList/>
      </div>
    )
  }
}

export default Devdeas;
