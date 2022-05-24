import React, { useContext } from "react";
import {
  filterContext,
  useCatagoriesFilterContext,
} from "../Components/CatagoriesFilter";
import { useProductDataContext } from "../Components/Context/ProductListingPageContext";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import Spinner from "../Components/LoadingSpinner/Spinner";
import ProductCard from "../Components/ProductCard/ProductCard";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import "./ProductlistingPage.css";

function ProductlistingPage() {
  const { state } = useProductDataContext();
  const { isLoading } = state;
  const { searchbarData } = useCatagoriesFilterContext();
  console.log(`search bar data`, searchbarData);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="productlisting-cards">
        {isLoading ? (
          <Spinner />
        ) : (
          searchbarData.map((productCardData) => {
            return (
              <ProductCard
                productCardData={productCardData}
                key={productCardData._id}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductlistingPage;
