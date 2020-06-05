import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
