export const initialState = {
  cart: [],
  user: null,
};

// add item prices in the cart
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user };
    case 'ADD_TO_CART':
      // logic for adding to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      // coping the previous items into new array
      let newCart = [...state.cart];

      // check if the id is there
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );

      if (index < 0) {
        console.warn(`Cant remove the product with id: ${action.id} `);
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      } else {
        // if item exists, remove it from the cart
        newCart.splice(index, 1);
      }

      return { ...state, cart: newCart };
    default:
      return state;
  }
};

export default reducer;
