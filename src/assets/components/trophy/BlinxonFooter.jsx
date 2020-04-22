import React, {Component} from 'react';
import '../../sass/trophy/footer.scss';

class BlinxonFooter extends Component{
  render(){
    let copy = '©';
    return(
      <div id="bfooter" className="d-flex flex-row align-items-center justify-content-center footer">
        <p>{copy} 2020 | Enzo Avagliano | All right reserved</p>
      </div>
    )
  }
}
export default BlinxonFooter;
