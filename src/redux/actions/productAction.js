import { ActionTypes } from "../contants/action-types"

export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (products) => {
    return {
        type: ActionTypes.REOMOVE_SELECTED_PRODUCT
    }
}