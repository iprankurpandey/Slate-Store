import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const productDataContext = createContext();
export const useProductDataContext = () => useContext(productDataContext);

function ProductListingPageContext({ children }) {
  const [state, dispatch] = useReducer(reducerFn, {
    productdata: [],
    isLoading: false,
  });

  function reducerFn(state, action) {
    switch (action.type) {
      case "APIPRODUCTDATA":
        return { ...state, productdata: action.payload };
      case "LOADINGSPINNER":
        return { ...state, isLoading: action.payload };
      default:
        return state;
    }
  }

  const { productdata } = state;

  async function getProdcutsData() {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    try {
      await axios({
        method: "GET",
        url: `/api/products`,
      }).then((response) =>
        dispatch({ type: "APIPRODUCTDATA", payload: response.data.products })
      );
      dispatch({ type: "LOADINGSPINNER", payload: false });
    } catch (erorr) {
      console.log(`Server is encountering some issues:`, erorr);
    }
  }
  // API Call
  useEffect(() => {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    getProdcutsData();
  }, []);
  return (
    <div>
      <productDataContext.Provider value={{ productdata, state, dispatch }}>
        {children}
      </productDataContext.Provider>
    </div>
  );
}

export default ProductListingPageContext;
// naming convetons on classed in csss
