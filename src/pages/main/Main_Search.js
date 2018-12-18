import React, { Component } from 'react'
import './main_search.less'

export default class Main_Search extends Component {
  //状态
  constructor(props) {
    super(props)
    this.state = {
      city: '正在定位'
    }
  }
  //渲染
  render() {
    return (
      <div className='search-box'>
        {/* {定位} */}
        <label>{this.state.city}<img src={require('../../assets/imgs/triangle.png')} style={{ width: '18px', height: '18px' }} /></label>

        {/* {搜索框} */}
        <div className='search-div'>
          <img src={require('../../assets/imgs/searchimg1.png')} style={{ width: '18px', height: '18px', marginLeft: '0.5rem' }} />
          <label style={{ marginLeft: '0.5rem' }}>挑好房，上猎房网</label>
        </div>

        {/* {地图} */}
        <img src={require('../../assets/imgs/map.png')} style={{ width: '18px', height: '18px' }} />
      </div>
    )
  }

  //在第一阶段尾发送请求
  componentDidMount() {
    //1.作用域问题，获取window下的属性和对象，必须指定为window.xxx
    var geolocation = new window.qq.maps.Geolocation("U2OBZ-MWKKD-YJD4X-PSOE6-JFHAF-YQFRL", "myapp");

    //3.配置
    var options = { timeout: 8000 };

    //4.显示定位位置
    var showPosition= (postion) =>{
      //  console.log(postion)
      //联通只能获取到省份获取不到城市，移动可以
      this.setState({
        city: postion.city
      })
     
    }
    
    //5.显示错误信息
    function showErr() {
      alert('定位失败!')
    };

    //2.调用函数定位
    geolocation.getLocation(showPosition, showErr, options)
  };
}


