import React, { Component } from 'react'

//引入子模块
import Main_Carsoul from './Main_Carsoul'
import Main_HouseInfo from './Main_HouseInfo'
import Main_Houses from './Main_Houses'
import Main_Icon from './Main_Icon'
import Main_Search from './Main_Search'

//首页拼接
export default class Main extends Component {
  render() {
    return (
      <div>
        <Main_Search />
        <Main_Carsoul />
        <Main_Icon />
        <Main_HouseInfo />
        <Main_Houses />
      </div> 
    )
  }
}
