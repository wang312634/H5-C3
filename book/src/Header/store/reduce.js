import './actioncreators'
import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, GET_LIST, HOT_ENTER, HOT_LEAVE, CHANGE_HOT } from './constants';

const initdate = fromJS({
    flag:false,
    enter:false,
    host_list:[],
    page:1,
    allpages:1
})
export default  (state = initdate , action) =>{
    if(action.type === SEARCH_FOCUS){
        return state.set('flag',true)
    }
    if(action.type === SEARCH_BLUR){
        return state.set('flag',false)
    }
    if(action.type === HOT_ENTER){
        return state.set('enter',true)
    }
    if(action.type === HOT_LEAVE){
        return state.set('enter',false)
    }
    if(action.type === CHANGE_HOT){
        return state.set('page',action.page)
    }
    if(action.type === GET_LIST){
        return state.set('host_list',action.data).set('allpage',action.allpage)
    }
    return state;
}