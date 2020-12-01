import React, { Component } from 'react';
import logo from '../img/logos/ea.svg';
import '../sass/navbar.scss';

class Navbar extends Component{
  render(){
    return(
      <nav class="navbar navbar-expand-lg sticky-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand d-block d-lg-none" href="/">
          <img src={logo} width="30" height="30" alt="Enzo Avagliano's logo"/>
        </a>

        <div class="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo03">
          <div>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <div>
                <a class="navbar-brand d-none d-lg-block" href="/">
                  <img src={logo} width="30" height="30" alt="Enzo Avagliano's logo"/>
                </a>
              </div>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <div className="d-flex flex-column flex-lg-row">
                <li class="nav-item">
                  <a class="nav-link animated-nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link animated-nav-link" href="#services">My services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link animated-nav-link" href="/work">My work</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link animated-nav-link" href="https://blog.enzoavagliano.fr">Blog</a>
                </li>
              </div>
            </ul>
          </div>
          <div>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <div>
                <li class="nav-item active">
                  <a class="nav-link animated-nav-link" href="/contact">Contact me</a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
