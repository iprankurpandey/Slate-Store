import App from "./App";
import CatagoriesFilter from "./Components/CatagoriesFilter";
import CartPageContext from "./Components/Context/CartPageContext";
import FilterContextReducer from "./Components/Context/FilterContextReducer";
import { ProductContextReducer } from "./Components/Context/ProductContextReducer";
import ProductListingPageContext from "./Components/Context/ProductListingPageContext";
import WishlistPageContext from "./Components/Context/WishlistPageContext";
import { ToastContainer } from "react-toastify";
import LoginPageContext from "./Components/Context/LoginPageContext";
import AddressContext from "./Components/Context/AddressContext";

export function PageStructure() {
  return (
    <div>
      <AddressContext>
        <LoginPageContext>
          <ProductContextReducer>
            <FilterContextReducer>
              <CartPageContext>
                <ProductListingPageContext>
                  <WishlistPageContext>
                    <CatagoriesFilter>
                      <App />
                    </CatagoriesFilter>
                  </WishlistPageContext>
                </ProductListingPageContext>
              </CartPageContext>
            </FilterContextReducer>
          </ProductContextReducer>
        </LoginPageContext>
      </AddressContext>
      <ToastContainer position="top-right" />
    </div>
  );
}
