import React, { useEffect } from "react";
import { toast, ToastContainer, Zoom } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const warningMsg = (msg) => {
  toast.warning(msg);
}

export const errorMsg = (msg) => {
    toast.error(msg);
}

export const successMsg = (msg) => {
  toast.success(msg);
}


