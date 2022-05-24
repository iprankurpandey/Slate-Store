import React, { createContext, useContext, useReducer } from "react";
const ProductContext = createContext();
export const useProductContext = () => useContext(ProductContext);

function ProductContextReducer({ children }) {
  function productReducer(state, action) {
    switch (action.type) {
      case "CART":
        return { ...state, cart: action.payload };
      case "WISH":
        return { ...state, wish: action.payload };
      case "COUPON":
        return { ...state, coupon: action.payload };
      case "TOTALPRICE":
        return { ...state, totalprice: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(productReducer, {
    cart: [],
    wish: [],
    coupon: "",
    totalprice: 0,
  });

  return (
    <div>
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}

export { ProductContextReducer };
