import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import "./PageNotFound.css";

function PageNotFound() {
  const [counter, setCounter] = useState(12);
  const navigate = useNavigate();
  function componentDidMount() {
    setTimeout(() => {
      navigate("/");
    }, 15000);
  }
  useEffect(() => {
    componentDidMount();
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <Header />
      <h1> Page Not Found (will be redirected to Homepage in :{counter} ) </h1>
      <div className="img">
        <img src="https://svgshare.com/i/hXD.svg" alt="404" />
      </div>

      <Footer />
    </div>
  );
}

export default PageNotFound;
