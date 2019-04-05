import {fromJS} from 'immutable'
import axios from 'axios'
import {GETWRITE} from './contains'

const get_writelist = (data) =>({
    type:GETWRITE,
    data:fromJS(data)
})

export const get = () =>{
    return (dispatch) => {
        axios.get('./api/write.json').then ((res) =>{
            const data = res.data;
            dispatch(get_writelist(data));
        }).catch(() =>{
            console.log('error');
        })
    }
}