import {createStore} from 'redux'
import {checklist} from '../reducers'


export let store = createStore(checklist)

