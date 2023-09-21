import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import User from './components/UserInfo/User.jsx';
import AddTocart from './components/Home/AddTocart.jsx';
import BuyNow from './components/AddtoCartBuyNow/BuyNow.jsx';
import Massage from './components/Message/Massage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path: '/',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element:<Home></Home>
      },
      {
        path: '/cart/:id',
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`),
        element:<AddTocart></AddTocart>
      },
      {
        path: '/buyNow/:id',
        loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.id}`),
        element:<BuyNow></BuyNow>
      },
      {
        path: '/user',
        loader: () => fetch('https://fakestoreapi.com/products'),
        element:<User></User>
      },
      {
        path: '/message',
        element:<Massage></Massage>
      },
      {
        path: '/cart/',
        element:<div>User cart</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
