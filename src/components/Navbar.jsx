import React from 'react';
import logo from '../img/logos/ea.svg';
import '../sass/navbar.scss';

interface NavbarProps{
  titles: String[],
}
const Navbar:React.FC<NavbarProps> = ({titles}) => (
  <nav id="navbar" className="navbar navbar-expand-lg sticky-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/home">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Enzo Avagliano's logo"/>
    </a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {titles.map(function(link, key){
          return(
            <li key={key} className="nav-item mr-2 ml-2">
              <a className="nav-link" href={link.toLowerCase().replace(/\s/g, '')}>{link}</a>
            </li>
          )
        })}
      </ul>
    </div>
  </nav>
)

export default Navbar;
