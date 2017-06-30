import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Checklist from './containers/Checklist';
import './styles/index.css';

import { store } from './store'

ReactDOM.render(
    <Provider store={store}>
        <Checklist />
    </Provider>
    , document.getElementById('root'));
