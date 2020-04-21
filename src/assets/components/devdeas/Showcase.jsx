import React, {Component} from 'react';
import '../../sass/devdeas/showcase.scss';

class Showcase extends Component{
  render(){
    return(
      <div id="showcase" className="">
        <div className="titleContainer pt-2 col-12 text-center">
          <h1 className="devdeasMainTitle"><span>&#60;</span><span>&#47;</span>Devdeas<span>&#62;</span><span className="beta">Bêta</span></h1>
          <p className="devdeasMainSubtitle">Share and develop your coding ideas !</p>
        </div>

        <div className="rules mb-2 col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-around">
          <div className="bordered what p-2 col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <h1>What it is ?</h1>
            <p>
              <span>&#60;&#47;</span><span className="devdeasTitle">Devdeas</span><span>&#62;</span> is an online platform where everyone can share ideas of IT projects, game concepts, etc...
              <br/>It's simple to use and accessible by anyone.
            </p>
            <div className="col-12 text-center">
              <button className="startButton col-12">Start sharing now !</button>
            </div>
          </div>

          <div className="bordered how p-2 mt-3 mt-xs-3 mt-sm-3 mt-md-0 mt-lg-0 col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8">
            <h1>How does it work ?</h1>

            <div className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-around">
              <div className="userSteps col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h4>For users :</h4>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Add an idea</p>
                  </div>
                </div>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Describe it</p>
                  </div>
                </div>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Share it !</p>
                  </div>
                </div>
              </div>

              <div className="devSteps col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h4>For developpers :</h4>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Add a follow ticket</p>
                  </div>
                </div>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Start sharing your code</p>
                  </div>
                </div>
                <div className="stepCard d-flex flex-row align-items-center col-12 mt-2">
                  <div className="round d-flex flex-row justify-content-center align-items-center">
                    <h3>1</h3>
                  </div>

                  <div className="stepText">
                    <p className="ml-5">Share your results !</p>
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
