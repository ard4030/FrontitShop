import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { AuthWrapper } from './context/AuthContext';
import { CartWrapper } from './context/CartContext';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Result from './pages/Result';
import Dashboard from './pages/admin/Dashboard';
import Profile from './pages/admin/Profile';
import Orders from './pages/admin/Orders';
import Comments from './pages/admin/Comments';
import AllComments from './pages/admin/AllComments';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:slug",
    element: <Product/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
  {
    path: "/result",
    element: <Result/>,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/admin/profile",
    element: <Profile/>,
  },
  {
    path: "/admin/orders",
    element: <Orders/>,
  },
  {
    path: "/admin/comments",
    element: <Comments/>,
  },
  {
    path: "/admin/allcomments",
    element: <AllComments/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <AuthWrapper>
      <CartWrapper>
        <ToastContainer position="top-center" />
        <RouterProvider router={router} />
      </CartWrapper>
    </AuthWrapper>
  // </React.StrictMode>
);
