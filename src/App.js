import React, { Component } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import '../src/assets/styles/app.less'

//引入redux相关的组件
import { Provider } from 'react-redux'
//引入状态
import store from './store/store'

//引入子页面
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Reg from './pages/reg/Reg'
import Error404 from './pages/error404/Error404'

export default class App extends Component {
  render() {
    return (
      <div className='app-box'>
        <Provider store={store}>
          <HashRouter>
            <Switch>
              <Route path='/' exact component={Nav} />
              <Route path='/login' component={Login} />
              <Route path='/reg' component={Reg} />
              {/* {容错} */}
              <Route component={Error404} />
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    )
  }
}

