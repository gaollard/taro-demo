import {
  GET_PRODUCT_LIST,
  GET_CATEGORY_LIST,
  GET_BRAND_LIST
} from '../constants/product'

const INITIAL_STATE = {
  productList: [],
  categoryList: [],
  brandList: []
}

export default function product (state = INITIAL_STATE, action) {
  console.log(action.type, GET_PRODUCT_LIST)
  switch (action.type) {
    case GET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.data.products
      }
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categoryList: action.data.categorys
      }
    case GET_BRAND_LIST:
      return {
        ...state,
        brandList: action.data.brands
      }
    default:
      return state
  }
}
