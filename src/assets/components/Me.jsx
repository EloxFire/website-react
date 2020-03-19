import React from 'react';
import '../sass/me.scss';

interface MeProps{
  quote: String[];
}

const Me:React.FC<MeProps> = ({quote}) => (
  <div id="meBody" className="d-flex flex-row">
    <div className="col-6 d-flex flex-column">
      <div className="justify-content-center">
        <h1 className="sectionTitlePurple">About me.</h1>
      </div>
      <div className="presText">
        <p>
          Hi ! I'm Enzo Avagliano, I'm a computer engineering student at Ynov Campus located in Aix-en-Provence and a Junior Web Developper.
        </p>

        <div className="presNumbers d-flex flex-wrap justify-content-around">
          <div className="m-3 d-flex flex-column">
            <h2>Test</h2>
            <p>blahblah</p>
          </div>
          <div className="m-3 d-flex flex-column">
            <h2>Test</h2>
            <p>blahblah</p>
          </div>
          <div className="m-3 d-flex flex-column">
            <h2>Test</h2>
            <p>blahblah</p>
          </div>
          <div className="m-3 d-flex flex-column">
            <h2>Test</h2>
            <p>blahblah</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-6 d-flex flex-column">
      <div className="h-25 col-8 ml-5">
        <div className="d-flex flex-column">
          <h2>Test</h2>
          <p>blahblah</p>
        </div>
        <div className="d-flex flex-column">
          <h2>Test</h2>
          <p>blahblah</p>
        </div>
        <div className="d-flex flex-column">
          <h2>Test</h2>
          <p>blahblah</p>
        </div>
        <div className="d-flex flex-column">
          <h2>Test</h2>
          <p>blahblah</p>
        </div>
      </div>
    </div>
  </div>
)

export default Me;
