import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Title from './sub/Title';
import logo from '../img/logos/ea.svg';
import '../sass/pages.scss';

class About extends Component{
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
          <div className="col-12 col-lg-6 p-3 d-flex flex-column align-items-center align-items-lg-start">
            <Title title="Je suis développeur"/>
          </div>
          <div className="col-12 col-lg-6 p-3 d-flex flex-column align-items-center align-items-lg-start">
            <Title title="Je suis passioné"/>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
