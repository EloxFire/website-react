import React, {Component} from 'react';
import Countdown from "react-countdown-now";
import '../../sass/trophy/prerelease.scss';

const Completionist = () => <h1>C'est parti !</h1>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <h1 className="countdown blinxon">{days}<span className="countdownSpan">Jours</span> {hours}<span className="countdownSpan">Heures</span> {minutes}<span className="countdownSpan">Minutes</span> {seconds}<span className="countdownSpan">Secondes</span></h1>
    );
  }
};

class PreRelease extends Component{
  render(){
    return(
      <div id="pre" className="col-12 d-flex flex-row justify-content-center">
        <div className="col-6 notDisplayed"></div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
          <p className="blinxon blinxonSubtitle">Bienvenue sur notre site</p>
          <h1 className="blinxon blinxonName">Blinxon</h1>

          <div className="countdownContainer col-12 d-flex flex-row justify-content-center align-items-center">
            <div>
              <p className="blinxon countdownDescription">Départ du 4L Trophy 2021 dans :</p>
              <Countdown date={new Date("2021-02-18")} renderer={renderer} />
            </div>
          </div>

          <div className="accessBlinxonSections mt-5 col-12 d-flex flex-column">
            <div>
              <p className="blinxon followText">Suivez notre aventure !</p>
            </div>
            <div className="blinxonButtonContainer col-12 d-flex flex-wrap justify-content-around">
              <button className="blinxon btn blinxonButtonSections mt-2 mb-2">L'équipage</button>
              <button className="blinxon btn blinxonButtonSections mt-2 mb-2">Enfants du désert</button>
              <button className="blinxon btn blinxonButtonSections mt-2 mb-2">Pourquoi nous aider</button>
              <button className="blinxon btn blinxonButtonSections mt-2 mb-2">Comment nous aider</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default PreRelease;
