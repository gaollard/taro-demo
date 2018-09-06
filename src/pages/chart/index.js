import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as productAction from '../../actions/product'
import { bindActionCreators } from 'redux'

import { pLogoBase } from '../../config'
import './index.scss'

const bannerList = [
  {
    src: 'https://mall.airtlab.com/static/img/b2.9529091.jpg'
  },
  {
    src: 'https://mall.airtlab.com/static/img/b3.f4be826.png'
  },
  {
    src: 'https://mall.airtlab.com/static/img/b1.524e4cf.jpg'
  }
]

const entryList = [
  {
    icon: require('./img/entry_01.png'),
    text: '买好书'
  },
  {
    icon: require('./img/entry_02.png'),
    text: '接需求'
  },
  {
    icon: require('./img/entry_03.png'),
    text: '看电影'
  }
]

@connect(state => state, dispatch => {
  return {
    ...bindActionCreators(productAction, dispatch)
  }
})
class Index extends Component {

  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  switchPage(url) {
    Taro.navigateTo({ url })
  }

  componentDidMount () {
  }

  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render() {
    return (
      <View className="page page-cart">
        hello world
      </View>
    )
  }
}

export default Index
