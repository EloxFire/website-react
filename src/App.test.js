import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import { mount } from 'enzyme';

import App from './App';
import About from './components/About';
import Progressbar from './components/sub/Progressbar';

test('1 - [Landing page] Titre bien affiché', function(){
  render(<About/>);
  const $ = require('jquery');
  expect($('#main-title').text()).toEqual('Enzo Avagliano');
});

test('2 - [Landing page] Sous titre bien affiché', function(){
  render(<About/>);
  const $ = require('jquery');
  const s = $('#subtitle');
  const subtitle = screen.getByText('Student | Junior web developer');
  expect(subtitle).toBeInTheDocument();
});

test('3 - [Landing page] Compétences affichés', function(){
  render(<About/>);
  const $ = require('jquery');
  const bar = $('.comps-container');
  for (let i = 0; i < bar.length; i++) {
    expect(bar[i]).toBeInTheDocument();
  }
  console.log("3 -", bar.length, "compétences affichés");

});
