import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProductsList, {productsLoader} from './components/ProductsList.jsx';
import App, {productLoader} from './components/App.jsx';
import './assets/styles.css';


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
    <RouterProvider router={router} />
  </React.StrictMode>
);