//app entry point
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from './home/homepage'
import { Store } from './reduxstore'
import { Provider } from 'react-redux'
import './globals.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//client routing object
const rtr = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={Store}>
      <HomePage></HomePage>
    </Provider>,
  },
  {
    path: '/details',
    element: <Provider store={Store}>
  </Provider>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// routing obj passed to provider
  <RouterProvider router={rtr}></RouterProvider>
);


