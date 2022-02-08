export const ADD_ITEM = "ADD_ITEM"

export const REMOVE_ITEM = "REMOVE_ITEM"

export const removeItem = id => ({ type: REMOVE_ITEM, payload: id });

export const addItem = text => ({ type: ADD_ITEM , payload : text });
