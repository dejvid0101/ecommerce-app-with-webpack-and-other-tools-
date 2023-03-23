//app entry point

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar'
import MainContent from './components/maincontent'
import { Store } from './reduxstore'
import { Provider } from 'react-redux'
import './globals.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from './details/detailsPage'

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
    element: <DetailsPage></DetailsPage>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
// routing obj passed to provider
  <RouterProvider router={rtr}></RouterProvider>
);


