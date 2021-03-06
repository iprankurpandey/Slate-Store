import { React, Link } from "../../Utils/CustomUtils";
import {
  useCartContext,
  useFilterContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import "../../Utils/CustomCSSUtils.css";

function Header() {
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { dispatch } = useFilterContext();

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <nav class="navigation-menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="navigation__left">
            <p class="navigation__logo">
              Slate Store
              <span class="material-icons navigationmi">time_to_leave</span>
            </p>
          </div>
        </Link>

        <input
          type="search"
          class="navigation__input"
          placeholder="search item"
          onChange={(e) =>
            dispatch({ type: "SEARCHBAR", payload: e.target.value })
          }
        />

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

          {!token ? (
            <Link to="/LoginPage">
              <span class="material-icons navigationmi"> login </span>
            </Link>
          ) : (
            <Link to="/Accountpage">
              <span class="material-icons navigationmi"> account_circle </span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export { Header };
