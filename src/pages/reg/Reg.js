import React, { Component } from 'react'
import { List, InputItem, Button, Flex, WingBlank, WhiteSpace, Card } from 'antd-mobile'
import { Link } from 'react-router-dom'

import {req} from '../../request/request'

import './reg.less'
import logo from '../../assets/imgs/reg-logo.png'
const Item = List.Item

export default class Reg extends Component {
  constructor(props){
    super(props)
    this.state={
         username:'',
         pwd:''
    }
    this.clickReg=this.clickReg.bind(this)
  }

  render() {
    return (
      <div className='reg-box'>

        {/* {LOGO图标} */}
        <Flex justify="center" style={{ paddingTop: '3rem' }}>
          <div className='regimg1' />
          <img src={logo} style={{ width: '5rem' }} />
        </Flex>

        {/* {注册框} */}
        <WingBlank size="md">
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <InputItem
            placeholder="请输入用户名"
            clear
            value={this.state.username}
            onChange={(v)=>{this.setState({username:v})}}
          >
            <div className='regimg2' />
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
            placeholder="请输入密码"
            clear
            value={this.state.pwd}
            type='password'
            onChange={(v)=>{this.setState({pwd:v})}}
          >
            <div className='regimg3' />
          </InputItem>
          {/* <WhiteSpace size="lg" />
          <InputItem
            placeholder="请输入手机号"
          >
            <div className='regimg4' />
          </InputItem>
          <WhiteSpace size="lg" />
          <InputItem
            placeholder="请输入收到的验证码"
          >
            <div className='imgbox2' />
          </InputItem> */}
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />

          <Flex justify="center">
            <Button type="warning" style={{ width: '20rem' }} onClick={this.clickReg}>立即注册</Button><WhiteSpace />
          </Flex>
          <WhiteSpace size="lg" />
          <Flex justify="center">
            <Button type="warning" style={{ width: '20rem' }}>已有帐号登录</Button><WhiteSpace />
          </Flex>
        </WingBlank>

      </div>
    )
  }

  //点击注册函数
  clickReg(){
    // console.log(this.state.username,this.state.pwd)
    let param={username:this.state.username,pwd:this.state.pwd}

    req('/api/reg',(res)=>{
      // console.log(this.props)
      if(res.data !==''){
        this.props.history.push('/login')
      }else{
        alert('不成功！')
      }
    },param)
  }
}
