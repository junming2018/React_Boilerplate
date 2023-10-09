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
    path: "/React_Boilerplate/",
    element: <FirstPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React_Boilerplate/First",
    element: <FirstPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React_Boilerplate/Second",
    element: <SecondPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/React_Boilerplate/*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
