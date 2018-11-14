import * as React from 'react';
import * as ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './App';
import './index.css';
import { unregister } from './registerServiceWorker';


WebFont.load({
  google: {
    families: ['Rubik:700', 'Roboto:300,400', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
unregister();
