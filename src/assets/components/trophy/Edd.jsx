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
          <div className="aboutEdd mt-2 mb-2 d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 m-2">
            <div>
              <h2 className="blinxon">C'est quoi ? C'est qui ?</h2>
              <p>
                L’association Enfants du Désert existe depuis 2005. Elle a vu le jour suite à un voyage sur les terres marocaines qui a encouragé Laetitia et Emmanuel Chevallier à s’engager pour une cause qui porte un sens : l’accès à l’éducation des enfants du sud marocain.
                <br/>L’accès à l’éducation est l’objectif principal d’Enfants du Désert, mais, conscient des corrélations entre la santé, les conditions de vie et l’accès à l’école, l’association a élargi ses champs d’actions afin d’opter pour une démarche globale en faveur des enfants.
              </p>
            </div>
            <div className="aboutEddLogo"></div>
          </div>

          <div className="aboutEdd mt-2 mb-2 d-flex flex-column col-12 col-xs-12 col-sm-12 col-md-5 col-lg-5 m-2">
            <div>
              <h2 className="blinxon">Enfants du désert & 4L Trophy</h2>
              <p>
                L'un des objectifs du raid 4L Trophy, est d'apporter des dons de matériel scolaire et sportif pour l'association. Ce sont les généreux dons financiers et matériels des Trophysites qui aident Enfants du désert !
              </p>
            </div>
            <div className="statsEdd d-flex flex-column">
              <h4 className="blinxon">Quelques statistiques :</h4>
              <div className=" mt-5 d-flex flex-wrap justify-content-around align-items-center">
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">32</h1>
                  <p>salles de classes</p>
                </div>
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">240000</h1>
                  <p>enfants bénéficiaires</p>
                </div>
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">14</h1>
                  <p>jardins d'enfants</p>
                </div>
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">8</h1>
                  <p>écoles complètes</p>
                </div>
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">3000</h1>
                  <p>participants<br/>(en 2020)</p>
                </div>
                <div className="statCardEdd d-flex flex-column col-4 mb-4 text-center">
                  <h1 className="blinxon">20</h1>
                  <p>tonnes de dons<br/>(en 2020)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Edd;
