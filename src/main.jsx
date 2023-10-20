import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import RegisterRB from './components/RegisterRB/RegisterRB';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBs from './components/RegisterBS/RegisterBs';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main></Main>,
    children: [
      {
      path: '/',
      element: <Home></Home>
      },
      {
      path: '/login',
      element: <Login></Login>
      },
      {
      path: '/register',
      element: <Register></Register>
      },
      {
      path: '/register-rb',
      element: <RegisterRB></RegisterRB>
      },
      {
      path: '/register-bs',
      element: <RegisterBs></RegisterBs>
      },
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
   </React.StrictMode>,
)
