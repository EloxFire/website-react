import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../sass/footer.scss';

class Footer extends Component{
  render(){
    let copy = '©';
    return(
      <div id="footer" className="footer text-center">
        <p>{copy} 2020 | Enzo Avagliano | All right reserved | <Link to="Arch">Plan du site</Link></p>
      </div>
    )
  }
}
export default Footer;
