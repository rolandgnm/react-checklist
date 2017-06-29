import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './containers/Checklist';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

import {addItem} from './actions/ChecklistActions'
import {store} from './store'


console.log(store.getState())
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addItem('new item criado'))
store.dispatch(addItem('new item criado'))
store.dispatch(addItem('new item criado'))
store.dispatch(addItem('new item criado'))
store.dispatch(addItem('new item criado'))


ReactDOM.render(<Checklist />, document.getElementById('root'));
registerServiceWorker();

unsubscribe()