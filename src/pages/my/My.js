import React, { Component } from 'react'
import '../my/my.less'
import { List, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom'

const Item = List.Item;
const Brief = Item.Brief;

export default class My extends Component {
  //初始化加载状态
  constructor(props) {
    super(props)
    this.state = {
      list: ['',
        { id: '1', text: '我的积分', src: 'myimg1.png' },
        { id: '2', text: '微聊联系人', src: 'myimg2.png' },
        { id: '3', text: '我的订阅', src: 'myimg3.png' },
        '',
        { id: '4', text: '房贷计算器', src: 'myimg4.png' },
        { id: '5', text: '我的房子', src: 'myimg5.png' },
        { id: '6', text: '我的看房记录', src: 'myimg6.png' },
        { id: '7', text: '我的问答', src: 'myimg7.png' },
        '',
        { id: '8', text: '设置', src: 'myimg8.png' },
        { id: '9', text: '意见反馈', src: 'myimg9.png' },
        { id: '10', text: '帮助', src: '7.png' },
      ]
    }
  }



  render() {
    return (
      <div className='my-box'>
        {/* {上部分} */}
        <div className='mybox1'>
          {/* {上部分头像} */}
           <div className='topbox'>
              <img src={require('../../assets/imgs/person.png')} style={{width:'6rem',height:'6rem'}} />
              <div className='pbox'>
           
              {
                //如果username为空，则显示登录注册，否则显示用户名
                localStorage.username ?
                // console.log(localStorage.username)
                <span>欢迎您：{localStorage.username} </span> :
                
                 <span>登录/注册</span> 
                // <p>客户磊磊真诚为您服务！</p>
               
              }
              
              </div>
           </div>

           {/* {下部分} */}
           <div className='botbox'>
           <div className='threebox'>
                 <label>0</label>
                 <label>
                   <img src={require('../../assets/imgs/fang1.png')} style={{width:'3rem',height:'3rem'}}/>
                   <span>钱包</span>
                </label> 
              </div>
              <div className='threebox'>
                 <label>0</label>
                 <label>
                   <img src={require('../../assets/imgs/fang2.png')} style={{width:'3rem',height:'3rem'}}/>
                   <span style={{marginLeft:'.5rem'}}>优惠</span>
                </label> 
              </div>
              <div className='threebox'>
                 <label>0</label>
                 <label>
                   <img src={require('../../assets/imgs/fang3.png')} style={{width:'3rem',height:'3rem'}}/>
                   <span>积分</span>
                </label> 
                 
              </div>
           </div>
        </div>



        {/* {下部分} */}
        <div>
          {
            this.state.list.map(item => {
              //运用三元运算，如果为空空格行就改变其背景色
              if (item === '') {
                return <div style={{height:'0.3rem',backgroundColor:'#F4F4F4'}}></div>
              } else {
               return <Item
                  key={item.id}
                  arrow="horizontal"
                  thumb={require(`../../assets/imgs/${item.src}`)}
                  onClick={() => { }}
                >
                  {item.text}
                </Item>
              }
             
            })
          }
        </div>
      </div>
    )
  }
}
