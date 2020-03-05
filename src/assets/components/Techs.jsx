import React from 'react';

import '../sass/tech.scss';

import githubLogo from '../img/github.svg';
import htmlLogo from '../img/html.svg';
import cssLogo from '../img/css.svg';
import reactLogo from '../img/react.svg';
import javaLogo from '../img/java.svg';

interface TechProps{

}

const Techs:React.FC<TechProps> = ({}) => (
  <div className="techContentBody col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column">
    <div className="justify-content-center">
      <h1 class="mt-3 heading heading--stroke heading--shadow">Tech that I use</h1>
    </div>
    <div className="tech-images-container d-flex flex-wrap align-items-center justify-content-around col-12">

      <div className="d-flex flex-column text-center">
        <img className="techImage" src={githubLogo} alt="Github logo"/>
        <div className="techTitleContainer pt-3">
          <span className="heading heading--stroke heading--shadow">/</span><span>Github</span>
        </div>
      </div>

      <div className="d-flex flex-column text-center">
        <img className="techImage" src={htmlLogo} alt="Html logo"/>
        <div className="techTitleContainer pt-3">
          <span className="heading heading--stroke heading--shadow">/</span><span>HTML</span>
        </div>
      </div>

      <div className="d-flex flex-column text-center">
        <img className="techImage" src={cssLogo} alt="CSS logo"/>
        <div className="techTitleContainer pt-3">
          <span className="heading heading--stroke heading--shadow">/</span><span>CSS</span>
        </div>
      </div>

      <div className="d-flex flex-column text-center">
        <img className="techImage" src={reactLogo} alt="React logo"/>
        <div className="techTitleContainer pt-3">
          <span className="heading heading--stroke heading--shadow">/</span><span>React</span>
        </div>
      </div>

      <div className="d-flex flex-column text-center">
        <img className="techImage" src={javaLogo} alt="Java logo"/>
        <div className="techTitleContainer pt-3">
          <span className="heading heading--stroke heading--shadow">/</span><span>Java</span>
        </div>
      </div>

    </div>
  </div>
)

export default Techs;
