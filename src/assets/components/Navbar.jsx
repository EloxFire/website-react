import React from 'react';
import {Link} from 'react-router-dom';
import CookieConsent from "react-cookie-consent";

import '../sass/navbar.scss';
import logoEA from '../img/ea.svg';
import burgerMenuIcon from "../img/burgerMenuIcon.svg";

interface NavbarProps{
  leftTitles: String[],
  rightTitles: String[]
}

const Navbar: React.FC<NavbarProps> = ({leftTitles, rightTitles}) => (
  <div className="navbarBody col-12 d-flex flex-column align-items-center">

  <CookieConsent location="bottom" buttonText="Okay !!" cookieName="myAwesomeCookieName" style={{ background: "#2B373B" }} buttonStyle={{ color: "#4e503b", fontSize: "13px" }} expires={150}>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}> Hey ! Thanks for accepting the cookies :)</span>
  </CookieConsent>

    <div className="col-12 d-none d-xs-none d-sm-none d-md-flex d-lg-flex flex-row align-items-center">
      <div className="col-5 d-flex justify-content-start">
        {leftTitles.map(function(item,index){return <Link key={index} to={item.toLowerCase().replace(/\s/g, '')}><p key={index} className="m-2 navbarLink">{item}</p></Link>})}
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <img className="navbarLogo" src={logoEA} alt="Enzo Avagliano's logo"/>
      </div>
      <div className="col-5 d-flex justify-content-end align-items-center">
        {rightTitles.map(function(item,index){return <Link key={index} to={item.toLowerCase().replace(/\s/g, '')}><p key={index} href="/" className="m-2 navbarLink">{item}</p></Link>})}
      </div>
    </div>

    <div className="col-12 d-flex d-xs-flex d-sm-flex d-md-none d-lg-none flex-row">
      <div className="dropdown col-12 ml-n4 d-flex align-items-center">
        <img className="navbarLogo" src={logoEA} alt="Enzo Avagliano's logo"/>
        <button className="btn dropdown-toggle d-flex align-items-center" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className="navbarLogo" src={burgerMenuIcon} alt="Burger menu icon"/>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {leftTitles.map(function(item,index){return <Link key={index} to={item.toLowerCase().replace(/\s/g, '')}><p key={index} href="/" className="m-2 navbarLink dropdownLink" >{item}</p></Link>})}
          {rightTitles.map(function(item,index){return <Link key={index} to={item.toLowerCase().replace(/\s/g, '')}><p key={index} href="/" className="m-2 navbarLink dropdownLink">{item}</p></Link>})}
        </div>
      </div>
    </div>

  </div>
)

export default Navbar;
