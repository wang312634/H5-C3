import axios from 'axios';
import { fromJS } from 'immutable';
import { GET_LIST , GETMORE ,SHOW} from './constants';

const get_newslist = (data) => ({
    type:GET_LIST,
    list:fromJS(data),
    allnews:5
    }
)

export const Get_list = () => {
    return (dispatch) => {
        axios.get('./api/newslist.json').then((res) =>{
            const data = res.data;
            dispatch(get_newslist(data));
        }).catch(() =>{
            console.log('error')
        })
    }
}

export const Getmore = (page) => ({
    type:GETMORE,
    page
})

export const showscroll = (bool) => ({
    type:SHOW,
    show:bool
})