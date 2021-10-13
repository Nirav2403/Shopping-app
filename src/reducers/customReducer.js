export const storeJsonData = (state = [], action) => {
    switch (action.type) {
        case "APP_DATA":
            const newData = action.payload.map((item) => { return { ...item, quantity: 1 } })
            return newData;
        default:
            console.log(action.payload)
            return state;
    }
}

export const fetchStoreData = (state = [], action) => {
    console.log(action.type)
    switch (action.type) {
        case "NAVBAR_HOME_DATA":
            return action.payload
        case "NAVBAR_MOBLIE_DATA":
            return action.payload.filter((item)=>item.product_department==="Moblie");
        case "NAVBAR_TELEVISION_DATA":
            return action.payload.filter((item)=>item.product_department==="Tv");
        case "NAVBAR_LAPTOP_DATA":
            return action.payload.filter((item)=>item.product_department==="Laptop");
        default:
            return state;
    }
}


export const fetchOneData = (state = [], action) => {
    switch (action.type) {
        case "SHOW_ONE_DATA":
            return action.payload;
        default:
            return state;
    }
}

export const addCartData = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            if (state.find((item) => item.product_name === action.payload.product_name)) {
                const newData = state.map((item) => {
                    if (item.product_name === action.payload.product_name) {
                        return {
                            ...item, quantity: item.quantity + 1
                        }
                    } else return item;
                })
                return newData
            } else {
                return [...state, action.payload]
            }

        case "REMOVE_TO_CART":
            if (action.payload.quantity > 1) {
                const newData = state.map((item) => {
                    if (item.product_name === action.payload.product_name) {
                        return {
                            ...item, quantity: item.quantity - 1
                        }
                    } else return item;
                })
                return newData;
            } else {
                const removeData = state.filter((item) => item.product_name !== action.payload.product_name);
                return removeData;
            }

        case "BUY_ALL_REMOVE":
            return state = [];

        case "BUY_ONE_REMOVE":
            const removeOneItem = state.filter((item) => item.product_name !== action.payload.product_name)

            return removeOneItem;

        default:
            return state;
    }
}

export const customerData = (state = [], action) => {
    switch (action.type) {
        case "CUSTOMER_DATA":
            return action.payload
        default:
            return state;
    }
}

export const buyPurchaseProduct = (state = [], action) => {
    switch (action.type) {
        case "BUY_ITEM":
            if (Array.isArray(action.payload)) {
                return action.payload;
            } else {
                return [action.payload]
            }
        default:
            return state;
    }
}

export const orderPurchaseProduct = (state = [], action) => {
    console.log("=================>>+++++++++++",action.payload)
    switch (action.type) {
        case "ORDER_ITEM":
            // if (state.find((item) => item.find((i) => i.product_name === action.payload.product_name))) {
            //     return state;
            // }
            return [...state, action.payload];
        default:
            return state;
    }
}

export const searchProductName = (state = [], action) => {
    switch (action.type) {
        case "SEARCH_PRODUCT":
            let searching = action.data.filter((item) => {
                if (item.product_name.indexOf(action.payload) === -1) {
                    if (item.product_name.toLowerCase().indexOf(action.payload) !== -1) {
                        return item;
                    } else {
                        return null
                    }
                } else {
                    return item;
                }
            })
            if (action.payload === "") {
                return [];
            } else {
                return searching;
            }
        default:
            return state;
    }
}

// export const storeJsonData = (state = [], action) => {
//     switch (action.type) {
//         case "APP_DATA":
//             const newData = action.payload.map((item) => { return { ...item, quantity: 1 } })
//             return newData;
//         // case "STORE_ALL_DATA":
//         //     return action.payload;
//         // case "STORE_MOBLIE_DATA":
//         //     return action.payload;
//         // case "STORE_TELEVISION_DATA":
//         //     return action.payload;
//         // case "STORE_LAPTOP_DATA":
//         //     return action.payload;
//         default:
//             console.log(action.payload)
//             return state;
//     }
// }

// export const fetchStoreData = (state = [], action) => {
    //     switch (action.type) {
    //         case "FETCH_ALL_DATA":
    //             return action.payload;
    //         case "FETCH_MOBLIE_DATA":
    //             return action.payload;
    //         case "FETCH_TELEVISION_DATA":
    //             return action.payload;
    //         case "FETCH_LAPTOP_DATA":
    //             return action.payload;
    //         default:
    //             return state;
    //     }
    // }
