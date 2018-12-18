import React, { Component } from 'react'
import './main_icon.less'
//引入公共模块
import IconBtn from '../../components/IconBtn'

export default class Main_Icon extends Component {
  //2.初始化加载状态
  constructor(props){
    super(props)

    this.state={
      iconList:[
        {id:'1',imgSrc:'1.png',iconLabel:'新房'},
        {id:'2',imgSrc:'2.png',iconLabel:'二手房,'},
        {id:'3',imgSrc:'3.png',iconLabel:'租房'},
        {id:'4',imgSrc:'4.png',iconLabel:'商铺'},
        {id:'5',imgSrc:'5.png',iconLabel:'卖房'},
        {id:'6',imgSrc:'6.png',iconLabel:'海外房产'},
        {id:'7',imgSrc:'7.png',iconLabel:'小区房价'},
        {id:'8',imgSrc:'8.png',iconLabel:'问答'},
        {id:'9',imgSrc:'9.png',iconLabel:'小区房产'},
        {id:'10',imgSrc:'10.png',iconLabel:'商铺'}
      ]
    }
  }
  render() {
    return (
      //1.静态初稿
      <div className='icon'>
        {
          this.state.iconList.map(item=>
             <IconBtn key={item.id} imgSrc={item.imgSrc} iconLabel={item.iconLabel} />
          )
        }
      </div>
    )
  }
}
