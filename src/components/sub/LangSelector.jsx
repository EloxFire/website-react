import React, { useState } from 'react';
import i18n from "i18next";
import { withNamespaces } from 'react-i18next';
import '../../sass/langSelector.scss';

function LangSelector(){
  const [lang, setLang] = useState('fr');

  const handleClickLang = () => {
    if (lang === "fr") {
      setLang("en");
      i18n.changeLanguage('en');
    } else {
      setLang("fr");
      i18n.changeLanguage('fr');
    }
  };

  return(
    <button class="nav-item lang-item" onClick={handleClickLang}>
      🇫🇷 / 🇬🇧
    </button>
  )
}

export default withNamespaces()(LangSelector);
