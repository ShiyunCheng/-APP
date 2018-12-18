
import React, { Component } from 'react'
import '../components/HouseIcon.less'

export default class HouseIcon extends Component {
  //容错
  static defaultProps={
    imgSrc:'house1.png',
    iconLabel:'默认'
  }


  render() {
    return (
       //1.静态页面初稿
      <div className='HouseIcon-box'>
        <img src={require('../assets/imgs/'+this.props.imgSrc)}  style={{ width: '50px', height: '50px' }}/>
        <label>{this.props.iconLabel}</label>
      </div>
    )
  }
}
