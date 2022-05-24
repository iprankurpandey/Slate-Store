import { useEffect } from "react";
import "./CartPage.css";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { useCartContext } from "../Components/Context/CartPageContext";
import { useWishlistContext } from "../Components/Context/WishlistPageContext";

import TotalPrice from "../Components/TotalPrice /TotalPrice";

function CartPage() {
  const { deleteWishList, addToWishlist, dispatch, wish } =
    useWishlistContext();
  const { updateQty, deleteQty, cart, state, totalprice } = useCartContext();

  useEffect(() => {
    dispatch({
      type: "TOTALPRICE",
      payload: cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price),
        0
      ),
    });
  }, [cart]);

  return (
    <div>
      <Header cart={cart} />

      {cart.length === 0 ? (
        <div className="cart-mesg"> there are no items in Cart </div>
      ) : (
        <table id="customers">
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Wishlist</th>
            <th>Delete</th>
          </tr>

          {cart.map((prod) => (
            <tr>
              <td>{prod.title}</td>
              <td>
                <img src={prod.image} alt="image_text" className="cart-image" />
              </td>
              <td>
                <h3> ₹ {prod.price}</h3>
              </td>
              <td>
                <div className="cart-btn">
                  <button
                    class="hcard increase"
                    onClick={() => updateQty("increment", prod._id)}
                  >
                    <span class="material-icons">add</span>
                  </button>
                  {prod.qty}
                  <button
                    class="hcard decrease"
                    onClick={() => updateQty("decrement", prod._id)}
                  >
                    <span class="material-icons">remove</span>
                  </button>
                </div>
              </td>

              <td>
                <button
                  className="hcard decrease"
                  onClick={(_id) => deleteQty(prod._id)}
                >
                  <span class="material-icons">delete</span>
                </button>
              </td>
              <td>
                <div className="cart-btn">
                  {wish.some((wishlist) => wishlist._id === prod._id) ? (
                    <button
                      class="hcard decrease"
                      onClick={(_id) => deleteWishList(prod._id)}
                    >
                      <span class="material-icons buttonmi">heart_broken</span>
                    </button>
                  ) : (
                    <button
                      class="hcard decrease"
                      onClick={() => addToWishlist(prod, dispatch)}
                    >
                      <span class="material-icons buttonmi">
                        {" "}
                        favorite_border{" "}
                      </span>
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </table>
      )}

      <div className="total-price">
        <TotalPrice />
      </div>

      <Footer />
    </div>
  );
}

export { CartPage };
