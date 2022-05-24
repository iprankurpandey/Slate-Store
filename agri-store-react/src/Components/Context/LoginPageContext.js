import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";

const loginContext = createContext();
export const useLoginContext = () => useContext(loginContext);

function LoginPageContext({ children }) {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducerFn, {
    name: "",
    email: "",
    number: "",
    password: "",
    loginData: [],
  });
  function reducerFn(state, action) {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "NUMBER":
        return { ...state, number: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "LOGINDATA":
        return { ...state, loginData: action.payload };

      default:
        return state;
    }
  }
  const { loginData } = state;

  const { name, email, password, number } = state;
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      dispatch({ type: "LOGINDATA", payload: response.data.foundUser });
      localStorage.getItem(`token`, response.data.encodedToken);

      Toast({
        type: "success",
        mesg: `welcome ! `,
      });

      navigate("/AccountPage");
    } catch (error) {
      console.log(error);
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/signup`, {
        name: name,
        number: number,
        email: email,
        password: password,
      });
      // saving the encodedToken in the localStorage
      localStorage.setItem(`token`, response.data.encodedToken);
      Toast({ type: "success", mesg: "user signedup in " });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    Toast({
      type: "info",
      mesg: ` you had been logged out `,
    });
    window.location.reload(false);
    navigate("/");
  };

  return (
    <div>
      <loginContext.Provider
        value={{
          state,
          dispatch,
          signUpHandler,
          loginHandler,
          logoutHandler,
        }}
      >
        {children}
      </loginContext.Provider>
    </div>
  );
}

export default LoginPageContext;
