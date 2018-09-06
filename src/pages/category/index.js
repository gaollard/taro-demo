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
    navigationBarTitleText: '商品分类'
  }

  constructor (params) {
    super(params)
    this.state = {
      pLogoBase,
      entryList,
      bannerList
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  switchPage(url) {
    Taro.navigateTo({ url })
  }

  componentDidMount () {
    this.props.getProductList()
  }

  componentWillUnmount () { }
  componentDidShow () { }
  componentDidHide () { }

  render() {
    const { productList } = this.props.product
    const { bannerList, entryList } = this.state
    return (
      <View className="page page-welcome">
        {/* card swiper */}
        <View className="card card-swiper">
          <Swiper className="swiper"
            circular
            indicatorDots
            autoplay
          >
            {bannerList.map(item => {
              return (
                <SwiperItem>
                  <View className="swiper-item">
                    <Image className="swiper-img" src={item.src} />
                  </View>
                </SwiperItem>
              )
            })}
          </Swiper>
        </View>

        {/* card entry */}
        <View className="card card-entry">
          {entryList.map(item => {
            return (
              <View className="item">
                <Image className="icon" src={item.icon} />
                <View className="text">{item.text}</View>
              </View>
            )
          })}
        </View>

        {/* card product */}
        <View className="card card-product">
          <View className="card-hd">热门商品</View>
          <View className="card-bd">
            <View className="p-list">
              {productList.slice(0, 8).map(item => {
                return item.productLogo && item.productName ? (
                  <View className="p-item" key={item.productId}>
                    <View className="p-logo-wrap">
                      <Image
                        className="p-logo"
                        src={this.state.pLogoBase + item.productLogo}
                      />
                    </View>
                    <View className="p-name">{item.productName}</View>
                    <View className="p-tip">比买时降了￥200元</View>
                    <View className="p-now-price">
                      <Text className="now-price-num">￥{item.productPrice / 100 - 200}</Text>
                      <Text>元</Text>
                    </View>
                  </View>
                ) : null
              })}
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
