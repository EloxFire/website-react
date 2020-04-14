import React, {Component} from 'react';
import '../../sass/devdeas/showcase.scss';

class Showcase extends Component{
  render(){
    return(
      <div id="showcase" className="">
        <div className="devdeasTitleBig text-center pt-3">
          <h1><span>&#60;&#47;</span>Devdeas<span>&#62;</span></h1>
          <p>Share & develop your coding ideas !</p>
        </div>
        <div className="d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
          <div className="what col-11 col-xs-11 col-sm-11 col-md-3 col-lg-3">
            <h1 className=""><span>W</span>hat it is ?</h1>
            <p>
              <span>&#60;&#47;</span><span className="devdeasP">Devdeas</span><span>&#62;</span> is an online platform, where anyone can share ideas of programs, games, tools to develop.
              <br/>Anyone can start developing an idea, and share its code on Devdeas.
              <br/><br/><button className="btn btn-primary" href="#">Start sharing now !</button>
            </p>
          </div>

          <div className="how col-11 col-xs-11 col-sm-11 col-md-8 col-lg-8">
            <h1 className=""><span>H</span>ow does it work ?</h1>
            <div className="stepTitles col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-around">
              <div>
                <h4>For users :</h4>
              </div>
              <div>
                <h4>For developpers :</h4>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="devSteps col-6">
                <div className="mt-5 d-flex flex-column">
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>1</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Click the "Add new idea" button</p>
                    </div>
                  </div>
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>2</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Enter the description of your idea</p>
                    </div>
                  </div>
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>3</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Share it with others !</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="userSteps col-6">
                <div className="mt-5 d-flex flex-column">
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>1</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Open a "follow ticket" from an idea</p>
                    </div>
                  </div>
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>2</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Enter your informations</p>
                    </div>
                  </div>
                  <div className="step m-2 p-4 d-flex flex-row align-items-center">
                    <div className="rounded d-flex justify-content-center align-items-center">
                      <h1>3</h1>
                    </div>
                    <div className="ml-5 d-flex flex-row align-items-center justify-content-center">
                      <p>Share your progress.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Showcase;
