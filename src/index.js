import React from 'react';
import ReactDOM from 'react-dom';
import './styles/root.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
