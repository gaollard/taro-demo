import {
  GET_PRODUCT_LIST,
  GET_CATEGORY_LIST,
  GET_BRAND_LIST
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

export function getCategoryList () {
  return async dispatch => {
    const res = await apis.getCategoryList()
    const body = res.data
    if (body.code === '0') {
      dispatch({ type: GET_CATEGORY_LIST, data: body.data })
    } else {
      console.log(res)
    }
  }
}

export function getBrandList () {
  return async dispatch => {
    const res = await apis.getBrandList()
    const body = res.data
    if (body.code === '0') {
      dispatch({ type: GET_BRAND_LIST, data: body.data })
    } else {
      console.log(res)
    }
  }
}