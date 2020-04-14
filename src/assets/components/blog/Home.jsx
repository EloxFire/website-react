import React, {Component} from 'react';
import '../../sass/blog/blog.scss';

// import linkedin from '../../img/blog/linkedin.svg';
// import cv from '../../img/blog/cv.svg';
// import resume from '../../img/cv.pdf';

class Home extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Blog";
  }

  render(){
    return(
      <div id="trophyHeader">
        <div className="d-flex flex-column justify-content-center align-items-center title-container p-5">
          <h6>Comming soon . . .</h6>
          <h1>PAGE UNDER DEVELOPMENT</h1>
        </div>
      </div>
    )
  }
}

export default Home;
