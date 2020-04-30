import React, {Component} from 'react';
import '../../sass/trophy/help.scss';

import dossierSponso from '../../img/trophy/DOSSIERSPONSO.pdf';

class HelpUs extends Component{
  render(){
    return(
      <div id="help" className="col-12">
        <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
          <h1 className="blinxon helpTitle mt-3 pt-2">Nous aider</h1>
        </div>

        <div className="col-12 d-flex flex-column flex-xs-column flex-sm-column flex-md-row flex-lg-row justify-content-center mt-5">
          <div className="aboutHelp mt-2 mb-2 d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 m-2">
            <div>
              <h2 className="blinxon">Comment & pourquoi nous aider ?</h2>
              <p>
              Cette folle aventure nous tient à cœur mais elle nécessite un budget conséquent. Chaque euro reversé est un kilomètre supplémentaire parcouru.
              <br/>Ainsi, tout don, qu'il soit matériel ou financier, nous approche un peu plus de notre objectif, du Maroc et des enfants ! Par avance, l'ensemble de l'équipage Blinxon vous remercie de votre participation !
              </p>

              <h4 className="blinxon">Vous pouvez nous aider :</h4>
              <ul>
                <li><p>Via notre cagnotte en ligne Leetchi : <a className="redLink blinxon" href="https://www.leetchi.com/c/blinxon-4l-trophy" target="_blank" rel="noopener noreferrer">Y accéder</a></p></li>
                <li><p>En partageant nos réseaux sociaux</p></li>
                <li><p>En achetant un emplacement de pub sur la voiture (voir dossier de sponsoring) : <a className="redLink blinxon" download href={dossierSponso}>Télécharger dossier de sponsoring</a></p></li>
                <li><p>En nous faisant un don : <a className="redLink blinxon" href="mailto:enzolivia4l@gmail.com">Nous contacter</a></p></li>
              </ul>

              <h1 className="blinxon mt-5 text-center">Nous contacter :</h1>

              <div className="mt-4 d-flex flex-column justify-content-center text-center">
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Par mail :</h4>
                  <p>enzolivia4l@gmail.com</p>
                </div>
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Par téléphone (Pilote) :</h4>
                  <p>06.69.07.42.59 (Enzo Avagliano)</p>
                </div>
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Par téléphone (Co-pilote) :</h4>
                  <p>07.82.46.61.75 (Olivia Masson)</p>
                </div>
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Instagram :</h4>
                  <p>@blinxon_4ltrophy</p>
                </div>
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Facebook :</h4>
                  <p>Blinxon 4L Trophy</p>
                </div>
                <div className="col-12 d-flex flex-column text-center">
                  <h4 className="blinxon contactSpan">Twitter :</h4>
                  <p>@blinxon4l</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default HelpUs;
