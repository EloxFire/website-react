import React, {Component} from 'react';
import '../sass/footer.scss';

class Footer extends Component{
  render(){
    let copy = '©';
    return(
      <div id="footer" className="footer text-center">
        <p>{copy} 2020 | Enzo Avagliano | All right reserved</p>
      </div>
    )
  }
}
export default Footer;
