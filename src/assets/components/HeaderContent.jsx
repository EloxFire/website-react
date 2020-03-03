import React from 'react';

import logoEA from '../img/ea.svg'
import "../sass/headerContent.scss";

interface HeaderContentProps{
  quote: String[],
}

const HeaderContent: React.FC<HeaderContentProps> = ({quote}) => (
  <div className="headerContentBody col-12">
    <div className="headerContentContainer col-12 d-flex flex-row align-items-center justify-content-center">
      <div className="d-flex flex-row align-items-center">
        <img className="headerContentLogo" src={logoEA} alt="Enzo Avagliano's logo"/>
        <div className="headerContentSeparator ml-3 mr-3"></div>
      </div>
      <div className="d-flex flex-column">
        <h1 className="headerContentTitle"><span>E</span>nzo <span>A</span>vagliano</h1>
        {quote.map(function(item,index){return <p className="headerContentSubtitle" key={index}>{item}</p>})}
      </div>
    </div>
  </div>
)

export default HeaderContent;
