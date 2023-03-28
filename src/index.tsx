//app entry point
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar'
import MainContent from './components/maincontent'
import { Store } from './reduxstore'
import { Provider } from 'react-redux'
import './globals.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ItemBrowser from './details/components/itembrowser'

//client routing object
const rtr = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={Store}>
      <Navbar></Navbar>
      <MainContent></MainContent>
    </Provider>,
  },
  {
    path: '/details',
    element: <ItemBrowser></ItemBrowser>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// routing obj passed to provider
  <RouterProvider router={rtr}></RouterProvider>
);


