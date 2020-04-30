import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

import '../../sass/trophy/navbar.scss';
import logoBlinxon from '../../img/trophy/LOGO-BLINXON.png';
import burgerMenuIcon from "../../img/burgerMenuIcon.svg";


class BlinxonNav extends Component{
  render(){
    return(
      <div className="bnavbarBody col-12 d-flex flex-column align-items-center">

        <div className="col-12 d-none d-xs-none d-sm-none d-md-flex d-lg-flex flex-row align-items-center">
          <div className="col-5 d-flex justify-content-start">
            <ScrollLink activeClass="active" to="squad" spy={true} smooth={true} offset={-20} duration={500}><p className="m-2 navbarLink">Blinxon</p></ScrollLink>
            <ScrollLink activeClass="active" to="edd" spy={true} smooth={true} offset={-20} duration={500}><p className="m-2 navbarLink">Enfants du désert</p></ScrollLink>
            <ScrollLink activeClass="active" to="help" spy={true} smooth={true} offset={-20} duration={500}><p className="m-2 navbarLink">Nous aider</p></ScrollLink>
          </div>
          <div className="col-2 d-flex justify-content-center align-items-center">
            <img className="navbarLogo" src={logoBlinxon} alt="Enzo Avagliano's logo"/>
          </div>
          <div className="col-5 d-flex justify-content-end align-items-center">
            <Link to="home"><p className="m-2 navbarLink">Accueil</p></Link>
          </div>
        </div>

        <div className="col-12 d-flex d-xs-flex d-sm-flex d-md-none d-lg-none flex-row">
          <div className="dropdown col-12 ml-n4 d-flex align-items-center">
            <img className="navbarLogo" src={logoBlinxon} alt="Enzo Avagliano's logo"/>
            <button className="btn dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="navbarLogo" src={burgerMenuIcon} alt="Burger menu icon"/>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to="#nous"><p className="m-2 navbarLink dropdownLink">Blinxon</p></Link>
              <Link to="#edd"><p className="m-2 navbarLink dropdownLink">Enfants du désert</p></Link>
              <Link to="#aide"><p className="m-2 navbarLink dropdownLink">Nous aider</p></Link>
              <Link to="home"><p className="m-2 navbarLink dropdownLink">Accueil</p></Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BlinxonNav;
