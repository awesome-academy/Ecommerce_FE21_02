import { actionTypes } from "../../constants";

const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);
const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];
const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  if (cartItem) {
    return [
      ...cartWithoutItem(cart, item),
      { ...cartItem, quantity: cartItem.quantity + 1 }
    ];
  } else {
    return [...cartWithoutItem(cart, item), { ...item, quantity: 1 }];
  }
};
const removeFromCart = (cart, item) => {
  if (item.quantity === 1) {
    return [...cartWithoutItem(cart, item)];
  } else {
    return [
      ...cartWithoutItem(cart, item),
      { ...item, quantity: item.quantity - 1 }
    ];
  }
};

const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART: {
      let { data } = action.payload;
      return addToCart(state, data);
    }
    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      let { data } = action.payload;
      return removeFromCart(state, data);
    }
    case actionTypes.REMOVE_ALL_FROM_CART: {
      let { data } = action.payload;
      return removeAllFromCart(state, data);
    }
    default: {
      return state;
    }
  }
};
