import React from 'react';

import Navbar from './assets/components/Navbar.jsx';
import HeaderContent from './assets/components/HeaderContent.jsx';

function App() {
  return (
    <div>
      <Navbar leftTitles={["Home", "Work", "Blog"]} rightTitles={["Contact", "4L Trophy"]}/>
      <HeaderContent quote={["Student | Junior Web Developper"]}/>
    </div>
  );
}

export default App;
