import { useFilterContext } from "../../Context/AllContextIndex";
import { Rating } from "../../Components/AllComponentIndex";
import "../../Utils/CustomCSSUtils.css";
import { clearState } from "../../Services/AddressServices";
import { useParams } from "react-router-dom";

function Sidebar() {
  const { state, dispatch } = useFilterContext();
  const { rating, stock, category } = state;

  const clearStateHandler = (e, dispatch) => {
    clearState(e, dispatch);
  };

  const categoryUrl = useParams();

  return (
    <div>
      <div className="catagory-items-page">
        <nav className="side-item-container">
          <div className="clear-btn">
            <button
              className="btn btn-primary"
              onClick={(e) => clearStateHandler(e, dispatch)}
            >
              Clear All{" "}
            </button>
          </div>
          <hr />

          <div className="Price-sort-by">
            <h3>Sort by Price :</h3>
          </div>
          <div className="sort-by-price">
            <input
              type="radio"
              class="input-radio-type"
              name="high"
              onChange={() => dispatch({ type: "SORT", payload: false })}
            />
            High to Low <br />
            <input
              type="radio"
              class="input-radio-type"
              name="high"
              onChange={() => dispatch({ type: "SORT", payload: true })}
            />
            Low to High <br />
          </div>
          <hr />
          <div className="price-range">
            <div className="Price-sort-by ">
              <h3>Sort by Price Range :</h3>
            </div>
            <div className="sortbyrange">
              ₹{105}
              <br />
              <input
                type="range"
                class="input-range-type"
                max="120"
                min="106"
                className="input-range"
                onChange={(e) =>
                  dispatch({ type: "SLIDER", payload: e.target.value })
                }
              />
              ₹{120}
            </div>
          </div>
          <hr />
          <div className="price-range">
            <h3>Sort by Rating :(Above than)</h3>
            <br />
            <Rating
              rating={rating}
              onClick={(i) => dispatch({ type: "RATING", payload: i + 1 })}
              style={{ cursor: "pointer" }}
            />
            <br />
          </div>
          <hr />
          <h3>Catagories sort by : </h3>
          <div className="catagories-sort-by">
            <input
              type="checkbox"
              name="petrol"
              className="input-checkbox-type"
              // checked={categoryUrl.categoryName.petrol === "petrol"}
              value="petrol"
              onChange={() =>
                dispatch({
                  type: "petrol",
                })
              }
            />
            Petrol <br />
            <input
              type="checkbox"
              name="diesel"
              value="diesel"
              // checked={categoryUrl.categoryName.includes("diesel")}
              className="input-checkbox-type"
              onChange={() =>
                dispatch({
                  type: "diesel",
                })
              }
            />
            Diesel <br />
            <input
              type="checkbox"
              name="ev"
              className="input-checkbox-type"
              value="ev"
              // checked={categoryUrl.categoryName.includes("ev")}
              onChange={() => dispatch({ type: "ev" })}
            />
            EV <br />
          </div>
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <div className="out-of-stock">
            <input
              type="checkbox"
              className="input-checkbox-type"
              checked={stock}
              onChange={(e) =>
                dispatch({ type: "STOCK", payload: e.target.checked })
              }
            />
            Exclude Out of Stock <br />
          </div>
          <hr />
        </nav>
      </div>
    </div>
  );
}

export { Sidebar };
