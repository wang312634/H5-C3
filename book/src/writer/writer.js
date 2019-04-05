import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreator from './store/actioncreator';
import './writer.css'
class Writer extends Component{
    render(){
        return (
            <div className = 'write_wrap'>
                {this.do_writeitem()}
            </div>
        )
    }

    do_writeitem(){
        const {list,all} = this.props;
        const newlist = list.toJS();
        const writelist = [];
        for(var i = 0 ;i<all;i++){
           writelist.push( <div className = 'write_item' key={i}>
                <img alt = '???' src ={newlist.data[i].imgurl}/>
                <p>{newlist.data[i].name}</p>
            </div>)
        }
        return (
            <div>
                {writelist}
            </div>
        )
    }

    componentDidMount(){
        this.props.getwrite();
    }
}

const mapstate = (state) =>{
    return {
        list:state.getIn(['write','list']),
        all:state.getIn(['write','all'])
    }
}

const mapdispatch = (dispatch) => {
    return {
        getwrite(){
            dispatch(actionCreator.get())
        }
    }
}

export default connect(mapstate,mapdispatch)(Writer);