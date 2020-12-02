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
        {t('welcome')}
      </div>
    </div>
  )
}

export default withNamespaces()(Home);
