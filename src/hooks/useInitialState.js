import { useState } from "react";

const initialState = {
  cart: [],
  actualProduct: false,

}
const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  ;}

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

  const addProduct = (payload) => { 
    setState({
      ...state,
      cart: [...state.cart],
      actualProduct: payload,
    })
  }

  const removeProduct = (payload) => { 
    setState({
      ...state,
      cart: [...state.cart],
      actualProduct: false,
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
    addProduct,
    removeProduct,
  }
}

export default useInitialState;