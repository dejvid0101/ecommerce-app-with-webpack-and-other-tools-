//app entry point
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from './home/homepage'
import DetailsPage from './details/detailspage'
import { Store } from './reduxstore'
import { Provider } from 'react-redux'
import './globals.scss'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//client routing object
const rtr = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={Store}>
    <Navbar></Navbar>
      <HomePage></HomePage>
    </Provider>,
  },
  {
    path: '/details',
    element: <Provider store={Store}>
      <Navbar></Navbar>
      <DetailsPage></DetailsPage>
  </Provider>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// routing obj passed to provider
  <RouterProvider router={rtr}></RouterProvider>
);


