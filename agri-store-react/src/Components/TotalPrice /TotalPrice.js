import React, { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useCartContext } from "../Context/CartPageContext";
import { useProductContext } from "../Context/ProductContextReducer";
import GooglePay from "../GooglePay";
import "./TotalPrice.css";

function TotalPrice() {
  const { totalprice, cart, applyCoupon, newTotalPrice, discount } =
    useCartContext();
  const { state, dispatch } = useProductContext();
  const { coupon } = state;

  return (
    <div>
      <div class="columns">
        <ul class="price">
          <li class="header" style={{ backgroundColor: "#04AA6D" }}>
            Pricing
          </li>
          <li class="grey">Total Price:₹ {totalprice}</li>
          <li>Product Quantity : {cart.length}</li>
          <li>
            Coupon :
            <input
              className="coupon"
              type="text"
              maxlength="8"
              placeholder="APPLY TANAY123"
              pattern="[0-9]*"
              value={coupon}
              onChange={(e) =>
                dispatch({ type: "COUPON", payload: e.target.value })
              }
            />
            <button onClick={() => applyCoupon(coupon)}> APPLY</button>
          </li>
          <li>Discount :₹ {discount}</li>
          <li>Total Paybable amount :₹ {newTotalPrice}</li>
          <li class="grey">
            <GooglePay />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TotalPrice;
