import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Navbar from './components/navbar'
import MainContent from './components/maincontent'
import {Store} from './reduxstore'
import {Provider} from 'react-redux'
import './globals.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={Store}>
    <Navbar></Navbar>
    <MainContent></MainContent>
  </Provider>
);