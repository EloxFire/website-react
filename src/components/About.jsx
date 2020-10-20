import React, { Component } from 'react';
import * as Icon from 'react-bootstrap-icons';
import Title from './sub/Title';
import Progressbar from './sub/Progressbar';

import logo from '../img/logos/ea.svg';
import pp from '../img/cvpp.png';
import resume from '../img/CV_AVAGLIANO.pdf';
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
              <div className="col-12 col-lg-6 d-flex flex-row justify-content-center mb-5 mb-lg-0"><img style={{width:"80%",border:"5px solid #9146FF",borderRadius:'50%'}} src={pp} alt="Enzo Avagliano's pp"/></div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <div className="w-100 d-flex flex-row justify-content-center justify-content-lg-start">
                  <h3>Enzo Avagliano</h3>
                  <hr/>
                </div>
                <p style={{fontWeight:"bold"}}>
                  I'm a 20 years old french computer engineering student in his 3rd year at Ynov Campus, in Aix-en-Provence. I'm very curious and want to learn very various things.
                  <br/>I'm involved in many projects and try to develop mine. Fun, joy of life and efficiency are priorities in my work.
                </p>

                <a download href={resume}><button className="btn btn-primary btn-lg bg-purple m-1"><Icon.CloudDownloadFill color="white"/> Download my resume.</button></a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 p-3 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
            <Title title="My main skills"/>
            <div className="h-75 w-100 d-flex flex-column">
              <div className="d-flex flex-column h-100 justify-content-around">
                {/*Niveaux : 0 - 30 Débutant 35 - 65 Intermétiaire 65 - 100 - Avancé*/}
                <Progressbar title="Levels legend" value="100" level="0-35% = Beginner | 35-65% = Intermediate | 65-100% = Advanced"/>
                <Progressbar title="ReactJS" logo="react.svg" value="65" level="Intermediate"/>
                <Progressbar title="NodeJS" logo="node.svg" value="45" level="Beginner"/>
                <Progressbar title="HTML" logo="html.svg" value="90" level="Advanced"/>
                <Progressbar title="SASS/CSS" logo="sass.svg" value="90" level="Advanced"/>
                <Progressbar title="Git" logo="github.svg" value="75" level="Advanced"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
