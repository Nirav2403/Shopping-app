import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export const storeCustomApi = (item) => {
  console.log(item);
  return {
    type: "APP_DATA",
    payload: item
  }
}

export const showAllData = (Navbar,ProductType) => {
  return {
    type: `NAVBAR_${ProductType}_DATA`,
    payload: Navbar,
  }
}

export const searchProduct = (term,data) => {
  return{
    type: "SEARCH_PRODUCT",
    payload: term,
    data: data
  }
}

export const showOneData = (dataObject, id) => {
  switch (id) {
    case "showItem":
      return {
        type: "SHOW_ONE_DATA",
        payload: dataObject
      }
    case "addItem":
      return {
        type: "ADD_TO_CART",
        payload: dataObject
      }
    case "removeItem":
      return{
        type: "REMOVE_TO_CART",
        payload: dataObject
      }
    default:
      break;
  }
}

export const handleCustomerData = (dataObject) =>{
    return{
      type: "CUSTOMER_DATA",
      payload: dataObject
    }
}

export const buyItem = (dataObject) =>{
  return{
    type: "BUY_ITEM",
    payload: dataObject
  }
}

export const orderItem = (product,totalProductCost,totalBillCost) => {
  console.log("==============>>>>>",totalProductCost,totalBillCost);
  return{
    type: "ORDER_ITEM",
    payload: {
      products: product,
      totalProductCost: totalProductCost,
      totalBillCost: totalBillCost,
      orderId: uuidv4().slice(0,12),
      orderTime: moment().format('LL')
    }
  }
}

export const buyAll = (data) => {
  return{
    type: "BUY_ALL_REMOVE",
    payload: data
  }
}

export const buyOneRemove = (data) => {
  return{
    type: "BUY_ONE_REMOVE",
    payload: data
  }
}

// export const showAllData = (id) => {
//   switch (id) {
//     case 0:
//       return {
//         type: "FETCH_ALL_DATA",
//         payload: JSON.parse(localStorage.getItem("Home"))
//       }
//     case 1:
//       return {
//         type: "FETCH_MOBLIE_DATA",
//         payload: JSON.parse(localStorage.getItem("Moblie"))
//       }
//     case 2:
//       return {
//         type: "FETCH_TELEVISION_DATA",
//         payload: JSON.parse(localStorage.getItem("Television"))
//       }
//     case 3:
//       return {
//         type: "FETCH_LAPTOP_DATA",
//         payload: JSON.parse(localStorage.getItem("Laptop"))
//       }
//     default:
//       return null;
//   }
// }

// export const storeCustomApi = (item) => {
//   const quant = item.map((i) => {
//     if (i !== null) {
//       return { ...i, quantity: 1 }
//     }
//   })
//   switch (index) {
//     case 0:
//       localStorage.setItem("Home", JSON.stringify(quant));
//       return {
//         type: "STORE_ALL_DATA",
//         payload: item
//       };
//     case 1:
//       localStorage.setItem("Moblie", JSON.stringify(quant));
//       return {
//         type: "STORE_MOBLIE_DATA",
//         payload: item
//       };
//     case 2:
//       localStorage.setItem("Television", JSON.stringify(quant));
//       return {
//         type: "STORE_TELEVISION_DATA",
//         payload: item
//       };
//     case 3:
//       localStorage.setItem("Laptop", JSON.stringify(quant));
//       return {
//         type: "STORE_LAPTOP_DATA",
//         payload: item
//       };
//     default:
//       return null;
//   }
// }