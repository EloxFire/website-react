import React from 'react';
import { withNamespaces } from 'react-i18next';
import LangSelector from './sub/LangSelector';

import logo from '../img/logos/ea.svg';
import '../sass/navbar.scss';

function Navbar({ t }){
  return(
    <nav className="navbar navbar-expand-lg sticky-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand d-block d-lg-none" href="/">
        <img src={logo} width="30" height="30" alt="Enzo Avagliano's logo"/>
      </a>

      <div className="collapse navbar-collapse justify-content-between" id="navbarTogglerDemo03">
        <div>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <div>
              <a className="navbar-brand d-none d-lg-block" href="/">
                <img src={logo} width="30" height="30" alt="Enzo Avagliano's logo"/>
              </a>
            </div>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <div className="d-flex flex-column flex-lg-row">
              <li className="nav-item">
                <a className="nav-link animated-nav-link" href="/">{t('navbar.home')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-nav-link" href="#services">{t('navbar.service')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-nav-link" href="/work">{t('navbar.work')}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link animated-nav-link" href="https://blog.enzoavagliano.fr">{t('navbar.blog')}</a>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <div className="d-flex flex-column flex-lg-row">
              <li className="nav-item">
                <a className="nav-link animated-nav-link" href="/contact">{t('navbar.contact')}</a>
              </li>
              <LangSelector/>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default withNamespaces()(Navbar);
