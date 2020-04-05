import React from 'react';

import '../../sass/trophy/header.scss';

interface HeaderPropsTrophy{
  quote: String[];
}
const TrophyHeader: React.FC<HeaderPropsTrophy> = ({quote}) => (
  <div id="trophyHeader">
    <div className="d-flex flex-column justify-content-center align-items-center title-container p-5">
      <h6>Comming soon . . .</h6>
      <h1>PAGE UNDER DEVELOPMENT</h1>
    </div>
  </div>
)

export default TrophyHeader;
