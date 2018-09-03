import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_INFO
} from '../constants/product'
import apis from '../apis/apis';

export function getProductList () {
  return async dispatch => {
    let res = await apis.getProductList()
      , body = res.data
    if (body.code === '0') {
      dispatch({
        type: GET_PRODUCT_LIST,
        data: body.data
      })
    } else {
      console.log(res)
    }
  }
}