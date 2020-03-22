import React from 'react';
import '../sass/tech.scss';

import AllCards from './AllCards.jsx';
import {allCards} from './objects/card.js';

interface TechProps{
  quote: String[];
}

const Techs:React.FC<TechProps> = ({quote}) => (
  <div className="techContentBody col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 d-flex flex-column">
    <h1 className="ml-3 sectionTitlePurpleWithBorder">Tech that I use.</h1>
    <div className="d-flex flex-wrap col-12 justify-content-around mt-5">
      {allCards.map((card, index) => {
        return(
          <AllCards card={card} key={index}/>
        )
      })}
    </div>

  </div>
)

export default Techs;
