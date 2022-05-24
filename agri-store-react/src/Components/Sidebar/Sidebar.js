import React from "react";
import { useFilterContext } from "../Context/FilterContextReducer";
import Rating from "../Rating";
import "./Sidebar.css";

function Sidebar() {
  const { state, dispatch } = useFilterContext();
  console.log(state);
  const { rating, search, stock } = state;

  function clearState(e) {
    dispatch({ type: "SORT", payload: true });
    dispatch({ type: "SLIDER", payload: (e.target.value = 105) });
    dispatch({ type: "STOCK", payload: "" });
    dispatch({ type: "RATING", payload: false });
    dispatch({
      type: "CATEGORY",
      payload: { men: false, women: false, baby: false },
    });
  }

  return (
    <div>
      <div className="catagory-items-page">
        <nav className="side-item-container">
          <button className="btn btn-warning" onClick={clearState}>
            Clear All{" "}
          </button>
          <hr />
          <input
            type="search"
            class="navigation__input"
            placeholder="search item"
            search={search}
            onChange={(e) =>
              dispatch({ type: "SEARCHBAR", payload: e.target.value })
            }
          />
          <hr />
          <h3 className="Price-sort-by">Sort by Price : </h3>
          <input
            type="radio"
            name="high"
            onChange={() => dispatch({ type: "SORT", payload: false })}
          />
          High to Low <br />
          <input
            type="radio"
            name="high"
            onChange={() => dispatch({ type: "SORT", payload: true })}
          />
          Low to High <br />
          <hr />
          <div className="price-range">
            <h3 className="Price-sort-by">Sort by Price : </h3>
            {105}
            <br />
            <input
              type="range"
              max="120"
              min="106"
              onChange={(e) =>
                dispatch({ type: "SLIDER", payload: e.target.value })
              }
            />
            {120}
          </div>
          <hr />
          <div className="price-range">
            Sort by Rating :(Above than) <br />
            <Rating
              rating={rating}
              onClick={(i) => dispatch({ type: "RATING", payload: i + 1 })}
              style={{ cursor: "pointer" }}
            />
            <br />
          </div>
          <hr />
          <h3 className="catagories-sort-by">Catagories sort by : </h3>
          <input
            type="checkbox"
            name="women"
            value="women"
            onChange={(e) =>
              dispatch({
                type: "women",
              })
            }
          />
          women <br />
          <input
            type="checkbox"
            name="men"
            value="men"
            onChange={() =>
              dispatch({
                type: "men",
              })
            }
          />
          men <br />
          <input
            type="checkbox"
            name="baby"
            value="baby"
            onChange={() => dispatch({ type: "baby" })}
          />
          baby <br />
          <hr />
          <h3 className="rating-sort-by">Filters : </h3>
          <input
            type="checkbox"
            checked={stock}
            onChange={(e) =>
              dispatch({ type: "STOCK", payload: e.target.checked })
            }
          />
          Exclude Out of Stock <br />
          <hr />
        </nav>
      </div>
    </div>
  );
}

export { Sidebar };
