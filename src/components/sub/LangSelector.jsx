import React from 'react';
import i18n from "i18next";
import { withNamespaces } from 'react-i18next';

function LangSelector({ t }){

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return(
    <div>
      <button onClick={() => changeLanguage(`fr`)}>fr</button>
      <button onClick={() => changeLanguage(`en`)}>en</button>
    </div>
  )
}

export default withNamespaces()(LangSelector);
