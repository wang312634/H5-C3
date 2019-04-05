import {fromJS} from 'immutable'
import {GETWRITE} from './contains'
import './actioncreator'

const initstate = fromJS({
    list:[],
    all:0
})

export default (state = initstate,action) => {
    if(action.type === GETWRITE){
        return state.set('list',action.data).set('all',5)
    }
    return state
}