import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
import Contact from "./pages/contactPage/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Catalog from "./pages/catalogPage/Catalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
