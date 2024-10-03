import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Router,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login.jsx";
import Homepage from "./pages/Homepage.jsx";
import Favorites from "./pages/Favorites.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import ChatbotPage from "./pages/ChatbotPage.jsx";

const isLoggedIn = () => {
  const token = localStorage.getItem("access_token");
  if (!token) {
    return redirect("/login");
  } else {
    return null;
  }
};

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        return redirect("/");
      } else {
        return null;
      }
    },
  },
  {
    path: "/chatbot",
    element: <ChatbotPage />,
    loader: isLoggedIn,
  },
  {
    path: "/",
    element: <Homepage />,
    loader: isLoggedIn,
  },
  {
    path: "/favorites",
    element: <Favorites />,
    loader: isLoggedIn,
  },
  {
    path: "/profile",
    element: <Profile />,
    loader: isLoggedIn,
  },
  {
    path: "/detail/:id",
    element: <RecipeDetail />,
    loader: isLoggedIn,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <App /> */}
      <ToastContainer />
    </Provider>
  </>
);
