import React from "react";
import { Link } from "react-router-dom";
import { useLoginContext } from "../Context/LoginPageContext";
import "./SignupInputs.css";
function SignupInputs() {
  const { state, dispatch, signUpHandler } = useLoginContext();

  return (
    <div>
      <div className="Signup-Form">
        <h3> Signup Page</h3>
        <form onSubmit={signUpHandler}>
          <label>
            <input
              class="input__field"
              type="text"
              name="name"
              placeholder="Name"
              required
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
            />
          </label>

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
              type="tel"
              name="telnumber"
              inputmode="numeric"
              pattern="[0-9]*"
              placeholder="Phone Number"
              required
              onChange={(e) =>
                dispatch({ type: "NUMBER", payload: e.target.value })
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
          Already member ?<Link to="/LoginPage"> Login</Link> here
        </h4>
      </div>
    </div>
  );
}

export default SignupInputs;
