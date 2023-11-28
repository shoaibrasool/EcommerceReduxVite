// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Products from './components/product/Products';
import { Provider } from 'react-redux';
import { store } from './app/store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Products/>,
      },
      {
        path: "/cart",
        element: <h1>I am Cart</h1>,
      },
      {
        path: "/child2",
        element: <h1>I am another Child2</h1>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
