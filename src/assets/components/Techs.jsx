import React from 'react';

import '../sass/tech.scss';

import githubLogo from '../img/githublogo.svg';
import htmlLogo from '../img/htmllogo.svg';
import cssLogo from '../img/csslogo.svg';
import reactLogo from '../img/reactlogo.svg';

interface TechProps{

}

const Techs:React.FC<TechProps> = ({}) => (
  <div className="techContentBody col-12 d-flex justify-content-center">
    <h1 class="mt-3 heading heading--stroke heading--shadow">Tech that I use</h1>
  </div>
)

export default Techs;
