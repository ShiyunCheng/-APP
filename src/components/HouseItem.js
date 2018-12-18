
//  房产信息条目
//  props:
//    item: {    数据库对象
//      img: 房产图片url信息
//      name: 房产名
//      area: 区域
//      info: 房型
//      acreage: 面积
//      business: 商圈
//      price: 均价 
//    }
import React, { Component } from 'react'
import "../components/HouseItem.less"

import { connect } from 'react-redux'
import {addHistoryHouseItem} from '../store/actions'

//引入资源服务器地址
import {SOURCES_IP} from '../request/request'

export class HouseItem extends Component {
  //1.设置容错默认值
  static defaultProps={
      img:'',
      name:'默认楼盘',
      area:'高新区',
      info:'默认房型',
      acreage:'0',
      business:'默认商圈',
      price:'20000'
  }
    render() {
        var {img,name,area,info,acreage,business,price}=this.props.item
        return (
            //最大的容器，里面2个子容器
            <div className='HouseItem-box' onClick={this.clickHouse.bind(this)}>
                {/* {其中一个放图片} */}
                {/* {img:''则加载404图片，不然就加载真正的图片地址} */}

                <img src={
                    img===''?require('../assets/imgs/404.jpg'):SOURCES_IP+'/'+img
                } style={{ width: '6rem', height: '5rem' }} />
               
                {/* {另外一个放价格和商圈那些} */}
                <div className='right-box'>
                 {/* {房产介绍} */}
                    <div className='leftdiv'>
                        <label className='house-title'>{name}</label>
                        <label className='info'>{area} {business} </label>
                        <label className='info'>{info} {acreage} </label>
                    </div>
                {/* {价格介绍} */}
                    <div className='rightdiv'>
                        <label>￥ {price} </label>
                    </div>
                </div>
            </div>
        )
    }

    //点击房产事件函数
    clickHouse(){
        console.log(this.props.item)

        this.props.dispatch(
            addHistoryHouseItem(this.props.item)
        )
    }
}
 export default connect()(HouseItem)