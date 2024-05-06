import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import {} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import Login from './Components/Login.jsx';
import Registration from './Components/Registration.jsx';
import Store from './Components/Redux/Store.jsx';
import FindUser from './Components/Redux/FindUser.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/registration",
    element: <Registration></Registration>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FindUser>
      <Provider store={Store}>
        <RouterProvider router={route}>
          <App></App>
        </RouterProvider>
      </Provider>
    </FindUser>
  </React.StrictMode>,
)
