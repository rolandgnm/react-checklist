import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './container/Checklist';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(<Checklist />, document.getElementById('root'));
registerServiceWorker();
