import React, {Component} from 'react';
import '../sass/footer.scss';

class Footer extends Component{
  render(){
    let copy = '©';
    return(
      <div id="footer" className="d-flex flex-row align-items-center justify-content-center footer">
        <p>{copy} 2020 | Enzo Avagliano | All rights reserved</p>
      </div>
    )
  }
}
export default Footer;
