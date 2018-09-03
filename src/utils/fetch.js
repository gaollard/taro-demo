import Taro from '@tarojs/taro'
const fetch = Taro.request

fetch.post = (url, options = {}) => {
  return Taro.request({
    url,
    method: 'POST',
    data: options.data || {},
    header: options.header || {}
  })
}

fetch.get = (url, options = {}) => {
  return Taro.request({
    url,
    method: 'GET',
    data: options.data || {},
    header: options.header || {}
  })
}

export default fetch