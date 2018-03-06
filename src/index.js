import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/reset.css';
import './css/bootstrap.css';


import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
