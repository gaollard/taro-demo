import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_INFO
} from '../constants/product'
import apis from '../apis/apis';

// 获取商品列表
export function getProductList () {
  return async dispatch => {
    const res = await apis.getProductList()
    const body = res.data
    if (body.code === '0') {
      dispatch({ type: GET_PRODUCT_LIST, data: body.data })
    } else {
      console.log(res)
    }
  }
}
