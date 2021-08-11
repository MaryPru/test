import {combineReducers} from 'redux'
import servicesReducers from "./servicesReducers/index"

const allReducers = combineReducers({
   servicesReducers
})

export default allReducers;