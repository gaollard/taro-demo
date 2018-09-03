import { GET_PRODUCT_LIST, GET_PRODUCT_INFO } from '../constants/product'

const INITIAL_STATE = {
  productList: []
}

export default function product (state = INITIAL_STATE, action) {
  console.log(action.type, GET_PRODUCT_LIST)
  console.log(1111111)
  switch (action.type) {
    case GET_PRODUCT_LIST:
      console.log(2222222)
      return {
        ...state,
        productList: action.data.products
      }
    default:
      return state
  }
}
