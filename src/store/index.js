import {createStore} from 'redux'
import {checklist} from '../reducers'


export let store = createStore(checklist, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

