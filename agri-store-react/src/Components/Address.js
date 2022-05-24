import React from "react";
import { useAdressContext } from "./Context/AddressContext";
import "./Address.css";
function Address() {
  const {
    formSubmitAddAdress,
    editAddress,
    saveEditedAddress,
    deleteAddress,
    state,
    dispatch,
    toggleSubmit,
  } = useAdressContext();
  const { fullname, email, phone, pincode, address, fulladdressdata } = state;

  return (
    <div className="form-data">
      <form onSubmit={formSubmitAddAdress} className="forms">
        <label>
          <input
            class="input__field"
            type="text"
            name="fullname"
            value={fullname}
            placeholder="fullname"
            required
            onChange={(e) =>
              dispatch({ type: "FULLNAME", payload: e.target.value })
            }
          />
        </label>
        <label>
          <input
            class="input__field"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
            onChange={(e) =>
              dispatch({ type: "EMAIL", payload: e.target.value })
            }
          />
        </label>
        <label>
          <input
            class="input__field"
            type="tel"
            name="number"
            value={phone}
            placeholder="number"
            required
            onChange={(e) =>
              dispatch({ type: "PHONE", payload: e.target.value })
            }
          />
        </label>
        <label>
          <input
            class="input__field"
            type="number"
            name="pincode"
            value={pincode}
            placeholder="pincode"
            required
            onChange={(e) =>
              dispatch({ type: "PINCODE", payload: e.target.value })
            }
          />
        </label>
        <label>
          <input
            class="input__field"
            type="text"
            name="address"
            value={address}
            placeholder="address"
            required
            onChange={(e) =>
              dispatch({ type: "ADDRESS", payload: e.target.value })
            }
          />
        </label>{" "}
        {toggleSubmit ? (
          <button class="btn btn-success">Save New </button>
        ) : (
          <label>
            <input
              class="input__field"
              type="submit"
              name="submitbtn"
              placeholder="submit"
              required
            />
          </label>
        )}
      </form>
      <h2>Adress Data </h2>
      <table className="data-table">
        <tr>
          <th> Select Adress</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Pincode</th>
          <th>Address</th>
          <th>delete/edit</th>
        </tr>

        {fulladdressdata.map((d) => {
          return (
            <tr>
              <th>
                <input type="radio" />
              </th>
              <th>{d.fullname}</th>
              <th>{d.email}</th>
              <th>{d.phone}</th>
              <th>{d.pincode}</th>
              <th>{d.address}</th>
              <th>
                <button
                  className="hcard decrease"
                  title="delete"
                  onClick={(id) => deleteAddress(d.id)}
                >
                  <span class="material-icons">delete</span>
                </button>

                <button
                  className="hcard decrease"
                  title="edit"
                  onClick={editAddress}
                >
                  <span
                    class="material-icons"
                    onClick={(id) => editAddress(d.id)}
                  >
                    edit
                  </span>
                </button>
              </th>
            </tr>
          );
        })}
      </table>
      ;
    </div>
  );
}

export default Address;
