import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';

import logo from '../img/logos/ea.svg';
import pp from '../img/cvpp.png';
import resume from '../img/CV_AVAGLIANO.pdf';
import '../sass/home.scss';

class Home extends Component{

  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
    return(
      <div id="home" className="">
        
      </div>
    )
  }
}

export default Home;
