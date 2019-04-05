import { combineReducers } from 'redux-immutable'
import headerReducer from '../Header/store/reduce'
import containReducer from '../Contain/store/reducer'
import writereducer from '../writer/store/reducer'

const reducer =  combineReducers({
    header: headerReducer,
    contain: containReducer,
    write:writereducer
    }
)

export default reducer;