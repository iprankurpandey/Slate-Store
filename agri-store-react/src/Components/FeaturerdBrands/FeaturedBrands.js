import React from "react";
import "./FeaturedBrands.css";

function FeaturedBrands() {
  return (
    <div>
      <div class="featured-products">
        <div class="featured-catagories">
          <div class="h1">Featured Catagories</div>
        </div>

        <div class="catagory-choice">
          <div class="first-catagory box">Machine</div>
          <div class="second-catagory box">Pesticides</div>
          <div class="third-catagory box">Seeds</div>
          <div class="fourth-catagory box">Fertilizers</div>
        </div>

        <div class="featured-brands">
          <div class="h1">Featured Brands</div>
        </div>
        <div class="brand-choice">
          <div class="first-brand brand-logo">P&G</div>
          <div class="second-brand brand-logo">IFFCO</div>
          <div class="third-brand brand-logo">NABARD</div>
          <div class="fourth-brand brand-logo">Patanjali</div>
          <div class="fifth-brand brand-logo">Syngeta</div>
          <div class="sixth-brand brand-logo">BAYER</div>
        </div>
      </div>
    </div>
  );
}

export { FeaturedBrands };
