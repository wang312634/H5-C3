import './actioncreators';
import { fromJS } from 'immutable';
import { GET_LIST , GETMORE,SHOW} from './constants';

const initdate = fromJS({
    news_list:[],
    allnews:0,
    scroll:false
})

export default (state = initdate , action) =>{
    switch(action.type)
    {
        case GET_LIST:
        return state.set('news_list',action.list).set('allnews',5);
        case GETMORE:
        return state.set('allnews',action.page+3);
        case SHOW:
        return state.set('scroll',action.show);
        default:
        return state
    } 
}