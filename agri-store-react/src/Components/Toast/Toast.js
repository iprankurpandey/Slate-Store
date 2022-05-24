import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Toast({ type, mesg }) {
  return toast(mesg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    type: type,
    draggable: true,
    progress: undefined,
  });
}

export default Toast;
