import React, { Component } from 'react'
import {TabBar} from 'antd-mobile'

import './nav.less'

// 4个组件引入
import Main from '../main/Main'
import Chat from '../chat/Chat'
import History from '../history/History'
import My from '../my/My'




export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      fullScreen: false,
    };
  }

  //渲染最底部选项按钮的函数
  renderContent(pageText){
    switch(pageText){
      case 'main':return <Main />
      case 'chat':return <Chat />
      case 'history':return <History />
      case 'my':return <My />
    }
  }

  render() {
    return (
      <div className='nav-box'>
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            <TabBar
              unselectedTintColor="#949494" //文字未选中的颜色
              tintColor="#61168D" //文字选中的颜色
              barTintColor="white"  //TabBar背景色
            >
            {/* 每一个小按钮图标+文字 */}
              <TabBar.Item
                title="首页"  //文字
                key="main"  //id
                icon={ 
                  <img src={require('../../assets/imgs/icon_first.png')} style={{width:"22px", height: '22px'}} /> //未选中图标
                }
                selectedIcon={
                  <img src={require('../../assets/imgs/icon_s_first.png')} style={{width:"22px", height: '22px'}} />
                }
                selected={this.state.selectedTab === 'blueTab'} //是否选中图标
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}  //点击图标时触发的回调

              >
                {/* 点击当前按钮后渲染的内容 */}
                {this.renderContent('main')}
              </TabBar.Item>

              <TabBar.Item
               title="微聊"
               key="chat"
                icon={
                  <img src={require('../../assets/imgs/chat1.png')} style={{width:"22px", height: '22px'}} /> 
                }
                selectedIcon={
                  <img src={require('../../assets/imgs/chat2.png')} style={{width:"22px", height: '22px'}} /> 
                }
               
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
              >
                {this.renderContent('chat')}
              </TabBar.Item>

              <TabBar.Item
                title="历史"
                key="history"
                icon={
                  <img src={require('../../assets/imgs/history1.png')} style={{width:"22px", height: '22px'}} /> 
                }
                selectedIcon={
                  <img src={require('../../assets/imgs/history2.png')} style={{width:"22px", height: '22px'}} /> 
                }
                
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
              >
                {this.renderContent('history')}
              </TabBar.Item>

              <TabBar.Item
                title="我的"
                key="my"
                icon={
                  <img src={require('../../assets/imgs/my1.png')} style={{width:"22px", height: '22px'}} /> 
                }
                selectedIcon={
                  <img src={require('../../assets/imgs/my2.png')} style={{width:"22px", height: '22px'}} /> 
                }
                
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
              >
                {this.renderContent('my')}
              </TabBar.Item>

            </TabBar>
          </div>
        

      </div>
    )
  }
}
