import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./routes/MainPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ShowPage from "./routes/ShowPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/show/:showId",
    element: <ShowPage />,
    children: [
      {
        path: "/show/:showId",
        element: <Navbar />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
