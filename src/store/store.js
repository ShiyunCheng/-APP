//引入createStore
import {createStore} from 'redux'
//引入reducers
import reducers from './reducers'

export default createStore(reducers)