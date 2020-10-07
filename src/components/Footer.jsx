import React, { Component } from 'react';
import '../sass/pages.scss';

class Footer extends Component{
  render(){
    return(
      <div id="footer" className="d-flex flex-row align-items-center justify-content-center m-0 p-0">
        <p className="p-0 m-0">&#169; Enzo Avagliano 2020</p>
      </div>
    )
  }
}

export default Footer;
