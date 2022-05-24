import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import LoginInputs from "../Components/Login-Signup-Inputs/LoginInputs";

function LoginPage() {
  return (
    <div>
      <Header />
      <LoginInputs />
      <Footer />
    </div>
  );
}

export default LoginPage;
