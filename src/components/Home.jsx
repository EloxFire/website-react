import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { withNamespaces } from 'react-i18next';

import LangSelector from './sub/LangSelector';

import logo from '../img/logos/ea.svg';
import pp from '../img/cvpp.png';
import resume from '../img/CV_AVAGLIANO.pdf';
import '../sass/home.scss';

function Home({ t }){
  return(
    <div id="home" className="">
      <div className="d-flex flex-column align-items-center">
        <LangSelector/>
        <div className="test d-flex flex-column justify-content-center">
          <h1><span>Enzo Avagliano</span></h1>
          <h1><span>Développeur freelance</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quasi ducimus eos, ab id error architecto, vel quae, non et repellat minus iste asperiores qui saepe voluptas ad, necessitatibus assumenda.</p>
        </div>
      </div>
    </div>
  )
}

export default withNamespaces()(Home);
