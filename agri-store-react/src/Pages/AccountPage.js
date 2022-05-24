import React from "react";
import Address from "../Components/Address";
import { useAdressContext } from "../Components/Context/AddressContext";
import { useCartContext } from "../Components/Context/CartPageContext";
import { useLoginContext } from "../Components/Context/LoginPageContext";
import { useWishlistContext } from "../Components/Context/WishlistPageContext";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";

import "./AccountPage.css";

function AccountPage() {
  const { state } = useLoginContext();
  console.log(state);
  const { loginData } = state;
  const { _id, email, name, number } = loginData;
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();

  return (
    <div>
      <Header />

      <h1>Account Details </h1>
      <table className="table">
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Cart</th>
          <th>Wishlist</th>
        </tr>

        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{number}</td>
          <td>{cart.length}</td>
          <td>{wish.length}</td>
        </tr>
      </table>
      <h1>Adress Management </h1>
      <Address />
      <Footer />
    </div>
  );
}

export default AccountPage;
