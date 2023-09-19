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

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/user',
        element:<User></User>
      },
      {
        path: '/message',
        element:<div>User message</div>
      },
      {
        path: '/cart',
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
