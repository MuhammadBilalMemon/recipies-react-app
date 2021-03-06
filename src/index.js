import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Components/Menu';
import data from './data/recipes.json';

ReactDOM.render(
  <React.StrictMode>
    <Menu recipes={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

