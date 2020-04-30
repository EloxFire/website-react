import React, {Component} from 'react';
import '../../sass/trophy/squad.scss';

class Squad extends Component{
  render(){
    return(
      <div id="squad" className="col-12">
        <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
          <h1 className="blinxon title mt-3 pt-2">L'équipage</h1>
        </div>

        <div className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-center mt-5">
          <div className="aboutUs mt-2 mb-2 d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 m-2">
            <div>
              <h2 className="blinxon">Qui sommes-nous ?</h2>
              <p>
                Notre duo est composé d'Enzo Avagliano et Olivia Masson, deux étudiants Aixois de 19 et 20 ans. Nous nous sommes lancés dans une grande aventure : celle du 4L Trophy. Et nous comptons sur vous pour nous aider à réaliser ce rêve un peu fou !
              </p>
            </div>
            <div className="aboutUsLogo"></div>
          </div>

          <div className="aboutIndividualContainer d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 m-2">
            <div className="aboutIndividual enzo d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row">
              <div className="enzoPic col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0"></div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <h2 className="blinxon">Enzo Avagliano <span className="statusRally">Pilote</span></h2>
                <p className="p-0 m-0">
                  Etudiant en 2nd année de bachelor informatique à Ynov à Aix-en-Provence, passionné de l'espace et des étoiles, mais aussi fou amoureux de cette course qu'est le 4L Trophy.
                </p>
              </div>
            </div>
            <div className="aboutIndividual olivia d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row">
              <div className="oliPic col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4"></div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <h2 className="blinxon">Olivia Masson <span className="statusRally">Co-pilote</span></h2>
                <p className="p-0 m-0">
                  Etudiante en Droit à la faculté d'Aix-en-Provence, scoute d'exception et à la recherche d'aventure, passionnée par le 4L Trophy depuis plus d'un an déjà.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-center mt-5 endSection">
          <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 aboutYoyo d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row">
            <div className="yoyoPic col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
            <div className="d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div>
                <h2 className="blinxon">Yolande <span className="statusRally">Notre 4L</span></h2>
                <p className="p-0 m-0">
                  4L née il y a 31 ans, bolide de mère en fille et en excellent état pour son âge plutôt... avancé ! Elle nous emmène partout au quotidien, et nous emmènera jusqu'à Marrakech sans le moindre pépin ! (On l'éspère du moins).
                </p>
              </div>
              <div className="mt-5">
                <h2 className="blinxon techInfosTitleYoyo">Quelques infos techniques :</h2>
                <ul>
                  <li>Premiere mise en circulation : Juillet 1989</li>
                  <li>Moteur Cléon 956cm3</li>
                  <li>34ch de pure puissance</li>
                  <li>695Kg, une légèreté inégalée</li>
                  <li>0-100 Km/h en seulement 20 secondes, plus rapide qu'une supersportive !</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Squad;
