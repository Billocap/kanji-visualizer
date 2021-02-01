import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import $ from 'jquery';

import 'scss/index.scss';

ReactDOM.render(
  <App/>,
  $('#root').get(0)
);

$(function() {
  $("#kanji-view, .kanji-list").hide();
})