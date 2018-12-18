
import React, { Component } from 'react'
import '../main/Main_Houses.less'
import { Toast } from 'antd-mobile';
import axios from 'axios'
//引入子组件
import HouseItem from '../../components/HouseItem';
//引入请求
import { req } from '../../request/request'

export default class Main_Houses extends Component {
  //初始化状态值
  constructor(props) {
    super(props)

    this.state = {//房产信息数组先定为空
      houseslist: []
    }
  }

  render() {
    return (
      <div className='houses-box'>
        {
          this.state.houseslist.map(item =>
            <HouseItem item={item} />
          )
        }
      </div>
    )
  }
  //发送请求axios
  componentDidMount() {
    //loading显示
    Toast.loading('正在加载中···', 0, null, false);
    //自我强制调节loading显示时间，只是测试时候用
    setTimeout(() => {
      //axios发送数据
      req('/api/getHouseInfo', (res) => {
        //关闭loading
        Toast.hide()

        //     //console.log(res.data.rows)
        this.setState({
          houseslist: res.data.rows
        })
      }, {
          page: 1,
          rows: 15
        })
    }, 1000)
    // axios.get('http://172.16.12.78:80/getinfolist.php').then(
    //   (res)=>{
    //     //console.log(res)
    //     this.setState({
    //       houseslist:res.data

    //     })
    //   }
    // )


  }
}
