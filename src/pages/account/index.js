import Taro, { Component } from '@tarojs/taro'
import { View, Button, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as productAction from '../../actions/product'
import { bindActionCreators } from 'redux'

import { pLogoBase } from '../../config'
import './index.scss'

@connect(state => state, dispatch => {
  return {
    ...bindActionCreators(productAction, dispatch)
  }
})
class Index extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }

  constructor (params) {
    super(params)
    this.state = { }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  switchPage(url) {
    Taro.navigateTo({ url })
  }
  componentDidMount () {}
  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render() {
    return (
      <View className="page page-welcome">
        个人中心
      </View>
    )
  }
}

export default Index
