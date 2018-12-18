import React, { Component } from 'react'
import './chat.less'
import { Button, WhiteSpace} from 'antd-mobile';

export default class Chat extends Component {
  render() {
    return (
      <div className='chatbox'>
        <div className='chatbox2'>
         <img src={require('../../assets/imgs/person.png')} style={{width:'6rem',height:'6rem',marginTop:'1.5rem'}} />
         <p>置业顾问：磊磊</p>
         <p style={{marginTop:'.1rem'}}>专业服务诚信做人，诚信做事！</p>
         <Button type="warning" style={{width:'9rem',marginTop:'1rem'}}>点击咨询</Button><WhiteSpace />
         </div>
      </div>
    )
  }
}
