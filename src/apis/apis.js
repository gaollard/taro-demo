import config from '../config'
import fetch from '../utils/fetch'

export default {
  getProductList () {
    return fetch.get(`${config.apiBase}product/`)
  },
  getCategoryList () {
    return fetch.get(`${config.apiBase}category/`)
  },
  getBrandList () {
    return fetch.get(`${config.apiBase}brand/`)
  }
}
