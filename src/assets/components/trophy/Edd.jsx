import React, {Component} from 'react';
import '../../sass/trophy/edd.scss';

class Edd extends Component{
  render(){
    return(
      <div id="edd" className="col-12">
        <div className="col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 text-center">
          <h1 className="blinxon eddTitle mt-3 pt-2">Enfants du désert</h1>
        </div>

        <div className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-center mt-5">
          <div className="aboutUs mt-2 mb-2 d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 m-2">
            <div>
              <h2 className="blinxon">Qui sommes nous ?</h2>
              <p>
                Notre duo est composé d'Enzo Avagliano et Olivia Masson, deux étudiants Aixois de 19 et 20 ans. Nous nous sommes lancés dans une grande aventure : celle du 4L Trophy. Et nous comptons sur vous pour nous aider à réaliser ce rêve un peu fou !
              </p>
            </div>
          </div>

          <div className="aboutIndividualContainer d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 m-2">
            <div className="aboutIndividual enzo mt-2 mb-2">
              <h2 className="blinxon">Enzo Avagliano <span className="statusRally">Pilote</span></h2>
              <p className="p-0 m-0">
                Etudiant en 2nd anéne de bachelor informatique à Ynov à Aix-en-Provence, passionné de l'espace et des étoiles, mais aussi fou amoureux de cette course qu'est le 4L Trophy.
              </p>
            </div>
            <div className=" aboutIndividual olivia mt-2 mb-2">
              <h2 className="blinxon">Olivia Masson <span className="statusRally">Co-pilote</span></h2>
              <p className="p-0 m-0">
                Etudiante en Droit à la faculté d'Aix-en-Provence, scoute d'exeption et à la recherche d'aventure, passionnée par le 4L Trophy depuis plus d'un an déjà.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Edd;
