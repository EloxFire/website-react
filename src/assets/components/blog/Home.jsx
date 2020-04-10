import React, {Component} from 'react';
import '../../sass/blog/blog.scss';

import linkedin from '../../img/blog/linkedin.svg';
import cv from '../../img/blog/cv.svg';
import resume from '../../img/cv.pdf';

class Home extends Component{
  componentDidMount(){
    document.title = "Enzo Avagliano - Blog";
  }

  render(){
    return(
      <div id="blog" className="">
        <h1 className="sectionTitlePurpleWithBorder">Welcome on the blog section !</h1>

        <div className="p-5">
          <p>
            Here, you have access to my internship reports which validated my school years at Ynov Campus.
            <br/>As a student at ynov, I have to carry out 6 weeks of internship in an IT company each year (except for the first year) in order to move on to the next year.
            <br/>Before seeing those reports, here's a link to download my resume and a link to my linkedin account :
          </p>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="col-8">
            <h3 className="littleSectionTitlePurple">Pro links.</h3>
            <a className="blogLinkImage" href=""><img src={cv} alt="cv logo"/></a>
            <a className="blogLinkImage" href=""><img src={linkedin} alt="linkedin logo"/></a>
          </div>
        </div>
        <div className="blogSeparator"></div>

        {/*<div className="d-flex flex-column justify-content-center align-items-center title-container p-5">
          <h6>Comming soon . . .</h6>
          <h1>PAGE UNDER DEVELOPMENT</h1>
        </div>*/}
      </div>
    )
  }
}

export default Home;
