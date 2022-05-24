import React from "react";
import Address from "../Components/Address";
import { FeaturedBrands } from "../Components/FeaturerdBrands/FeaturedBrands";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { Hero } from "../Components/Hero/Hero";
import TotalPrice from "../Components/TotalPrice /TotalPrice";

function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedBrands />
      <Footer />
    </div>
  );
}

export default Homepage;
