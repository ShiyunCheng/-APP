import React, { Component } from 'react'
import '../history/history.less'

import { connect } from 'react-redux'

//引入子模块
import Main_HouseInfo from '../main/Main_HouseInfo'
import HouseItem from '../../components/HouseItem'


//历史页面y
export class History extends Component {
  
  render() {
    //先解构
   var { historyHousesList}=this.props

    return (
     <div className='bigbox'>
        <Main_HouseInfo />
        {
         historyHousesList.map(items=>
              <HouseItem item={items}/>
          )
        }

    </div>
    )
  }
  componentDidMount() {
    console.log(this.props)
  }
}

//过滤数据
function filter(store) {
  return {
    historyHousesList: store.historyHousesList
  }
}

export default connect(filter)(History)