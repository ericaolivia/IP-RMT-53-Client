import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} >
    <App />
  </RouterProvider>
  // </StrictMode>,
)
