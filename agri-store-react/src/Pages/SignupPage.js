import React from "react";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import SignupInputs from "../Components/Login-Signup-Inputs/SignupInputs";

function SignupPage() {
  return (
    <div>
      <Header />
      <SignupInputs />
      <Footer />
    </div>
  );
}

export default SignupPage;
