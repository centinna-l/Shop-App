import { ADD_TO_CART } from "../actions/cart";
import CartItem from "../../model/cart-item";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const productPrice = addedProduct.price;
      const productTitle = addedProduct.title;
      let UpdateOrNewCartItem;
      if (state.items[addedProduct.id]) {
        //already have the item in the cart
        UpdateOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          productPrice,
          productTitle,
          state.items[addedProduct.id].sum + productPrice
        );
        console.log(UpdateOrNewCartItem);
        console.log(state.totalAmount)
        return {
          ...state,
          items: {
            ...state.items,
            [addedProduct.id]: UpdateOrNewCartItem,
          },
          totalAmount: state.totalAmount + productPrice,
        };
      } else {
        UpdateOrNewCartItem = new CartItem(
          1,
          productPrice,
          productTitle,
          productPrice
        );
        console.log(UpdateOrNewCartItem);
        console.log(state.totalAmount)
        return {
          ...state,
          items: {
            [addedProduct.id]: UpdateOrNewCartItem,
          },
          totalAmount: state.totalAmount + productPrice,
        };
      }
  }
  return state;
};
