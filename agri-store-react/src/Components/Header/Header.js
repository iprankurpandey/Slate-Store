import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartPageContext";
import { useFilterContext } from "../Context/FilterContextReducer";
import { useLoginContext } from "../Context/LoginPageContext";
import { useWishlistContext } from "../Context/WishlistPageContext";
import "./Header.css";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { logoutHandler } = useLoginContext();
  const { state, dispatch } = useFilterContext();
  const { search } = state;

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <nav class="navigation-menu">
        <div class="navigation__left">
          <Link to="/">
            <div class="navigation__logo">Agri UI</div>
          </Link>
        </div>

        {!token ? (
          <Link to="/LoginPage">
            <button class="btn btn-warning">LogIn</button>
          </Link>
        ) : (
          <Link to="/LoginPage">
            <button class="btn btn-warning" onClick={logoutHandler}>
              LogOut
            </button>
          </Link>
        )}
        {/* 
        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
          onChange={(e) =>
            dispatch({ type: "SEARCHBAR", payload: e.target.value })
          }
        /> */}

        <div class="navigation__right">
          <Link to="/ProductListingPage">
            <span class="material-icons navigationmi"> store </span>
          </Link>

          <div class="navbadge">
            <Link to="/WishlistPage">
              <span class="material-icons navigationmi"> favorite</span>
            </Link>
            <span class="nav__number-badge">{wish.length}</span>
          </div>
          <div class="navbadge">
            <Link to="/CartPage">
              <span class="material-icons navigationmi"> shopping_cart </span>
            </Link>
            <span class="nav__number-badge">{cart.length}</span>
          </div>
          <Link to="/AccountPage">
            <span class="material-icons navigationmi"> account_circle </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export { Header };
