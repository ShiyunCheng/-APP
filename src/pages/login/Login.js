import React, { Component } from 'react'
import { List, InputItem, Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'

//引入封装的请求
import {req} from '../../request/request'

import './login.less'
//引入LOGO图片
import logo from '../../assets/imgs/logo.png'


export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      pwd: '',
      wrong:'none'
    }
    //绑定this
    this.clickLogin = this.clickLogin.bind(this)
  }

  render() {
    return (
      <div className='login-box'>
        {/* {LOGO图标} */}
        <Flex justify="center">
          <img src={logo} style={{ width: '20rem' }} />
        </Flex>


        {/* {登录框} */}
        <WingBlank size="md">
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />

          <InputItem
            placeholder="请输入用户名"
            clear
            value={this.state.username}
            onChange={(newValue) => { this.setState({ username: newValue }) }}
           
          >
            <div className='imgbox1' />
          </InputItem>
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <InputItem
            placeholder="请输入密码"
            clear
            value={this.state.pwd}
            onChange={(newValue) => { this.setState({ pwd: newValue }) }}
            type='password'
          >
            <div className='imgbox2' />
          </InputItem>

          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />

          {/* {错误信息提示} */}
           <p style={{color:'red',display:this.state.wrong}}>您输入的用户名和密码错误</p>

          <Flex justify="center">
            <Button type="warning" style={{ width: '20rem' }} onClick={this.clickLogin}>登录</Button><WhiteSpace />
          </Flex>
        </WingBlank>

        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        {/* {注册页面} */}
        <WingBlank size="lg">
          <Flex justify="center">
            <Button type="warning" style={{ width: '20rem' }}><Link to='/reg'>快速注册</Link> </Button><WhiteSpace />
          </Flex>
          <WhiteSpace size="lg" />
          {/* <Flex justify="center">
          <Button type="warning" style={{ width: '20rem' }}>忘记密码</Button><WhiteSpace />
          </Flex> */}
        </WingBlank>
      </div>

    )

  }
  //点击登录发送ajax
  clickLogin() {
    //console.log(this.state.username,this.state.pwd)测试
    
    //调用封装的请求req(api,callback,params)
    //先定义个param
    let param={username:this.state.username,pwd:this.state.pwd}
    req('/api/login',(res)=>{
     //console.log(this.props)
       if(res.data==='pass'){
         this.props.history.push('/')
          //H5本地储存
         localStorage.username=this.state.username
       }else{
        //测试 alert('错误')
         this.setState({
          wrong:'block'
         })
       }
    },param)

  }
}
