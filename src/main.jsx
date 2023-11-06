import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import AuthProvider from "./AuthProvider/AuthProvider";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ParallaxProvider>
  </React.StrictMode>
);
