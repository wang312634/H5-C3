import React,{Component} from 'react' 
import { connect } from 'react-redux'
import './Contain.css'
import * as actionCreators from './store/actioncreators'
import { Link } from 'react-router-dom'
import  Writer from '../writer/writer'

class Contain extends Component{
    render(){
        return(
            <div className = 'wrap'>
                <div className = 'left_wrap'>
                    <div className = 'pic_wrap'>
                        <div className = "pic_turns">
                            {/* <div className = 'item'>
                                <img src='//game.gtimg.cn/images/lol/act/a20180904community/main-bg.jpg'/>
                            </div> */}
                            <div className = 'item'>
                                <img alt={'i love you'} src='//upload.jianshu.io/admin_banners/web_images/4634/164728948a52095cd70453d065ccd9e0a9f1ee8c.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
                            </div>  
                        </div>
                    </div> 
                        {this.Get_news()}         
                </div>
                <div className = 'right_wrap'>
                    <div className = 'pic-nav'>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png' alt={'i love you'}/>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-3-ddcc844ebdd8edca2d93b7ea5a8de79e.png' alt={'i love you'}/>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png' alt={'i love you'}/>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png' alt={'i love you'}/>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png' alt={'i love you'}/>
                        <img src = '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png' alt={'i love you'}/>
                    </div>
                    <Writer/>
                </div>
                {this.props.scrollshow?<div className = 'scrollbt' onClick = {()=>{this.gotop()}}>回到顶部</div>:null}
            </div>
        )
    }
    
    gotop(){
        window.scrollTo(0,0);
    }

     Get_news(){
         const { newslist , allnews } = this.props;
        const news_list = newslist.toJS();
        const news = [];
        for(let i = 0 ; i < allnews ; i++){
            news.push(
                <Link key = {i} to={'./detail/'+ news_list.data[i].id}>
                    <div className = 'news_item'>
                        <img alt = 'ceshi' src={news_list.data[i].imgurl}/>
                        <h3 className = 'title'>{news_list.data[i].title}</h3>
                        <p className = 'desc'>{news_list.data[i].desc}</p>
                    </div>
                </Link>
            )
        }
        return (
            <div className = 'news_wrap'>
            {news}
            <button onClick = {() => {this.props.Getmorenews(allnews)}}>更多信息</button> 
            </div>
        )
     }
     componentWillMount(){
        this.props.Get_list();
        this.bindevents();
    }
    bindevents(){
        window.addEventListener('scroll',this.props.goscroll)
    }
};

const mapstate = (state) => {
    return {
    allnews:state.getIn(['contain','allnews']),
    newslist:state.getIn(['contain','news_list']),
    scrollshow:state.getIn(['contain','scroll'])
    }
}

const mapdispatch = (dispatch) =>{
    return {
        Get_list(){
            dispatch(actionCreators.Get_list())
        },
        Getmorenews(page){
            if(page!==0)
           dispatch(actionCreators.Getmore(page))
        },
        goscroll(){
            if(document.documentElement.scrollTop>40){
                dispatch(actionCreators.showscroll(true))
            } else {
                dispatch(actionCreators.showscroll(false))
            }  
        }
    }
}

export default connect(mapstate,mapdispatch)(Contain);