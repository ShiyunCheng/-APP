import React, { Component } from 'react'
import './Main_HouseInfo.less'
import { NoticeBar } from 'antd-mobile';

//引入子组件
import HouseIcon from '../../components/HouseIcon'
import { Item } from 'antd-mobile/lib/tab-bar';

export default class Main_HouseInfo extends Component {

  //初始化加载状态
  constructor(props){
    super(props)
    this.state={
      iconList:[
        {id:'1',imgSrc:'house1.png',iconLabel:'我要贷款'},
        {id:'2',imgSrc:'house2.png',iconLabel:'房贷计算'},
        {id:'3',imgSrc:'house3.png',iconLabel:'知识'},
        {id:'4',imgSrc:'house4.png',iconLabel:'扫一扫'},
        {id:'5',imgSrc:'house5.png',iconLabel:'租售委托'}
      ]
    }
  }

  render() {
    return (
      <div className='Main_HouseInfo-box'>
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          淘房头条: 租赁市场超万亿 长租公寓如何常驻？ &#39;又一家长租公寓出事 两千万押金款将打水漂？
       </NoticeBar>
        <p>房产全百科 <label className='lab1'>专业的买房攻略</label></p>

        <div className='HouseInfo'>
            {
              this.state.iconList.map(item=>
                <HouseIcon key={item.id} imgSrc={item.imgSrc} iconLabel={item.iconLabel} />
                )
            }

     
        </div>
      </div>
    )
  }
}
