import React, { createContext, useContext, useReducer } from "react";
import { filterContext } from "../CatagoriesFilter";

const filterContext1 = createContext();
export const useFilterContext = () => useContext(filterContext1);

function FilterContextReducer({ children }) {
  function reducerFn(state, action) {
    switch (action.type) {
      case "SORT":
        return { ...state, sort: action.payload };
      case "SLIDER":
        return { ...state, slider: action.payload };
      case "STOCK":
        return { ...state, stock: action.payload };
      case "RATING":
        return { ...state, rating: action.payload };
      case "SEARCHBAR":
        return { ...state, search: action.payload };
      case "CATEGORY":
        return { ...state, category: action.payload };
      case "men":
        return {
          ...state,
          category: {
            ...state["category"],
            men: !state.category.men,
          },
        };

      case "women":
        return {
          ...state,
          category: {
            ...state["category"],
            women: !state.category.women,
          },
        };

      case "baby":
        return {
          ...state,
          category: {
            ...state["category"],
            baby: !state.category.baby,
          },
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFn, {
    sort: true,
    slider: true,
    stock: false,
    rating: false,
    search: "",
    category: {
      men: false,
      women: false,
      baby: false,
    },
  });

  return (
    <div>
      <filterContext1.Provider value={{ state, dispatch }}>
        {children}
      </filterContext1.Provider>
    </div>
  );
}

export default FilterContextReducer;
