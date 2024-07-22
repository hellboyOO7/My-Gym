import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Schedule from "./pages/Schedule/Schedule.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Store from "./pages/Store/Store.jsx";
import MainBody from "./components/MainBody/MainBody.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <MainBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
