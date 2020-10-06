import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Title from './sub/Title';
import Progressbar from './sub/Progressbar';

import logo from '../img/logos/ea.svg';
import pp from '../img/cvpp.png';
import '../sass/pages.scss';

class About extends Component{

  componentDidMount(){
    document.title = "Enzo Avagliano - Home";
  }

  render(){
    return(
      <div id="about" className="">
        <div className="landing">
          <div className="h-100 col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <div className="mb-3 mb-lg-0 mr-lg-3"><img className="landing-logo" src={logo} alt="Enzo Avagliano' logo"/></div>
            <div className="d-flex flex-column align-items-center align-items-lg-start">
              <h1>Enzo Avagliano</h1>
              <span>Student | Junior web developer</span>
            </div>
          </div>
        </div>

        <div className="infosAbout col-12 d-flex flex-column flex-lg-row">
          <div className="col-12 col-lg-6 p-3 d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex flex-column flex-lg-row">
              <div className="col-12 col-lg-6 d-flex flex-row justify-content-center mb-5 mb-lg-0"><img style={{width:"80%",border:"5px solid #9146FF",borderRadius:'50%'}} src={pp} alt="Enzo Avagliano's profile picture"/></div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <div className="w-100 d-flex flex-row justify-content-center justify-content-lg-start">
                  <h3>Enzo Avagliano</h3>
                  <hr/>
                </div>
                <p style={{fontWeight:"bold"}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam iure, neque maiores repellat excepturi cupiditate vitae a aperiam iste. Facilis vero alias laborum ipsum cumque delectus sapiente dignissimos voluptatum praesentium.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-3 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
            <Title title="Mes compétences"/>
            <div className="h-100 w-100 d-flex flex-column">
              <div className="d-flex flex-column">
                <Progressbar title="ReactJS" logo="React" value="60"/>
                <Progressbar title="NodeJS" logo="Node" value="50"/>
                <Progressbar title="HTML" logo="Html" value="50"/>
                <Progressbar title="SASS" logo="Sass" value="50"/>
                <Progressbar title="Git" logo="Git" value="50"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
