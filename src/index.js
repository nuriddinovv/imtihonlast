import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/homePage/Home";
import Contact from "./pages/contactPage/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
