import React from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginPageContext";
import "./LoginInputs.css";

function LoginInputs() {
  const { state, dispatch, loginHandler } = useLoginContext();

  return (
    <div>
      <div className="Login-Form">
        <h3> Login Page</h3>
        <form onSubmit={loginHandler}>
          <label>
            <input
              class="input__field"
              type="email"
              name="email"
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
              type="password"
              name="input password"
              placeholder="Password"
              required
              minlength="6"
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
          </label>

          <label>
            <input
              class="input__field"
              type="submit"
              name="input submit"
              required
            />
          </label>
        </form>
        <h4>
          Not a member ?<Link to="/SignupPage"> Signup</Link> here
        </h4>
      </div>
    </div>
  );
}

export default LoginInputs;
