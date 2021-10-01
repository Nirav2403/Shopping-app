import { combineReducers } from "redux";
import {storeJsonData,fetchOneData, fetchStoreData, addCartData, customerData,buyPurchaseProduct, orderPurchaseProduct, searchProductName} from './customReducer'

export default combineReducers({
    jsondata: storeJsonData, 
    selectedCard: fetchOneData,
    navbar: fetchStoreData,
    addcart: addCartData,
    customer: customerData,
    buy: buyPurchaseProduct,
    order: orderPurchaseProduct,
    search: searchProductName
})