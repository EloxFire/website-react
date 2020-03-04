import React from 'react';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';
import TechContent from './assets/components/Techs.jsx';

function App() {
  return (
    <div>
      <Navbar leftTitles={["Home", "Work", "Blog"]} rightTitles={["Contact", "4L Trophy"]}/>
      <HeaderContent quote={["Student | Junior Web Developper"]}/>
      <TechContent/>
    </div>
  );
}

export default App;
