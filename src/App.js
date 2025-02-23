import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import RestoDetails from "./components/RestoDetails";
import IdentityResto from "./components/IdentityResto";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utiles/appStore";
import Cart from  "./components/cart";


const Applayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>

  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restarunt/:Id",
        element: <RestoDetails />
      },
      {
        path: "/Cart",
        element: <Cart/>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
