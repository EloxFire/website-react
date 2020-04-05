import React, {Component} from 'react';
import '../../sass/blog/blog.scss';

import linkedin from '../../img/blog/linkedin.svg';
import cv from '../../img/blog/cv.svg';
import resume from '../../img/cv.pdf';

class Home extends Component{
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
          <div className="col-12">
            <div className="proLinksContainer col-5 d-flex flex-row justify-content-around">
              <a href={resume} download><img src={cv} alt="cv logo"/></a>
              <a href="https://www.linkedin.com/in/enzo-avagliano" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin logo"/>
              </a>
            </div>
            <div className="blogSeparator col-8"></div>
            <div className="blogNavContainer">
              test
            </div>
          </div>
        </div>

        {/*<div className="d-flex flex-column justify-content-center align-items-center title-container p-5">
          <h6>Comming soon . . .</h6>
          <h1>PAGE UNDER DEVELOPMENT</h1>
        </div>*/}
      </div>
    )
  }
}

export default Home;
