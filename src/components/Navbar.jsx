import React from 'react';
import logo from '../img/logos/ea.svg';
import '../sass/navbar.scss';

interface NavbarProps{
  titles: String[],
}
const Navbar:React.FC<NavbarProps> = ({titles}) => (
  <nav class="navbar navbar-expand-lg sticky-top">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/home">
      <img src={logo} width="30" height="30" alt="Enzo Avagliano's logo"/>
    </a>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link animated-nav-link" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            My Work
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://devdeas.enzoavagliano.fr">Devdeas</a>
            <a class="dropdown-item" href="https://tools.enzoavagliano.fr">My toolbox</a>
            <a class="dropdown-item" href="https://api.enzoavagliano.fr">API Portal</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/mywork">Github projects</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link animated-nav-link" href="https://blinxon.enzoavagliano.fr">Blinxon</a>
        </li>

        <li class="nav-item">
          <a class="nav-link animated-nav-link" href="/contact">Contact me</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;
