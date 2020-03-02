import React from 'react';

import Navbar from './assets/components/Navbar.jsx';

function App() {
  return (
    <div>
      <Navbar leftTitles={["Home", "Work", "Blog"]} rightTitles={["Contact", "4L Tropĥy"]}/>
    </div>
  );
}

export default App;
