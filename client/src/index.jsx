import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductsList, { productsLoader } from './components/ProductsList.jsx';
import App, { productLoader } from './components/App.jsx';
import StyleLib from './assets/Stylesheet.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsList />,
    loader: productsLoader
  },
  {
    path: "/:productId",
    element: <App />,
    loader: productLoader
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleLib.GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);