import config from '../config'
import fetch from '../utils/fetch'

export default {
  getProductList () {
    return fetch.get(`${config.apiBase}product/`)
  }
}