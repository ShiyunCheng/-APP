import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';



export default class Main_Carsoul extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ['bg1', 'bg2', 'bg3'],
      imgHeight: 176,
      //  slideIndex: 2,
    }
  }



  render() {
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={this.state.slideIndex}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val + index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../../assets/imgs/${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    
      </div>
    )
  }
}
