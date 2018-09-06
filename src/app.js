import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.scss'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/account/index',
      'pages/category/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      selectedColor: '#de181b',
      color: '#777',
      list: [{
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: "assets/img/home.png",
        selectedIconPath: "assets/img/home_fill.png",
      }, {
        text: "分类",
        pagePath: "pages/category/index",
        iconPath: "assets/img/manage.png",
        selectedIconPath: "assets/img/manage_fill.png"
      }, {
        pagePath: "pages/account/index",
        text: "我的",
        iconPath: "assets/img/person.png",
        selectedIconPath: "assets/img/person_fill.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
