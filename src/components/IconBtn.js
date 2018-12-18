//菜单组件按钮
//props:imgSrc图片文件名；iconlabel图片对应的文字

import React, { Component } from 'react'
import '../components/iconbtn.less'

export default class IconBtn extends Component {
  
    //2.如图图片文件名没有，进行容错参数处理
    static defaultProps={
        imgSrc:'1.png',
        iconLabel:'默认'
    }
   
  render() {
    return (
      //1.静态页面初稿
      <div className='icon-box'>
          <img src={require('../assets/imgs/'+this.props.imgSrc)} style={{width:'50px',height:'50px'}} />
          <label>{this.props.iconLabel}</label>
      </div>
    )
  }
}
