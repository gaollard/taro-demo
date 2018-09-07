import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Button,
  Image,
  Text,
  Swiper,
  SwiperItem
} from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as productAction from '../../actions/product'
import { bindActionCreators } from 'redux'

import { pLogoBase } from '../../config'
import './index.scss'

@connect(
  state => state,
  dispatch => {
    return {
      ...bindActionCreators(productAction, dispatch)
    }
  }
)
class Index extends Component {
  config = {
    navigationBarTitleText: '商品分类'
  }

  constructor(params) {
    super(params)
    this.state = {
      pLogoBase
    }
  }

  switchPage(url) {
    Taro.navigateTo({ url })
  }

  componentDidMount() {
    this.props.getCategoryList()
    this.props.getBrandList()
    this.props.getProductList()
  }

  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}

  render() {
    const { productList, categoryList, brandList } = this.props.product
    console.log('brandList', brandList)
    return (
      <View className="page page-category">

        {/* card category */}
        <View className="cate-list">
          {
            categoryList.map(item => {
              return (
                <View className="cate-item">{item.categoryName}</View>
              )
            })
          }
        </View>

        <View className="scroll-main">
          {/* card brand */}
          <View className="brand-list">
          {brandList.map(item => {
            return (
              <View className="brand-item">{item.brandName}</View>
            )
          })}
          </View>
          {/* card product */}
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
                    <Text className="now-price-num">
                      ￥{item.productPrice / 100 - 200}
                    </Text>
                    <Text>元</Text>
                  </View>
                </View>
              ) : null
            })}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
