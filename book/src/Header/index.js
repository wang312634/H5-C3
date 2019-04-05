import React, { Component } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/actioncreators'
class Header extends Component {
   Gethotlist(){
    const {page , allpage , list} = this.props;
    const JSlist = list.toJS();
    const newpage = [];
    for(let i = (page - 1) * 10 ; i < page * 10 ; i++){
      newpage.push(
        <a href='/' className = 'hot_item' key = {i}>{JSlist[i]}</a>
      )
    }
     if(this.props.flag || this.props.enter){
       return (
        <div className = "hot_things"
        onMouseEnter = {this.props.Hot_enter}
        onMouseLeave = {this.props.Hot_leave}
        >
          <div className = 'title'>
            <span>热门搜索</span>
            <div className = 'changebt' onClick = { () => this.props.Changehot(page,allpage,this.s)}>
            <i ref={(icon) => {this.s = icon}} className = 'iconfont'>&#xe62d;</i>
              换一换
            </div>
          </div>
          <div>{newpage}</div>
        </div>
       )
     }
   }

  render() {
    return (
      <div className = "Header">
        <div className = "Header_wrap">
            <a className = 'Logo' href='/'> </a> 
            <div className = 'nav-item write'>
              <i className = 'iconfont'>&#xe615;</i>
              写文章
            </div>
            <div className = 'nav-item sign-up'>注册</div>
            <div className = 'nav-item log-in'>登录</div>
            <div className = 'nav-item'>Aa</div>
            <div className = 'center_wrap'>
              <div className = 'center-item'>
                <i className='iconfont'>&#xe67f;</i>
                首页
              </div>
              <div className = 'logdown-item'>
                <i className = 'iconfont'>&#xe626;</i>
                下载App
              </div>
              <div className = 'search_wrap'>
                <div className = {this.props.flag?"serch-item-active":"serch-item"}>
                  <input 
                  onFocus = {() => this.props.onhandfouces(this.props.list)}
                  onBlur = {this.props.onhandblur}
                  placeholder='搜索'/>
                  <i className = "iconfont">&#xe631;</i>
                </div>
                {this.Gethotlist()}
              </div>  
            </div>    
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
    return {
      flag:state.getIn(['header','flag']),
      enter:state.getIn(['header','enter']),
      list:state.getIn(['header','host_list']),
      page:state.getIn(['header','page']),
      allpage:state.getIn(['header','allpage'])
    }
}

const mapDispath = (dispatch) => {
    return {
        onhandfouces(list){
          if(!(list.size > 0 )){
            dispatch(actionCreator.Get_list());
          }
          dispatch(actionCreator.Seach_focus());
        },
        onhandblur(){
          dispatch(actionCreator.Seach_blur());
        },
        Hot_enter(){
          dispatch(actionCreator.Hot_enter());
        },
        Hot_leave(){
          dispatch(actionCreator.Hot_leave());
        },
        Changehot(page,allpage,icon){
          if(!icon.style.transform){
            icon.style.transform = 'rotate(0deg)'
          }else{
            var angle = icon.style.transform.replace(/[^0-9]/ig,'');
            angle = parseInt(angle,10);
            icon.style.transform = 'rotate(' + (angle + 360 ) + 'deg)';
          }
          if(page < allpage){
            dispatch(actionCreator.Change_hot(page+1));
          }else{
            dispatch(actionCreator.Change_hot(1))
          }
          
        }
    }
}

export default connect(mapState,mapDispath)(Header);