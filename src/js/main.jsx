import "./locales/i18n.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./pages/FirstPage.jsx";
import SecondPage from "./pages/SecondPage.jsx";
import ErrorPage from "./pages/error-pages/ErrorPage.jsx";
import "../css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FirstPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/First",
    element: <FirstPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Second",
    element: <SecondPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
