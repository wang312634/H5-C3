import { SEARCH_FOCUS, SEARCH_BLUR, GET_LIST ,HOT_ENTER,HOT_LEAVE,CHANGE_HOT} from "./constants";
import axios from 'axios'
import { fromJS } from 'immutable'

export const Seach_focus = () => ({
    type: SEARCH_FOCUS
});
export const Seach_blur = () => ({
    type: SEARCH_BLUR
});
const change_list = (data) => ({
    type:GET_LIST,
    data:fromJS(data),
    allpage:Math.ceil(data.length / 10)
})
export const Get_list = () => {
    return (dispatch) => {
        axios.get('./api/hostthings.json').then((res) =>{
            const data = res.data;
            dispatch(change_list(data));
        }).catch(() =>{
            console.log('error')
        })
    }
}

export const Hot_enter = () => ({
    type: HOT_ENTER
});

export const Hot_leave = () => ({
    type: HOT_LEAVE
});

export const Change_hot = ( page ) => ({
    type: CHANGE_HOT,
    page
})