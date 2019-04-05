import React,{Component}  from 'react';
import './detail.css'

class Detail extends Component{
    render(){
        console.log(this.props);
        return (
            <div className = 'detailwrap'>
                <h2 className="detailtitle">一句台词就是一部电影【一】</h2>
                <img alt='???' src = '//upload-images.jianshu.io/upload_images/13599221-bf7b25cbe789c897.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/560/format/webp'/>
                <p>
                '1.我不得不提醒自己，有些鸟是不能被笼子束缚住的。——《肖申克的救赎》
                2.我要爱，或是死。   I want love or death.——《这个杀手不太冷》
                3.说好了是一辈子，差一年，差一个月，差一个时辰，都不是一辈子！——《霸王别姬》
                4.人生就像一盒各式各样的巧克力，你永远不知道下一块将会是哪种。——《阿甘正传》
                5.你的父母也好，男朋友也好，只能靠你自己去救。——《千与千寻》'</p>
            </div>
        )
    }
}

export default Detail;